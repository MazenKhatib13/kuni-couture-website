import { useDarkMode } from "../contexts/DarkModeContext";

export default function Collection() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      {/* Header */}
      <section className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1
            className={`font-malayalam font-bold text-5xl mb-6 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Couture Collection
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover our exquisite collection of handcrafted gowns, each piece
            designed to celebrate your unique beauty and inner strength.
          </p>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div
                  className={`aspect-[3/4] mb-4 rounded-lg ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-sm">Collection Item {item}</span>
                  </div>
                </div>
                <h3
                  className={`font-malayalam font-bold text-lg mb-2 ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  Signature Gown {item}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Handcrafted couture piece
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2
            className={`font-malayalam font-bold text-4xl mb-6 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Discover Your Perfect Piece
          </h2>
          <p
            className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Each gown tells a story of craftsmanship, elegance, and the
            celebration of your unique beauty.
          </p>
        </div>
      </section>
    </div>
  );
}
