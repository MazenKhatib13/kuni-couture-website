import { useDarkMode } from "../contexts/DarkModeContext";

export function About() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "bg-gray-900" : "bg-white"}>
      {/* Hero Section */}
      <section className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1
            className={`hero-text mb-6 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            About Kuni Couture
          </h1>
          <p
            className={`body-text max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Our story begins with a simple yet powerful belief: every woman
            deserves to love herself, unconditionally. Through couture
            craftsmanship and timeless design, we create pieces that celebrate
            the unique beauty and strength within every woman.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className={`section-heading mb-6 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Our Story
              </h2>
              <div className="space-y-6">
                <p
                  className={`body-text ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Kuni Couture was born from a vision to create more than just
                  beautiful gowns. We set out to craft experiences that
                  transform how women see themselves – celebrating their
                  strength, embracing their individuality, and honoring their
                  journey.
                </p>
                <p
                  className={`body-text ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Each piece in our collection is meticulously designed and
                  handcrafted by skilled artisans who share our commitment to
                  excellence. We believe that true luxury lies in the details –
                  from the selection of the finest fabrics to the precision of
                  every stitch.
                </p>
                <p
                  className={`body-text ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Our 2022 collection represents the culmination of years of
                  dedication to our craft, featuring silhouettes that empower,
                  colors that inspire, and details that captivate.
                </p>
              </div>
            </div>
            <div
              className={`aspect-[4/5] rounded-lg ${
                isDarkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-sm">Brand Story Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`section-heading mb-4 ${
                isDarkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Our Core Values
            </h2>
            <p
              className={`body-text max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              These principles guide everything we do, from design to
              craftsmanship to the relationships we build with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  isDarkMode ? "bg-accent-500" : "bg-primary-600"
                }`}
              >
                <span
                  className={`text-3xl ${
                    isDarkMode ? "text-gray-900" : "text-white"
                  }`}
                >
                  ♡
                </span>
              </div>
              <h3
                className={`font-malayalam font-bold text-xl mb-4 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Love
              </h3>
              <p
                className={`body-text ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                At the heart of our philosophy is self-love and acceptance. We
                believe every woman should embrace her authentic self and
                celebrate her unique beauty without compromise.
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  isDarkMode ? "bg-accent-500" : "bg-primary-600"
                }`}
              >
                <span
                  className={`text-3xl ${
                    isDarkMode ? "text-gray-900" : "text-white"
                  }`}
                >
                  ⚡
                </span>
              </div>
              <h3
                className={`font-malayalam font-bold text-xl mb-4 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Strength
              </h3>
              <p
                className={`body-text ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We celebrate the inner strength that defines the modern woman.
                Our designs reflect confidence, resilience, and the power that
                comes from knowing your worth.
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  isDarkMode ? "bg-accent-500" : "bg-primary-600"
                }`}
              >
                <span
                  className={`text-3xl ${
                    isDarkMode ? "text-gray-900" : "text-white"
                  }`}
                >
                  ✦
                </span>
              </div>
              <h3
                className={`font-malayalam font-bold text-xl mb-4 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Empowerment
              </h3>
              <p
                className={`body-text ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Every gown we create is designed to empower. We want women to
                feel unstoppable, radiant, and completely themselves when they
                wear Kuni Couture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`aspect-[4/5] rounded-lg ${
                isDarkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-sm">Founder Portrait</span>
              </div>
            </div>
            <div>
              <h2
                className={`section-heading mb-6 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Meet the Founder
              </h2>
              <div className="space-y-6">
                <p
                  className={`body-text ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span
                    className={`font-medium ${
                      isDarkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    Kuni's
                  </span>{" "}
                  journey began with a deep passion for fashion and an
                  unwavering commitment to empowering women through design. With
                  years of experience in couture craftsmanship, she founded Kuni
                  Couture to create a space where artistry meets empowerment.
                </p>
                <p
                  className={`body-text ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  "I believe that the right gown can transform not just how you
                  look, but how you feel. My mission is to create pieces that
                  help women connect with their inner strength and celebrate
                  their unique beauty."
                </p>
                <p
                  className={`body-text ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Every design reflects her commitment to excellence and her
                  understanding that true luxury is about more than just
                  beautiful fabrics – it's about the confidence and joy that
                  comes from wearing something truly special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2
            className={`section-heading mb-6 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Exceptional Craftsmanship
          </h2>
          <p
            className={`body-text max-w-3xl mx-auto mb-12 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Each Kuni Couture gown is a testament to traditional craftsmanship
            and modern innovation. From hand-selected fabrics to intricate
            beadwork, every detail is executed with precision and care by our
            skilled artisans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div
                className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? "text-accent-500" : "text-primary-600"
                }`}
              >
                300+
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Hours per gown
              </div>
            </div>
            <div>
              <div
                className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? "text-accent-500" : "text-primary-600"
                }`}
              >
                100%
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Handcrafted
              </div>
            </div>
            <div>
              <div
                className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? "text-accent-500" : "text-primary-600"
                }`}
              >
                12
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Signature pieces
              </div>
            </div>
            <div>
              <div
                className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? "text-accent-500" : "text-primary-600"
                }`}
              >
                ∞
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Possibilities
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
