import Navigation from '@/components/Navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work - Stonework Galleries',
  description: 'View our portfolio of custom stonework projects including fireplaces, landscape stonework, interiors, and stone details. Over 40 years of expertise in stone construction.',
  keywords: ['stonework portfolio', 'stone construction examples', 'fireplace stonework', 'landscape stonework', 'interior stonework', 'masonry gallery'],
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h1 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-8 font-normal">
              Our Work
            </h1>
            <p className="text-lg sm:text-xl text-stone-700 max-w-4xl leading-relaxed mb-8">
              If you are looking for ideas or inspiration for incorporating stonework into your home, camp, getaway, community area or commercial location, browse the galleries below. If you see an aspect in the stonework that interests you, such as design, color, aesthetics or small details, note each photo's reference number. This will allow us to refer back to your selections when designing your custom project. Enjoy!
            </p>
          </div>

          {/* Portfolio Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Fireplaces and Chimneys */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-200 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Fireplaces and Chimneys</h3>
                  <p className="text-sm">Custom stone fireplaces</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Fireplaces and Chimneys</h3>
                <p className="text-stone-700 mb-4">
                  Custom stone fireplaces and chimneys that serve as stunning focal points for any home.
                </p>
                <a href="/gallery/fireplaces" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
            </div>

            {/* Interiors */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-300 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Interiors</h3>
                  <p className="text-sm">Interior stonework</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Interior Stonework</h3>
                <p className="text-stone-700 mb-4">
                  Stone in kitchens, bathrooms, and interior spaces that bring natural beauty indoors.
                </p>
                <a href="/gallery/interiors" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
            </div>

            {/* Landscape Stonework */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-400 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Landscape Stonework</h3>
                  <p className="text-sm">Outdoor stonework</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Landscape Stonework</h3>
                <p className="text-stone-700 mb-4">
                  Retaining walls, garden features, pathways, and outdoor living spaces that complement nature.
                </p>
                <a href="/gallery/landscape" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
            </div>

            {/* Stone Details */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-500 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Stone Details</h3>
                  <p className="text-sm">Intricate stonework</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Stone Details</h3>
                <p className="text-stone-700 mb-4">
                  Intricate details and artistic elements that showcase the beauty and versatility of stone.
                </p>
                <a href="/gallery/stone-details" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
            </div>

            {/* Stone on Houses */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-600 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Stone on Houses</h3>
                  <p className="text-sm">Architectural stonework</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Stone on Houses</h3>
                <p className="text-stone-700 mb-4">
                  Exterior stonework that enhances architectural beauty and adds lasting value to homes.
                </p>
                <a href="/gallery/stone-houses" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
            </div>

            {/* Commercial Spaces */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-stone-700 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <h3 className="text-xl font-serif mb-2">Commercial Spaces</h3>
                  <p className="text-sm">Professional stonework</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-900 mb-3">Commercial Spaces</h3>
                <p className="text-stone-700 mb-4">
                  Professional stone installations for businesses, restaurants, and public spaces.
                </p>
                <a href="/gallery/commercial" className="text-stone-800 hover:text-stone-900 font-medium">
                  View Gallery →
                </a>
              </div>
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
