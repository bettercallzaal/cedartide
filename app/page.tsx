import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 leading-tight">
            Inspired by Nature. Built to Last.
          </h1>
          <h2 className="text-2xl md:text-3xl text-stone-700 mb-8 font-light">
            Expert Construction & Renovation Solutions
          </h2>
          <div className="hero-text text-lg md:text-xl max-w-3xl mx-auto mb-12">
            <p className="mb-6">
              At Cedartide Stone, nature is our greatest inspiration. Each design is shaped by the unique 
              character of the stones we carefully select. We see every finished project as both an art form 
              and a functional creation.
            </p>
            <p className="mb-6">
              With more than 40 years of expertise in stone construction, we aim to be the trusted choice 
              for clients who value outstanding craftsmanship. By blending our clients' visions with the 
              beauty of the natural world, we remain dedicated to creating exceptional works from finely 
              crafted natural stone.
            </p>
            <p className="mb-8">
              At Cedartide, craftsmanship meets dedication. Every project is built with precision, skill, 
              and a passion for creating lasting results. We take inspiration from the beauty and strength 
              of nature, creating projects that not only look timeless but are built to stand the test of time.
            </p>
            <a 
              href="/portfolio" 
              className="inline-block bg-stone-800 text-white px-8 py-3 rounded-sm hover:bg-stone-900 transition-colors duration-200 font-medium"
            >
              View Our Works
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-12">What Our Clients Say</h2>
          
          <div className="space-y-12">
            <blockquote className="testimonial">
              <p className="text-lg mb-4">
                "Our craftsman designed and constructed a monumental stone fireplace my family and I so 
                enjoy in our home. He is a master craftsman, and an artist, whose medium is natural stone. 
                One would be hard put to find a more talented one."
              </p>
              <footer className="text-stone-600 font-medium">
                — David Rockefeller, Jr., New York
              </footer>
            </blockquote>

            <blockquote className="testimonial">
              <p className="text-lg mb-4">
                "Our craftsman is a dedicated craftsman, stonemason, and brilliant artist – and at the 
                same time a person organized and efficient concerning scheduling and budgetary details 
                in his work; his creativity is superlative in all of these dimensions."
              </p>
              <footer className="text-stone-600 font-medium">
                — Robert Venturi, Venturi, Scott Brown and Associates, Inc., Philadelphia, PA
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-8">Ready to Create Something Beautiful?</h2>
          <p className="text-lg text-stone-700 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and bring it to life with exceptional stonework craftsmanship.
          </p>
          <div className="space-x-4">
            <a 
              href="/contact" 
              className="inline-block bg-stone-800 text-white px-8 py-3 rounded-sm hover:bg-stone-900 transition-colors duration-200 font-medium"
            >
              Contact Us
            </a>
            <a 
              href="/portfolio" 
              className="inline-block border-2 border-stone-800 text-stone-800 px-8 py-3 rounded-sm hover:bg-stone-800 hover:text-white transition-colors duration-200 font-medium"
            >
              View Portfolio
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
