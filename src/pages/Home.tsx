import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";
import { CollectionCard } from "../components/CollectionCard";

// Featured collection items for homepage
const featuredCollectionItems = [
  {
    id: "adonis",
    title: "ADONIS",
    description:
      "Gown is strewn with crystals and sequins that reflect like shards of glass. Draped from cascading swathes of stretch-satin and tulle, it's subtly pleated at the hem and floor-sweeping sleeves.",
    media: [
      {
        type: "image" as const,
        src: "/images/Collection pics/Adonis/6C6A2559.jpg",
        alt: "Adonis Collection - Look 1",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Adonis/6C6A2526.jpg",
        alt: "Adonis Collection - Look 2",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Adonis/6C6A2522.jpg",
        alt: "Adonis Collection - Look 3",
      },
    ],
  },
  {
    id: "red-rose",
    title: "RED ROSE",
    description:
      "Gown is saturated with beads, so it has a head-turning shimmer from every angle. Cascading from the shoulder to an elegant floor-sweeping finish, with dramatic tulle sleeves detailed with cascading beading and sequins.",
    media: [
      {
        type: "image" as const,
        src: "/images/Collection pics/Red rose/6C6A3578.jpg",
        alt: "Red Rose Collection - Look 1",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Red rose/6C6A3563.jpg",
        alt: "Red Rose Collection - Look 2",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Red rose/6C6A3516.jpg",
        alt: "Red Rose Collection - Look 3",
      },
    ],
  },
  {
    id: "golden-star",
    title: "GOLDEN STAR",
    description:
      "Radiate glamour and sophistication when you don this gown for special occasions. It is covered in sequins and beads for a spectacularly shimmering effect and styled with a V-neck, fitted waistband and floor-A-line skirt to create a classic feminine silhouette.",
    media: [
      {
        type: "image" as const,
        src: "/images/Collection pics/Golden star/6C6A2889.jpg",
        alt: "Golden Star Collection - Look 1",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Golden star/6C6A2816.jpg",
        alt: "Golden Star Collection - Look 2",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Golden star/6C6A2797.jpg",
        alt: "Golden Star Collection - Look 3",
      },
    ],
  },
];

