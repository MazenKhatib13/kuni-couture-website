export function Collection() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="hero-text text-gray-900 mb-6">2022 Collection</h1>
          <p className="body-text text-gray-600 max-w-3xl mx-auto">
            Discover our signature collection of couture gowns, each piece
            meticulously crafted to celebrate the strength and beauty of the
            modern woman. Every gown tells a story of empowerment and
            self-expression.
          </p>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for collection items */}
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="text-sm mb-2">Gown {i + 1}</div>
                      <div className="text-xs text-gray-300">Click to view</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-malayalam font-medium text-lg text-gray-900 mb-2">
                    Look {String(i + 1).padStart(2, "0")}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Couture evening gown featuring intricate beadwork and
                    flowing silhouette.
                  </p>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors">
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="section-heading text-gray-900 mb-4">
            Interested in a Piece?
          </h2>
          <p className="body-text text-gray-600 mb-8 max-w-2xl mx-auto">
            Each gown is made to order with personalized fittings and
            customizations. Contact us to begin your couture journey.
          </p>
          <a
            href="mailto:info@kunicouture.com"
            className="btn-primary inline-block"
          >
            Enquire at info@kunicouture.com
          </a>
        </div>
      </section>
    </div>
  );
}
