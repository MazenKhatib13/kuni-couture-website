import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/collection" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-8">
            <div>
              <span className="font-malayalam font-bold text-2xl text-primary-600">
                KUNI COUTURE
              </span>
              <p className="mt-4 text-sm text-gray-600 max-w-md">
                Love yourself, unconditionally. Discover the 2022 collection
                that celebrates strength, empowerment, and the beauty of
                self-expression.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@kunicouture.com"
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+1234567890"
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Navigation</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Stay Connected
              </h3>
              <p className="mt-4 text-sm text-gray-600">
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
                  className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Kuni Couture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
