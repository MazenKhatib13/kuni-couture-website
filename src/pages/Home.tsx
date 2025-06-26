import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

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
    // Ensure video keeps playing
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
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
        videoRef.current.play().catch(console.error);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [videoLoaded, hasVideo]);

  return (
    <div className="bg-transparent" data-page="home">
      {/* Video Hero Section */}
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
            top: "-200px",
            bottom: "-100px",
            height: "calc(100% + 300px)",
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
                  // Ensure video plays when it's ready
                  if (videoRef.current) {
                    videoRef.current.play().catch(console.error);
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
            top: "-200px",
            bottom: "-100px",
            height: "calc(100% + 300px)",
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
                className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 sm:py-3 font-medium transition-colors inline-flex items-center justify-center gap-2 shadow-lg min-h-[44px] touch-manipulation"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
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
            {/* Placeholder for featured items */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div
                  className={`aspect-[3/4] rounded-lg overflow-hidden mb-4 group-hover:opacity-90 transition-opacity ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-400"
                      }`}
                    >
                      Featured Gown {item}
                    </span>
                  </div>
                </div>
                <h3
                  className={`font-malayalam font-medium text-lg mb-2 ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  Signature Piece {item}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Elegant couture gown crafted with the finest materials and
                  attention to detail.
                </p>
                <button
                  className={`text-sm font-medium transition-colors py-2 px-4 min-h-[44px] touch-manipulation ${
                    isDarkMode
                      ? "text-accent-500 hover:text-accent-600"
                      : "text-primary-600 hover:text-primary-700"
                  }`}
                >
                  Inquire Now →
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/collection"
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

      {/* Call to Action */}
      <section
        className={`py-24 ${isDarkMode ? "bg-accent-500" : "bg-primary-600"}`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2
            className={`section-heading mb-4 ${
              isDarkMode ? "text-gray-900" : "text-white"
            }`}
          >
            Ready to Begin Your Journey?
          </h2>
          <p
            className={`body-text mb-8 max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-900/90" : "text-white/90"
            }`}
          >
            Connect with us to explore our collection and discover the perfect
            piece that celebrates your unique beauty.
          </p>
          <Link
            to="/contact"
            className={`px-8 py-4 sm:py-3 font-medium transition-colors inline-flex items-center gap-2 min-h-[44px] touch-manipulation ${
              isDarkMode
                ? "bg-gray-900 text-accent-500 hover:bg-gray-800"
                : "bg-white text-primary-600 hover:bg-gray-50"
            }`}
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
