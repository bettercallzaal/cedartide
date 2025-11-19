import Navigation from '@/components/Navigation'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
              Custom Remodels and Renovations
            </h1>
            <div className="hero-text text-lg md:text-xl max-w-4xl mx-auto">
              <p className="mb-8">
                If you're seeking inspiration for adding stonework to your home, camp, retreat, 
                community space, or commercial property, explore the galleries below. If a particular 
                feature catches your eye—whether it's the design, color, style, or fine details—make 
                note of the photo's reference number. This will help us easily reference your preferences 
                when planning your custom project. Enjoy browsing!
              </p>
            </div>
          </div>

          {/* Portfolio Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Residential Projects */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-200 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Residential Projects</h3>
                  <p className="text-sm">Custom home stonework</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Residential Stonework</h3>
                <p className="text-stone-700 mb-4">
                  Beautiful stone features for homes including fireplaces, patios, walkways, and accent walls.
                </p>
                <a href="#" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
            </div>

            {/* Commercial Projects */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-200 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Commercial Projects</h3>
                  <p className="text-sm">Professional stonework</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Commercial Stonework</h3>
                <p className="text-stone-700 mb-4">
                  Professional stone installations for businesses, restaurants, and public spaces.
                </p>
                <a href="#" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
            </div>

            {/* Landscape Projects */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-200 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Landscape Projects</h3>
                  <p className="text-sm">Outdoor stone features</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Landscape Stonework</h3>
                <p className="text-stone-700 mb-4">
                  Retaining walls, garden features, outdoor kitchens, and natural stone landscaping.
                </p>
                <a href="#" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
            </div>

            {/* Restoration Projects */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-200 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Restoration Projects</h3>
                  <p className="text-sm">Historic stone restoration</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Historic Restoration</h3>
                <p className="text-stone-700 mb-4">
                  Careful restoration and preservation of historic stone structures and buildings.
                </p>
                <a href="#" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
            </div>

            {/* Custom Features */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-200 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Custom Features</h3>
                  <p className="text-sm">Unique stone elements</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Custom Stone Features</h3>
                <p className="text-stone-700 mb-4">
                  Unique stone sculptures, water features, and architectural elements designed to your vision.
                </p>
                <a href="#" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
            </div>

            {/* Interior Projects */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-200 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Interior Projects</h3>
                  <p className="text-sm">Indoor stone applications</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Interior Stonework</h3>
                <p className="text-stone-700 mb-4">
                  Kitchen countertops, bathroom vanities, flooring, and interior accent walls.
                </p>
                <a href="#" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-serif text-stone-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-stone-700 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your vision and receive a detailed estimate within 48 hours.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-stone-800 text-white px-8 py-3 rounded-sm hover:bg-stone-900 transition-colors duration-200 font-medium"
            >
              Get Your Estimate
            </a>
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
            <a href="mailto:Example@gmail.com" className="hover:text-white transition-colors">
              Example@gmail.com
            </a>
            <a href="tel:0123456789" className="hover:text-white transition-colors">
              0123456789
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
