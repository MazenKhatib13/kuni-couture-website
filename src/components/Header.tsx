import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../contexts/DarkModeContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/collection" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Add scroll listener on all pages, not just homepage
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Remove isHomePage dependency

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      // Store original overflow and prevent scrolling
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Determine header styling based on page, scroll position, and dark mode
  const headerClasses = isHomePage
    ? `sticky top-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-gray-900/95 backdrop-blur-sm border-b border-gray-700"
            : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
          : "bg-transparent"
      }`
    : `sticky top-0 backdrop-blur-sm border-b z-[100] transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-900/95 border-gray-700"
          : "bg-white/95 border-gray-100"
      }`;

  // Use the new simplified KUNI logo PNG for all cases
  const logoSrc = "/images/Screenshot_2025-07-01_175111-removebg-preview.png";

  // Determine text colors based on header background and dark mode
  const textColorClasses = (() => {
    if (isHomePage && !isScrolled) {
      return "text-white hover:text-accent-500";
    }
    return isDarkMode
      ? "text-gray-100 hover:text-accent-500"
      : "text-gray-900 hover:text-accent-500";
  })();

  const activeTextColor = "text-accent-500";

  // Improved mobile button color logic for better visibility
  const mobileButtonColor = (() => {
    if (isHomePage && !isScrolled) {
      return "text-white hover:text-accent-500 bg-black/20 hover:bg-black/30 backdrop-blur-sm";
    }
    return isDarkMode
      ? "text-gray-100 hover:text-accent-500 hover:bg-gray-800/50"
      : "text-gray-700 hover:text-accent-500 hover:bg-gray-100/50";
  })();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = () => {
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={headerClasses}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Mobile Header - Single row with proper alignment */}
        <div className="flex lg:hidden items-center justify-between py-4 relative">
          {/* Mobile menu button */}
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md p-2.5 min-h-[44px] min-w-[44px] transition-all duration-200 ${mobileButtonColor}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Logo - absolutely centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="-m-1.5 p-1.5" onClick={handleNavClick}>
              <img
                src={logoSrc}
                alt="Kuni Couture"
                className={`h-16 w-auto transition-all duration-300 ${
                  isHomePage && !isScrolled ? "drop-shadow-lg" : ""
                }`}
              />
            </Link>
          </div>

          {/* Dark mode toggle */}
          <div className="flex items-center">
            <DarkModeToggle />
          </div>
        </div>

        {/* Desktop Header - Two rows */}
        <div className="hidden lg:block">
          {/* Logo Section */}
          <div className="flex justify-center py-4">
            <Link to="/" className="-m-1.5 p-1.5" onClick={handleNavClick}>
              <img
                src={logoSrc}
                alt="Kuni Couture"
                className={`h-20 w-auto transition-all duration-300 ${
                  isHomePage && !isScrolled ? "drop-shadow-lg" : ""
                }`}
              />
            </Link>
          </div>

          {/* Navigation Section */}
          <nav
            className="flex items-center justify-between pb-3"
            aria-label="Global"
          >
            {/* Desktop navigation - centered */}
            <div className="flex flex-1 justify-center gap-x-12">
              {navigation.map((item) =>
                item.name === "Contact" ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleContactClick}
                    className={`text-sm font-medium leading-6 transition-colors cursor-pointer ${textColorClasses} ${
                      isHomePage && !isScrolled ? "drop-shadow-md" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleNavClick}
                    className={`text-sm font-medium leading-6 transition-colors ${
                      location.pathname === item.href
                        ? activeTextColor
                        : textColorClasses
                    } ${isHomePage && !isScrolled ? "drop-shadow-md" : ""}`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Desktop dark mode toggle */}
            <div className="flex">
              <DarkModeToggle />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu - rendered as portal to body */}
      {mobileMenuOpen &&
        createPortal(
          <div className="lg:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[110] bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Menu Panel */}
            <div
              className={`fixed top-0 right-0 bottom-0 z-[120] w-full sm:w-96 overflow-y-auto px-6 py-6 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="-m-1.5 p-1.5"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick();
                  }}
                >
                  <img
                    src="/images/Screenshot_2025-07-01_175111-removebg-preview.png"
                    alt="Kuni Couture"
                    className="h-12 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  className={`-m-2.5 rounded-md p-2.5 transition-colors ${
                    isDarkMode
                      ? "text-gray-100 hover:text-accent-500"
                      : "text-gray-700 hover:text-accent-500"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) =>
                      item.name === "Contact" ? (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => {
                            handleContactClick(e);
                            setMobileMenuOpen(false);
                          }}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-colors hover:bg-accent-500/10 hover:text-accent-500 cursor-pointer ${
                            isDarkMode ? "text-gray-100" : "text-gray-900"
                          }`}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-colors hover:bg-accent-500/10 hover:text-accent-500 ${
                            location.pathname === item.href
                              ? "text-accent-500 bg-accent-500/5"
                              : isDarkMode
                              ? "text-gray-100"
                              : "text-gray-900"
                          }`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            handleNavClick();
                          }}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
