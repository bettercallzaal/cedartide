import Navigation from '@/components/Navigation'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Fireplaces and Chimneys Gallery - Custom Stone Fireplaces',
  description: 'View our gallery of custom stone fireplaces and chimneys. Each piece serves as a stunning focal point crafted with precision and artistry.',
  keywords: ['stone fireplace gallery', 'custom fireplace construction', 'stone chimney work', 'fireplace stonework examples'],
}

export default function FireplacesGallery() {
  // Project examples - actual project photos coming soon
  const projects = [
    {
      id: 1,
      title: "Custom Stone Fireplace",
      description: "Example of our custom fireplace construction",
      category: "Residential",
      image: "/images/placeholder.svg"
    },
    {
      id: 2,
      title: "Stone Chimney Work",
      description: "Professional chimney construction and repair",
      category: "Residential",
      image: "/images/placeholder.svg"
    },
    {
      id: 3,
      title: "Natural Stone Fireplace",
      description: "Handcrafted natural stone fireplace installation",
      category: "Residential",
      image: "/images/placeholder.svg"
    },
    {
      id: 4,
      title: "Outdoor Fire Feature",
      description: "Outdoor stone fireplace for entertaining",
      category: "Landscape",
      image: "/images/placeholder.svg"
    },
    {
      id: 5,
      title: "Stone Restoration Project",
      description: "Professional restoration of existing stonework",
      category: "Restoration",
      image: "/images/placeholder.svg"
    },
    {
      id: 6,
      title: "Commercial Stone Feature",
      description: "Commercial fireplace installation",
      category: "Commercial",
      image: "/images/placeholder.svg"
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <nav className="text-sm text-stone-600 mb-4">
              <a href="/portfolio" className="hover:text-stone-800">Our Work</a>
              <span className="mx-2">›</span>
              <span>Fireplaces and Chimneys</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-6 font-normal">
              Fireplaces and Chimneys
            </h1>
            <p className="text-lg text-stone-700 max-w-3xl leading-relaxed">
              Each fireplace we create serves as more than just a source of warmth—it becomes the heart of the home. 
              Our custom stone fireplaces and chimneys are crafted with precision and artistry, creating stunning focal 
              points that blend seamlessly with your home's architecture.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
              <p className="text-amber-800 text-center font-medium">
                🚧 Gallery images coming soon! Contact us to see examples of our recent fireplace projects.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Project Image */}
                <div className="h-64 relative bg-stone-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-xs text-stone-400">
                      Ref: FP-{project.id.toString().padStart(3, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-stone-900 mb-2">{project.title}</h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Inspired by What You See?</h2>
            <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
              Reference any project numbers that interest you when you contact us. We'll discuss how we can 
              incorporate similar design elements, materials, or techniques into your custom project.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-stone-800 text-white px-8 py-3 rounded-sm hover:bg-stone-900 transition-colors duration-200 font-medium"
            >
              Start Your Project
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
