'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 mb-8 leading-relaxed font-normal"
            >
              At Cedartide Stone, we're inspired by nature.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-lg sm:text-xl text-stone-700 mb-8 leading-relaxed">
                Our designs are rooted in the inherent qualities of the stones we source. We believe that a completed piece is both artistic and practical. With over 40 years of stone construction experience, we strive to be the first choice for those who recognize the value of exceptional craftsmanship.
              </p>
              <p className="text-lg sm:text-xl text-stone-700 mb-12 leading-relaxed">
                Through our commitment to fusing our clients' ideas with the organic world that surrounds us, we continue to maintain our vision of creating the finest work using beautifully shaped natural stone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="inline-block bg-stone-800 text-white px-8 py-3 rounded-sm hover:bg-stone-900 transition-colors duration-200 font-medium"
                >
                  Request Free Estimate
                </a>
                <a
                  href="/portfolio"
                  className="inline-block text-stone-800 border-b-2 border-stone-800 pb-1 text-lg font-medium hover:text-stone-600 hover:border-stone-600 transition-colors duration-200"
                >
                  View Our Work
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="text-3xl font-serif text-stone-800 mb-2">40+</div>
              <div className="text-stone-700 font-medium">Years of Experience</div>
              <div className="text-sm text-stone-600 mt-2">Trusted expertise in stone construction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="text-3xl font-serif text-stone-800 mb-2">100%</div>
              <div className="text-stone-700 font-medium">Licensed & Insured</div>
              <div className="text-sm text-stone-600 mt-2">Fully certified Connecticut contractor</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="text-3xl font-serif text-stone-800 mb-2">500+</div>
              <div className="text-stone-700 font-medium">Projects Completed</div>
              <div className="text-sm text-stone-600 mt-2">Satisfied customers across Connecticut</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <p className="text-lg sm:text-xl text-stone-700 mb-6 leading-relaxed italic">
                "Kevin designed and constructed a monumental stone fireplace my family and I so
                enjoy in our home. He is a master craftsman, and an artist, whose medium is natural stone.
                One would be hard put to find a more talented one."
              </p>
              <footer className="text-stone-900 font-medium text-lg">
                David Rockefeller, Jr.<br />
                <span className="text-stone-600 font-normal">New York</span>
              </footer>
            </motion.blockquote>

            <motion.blockquote
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <p className="text-lg sm:text-xl text-stone-700 mb-6 leading-relaxed italic">
                "Kevin is a dedicated craftsman, stonemason, and brilliant artist – and at the
                same time a person organized and efficient concerning scheduling and budgetary details
                in his work; his creativity is superlative in all of these dimensions."
              </p>
              <footer className="text-stone-900 font-medium text-lg">
                Robert Venturi<br />
                <span className="text-stone-600 font-normal">Venturi, Scott Brown and Associates, Inc., Philadelphia, PA</span>
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </section>
    </div>
  )
}
