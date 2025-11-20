import Navigation from '@/components/Navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story - The Cedartide Stone Journey',
  description: 'Learn about the story behind Cedartide Stone, our passion for natural stone craftsmanship, and our commitment to creating beautiful, lasting stonework.',
  keywords: ['Cedartide Stone story', 'stone craftsmanship history', 'Kevin Jepeal', 'Connecticut stonework', 'stone construction company'],
}

export default function Story() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h1 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-8 font-normal">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl text-stone-700 max-w-4xl leading-relaxed mb-8">
              The story of Cedartide Stone is one of passion, craftsmanship, and an unwavering commitment to the timeless art of working with natural stone. For over four decades, we have been inspired by nature's most enduring materials.
            </p>
          </div>

          {/* Story Content */}
          <div className="prose prose-lg prose-stone max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-serif text-stone-900 mb-6">A Passion Born from Nature</h2>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                  <p>
                    Our journey began with a simple fascination: the incredible beauty and strength found in natural stone. Each piece tells a story millions of years in the making, shaped by geological forces and time itself. This reverence for stone's natural history drives everything we do.
                  </p>
                  <p>
                    What started as an appreciation for stone's inherent beauty evolved into a deep understanding of its structural properties, its behavior in different climates, and the traditional techniques required to work with it respectfully and skillfully.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-stone-900 mb-6">Craftsmanship Through Generations</h2>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                  <p>
                    The techniques we employ have been refined over generations of stonemasons. We believe in honoring these traditional methods while embracing modern tools and materials that enhance durability and precision without compromising the integrity of the craft.
                  </p>
                  <p>
                    Every project is an opportunity to create something that will endure for generations, becoming part of the landscape and the lives of those who experience it daily.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm mb-16">
              <h2 className="text-2xl font-serif text-stone-900 mb-6 text-center">Our Philosophy</h2>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-stone-700 leading-relaxed italic mb-6">
                  "We believe that a completed piece is both artistic and practical. Through our commitment to fusing our clients' ideas with the organic world that surrounds us, we continue to maintain our vision of creating the finest work using beautifully shaped natural stone."
                </p>
                <div className="text-stone-600">
                  — Kevin Jepeal, Founder
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-serif text-stone-900 mb-6">Our Commitment to Excellence</h2>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                  <p>
                    Excellence in stonework requires more than technical skill—it demands an understanding of how stone interacts with its environment, how it ages, and how it can be shaped to complement both natural and built landscapes.
                  </p>
                  <p>
                    We take pride in being the first choice for those who recognize the value of exceptional craftsmanship. Our reputation has been built project by project, stone by stone, through consistent delivery of work that exceeds expectations.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-stone-900 mb-6">Looking Forward</h2>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                  <p>
                    As we continue our journey, we remain committed to the principles that have guided us from the beginning: respect for natural materials, dedication to traditional craftsmanship, and an unwavering focus on creating work that will stand the test of time.
                  </p>
                  <p>
                    Each new project is an opportunity to tell another story in stone, creating lasting beauty that connects people with the natural world around them.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-serif text-stone-900 mb-6">Ready to Begin Your Story?</h2>
              <p className="text-lg text-stone-700 mb-8 max-w-2xl mx-auto">
                Let us help you create something beautiful and enduring. Contact us to discuss your vision and discover how we can bring it to life in stone.
              </p>
              <a 
                href="/contact"
                className="inline-block text-stone-800 border-b-2 border-stone-800 pb-1 text-lg font-medium hover:text-stone-600 hover:border-stone-600 transition-colors duration-200"
              >
                Contact us today
              </a>
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
