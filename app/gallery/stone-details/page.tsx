import Navigation from '@/components/Navigation'

export default function StoneDetailsGallery() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-stone-600 mb-4">
            <a href="/portfolio" className="hover:text-stone-800">Our Work</a>
            <span className="mx-2">›</span>
            <span>Stone Details</span>
          </nav>
          <h1 className="text-3xl font-serif text-stone-900 mb-6">Stone Details</h1>
          <p className="text-lg text-stone-700 mb-8">
            Intricate details and artistic elements that showcase the beauty and versatility of stone.
          </p>
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-stone-600 mb-4">Gallery coming soon with detailed stonework examples.</p>
            <a href="/contact" className="inline-block bg-stone-800 text-white px-6 py-2 rounded-sm hover:bg-stone-900">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
