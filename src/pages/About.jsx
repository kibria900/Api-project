import React from 'react'

const About = () => {
  return (
    <>
    
     {/* Section Title */}
      <h1 className="text-3xl font-semibold text-center mx-auto">Latest Blog</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Stay ahead of the curve with fresh content on code, design, startups, and everything in between.
      </p>

      {/* Blog Grid */}
      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {/* Blog Card 1 */}
        <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&h=800&auto=format&fit=crop&q=60"
            alt="UI Color Psychology"
          />
          <h3 className="text-base text-slate-900 font-medium mt-3">
            Color Psychology in UI: How to Choose the Right Palette
          </h3>
          <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX Design</p>
        </div>

        {/* Blog Card 2 */}
        <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1714974528646-ea024a3db7a7?w=1200&h=800&auto=format&fit=crop&q=60"
            alt="Frontend Tips"
          />
          <h3 className="text-base text-slate-900 font-medium mt-3">
            5 Frontend Design Tips for a Modern UI
          </h3>
          <p className="text-xs text-indigo-600 font-medium mt-1">Frontend</p>
        </div>

        {/* Blog Card 3 */}
        <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1713947501966-34897f21162e?w=1200&h=800&auto=format&fit=crop&q=60"
            alt="Startup Design"
          />
          <h3 className="text-base text-slate-900 font-medium mt-3">
            Design Thinking for Startups: From Idea to Launch
          </h3>
          <p className="text-xs text-indigo-600 font-medium mt-1">Startup Design</p>
        </div>
      </div>
    
    </>
  )
}

export default About
