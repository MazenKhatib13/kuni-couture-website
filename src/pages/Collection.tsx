import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";
import { CollectionCard } from "../components/CollectionCard";

// Collection data with actual images from organized directories
const collectionItems = [
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
  {
    id: "purple-iris",
    title: "PURPLE IRIS",
    description:
      "Gown with dramatic plunging V-neck is paired with a floor-A-line skirt to create a timeless feminine silhouette, while sequined and beaded stripes layer it with opulent shine.",
    media: [
      {
        type: "image" as const,
        src: "/images/Collection pics/Purple Iris/6C6A2747.jpg",
        alt: "Purple Iris Collection - Look 1",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Purple Iris/6C6A2741.jpg",
        alt: "Purple Iris Collection - Look 2",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Purple Iris/6C6A2706.jpg",
        alt: "Purple Iris Collection - Look 3",
      },
    ],
  },
  {
    id: "the-emerald",
    title: "THE EMERALD",
    description:
      "This gown is a breathtaking choice for any events. The figure-flattering A-line silhouette is crafted from tulle that is topped with shimmering embellishments, and features sheer illusion-mesh details at the neckline and puffed shoulders.",
    media: [
      {
        type: "image" as const,
        src: "/images/Collection pics/The emerald/6C6A4147.jpg",
        alt: "The Emerald Collection - Look 1",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/The emerald/6C6A4126.jpg",
        alt: "The Emerald Collection - Look 2",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/The emerald/6C6A4080.jpg",
        alt: "The Emerald Collection - Look 3",
      },
    ],
  },
  {
    id: "clarity",
    title: "CLARITY",
    description:
      "Gracefully feminine sensibilities define this gown from KUNI Collection. Statement puffed sleeves in sheer tulle, elegantly round-neck bodice and fitted waistband, while the full-length skirt is richly embellished with sequin floral embroidery.",
    media: [
      {
        type: "image" as const,
        src: "/images/Collection pics/Clarity/6C6A3923.jpg",
        alt: "Clarity Collection - Look 1",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Clarity/6C6A3843.jpg",
        alt: "Clarity Collection - Look 2",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Clarity/6C6A3807.jpg",
        alt: "Clarity Collection - Look 3",
      },
    ],
  },
  {
    id: "radiance",
    title: "RADIANCE",
    description:
      "Drench yourself in sequins and rhinestones, courtesy of Radiance gown. An intricately embroidered silhouette shapes the body, crafted from tulle and elaborately adorned with sequins and beading for an opulent glistening finish. The sweetheart-neck dress is fitted through the body and falls into a sweeping hem.",
    media: [
      {
        type: "image" as const,
        src: "/images/Collection pics/Radiance/6C6A4309.jpg",
        alt: "Radiance Collection - Look 1",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Radiance/6C6A4227.jpg",
        alt: "Radiance Collection - Look 2",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Radiance/6C6A4215.jpg",
        alt: "Radiance Collection - Look 3",
      },
    ],
  },
  {
    id: "black-swan",
    title: "BLACK SWAN",
    description:
      "You'll leave a charming impression wherever you go when you wear this gown. The high round neck, dramatic long sleeves and fitted skirt create a timelessly feminine silhouette that is elevated with a rich application of sequins and beading.",
    media: [
      {
        type: "image" as const,
        src: "/images/Collection pics/Black Swan/6C6A4476.jpg",
        alt: "Black Swan Collection - Look 1",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Black Swan/6C6A4456.jpg",
        alt: "Black Swan Collection - Look 2",
      },
    ],
  },
  {
    id: "tulip",
    title: "TULIP",
    description:
      "Featuring off-shoulder gown with elegant feathers all around the shoulders, hem and floor-sweeping sleeves, detailed with cascading sequins.",
    media: [
      {
        type: "image" as const,
        src: "/images/Collection pics/Tulip/6C6A3732.jpg",
        alt: "Tulip Collection - Look 1",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Tulip/6C6A3434.jpg",
        alt: "Tulip Collection - Look 2",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Tulip/6C6A3421.jpg",
        alt: "Tulip Collection - Look 3",
      },
    ],
  },
  {
    id: "peacock",
    title: "PEACOCK",
    description:
      "This stunning gown features intricate beadwork and sequins that create a mesmerizing pattern reminiscent of peacock feathers. The elegant silhouette and luxurious detailing make it perfect for special occasions.",
    media: [
      {
        type: "image" as const,
        src: "/images/Collection pics/Peacock/6C6A3260.jpg",
        alt: "Peacock Collection - Look 1",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Peacock/6C6A3214.jpg",
        alt: "Peacock Collection - Look 2",
      },
      {
        type: "image" as const,
        src: "/images/Collection pics/Peacock/6C6A3177.jpg",
        alt: "Peacock Collection - Look 3",
      },
    ],
  },
];

// Performance-optimized loading configuration
const ITEMS_PER_LOAD = 3;
const LOAD_THRESHOLD = 200; // pixels from bottom

