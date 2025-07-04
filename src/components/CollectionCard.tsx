import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useDarkMode } from "../contexts/DarkModeContext";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  thumbnail?: string; // For videos
}

interface CollectionCardProps {
  id: string;
  title: string;
  description: string;
  media: MediaItem[];
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  title,
  description,
  media,
}) => {
  const { isDarkMode } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
  const [modalDimensions, setModalDimensions] = useState({
    width: 0,
    height: 0,
    imageWidth: 0,
    imageHeight: 0,
  });
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Calculate optimal modal dimensions
  const calculateModalDimensions = useCallback(
    (imageWidth: number, imageHeight: number) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Reserve space for padding and description
      const maxModalWidth = Math.min(viewportWidth * 0.95, 1400);
      const maxModalHeight = Math.min(viewportHeight * 0.9, 800);
      const descriptionHeight = 180; // Approximate height for description area
      const maxImageHeight = maxModalHeight - descriptionHeight;

      let finalImageWidth = imageWidth;
      let finalImageHeight = imageHeight;

      // Scale down if needed while maintaining aspect ratio
      if (imageWidth > maxModalWidth || imageHeight > maxImageHeight) {
        const widthRatio = maxModalWidth / imageWidth;
        const heightRatio = maxImageHeight / imageHeight;
        const scaleFactor = Math.min(widthRatio, heightRatio);

        finalImageWidth = imageWidth * scaleFactor;
        finalImageHeight = imageHeight * scaleFactor;
      }

      // Ensure minimum dimensions
      const minWidth = Math.min(400, viewportWidth * 0.8);
      const minHeight = Math.min(300, viewportHeight * 0.4);

      finalImageWidth = Math.max(finalImageWidth, minWidth);
      finalImageHeight = Math.max(finalImageHeight, minHeight);

      return {
        width: finalImageWidth,
        height: finalImageHeight + descriptionHeight,
        imageWidth: finalImageWidth,
        imageHeight: finalImageHeight,
      };
    },
    []
  );

  // Pre-load image dimensions when opening modal
  const preloadImageDimensions = useCallback((imageSrc: string) => {
    return new Promise<{ width: number; height: number }>((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };
      img.onerror = () => {
        resolve({ width: 800, height: 600 }); // Fallback dimensions
      };
      img.src = imageSrc;
    });
  }, []);

  // Optimized Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "100px 0px 100px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setImageLoaded(false);
  }, [media.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setImageLoaded(false);
  }, [media.length]);

  const nextModalSlide = useCallback(async () => {
    const nextIndex = (modalIndex + 1) % media.length;
    const nextMedia = media[nextIndex];

    if (nextMedia.type === "image") {
      setModalImageLoaded(false);
      const { width, height } = await preloadImageDimensions(nextMedia.src);
      const dimensions = calculateModalDimensions(width, height);
      setModalDimensions(dimensions);
    }

    setModalIndex(nextIndex);
  }, [media, modalIndex, preloadImageDimensions, calculateModalDimensions]);

  const prevModalSlide = useCallback(async () => {
    const prevIndex = (modalIndex - 1 + media.length) % media.length;
    const prevMedia = media[prevIndex];

    if (prevMedia.type === "image") {
      setModalImageLoaded(false);
      const { width, height } = await preloadImageDimensions(prevMedia.src);
      const dimensions = calculateModalDimensions(width, height);
      setModalDimensions(dimensions);
    }

    setModalIndex(prevIndex);
  }, [media, modalIndex, preloadImageDimensions, calculateModalDimensions]);

  // Fixed arrow navigation - prevent modal opening
  const handleArrowClick = useCallback(
    (e: React.MouseEvent, direction: "prev" | "next") => {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();

      if (direction === "prev") {
        prevSlide();
      } else {
        nextSlide();
      }
    },
    [prevSlide, nextSlide]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      // Don't process touch if modal is open
      if (isModalOpen) return;
      touchStartX.current = e.targetTouches[0].clientX;
    },
    [isModalOpen]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      // Don't process touch if modal is open
      if (isModalOpen) return;
      touchEndX.current = e.targetTouches[0].clientX;
    },
    [isModalOpen]
  );

  const handleTouchEnd = useCallback(() => {
    // Don't process touch if modal is open
    if (isModalOpen) return;
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // Clear touch state after processing
    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [isModalOpen, nextSlide, prevSlide]);

  const openModal = useCallback(
    async (index: number) => {
      // Clear any pending touch state to prevent queued gestures
      touchStartX.current = 0;
      touchEndX.current = 0;

      setModalIndex(index);
      setModalImageLoaded(false);
      const currentMedia = media[index];

      if (currentMedia.type === "image") {
        // Pre-calculate dimensions before opening modal
        const { width, height } = await preloadImageDimensions(
          currentMedia.src
        );
        const dimensions = calculateModalDimensions(width, height);
        setModalDimensions(dimensions);
      } else {
        // Default dimensions for videos
        const dimensions = calculateModalDimensions(800, 600);
        setModalDimensions(dimensions);
      }

      setIsModalOpen(true);
      document.body.style.overflow = "hidden";

      // Hide header
      const header = document.querySelector("header");
      if (header) {
        header.style.display = "none";
      }
    },
    [media, preloadImageDimensions, calculateModalDimensions]
  );

  const closeModal = useCallback(() => {
    // Clear any pending touch state to prevent queued gestures
    touchStartX.current = 0;
    touchEndX.current = 0;

    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    setModalImageLoaded(false);
    setModalDimensions({ width: 0, height: 0, imageWidth: 0, imageHeight: 0 });

    // Show header
    const header = document.querySelector("header");
    if (header) {
      header.style.display = "block";
    }
  }, []);

  const handleModalClick = useCallback(
    (e: React.MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleImageClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(currentIndex);
    },
    [currentIndex, openModal]
  );

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  // Handle modal image load
  const handleModalImageLoad = useCallback(() => {
    setModalImageLoaded(true);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isModalOpen, closeModal]);

  // Reset image loading state when currentIndex changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [currentIndex]);

  // Clear touch state when modal state changes
  useEffect(() => {
    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [isModalOpen]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevModalSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextModalSlide();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isModalOpen, prevModalSlide, nextModalSlide]);

  if (!media || media.length === 0) {
    return null;
  }

  const currentMedia = media[currentIndex];
  const modalMedia = media[modalIndex];

  // Modal styling with smooth transitions
  const modalStyle = {
    width: modalDimensions.width > 0 ? `${modalDimensions.width}px` : "90vw",
    height: modalDimensions.height > 0 ? `${modalDimensions.height}px` : "90vh",
    maxWidth: "95vw",
    maxHeight: "90vh",
    transition: "width 0.3s ease, height 0.3s ease",
  };

  const imageContainerStyle = {
    height:
      modalDimensions.imageHeight > 0
        ? `${modalDimensions.imageHeight}px`
        : "auto",
    minHeight: "300px",
  };

  // Modal component to be rendered via portal
  const modalContent = (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 modal-overlay"
      onClick={handleModalClick}
    >
      <div
        ref={modalRef}
        className="relative flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl"
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/20 hover:bg-black/40 rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Container - Fixed height to prevent jumping */}
        <div
          className="relative bg-black overflow-hidden flex items-center justify-center"
          style={imageContainerStyle}
        >
          {/* Optimized loading indicator for modal */}
          {!modalImageLoaded && modalMedia.type === "image" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full loading-spinner"></div>
            </div>
          )}

          {/* Navigation Arrows */}
          {media.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevModalSlide();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextModalSlide();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-5 h-5 text-white" />
              </button>
            </>
          )}

          {modalMedia.type === "image" ? (
            <img
              src={modalMedia.src}
              alt={modalMedia.alt || title}
              className={`max-w-full max-h-full object-contain transition-opacity duration-300 collection-image ${
                modalImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={handleModalImageLoad}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              style={{
                width:
                  modalDimensions.imageWidth > 0
                    ? `${modalDimensions.imageWidth}px`
                    : "auto",
                height:
                  modalDimensions.imageHeight > 0
                    ? `${modalDimensions.imageHeight}px`
                    : "auto",
              }}
            />
          ) : (
            <video
              src={modalMedia.src}
              poster={modalMedia.thumbnail}
              controls
              className="max-w-full max-h-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={handleModalImageLoad}
            />
          )}
        </div>

        {/* Description Section */}
        <div
          className={`p-6 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } flex-shrink-0`}
        >
          <h3
            className={`text-2xl font-bold mb-3 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-base leading-relaxed mb-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>

          {/* Image Counter and Indicators */}
          {media.length > 1 && (
            <div className="flex items-center justify-between">
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {modalIndex + 1} of {media.length}
              </p>
              <div className="flex space-x-2">
                {media.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setModalIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === modalIndex
                        ? isDarkMode
                          ? "bg-white"
                          : "bg-gray-900"
                        : isDarkMode
                        ? "bg-gray-600 hover:bg-gray-500"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Collection Card */}
      <div
        ref={cardRef}
        className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 collection-card-hover ${
          isDarkMode
            ? "bg-gray-800/50 backdrop-blur-sm"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        {/* Media Container */}
        <div
          className="relative aspect-[3/4] overflow-hidden cursor-pointer"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleImageClick}
        >
          {/* Optimized Loading Skeleton */}
          {!imageLoaded && !imageError && isVisible && (
            <div
              className={`absolute inset-0 image-loading ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <div className="flex items-center justify-center h-full">
                <div
                  className={`w-8 h-8 border-4 border-t-transparent rounded-full loading-spinner ${
                    isDarkMode ? "border-accent-500" : "border-gray-500"
                  }`}
                ></div>
              </div>
            </div>
          )}

          {/* Error State */}
          {imageError && (
            <div
              className={`absolute inset-0 flex items-center justify-center ${
                isDarkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">📷</div>
                <div className="text-sm">Image unavailable</div>
              </div>
            </div>
          )}

          {/* Optimized lazy loading with performance hints */}
          {isVisible && currentMedia.type === "image" ? (
            <img
              ref={imageRef}
              src={currentMedia.src}
              alt={currentMedia.alt || title}
              className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 collection-media collection-image ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onLoad={handleImageLoad}
              onError={handleImageError}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          ) : isVisible && currentMedia.type === "video" ? (
            <video
              src={currentMedia.src}
              poster={currentMedia.thumbnail}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 collection-media"
              muted
              loop
              playsInline
              preload="none"
              onLoadedData={handleImageLoad}
              onError={handleImageError}
            />
          ) : null}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Fixed Navigation Arrows */}
          {media.length > 1 && imageLoaded && (
            <>
              <button
                onClick={(e) => handleArrowClick(e, "prev")}
                className={`absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-md ${
                  isDarkMode
                    ? "bg-black/30 hover:bg-black/50 text-white border border-white/20"
                    : "bg-white/30 hover:bg-white/50 text-white border border-white/30"
                } hover:scale-110 z-10`}
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => handleArrowClick(e, "next")}
                className={`absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-md ${
                  isDarkMode
                    ? "bg-black/30 hover:bg-black/50 text-white border border-white/20"
                    : "bg-white/30 hover:bg-white/50 text-white border border-white/30"
                } hover:scale-110 z-10`}
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {media.length > 1 && imageLoaded && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {media.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white scale-125 shadow-lg"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Media Type Indicator */}
          {currentMedia.type === "video" && imageLoaded && (
            <div className="absolute top-4 right-4 z-10">
              <div className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-sm">
                Video
              </div>
            </div>
          )}

          {/* Hover Overlay with Title */}
          <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="p-6 w-full">
              <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {title}
              </h3>
              <p className="text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Click to view gallery
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className={`text-xl font-bold mb-3 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Modal rendered via portal to document body */}
      {isModalOpen && createPortal(modalContent, document.body)}
    </>
  );
};
