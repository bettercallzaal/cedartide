import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-serif text-stone-900 mb-4">404</h1>
          <h2 className="text-3xl font-serif text-stone-700 mb-6">Page Not Found</h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist. It may have been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="space-x-4">
            <Link
              href="/"
              className="inline-block bg-stone-800 text-white px-8 py-3 rounded-sm hover:bg-stone-900 transition-colors duration-200 font-medium"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-stone-800 text-stone-800 px-8 py-3 rounded-sm hover:bg-stone-800 hover:text-white transition-colors duration-200 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
