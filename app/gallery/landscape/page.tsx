import Navigation from '@/components/Navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landscape Stonework Gallery - Outdoor Stone Features',
  description: 'View our landscape stonework including retaining walls, patios, walkways, and garden features that complement nature.',
  keywords: ['landscape stonework', 'stone retaining walls', 'stone patios', 'garden stonework', 'outdoor stone features'],
}

export default function LandscapeGallery() {
  const projects = [
    { id: 1, title: "Stone Retaining Wall", description: "Terraced retaining walls with natural drainage" },
    { id: 2, title: "Flagstone Patio", description: "Natural flagstone patio with irregular joints" },
    { id: 3, title: "Garden Stone Pathway", description: "Meandering pathway through landscaped gardens" },
    { id: 4, title: "Stone Steps & Landing", description: "Natural stone steps with integrated planters" },
    { id: 5, title: "Outdoor Kitchen", description: "Complete outdoor kitchen with stone counters" },
    { id: 6, title: "Water Feature", description: "Natural stone water feature with pond" }
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
              <span>Landscape Stonework</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-6 font-normal">
              Landscape Stonework
            </h1>
            <p className="text-lg text-stone-700 max-w-3xl leading-relaxed">
              Our landscape stonework creates outdoor spaces that feel like natural extensions of the earth itself. 
              From retaining walls that follow the contours of the land to patios that invite gathering, each project 
              harmonizes with its natural surroundings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-green-200 to-stone-300 flex items-center justify-center">
                  <div className="text-center text-stone-600">
                    <div className="text-4xl mb-2">🌿</div>
                    <div className="text-sm">Project #{project.id}</div>
                    <div className="text-xs text-stone-500 mt-1">Image Coming Soon</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Landscape</span>
                    <span className="text-xs text-stone-400">Ref: LS-{project.id.toString().padStart(3, '0')}</span>
                  </div>
                  <h3 className="text-xl font-serif text-stone-900 mb-2">{project.title}</h3>
                  <p className="text-stone-700 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Transform Your Outdoor Space</h2>
            <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
              Let us help you create outdoor living spaces that connect you with nature through beautiful stonework.
            </p>
            <a href="/contact" className="inline-block bg-stone-800 text-white px-8 py-3 rounded-sm hover:bg-stone-900 transition-colors duration-200 font-medium">
              Plan Your Project
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
