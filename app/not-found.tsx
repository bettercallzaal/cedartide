import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
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

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
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
