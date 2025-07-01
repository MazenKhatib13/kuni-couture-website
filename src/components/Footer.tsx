import { Link } from "react-router-dom";
import { Instagram, Phone } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/collection" },
  { name: "About", href: "/about" },
];

export function Footer() {
  const { isDarkMode } = useDarkMode();

  const handleNavClick = () => {
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className={`border-t ${
        isDarkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-8">
            <div>
              <span
                className={`font-malayalam font-bold text-2xl ${
                  isDarkMode ? "text-accent-500" : "text-primary-600"
                }`}
              >
                KUNI COUTURE
              </span>
              <p
                className={`mt-4 text-sm max-w-md ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Love yourself, unconditionally. Discover the 2022 collection
                that celebrates strength, empowerment, and the beauty of
                self-expression.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/kuni.boutique/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-accent-500"
                    : "text-gray-400 hover:text-primary-600"
                }`}
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="tel:+971543034452"
                className={`transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-accent-500"
                    : "text-gray-400 hover:text-primary-600"
                }`}
                aria-label="Phone"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation and Contact */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Navigation
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      onClick={handleNavClick}
                      className={`text-sm transition-colors ${
                        isDarkMode
                          ? "text-gray-300 hover:text-accent-500"
                          : "text-gray-600 hover:text-primary-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Get in Touch
              </h3>
              <p
                className={`mt-4 text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Connect with us through our social channels to explore our
                collection and discover your perfect piece.
              </p>
              <div className="mt-6 space-y-4">
                <a
                  href="https://www.instagram.com/kuni.boutique/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-sm transition-colors ${
                    isDarkMode
                      ? "text-gray-300 hover:text-accent-500"
                      : "text-gray-600 hover:text-primary-600"
                  }`}
                >
                  <Instagram className="h-5 w-5" />
                  @kuni.boutique
                </a>
                <a
                  href="tel:+971543034452"
                  className={`flex items-center gap-3 text-sm transition-colors ${
                    isDarkMode
                      ? "text-gray-300 hover:text-accent-500"
                      : "text-gray-600 hover:text-primary-600"
                  }`}
                >
                  <Phone className="h-5 w-5" />
                  +971 54 303 4452
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 border-t pt-8 ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <p
            className={`text-xs ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            &copy; {new Date().getFullYear()} Kuni Couture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
