import React from 'react';

function ConsultingServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white">
      <div className="max-w-screen-xl mx-auto px-5">
        {/* Headline and Description Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headline */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Explore Our Expert <br/><span className="text-[#91e0ed]">Consulting Services</span>
            </h2>
            
          </div>
          {/* Right Column - Image */}
          <div className="hidden md:block">
          <p className="text-gray-300 text-base max-w-2xl mx-auto md:mx-0">
              We offer a range of consulting services designed to foster innovation and support startups. Our expert team
              provides tailored guidance to help businesses navigate challenges and achieve sustainable growth. Discover how
              our services can empower your business to reach new heights.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {/* Service 1 */}
          <div className="rounded-sm  p-1 transform transition-all hover:-translate-y-5">
            <img
              src="https://img.freepik.com/free-photo/workaholic-businesswoman-pointing-financial-strategy-using-monitor-working-overtime-company-meeting-office-room_482257-2175.jpg"
              alt="Startup Consulting"
              className="w-full h-48 object-cover rounded-sm mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4 text-[#91e0ed]">Startup Consulting Services</h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Our Startup Consulting service offers personalized guidance to new businesses, helping them overcome initial
              challenges and establish a strong foundation for growth.
            </p>
            <button className="mt-4 px-4 py-2 border-[#91e0ed] border-2 text-[#91e0ed] hover:text-[#1b2a36] font-semibold rounded-sm shadow hover:bg-[#6dc2d6] transition-all">
              Learn More
            </button>
          </div>

          {/* Service 2 */}
          <div className="rounded-sm  p-1 transform transition-all hover:-translate-y-5">
            <img
              src="https://img.freepik.com/free-photo/startup-entrepreneur-holding-laptop-with-sales-presentation-charts-pointing-wall-screen-tv-late-night-meeting-caucasian-man-presenting-marketing-strategy-coworkers-working-overtime_482257-43128.jpg"
              alt="Business Growth Strategy"
              className="w-full h-48 object-cover rounded-sm mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4 text-[#91e0ed]">Business Growth Strategy</h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Our Business Growth Strategy service helps established companies identify expansion opportunities. We provide
              actionable insights to drive your business forward.
            </p>
            <button className="mt-4 px-4 py-2 border-[#91e0ed] border-2 text-[#91e0ed] hover:text-[#1b2a36] font-semibold rounded-sm shadow hover:bg-[#6dc2d6] transition-all">
              Learn More
            </button>
          </div>

          {/* Service 3 */}
          <div className="rounded-sm  p-1 transform transition-all hover:-translate-y-5">
            <img
              src="https://10web-site.ai/373/wp-content/uploads/sites/385/2025/01/tenweb_media_lmsmkwWQ.webp"
              alt="Data-Driven Insights"
              className="w-full h-48 object-cover rounded-sm mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4 text-[#91e0ed]">Data-Driven Insights</h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
            Leverage our data-driven insights to inform your business decisions. Our experts analyze trends to provide you with strategic recommendations for sustainable growth.
            </p>
            <button className="mt-4 px-4 py-2 border-[#91e0ed] border-2 text-[#91e0ed] hover:text-[#1b2a36] font-semibold rounded-sm shadow hover:bg-[#6dc2d6] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultingServices;
