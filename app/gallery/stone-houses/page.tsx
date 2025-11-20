import Navigation from '@/components/Navigation'

export default function StoneHousesGallery() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-stone-600 mb-4">
            <a href="/portfolio" className="hover:text-stone-800">Our Work</a>
            <span className="mx-2">›</span>
            <span>Stone on Houses</span>
          </nav>
          <h1 className="text-3xl font-serif text-stone-900 mb-6">Stone on Houses</h1>
          <p className="text-lg text-stone-700 mb-8">
            Exterior stonework that enhances architectural beauty and adds lasting value to homes.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <p className="text-amber-800 text-center font-medium mb-4">
              🚧 Gallery images coming soon! We're preparing examples of our house stonework projects.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Transform Your Home</h2>
            <p className="text-stone-600 mb-6">Contact us to see examples of our exterior stonework and discuss your home project.</p>
            <a href="/contact" className="inline-block bg-stone-800 text-white px-8 py-3 rounded-sm hover:bg-stone-900 transition-colors font-medium">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
