import React from 'react'

function About() {
  return (
    <div><section className="py-20 ">
    <div className="max-w-screen-xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Who We Are</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-[#00375e] space-y-4">
          <h3 className="text-2xl font-bold">Innovation & Growth</h3>
          <p>We provide startups with the resources they need to thrive.</p>
          <p>
            Our mission is to enable innovators to bring their visions to life,
            transforming the way businesses grow.
          </p>
        </div>
        <img src="/about-us.jpg" alt="About Us" className="rounded-lg shadow-lg" />
      </div>
    </div>
  </section>
  </div>
  )
}

export default About