import { useState } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="hero-text text-gray-900 mb-6">Get in Touch</h1>
          <p className="body-text text-gray-600 max-w-3xl mx-auto">
            Ready to begin your couture journey? We'd love to hear from you.
            Contact us to schedule a consultation, inquire about a specific
            piece, or learn more about our bespoke services.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="section-heading text-gray-900 mb-8">
                Send us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    Thank you for your message! We'll get back to you within 24
                    hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Schedule Consultation</option>
                    <option value="inquiry">Product Inquiry</option>
                    <option value="custom">Custom Design</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your vision, preferred style, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="section-heading text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-malayalam font-medium text-lg text-gray-900 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600 mb-1">General Inquiries</p>
                    <a
                      href="mailto:info@kunicouture.com"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      info@kunicouture.com
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Consultations</p>
                    <a
                      href="mailto:appointments@kunicouture.com"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      appointments@kunicouture.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-malayalam font-medium text-lg text-gray-900 mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-malayalam font-medium text-lg text-gray-900 mb-2">
                      Atelier
                    </h3>
                    <p className="text-gray-600">
                      123 Fashion District
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      By appointment only
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-malayalam font-medium text-lg text-gray-900 mb-2">
                      Follow Us
                    </h3>
                    <a
                      href="#"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      @kunicouture
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      See our latest creations and behind-the-scenes
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-malayalam font-medium text-lg text-gray-900 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900 mb-1">
                      How long does it take to create a gown?
                    </p>
                    <p className="text-gray-600">
                      Each couture gown takes 8-12 weeks to complete, including
                      fittings.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">
                      Do you offer virtual consultations?
                    </p>
                    <p className="text-gray-600">
                      Yes, we offer virtual consultations for international
                      clients.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">
                      Can I customize an existing design?
                    </p>
                    <p className="text-gray-600">
                      Absolutely! All our pieces can be customized to your
                      preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
