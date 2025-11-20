import Navigation from '@/components/Navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Expertise - 40+ Years of Stone Construction Experience',
  description: 'Learn about Cedartide Stone\'s expertise and experience in stone construction, masonry, and custom stonework. Over 40 years of craftsmanship and dedication to quality.',
  keywords: ['stone construction expertise', 'masonry experience', 'stonework craftsmanship', 'Connecticut stone contractor', 'stone construction techniques'],
}

export default function Expertise() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h1 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-8 font-normal">
              Our Expertise and Experience
            </h1>
            <p className="text-lg sm:text-xl text-stone-700 max-w-4xl leading-relaxed mb-8">
              With over 40 years of experience in stone construction and masonry, Cedartide Stone brings unparalleled expertise to every project. Our deep understanding of natural stone materials, traditional techniques, and modern construction methods ensures exceptional results that stand the test of time.
            </p>
          </div>

          {/* Expertise Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-serif text-stone-900 mb-6">Stone Construction Mastery</h2>
              <div className="space-y-4 text-stone-700">
                <p>
                  Our expertise spans the full spectrum of stone construction, from selecting the perfect materials to executing complex architectural designs. We understand how different stones behave, their structural properties, and how to work with their natural characteristics.
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Custom fireplace and chimney construction</li>
                  <li>• Structural stone walls and foundations</li>
                  <li>• Architectural stone features and details</li>
                  <li>• Stone restoration and preservation</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-stone-900 mb-6">Landscape Integration</h2>
              <div className="space-y-4 text-stone-700">
                <p>
                  We specialize in creating stonework that harmonizes with natural landscapes, understanding how to blend constructed elements seamlessly with existing terrain and vegetation.
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Retaining walls and terracing</li>
                  <li>• Natural stone pathways and patios</li>
                  <li>• Garden walls and outdoor features</li>
                  <li>• Drainage and erosion control solutions</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-stone-900 mb-6">Traditional Techniques</h2>
              <div className="space-y-4 text-stone-700">
                <p>
                  Our craftsmen are trained in time-honored masonry techniques passed down through generations, ensuring authentic construction methods that have proven their durability over centuries.
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Dry stone wall construction</li>
                  <li>• Traditional mortar and pointing techniques</li>
                  <li>• Hand-carved stone details</li>
                  <li>• Historic restoration methods</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-stone-900 mb-6">Modern Applications</h2>
              <div className="space-y-4 text-stone-700">
                <p>
                  While respecting traditional methods, we also embrace modern techniques and materials when they enhance durability, efficiency, or design possibilities.
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Advanced anchoring and reinforcement systems</li>
                  <li>• Modern sealants and protective treatments</li>
                  <li>• Precision cutting and shaping tools</li>
                  <li>• Contemporary design integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-serif text-stone-900 mb-6 text-center">Four Decades of Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-serif text-stone-800 mb-2">40+</div>
                <div className="text-stone-700">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-stone-800 mb-2">500+</div>
                <div className="text-stone-700">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-stone-800 mb-2">100%</div>
                <div className="text-stone-700">Client Satisfaction</div>
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
