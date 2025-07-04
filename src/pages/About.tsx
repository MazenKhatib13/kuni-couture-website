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
            More than fashion, it's a voice, a movement, and a lifestyle. Rooted
            in the Arabic word "كوني" meaning "Be", Kuni empowers women to
            embrace who they are: fully, fiercely, and fearlessly.
          </p>
        </div>
      </section>

      {/* About Kuni Section - Now First */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className={`section-heading mb-6 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                About Kuni
              </h2>
              <div className="space-y-6">
                <p
                  className={`body-text ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Kuni is more than fashion, it's a voice, a movement, and a
                  lifestyle. Rooted in the Arabic word "كوني" meaning "Be", Kuni
                  empowers women to embrace who they are: fully, fiercely, and
                  fearlessly.
                </p>
                <p
                  className={`body-text ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Our brand is a celebration of strength wrapped in elegance.
                  Kuni speaks to every woman: the dreamer, the leader, the
                  creator. Whether in silk, chiffon, or structured silhouettes,
                  each couture piece is crafted to awaken the senses and tell a
                  story of individuality.
                </p>
                <p
                  className={`body-text ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  From timeless evening wear to custom couture, Kuni blends
                  modern aesthetics with meaningful design. Every detail
                  reflects a message: Be bold. Be soft. Be you.
                </p>
                <p
                  className={`body-text font-medium ${
                    isDarkMode ? "text-accent-500" : "text-primary-600"
                  }`}
                >
                  Kuni is not just what you wear, it's what you believe in.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <img
                  src="/images/Screenshot_2025-07-01_175111-removebg-preview.png"
                  alt="Kuni Couture Logo"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sara Section - Now Second */}
      <section className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/WhatsApp Image 2025-07-03 at 6.17.40 AM (2).jpeg"
                  alt="Sara Mousa, Founder of Kuni Couture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                className={`section-heading mb-6 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                About Sara
              </h2>
              <div className="space-y-6">
                <p
                  className={`body-text ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Founder and creative force behind Kuni, Sara Mousa is a woman
                  driven by vision, passion, and purpose. With a background in
                  architecture and luxury real estate, Sara's world has always
                  revolved around beauty, structure, and meaning. Kuni is her
                  personal statement to the world. A reminder that women can be
                  powerful and soft, ambitious and elegant, bold and beautifully
                  themselves.
                </p>
                <p
                  className={`body-text ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  As a mother and entrepreneur, Sara understands what it means
                  to carry both responsibility and dreams. Her mission through
                  Kuni is not just to design, but to inspire women everywhere to
                  stand tall, love themselves unapologetically, and embrace
                  their identity with confidence and grace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`py-24 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                48+
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Hours per Gown
              </div>
            </div>
            <div>
              <div
                className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? "text-accent-500" : "text-primary-600"
                }`}
              >
                Premium
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Materials
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

      {/* Brand Philosophy */}
      <section className={`py-24 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <blockquote
            className={`text-2xl md:text-3xl font-light italic mb-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            "Be bold. Be soft. Be you."
          </blockquote>
          <cite
            className={`block text-sm uppercase tracking-wide ${
              isDarkMode ? "text-accent-500" : "text-primary-600"
            }`}
          >
            - Kuni Couture Philosophy
          </cite>
        </div>
      </section>
    </div>
  );
}
