import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-white">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1 className="hero-text text-gray-900 mb-6">
            Love Yourself,
            <br />
            <span className="text-primary-600">Unconditionally</span>
          </h1>
          <p className="body-text text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the 2022 collection that celebrates strength, empowerment,
            and the beauty of self-expression through exquisite couture
            craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/collection"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="btn-outline inline-flex items-center justify-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection Teaser */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="body-text text-gray-600 max-w-2xl mx-auto">
              Experience the artistry of our signature pieces, each one crafted
              with meticulous attention to detail and timeless elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for featured items */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 group-hover:opacity-90 transition-opacity">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-sm">Featured Gown {item}</span>
                  </div>
                </div>
                <h3 className="font-malayalam font-medium text-lg text-gray-900 mb-2">
                  Signature Piece {item}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Elegant couture gown crafted with the finest materials and
                  attention to detail.
                </p>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors">
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
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-gray-900 mb-4">Our Values</h2>
            <p className="body-text text-gray-600 max-w-2xl mx-auto">
              Every piece we create embodies our core values of love, strength,
              and empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">♡</span>
              </div>
              <h3 className="font-malayalam font-medium text-lg text-gray-900 mb-2">
                Love
              </h3>
              <p className="text-sm text-gray-600">
                Self-love and acceptance are at the heart of everything we
                create.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="font-malayalam font-medium text-lg text-gray-900 mb-2">
                Strength
              </h3>
              <p className="text-sm text-gray-600">
                Celebrating the inner strength that makes every woman unique.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✦</span>
              </div>
              <h3 className="font-malayalam font-medium text-lg text-gray-900 mb-2">
                Empowerment
              </h3>
              <p className="text-sm text-gray-600">
                Empowering women to express their authentic selves with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="section-heading text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="body-text text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with us to explore our collection and discover the perfect
            piece that celebrates your unique beauty.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-3 font-medium transition-colors inline-flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
