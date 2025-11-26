import React from 'react'

const Footer = () => {
  return (
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
          <p>&copy; {new Date().getFullYear()} Cedartide | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
