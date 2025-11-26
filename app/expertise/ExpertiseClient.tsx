'use client'

import { motion } from 'framer-motion'

export default function ExpertiseClient() {
    return (
        <div className="min-h-screen bg-stone-50">
            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl sm:text-4xl font-serif text-stone-900 mb-8 font-normal"
                        >
                            Our Expertise and Experience
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-stone-700 leading-relaxed mb-6"
                        >
                            With over 35 years of experience in stone masonry, Cedartide Stone brings a depth of knowledge and skill to every project that is rare in today's market. Our expertise spans a wide range of traditional and modern techniques, allowing us to execute even the most complex designs with precision.
                        </motion.p>
                    </div>

                    {/* Core Competencies */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-serif text-stone-900 mb-4">Traditional Stonemasonry</h2>
                            <p className="text-stone-700 mb-4">
                                We are masters of traditional stonemasonry techniques, including dry stone walling, hand-carving, and restoration. We understand how stone behaves, how it weathers, and how to work with it to create structures that will last for generations.
                            </p>
                            <ul className="list-disc list-inside text-stone-700 space-y-2 ml-2">
                                <li>Dry stone wall construction</li>
                                <li>Historic restoration and preservation</li>
                                <li>Hand-cut stone facing</li>
                                <li>Traditional lime mortar work</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-serif text-stone-900 mb-4">Modern Applications</h2>
                            <p className="text-stone-700 mb-4">
                                While we honor tradition, we also embrace modern construction methods and materials. We are experienced in working with thin stone veneers, modern bonding agents, and contemporary design styles to meet the needs of today's homeowners and architects.
                            </p>
                            <ul className="list-disc list-inside text-stone-700 space-y-2 ml-2">
                                <li>Thin stone veneer installation</li>
                                <li>Modern architectural stone features</li>
                                <li>Outdoor living spaces and kitchens</li>
                                <li>Precision stone cutting and fitting</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Process Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 rounded-lg shadow-sm border border-stone-100"
                    >
                        <h2 className="text-2xl font-serif text-stone-900 mb-6">Our Process</h2>
                        <div className="space-y-6">
                            <div className="flex">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-800 font-bold mr-4">1</div>
                                <div>
                                    <h3 className="text-lg font-medium text-stone-900 mb-2">Consultation & Design</h3>
                                    <p className="text-stone-700">We start by listening to your vision and assessing the site. We offer expert advice on material selection and design options to achieve your goals.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-800 font-bold mr-4">2</div>
                                <div>
                                    <h3 className="text-lg font-medium text-stone-900 mb-2">Material Selection</h3>
                                    <p className="text-stone-700">We source the highest quality stone from trusted quarries. Whether it's local Connecticut fieldstone or imported limestone, we ensure the material matches the project's requirements.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-800 font-bold mr-4">3</div>
                                <div>
                                    <h3 className="text-lg font-medium text-stone-900 mb-2">Craftsmanship</h3>
                                    <p className="text-stone-700">Our skilled masons work with precision and care, treating each stone as a unique piece of the puzzle. We maintain a clean and organized job site throughout the project.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-800 font-bold mr-4">4</div>
                                <div>
                                    <h3 className="text-lg font-medium text-stone-900 mb-2">Completion & Review</h3>
                                    <p className="text-stone-700">We conduct a final walkthrough to ensure every detail meets our high standards and your complete satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