export function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showText, setShowText] = useState(true);
  const [videoInitialized, setVideoInitialized] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { isDarkMode } = useDarkMode();

  // Remove body background on home page mount, restore on unmount
  useEffect(() => {
    // Force transparent background for home page
    document.body.style.backgroundColor = "transparent";
    document.body.classList.add("home-page");

    return () => {
      // Restore appropriate background based on dark mode when leaving home page
      document.body.style.backgroundColor = "";
      document.body.classList.remove("home-page");
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !videoInitialized) {
          setIsInView(true);
          setVideoInitialized(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [videoInitialized]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setHasVideo(true);

    // Ensure video plays after it's fully loaded
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Autoplay after load failed:", error);
        });
      }
    }, 100); // Small delay to ensure video is ready

    // Fade out text after 3 seconds when video loads
    setTimeout(() => {
      setShowText(false);
    }, 3000);
  };

  const handleVideoError = () => {
    setHasVideo(false);
    setVideoLoaded(false);
    // Keep text visible if no video - don't fade it out
    console.log("Video failed to load, using fallback background");
  };

  // Ensure video continues playing when it comes back into view
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (videoRef.current && videoLoaded && hasVideo && !document.hidden) {
        // Add a small delay to ensure the page is fully active
        setTimeout(() => {
          if (videoRef.current && !document.hidden) {
            videoRef.current.play().catch((error) => {
              console.log("Resume play failed:", error);
            });
          }
        }, 100);
      }
    };

    const handleFocus = () => {
      if (videoRef.current && videoLoaded && hasVideo) {
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play().catch((error) => {
              console.log("Focus resume play failed:", error);
            });
          }
        }, 100);
      }
    };

    const handlePageShow = () => {
      if (videoRef.current && videoLoaded && hasVideo) {
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play().catch((error) => {
              console.log("PageShow resume play failed:", error);
            });
          }
        }, 100);
      }
    };

    // Add multiple event listeners for different scenarios
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [videoLoaded, hasVideo]);

  // Additional effect to ensure video plays when ready
  useEffect(() => {
    if (videoLoaded && hasVideo && videoRef.current) {
      const playVideo = () => {
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.log("Play attempt failed:", error);
          });
        }
      };

      // Try to play immediately
      playVideo();

      // Also try after a short delay in case the video needs more time
      const timeoutId = setTimeout(playVideo, 200);

      return () => clearTimeout(timeoutId);
    }
  }, [videoLoaded, hasVideo]);

  // Video viewport intersection observer to resume play when video is visible
  useEffect(() => {
    if (!videoRef.current || !videoLoaded || !hasVideo) return;

    const videoIntersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          // Video is visible, ensure it's playing
          setTimeout(() => {
            if (videoRef.current && entry.isIntersecting) {
              videoRef.current.play().catch((error) => {
                console.log("Intersection resume play failed:", error);
              });
            }
          }, 100);
        }
      },
      { threshold: 0.25 } // Trigger when 25% of video is visible
    );

    videoIntersectionObserver.observe(videoRef.current);

    return () => {
      videoIntersectionObserver.disconnect();
    };
  }, [videoLoaded, hasVideo]);

  const handleNavClick = () => {
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-transparent" data-page="home">
      {/* Video Hero Section */}
      <section
        ref={sectionRef}
        className="relative min-h-[115vh] flex items-center justify-center overflow-hidden"
        style={{
          marginTop: "-156px",
          marginBottom: "-90px",
          paddingTop: "120px",
        }}
      >
        {/* Video Background - Extended to cover header area and bottom */}
        <div
          className="absolute inset-0 z-0"
          style={{
            top: "-240px",
            bottom: "-10px",
            height: "calc(100% + 400px)",
          }}
        >
          {(isInView || videoInitialized) && (
            <>
              <video
                ref={videoRef}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${
                  videoLoaded && hasVideo ? "opacity-100" : "opacity-0"
                }`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/videos/hero-poster.jpg"
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                onCanPlayThrough={() => {
                  // Ensure video plays when it's ready to play through
                  if (videoRef.current) {
                    videoRef.current.play().catch((error) => {
                      console.log("CanPlayThrough play failed:", error);
                    });
                  }
                }}
                onLoadedMetadata={() => {
                  // Try to play when metadata is loaded
                  if (videoRef.current) {
                    videoRef.current.play().catch((error) => {
                      console.log("LoadedMetadata play failed:", error);
                    });
                  }
                }}
              >
                <source
                  src="/videos/Main Film1663070434277 (1).webm"
                  type="video/webm"
                />
                <source
                  src="/videos/Main Film1663070434277 (1).mov"
                  type="video/quicktime"
                />
                Your browser does not support the video tag.
              </video>

              {/* Fallback background image while video loads */}
              <div
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  videoLoaded && hasVideo ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backgroundImage: `linear-gradient(135deg, 
                    rgba(0, 97, 103, 0.9) 0%, 
                    rgba(2, 81, 87, 0.8) 50%, 
                    rgba(153, 133, 67, 0.7) 100%),
                    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.05"/><circle cx="50" cy="10" r="0.5" fill="%23ffffff" opacity="0.08"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>')`,
                  backgroundSize: "cover, 200px 200px",
                  backgroundPosition: "center, 0 0",
                  backgroundRepeat: "no-repeat, repeat",
                }}
              />
            </>
          )}
        </div>

        {/* Dark overlay for better text readability - also extended */}
        <div
          className="absolute inset-0 bg-black/40 z-10"
          style={{
            top: "-240px",
            bottom: "-10px",
            height: "calc(100% + 400px)",
          }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          {/* Main heading that fades away */}
          <div
            className={`transition-all duration-1000 ${
              showText
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            <h1 className="hero-text text-white mb-6 drop-shadow-lg">
              Love Yourself,
              <br />
              <span className="text-accent-500">Unconditionally</span>
            </h1>
          </div>

          {/* Description and buttons - always visible but fade in after video loads */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              videoLoaded || !hasVideo
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="body-text text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Discover the 2022 collection that celebrates strength,
              empowerment, and the beauty of self-expression through exquisite
              couture craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/collection"
                onClick={handleNavClick}
                className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 sm:py-3 font-medium transition-colors inline-flex items-center justify-center gap-2 shadow-lg min-h-[44px] touch-manipulation"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                onClick={handleNavClick}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 sm:py-3 font-medium transition-colors inline-flex items-center justify-center min-h-[44px] touch-manipulation"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection Teaser */}
      <section className={`py-24 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`section-heading mb-4 ${
                isDarkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Featured Collection
            </h2>
            <p
              className={`body-text max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Experience the artistry of our signature pieces, each one crafted
              with meticulous attention to detail and timeless elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCollectionItems.map((collection, index) => (
              <div
                key={collection.id}
                className="animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <CollectionCard
                  id={collection.id}
                  title={collection.title}
                  description={collection.description}
                  media={collection.media}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/collection"
              onClick={handleNavClick}
              className="btn-outline inline-flex items-center gap-2"
            >
              View Full Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values Preview */}
      <section className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`section-heading mb-4 ${
                isDarkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Our Values
            </h2>
            <p
              className={`body-text max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Every piece we create embodies our core values of love, strength,
              and empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDarkMode ? "bg-accent-500" : "bg-primary-600"
                }`}
              >
                <span
                  className={`text-2xl ${
                    isDarkMode ? "text-gray-900" : "text-white"
                  }`}
                >
                  ♡
                </span>
              </div>
              <h3
                className={`font-malayalam font-medium text-lg mb-2 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Love
              </h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Self-love and acceptance are at the heart of everything we
                create.
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDarkMode ? "bg-accent-500" : "bg-primary-600"
                }`}
              >
                <span
                  className={`text-2xl ${
                    isDarkMode ? "text-gray-900" : "text-white"
                  }`}
                >
                  ⚡
                </span>
              </div>
              <h3
                className={`font-malayalam font-medium text-lg mb-2 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Strength
              </h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Celebrating the inner strength that makes every woman unique.
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDarkMode ? "bg-accent-500" : "bg-primary-600"
                }`}
              >
                <span
                  className={`text-2xl ${
                    isDarkMode ? "text-gray-900" : "text-white"
                  }`}
                >
                  ✦
                </span>
              </div>
              <h3
                className={`font-malayalam font-medium text-lg mb-2 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Empowerment
              </h3>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Empowering women to express their authentic selves with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
