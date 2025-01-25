function CTASection() {
    return (
      <section className="py-16 bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white text-center">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Need More Guidance?
          </h2>
          <p className="text-gray-200 text-lg mb-6">
            Discover more resources or get in touch with our experts for personalized support.
          </p>
          <div className="flex justify-center gap-6">
            {/* Contact Us Button */}
            <a
              href="/contact" // Link to the Contact Page
              className="px-6 py-3 bg-[#91e0ed] text-[#1b2a36] font-semibold rounded-lg shadow-md hover:bg-[#6dc2d6] transition-all"
            >
              Contact Us
            </a>
            {/* Learn More Button */}
            <a
              href="/resources" // Link to the Resources page or any other section
              className="px-6 py-3 border-2 border-[#91e0ed] text-[#91e0ed] font-semibold rounded-lg shadow-md hover:bg-[#91e0ed] hover:text-[#1b2a36] transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default CTASection;
  