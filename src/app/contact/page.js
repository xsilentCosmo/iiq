'use client'
function Contact() {
    return (
      <section className="py-20 bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Top Section: Heading and Subline */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-200">
              If you have any questions or need further assistance, feel free to reach out to us.
            </p>
          </div>
  
          {/* Main Content: Two Columns */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Right Column (Contact Info + Map) */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-semibold text-white mb-6">Contact Information</h3>
                <ul className="space-y-4 text-gray-200">
                  <li>
                    <strong>Phone:</strong> +91  9656250000
                  </li>
                  <li>
                    <strong>Email:</strong> mail@integraliq.com
                  </li>
                  <li>
                    <strong>Address:</strong> 7th floor, Capital City, Round North, Thrissur, Kerala 680020
                  </li>
                </ul>
              </div>
  
              {/* Map Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.658379232264!2d76.21681439999999!3d10.527549999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e335e8e7ded3af%3A0x8a133439fc1c0a01!2sintegraliQ!5e0!3m2!1sen!2sin!4v1737372186366!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
  
            {/* Left Column (Contact Form) */}
            <div>
              <form className="bg-gradient-to-br from-[#1b2a36] to-[#00375e] p-8 rounded-lg shadow-xl">
                <div className="mb-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-[#91e0ed] text-white rounded-none focus:outline-none focus:ring-0 focus:border-[#6dc2d6] placeholder-gray-400"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    maxLength={15}
                    inputMode="numeric"
                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-[#91e0ed] text-white rounded-none focus:outline-none focus:ring-0 focus:border-[#6dc2d6] placeholder-gray-400"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-[#91e0ed] text-white rounded-none focus:outline-none focus:ring-0 focus:border-[#6dc2d6] placeholder-gray-400"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    id="place"
                    name="place"
                    placeholder="Place"
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-[#91e0ed] text-white rounded-none focus:outline-none focus:ring-0 focus:border-[#6dc2d6] placeholder-gray-400"
                    required
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-[#91e0ed] text-white rounded-none focus:outline-none focus:ring-0 focus:border-[#6dc2d6] placeholder-gray-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#91e0ed] text-[#1b2a36] font-semibold rounded-lg shadow-md hover:bg-[#6dc2d6] transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  