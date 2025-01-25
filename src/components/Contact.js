function ContactPage() {
    return (
      <section className="py-20 bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column (Contact Form) */}
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-200 mb-8">
                If you have any questions or need further assistance, feel free to reach out to us.
              </p>
              <form className="bg-gradient-to-br from-[#1b2a36] to-[#00375e] p-8 rounded-lg shadow-xl">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-lg text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-[#91e0ed] text-white rounded-none focus:outline-none focus:ring-0 focus:border-[#6dc2d6]"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-lg text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-[#91e0ed] text-white rounded-none focus:outline-none focus:ring-0 focus:border-[#6dc2d6]"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="place" className="block text-lg text-white mb-2">
                    Place
                  </label>
                  <input
                    type="text"
                    id="place"
                    name="place"
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-[#91e0ed] text-white rounded-none focus:outline-none focus:ring-0 focus:border-[#6dc2d6]"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-lg text-white mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 bg-transparent border-b-2 border-[#91e0ed] text-white rounded-none focus:outline-none focus:ring-0 focus:border-[#6dc2d6]"
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
  
            {/* Right Column (Contact Info + Map) */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white mb-6">Contact Information</h2>
                <ul className="space-y-4 text-gray-200">
                  <li>
                    <strong>Address:</strong> 123 Business St, City, Country
                  </li>
                  <li>
                    <strong>Phone:</strong> +1 234 567 890
                  </li>
                  <li>
                    <strong>Email:</strong> support@yourcompany.com
                  </li>
                </ul>
              </div>
  
              {/* Map Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9">
                  {/* Embed Google Map or Static Map */}
                  <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.89991312345!2d-74.00811278469997!3d40.7127753793298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af7e0f29cf%3A0x8ef835b88f402bbf!2sNew%20York%20City!5e0!3m2!1sen!2sus!4v1638878378729!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ContactPage;
  