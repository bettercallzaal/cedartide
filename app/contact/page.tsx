import Navigation from '@/components/Navigation'

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
              Contact CEDARTIDE
            </h1>
            <p className="hero-text text-lg md:text-xl max-w-2xl mx-auto">
              Tell us about your construction project and we'll provide a detailed estimate within 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif text-stone-900 mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">Email</h3>
                    <a 
                      href="mailto:k.jepeal@gmail.com" 
                      className="text-stone-700 hover:text-stone-900 transition-colors"
                    >
                      k.jepeal@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">Phone</h3>
                    <a 
                      href="tel:860-670-7250" 
                      className="text-stone-700 hover:text-stone-900 transition-colors"
                    >
                      (860) 670-7250
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-2">Business Hours</h3>
                    <div className="text-stone-700">
                      <p>Mon - Sat: 8AM - 6PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-stone-900 mb-4">Why Choose Cedartide?</h3>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start">
                    <span className="text-stone-500 mr-2">•</span>
                    Over 40 years of stone construction expertise
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-500 mr-2">•</span>
                    Detailed estimates provided within 48 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-500 mr-2">•</span>
                    Custom designs tailored to your vision
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-500 mr-2">•</span>
                    Premium craftsmanship built to last
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-500 mr-2">•</span>
                    Residential and commercial projects
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif text-stone-900 mb-6">Request Your Estimate</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium text-stone-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential Stonework</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="landscape">Landscape Stonework</option>
                    <option value="restoration">Historic Restoration</option>
                    <option value="custom">Custom Features</option>
                    <option value="interior">Interior Stonework</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors resize-vertical"
                    placeholder="Please describe your project, including location, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-800 text-white py-3 px-6 rounded-sm hover:bg-stone-900 transition-colors duration-200 font-medium"
                >
                  Send Request
                </button>

                <p className="text-sm text-stone-600 text-center">
                  We'll respond with a detailed estimate within 48 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-4">Cedartide Stone</h3>
          <p className="text-stone-300 mb-6">
            Expert Construction & Renovation Solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-stone-300">
            <a href="mailto:k.jepeal@gmail.com" className="hover:text-white transition-colors">
              k.jepeal@gmail.com
            </a>
            <a href="tel:860-670-7250" className="hover:text-white transition-colors">
              (860) 670-7250
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-700 text-stone-400 text-sm">
            <p>&copy; 2025 Cedartide | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
