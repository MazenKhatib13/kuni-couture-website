import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/collection" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const { isDarkMode } = useDarkMode();

  return (
    <footer
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
                href="#"
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
                href="mailto:info@kunicouture.com"
                className={`transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-accent-500"
                    : "text-gray-400 hover:text-primary-600"
                }`}
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+1234567890"
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

          {/* Navigation */}
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

            {/* Newsletter */}
            <div>
              <h3
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Stay Connected
              </h3>
              <p
                className={`mt-4 text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Subscribe to our newsletter for the latest updates and exclusive
                access.
              </p>
              <form className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-100 ring-gray-600 placeholder:text-gray-400 focus:ring-accent-500"
                      : "bg-white text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-primary-600"
                  }`}
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className={`flex-none rounded-md px-3.5 py-2.5 text-sm font-medium shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    isDarkMode
                      ? "bg-accent-500 text-gray-900 hover:bg-accent-600 focus-visible:outline-accent-500"
                      : "bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600"
                  }`}
                >
                  Subscribe
                </button>
              </form>
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
