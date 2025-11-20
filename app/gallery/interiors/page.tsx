import Navigation from '@/components/Navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Stonework Gallery - Stone in Kitchens & Bathrooms',
  description: 'Explore our interior stonework gallery featuring stone applications in kitchens, bathrooms, and living spaces.',
  keywords: ['interior stonework', 'stone kitchen counters', 'bathroom stone work', 'interior stone features'],
}

export default function InteriorsGallery() {
  const projects = [
    { id: 1, title: "Kitchen Stone Backsplash", description: "Natural stone backsplash with custom patterns" },
    { id: 2, title: "Bathroom Stone Vanity", description: "Elegant stone vanity top with integrated sink" },
    { id: 3, title: "Living Room Accent Wall", description: "Dramatic stone accent wall feature" },
    { id: 4, title: "Stone Countertops", description: "Custom granite countertops with edge details" },
    { id: 5, title: "Entryway Stone Floor", description: "Durable stone flooring for high-traffic areas" },
    { id: 6, title: "Wine Cellar Stonework", description: "Climate-appropriate stone for wine storage" }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <nav className="text-sm text-stone-600 mb-4">
              <a href="/portfolio" className="hover:text-stone-800">Our Work</a>
              <span className="mx-2">›</span>
              <span>Interior Stonework</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-6 font-normal">
              Interior Stonework
            </h1>
            <p className="text-lg text-stone-700 max-w-3xl leading-relaxed">
              Bringing the beauty of natural stone indoors creates spaces that are both functional and inspiring. 
              Our interior stonework transforms kitchens, bathrooms, and living areas into sophisticated environments 
              that celebrate the natural world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                  <div className="text-center text-stone-600">
                    <div className="text-4xl mb-2">🏛️</div>
                    <div className="text-sm">Project #{project.id}</div>
                    <div className="text-xs text-stone-500 mt-1">Image Coming Soon</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Interior</span>
                    <span className="text-xs text-stone-400">Ref: IN-{project.id.toString().padStart(3, '0')}</span>
                  </div>
                  <h3 className="text-xl font-serif text-stone-900 mb-2">{project.title}</h3>
                  <p className="text-stone-700 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Ready to Transform Your Interior?</h2>
            <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
              Contact us to discuss how we can bring natural stone beauty into your home's interior spaces.
            </p>
            <a href="/contact" className="inline-block bg-stone-800 text-white px-8 py-3 rounded-sm hover:bg-stone-900 transition-colors duration-200 font-medium">
              Get Started
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-stone-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-4">Cedartide Stone</h3>
          <p className="text-stone-300 mb-6">Expert Construction & Renovation Solutions</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-stone-300">
            <a href="mailto:k.jepeal@gmail.com" className="hover:text-white transition-colors">k.jepeal@gmail.com</a>
            <a href="tel:860-670-7250" className="hover:text-white transition-colors">(860) 670-7250</a>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-700 text-stone-400 text-sm">
            <p>&copy; 2025 Cedartide | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