export const Collection: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const [visibleItems, setVisibleItems] = useState<typeof collectionItems>(
    collectionItems.slice(0, ITEMS_PER_LOAD)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load more items function
  const loadMoreItems = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    // Simulate network delay for smooth UX
    setTimeout(() => {
      const currentLength = visibleItems.length;
      const nextItems = collectionItems.slice(
        currentLength,
        currentLength + ITEMS_PER_LOAD
      );

      if (nextItems.length > 0) {
        setVisibleItems((prev) => [...prev, ...nextItems]);
      }

      if (currentLength + nextItems.length >= collectionItems.length) {
        setHasMore(false);
      }

      setIsLoading(false);
    }, 300);
  }, [visibleItems.length, isLoading, hasMore]);

  // Optimized scroll handler with debouncing
  const handleScroll = useCallback(() => {
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Debounce scroll events
    scrollTimeoutRef.current = setTimeout(() => {
      if (isLoading || !hasMore) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if user is near bottom
      if (scrollTop + windowHeight >= documentHeight - LOAD_THRESHOLD) {
        loadMoreItems();
      }
    }, 100); // 100ms debounce
  }, [isLoading, hasMore, loadMoreItems]);

  // Intersection Observer for even better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreItems();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading, loadMoreItems]);

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      }`}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className={`absolute inset-0 opacity-5 ${
            isDarkMode ? "bg-white" : "bg-gray-900"
          }`}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Collection Season */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
                isDarkMode
                  ? "bg-gray-800/50 text-gray-300 border border-gray-700/50"
                  : "bg-white/80 text-gray-600 border border-gray-200/50"
              } backdrop-blur-sm`}
            >
              <span
                className={`w-2 h-2 rounded-full mr-2 ${
                  isDarkMode ? "bg-accent-500" : "bg-[#006167]"
                }`}
              ></span>
              Haute Couture Collection
            </div>

            {/* Main Title */}
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="block">Our</span>
              <span
                className={`block font-bold ${
                  isDarkMode
                    ? "bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-[#006167] to-[#025157] bg-clip-text text-transparent"
                }`}
              >
                Collections
              </span>
            </h1>

            {/* Collection Narrative */}
            <p
              className={`text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto font-light mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Discover our exquisite haute couture collection, where each gown
              tells a unique story of elegance, craftsmanship, and timeless
              beauty.
            </p>

            {/* Collection Philosophy */}
            <div className="max-w-3xl mx-auto">
              <p
                className={`text-base md:text-lg leading-relaxed font-light italic ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Each creation is meticulously crafted to celebrate the beauty
                within, combining traditional techniques with contemporary
                design to create pieces that are both timeless and modern.
              </p>
            </div>

            {/* Collection Insights */}
            <div className="flex flex-wrap justify-center gap-8 mt-16">
              <div className="text-center">
                <div
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {collectionItems.length}
                </div>
                <div
                  className={`text-sm uppercase tracking-wide ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Unique Creations
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {collectionItems.reduce(
                    (acc, item) => acc + item.media.length,
                    0
                  )}
                </div>
                <div
                  className={`text-sm uppercase tracking-wide ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Captured Moments
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Infinite
                </div>
                <div
                  className={`text-sm uppercase tracking-wide ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Possibilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-8xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-light mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              The Complete Collection
            </h2>
            <p
              className={`text-lg leading-relaxed max-w-2xl mx-auto mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Each gown represents a chapter in our story of elegance,
              meticulously crafted to celebrate the beauty within.
            </p>
            <div
              className={`w-24 h-0.5 mx-auto ${
                isDarkMode ? "bg-accent-500" : "bg-gray-300"
              }`}
            ></div>
          </div>

          {/* Dynamic Grid - CSS optimized */}
          <div className="collection-grid">
            {visibleItems.map((collection) => (
              <div key={collection.id} className="animate-fade-in-up opacity-0">
                <CollectionCard
                  id={collection.id}
                  title={collection.title}
                  description={collection.description}
                  media={collection.media}
                />
              </div>
            ))}
          </div>

          {/* Optimized Loading Indicator */}
          {isLoading && (
            <div className="flex justify-center items-center mt-12">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-6 h-6 border-2 border-t-transparent rounded-full loading-spinner ${
                    isDarkMode ? "border-accent-500" : "border-gray-600"
                  }`}
                ></div>
                <span
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Loading more collections...
                </span>
              </div>
            </div>
          )}

          {/* Intersection Observer Target */}
          <div ref={loadingRef} className="h-10 mt-8"></div>
        </div>
      </section>

      {/* Bottom Section */}
      <section
        className={`relative px-4 sm:px-6 lg:px-8 py-24 ${
          isDarkMode
            ? "bg-gradient-to-t from-gray-800/50 to-transparent"
            : "bg-gradient-to-t from-gray-100/50 to-transparent"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-5xl font-light mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Where Art Meets Fashion
          </h2>
          <p
            className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Our collection represents our commitment to creating timeless pieces
            that celebrate the extraordinary within the everyday, combining
            artistry with impeccable craftsmanship.
          </p>

          {/* Brand Quote */}
          <div className="mt-16 pt-8 border-t border-gray-200/20">
            <blockquote
              className={`text-xl md:text-2xl font-light italic ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              "Love yourself, unconditionally"
            </blockquote>
            <cite
              className={`block mt-4 text-sm uppercase tracking-wide ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              — Kuni Couture
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
