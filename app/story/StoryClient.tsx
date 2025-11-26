'use client'

import { motion } from 'framer-motion'

export default function StoryClient() {
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
                            Our Story
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="prose prose-lg prose-stone max-w-none text-stone-700"
                        >
                            <p className="mb-6">
                                Cedartide Stone was founded on a simple principle: that stone masonry is an art form that deserves patience, respect, and an unwavering commitment to quality. What started as a passion for the enduring beauty of natural stone has grown into a premier masonry company serving Connecticut's most discerning homeowners.
                            </p>
                            <p className="mb-6">
                                Our founder, Kevin, began his journey in carpentry and masonry over three decades ago. Fascinated by the historic stone structures of New England, he dedicated himself to mastering the traditional techniques that have stood the test of time.
                            </p>
                        </motion.div>
                    </div>

                    {/* Values Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-stone-800"
                        >
                            <h3 className="text-xl font-serif text-stone-900 mb-3">Integrity</h3>
                            <p className="text-stone-600">
                                We believe in honest work and transparent communication. We build trust with our clients just as we build our walls—stone by stone, with a solid foundation.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-stone-600"
                        >
                            <h3 className="text-xl font-serif text-stone-900 mb-3">Craftsmanship</h3>
                            <p className="text-stone-600">
                                We don't cut corners. Every joint, every angle, and every finish is executed with the highest level of skill and attention to detail.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-stone-400"
                        >
                            <h3 className="text-xl font-serif text-stone-900 mb-3">Legacy</h3>
                            <p className="text-stone-600">
                                We build for the future. Our work is designed to age gracefully and become a lasting part of the landscape and your home's history.
                            </p>
                        </motion.div>
                    </div>

                    {/* Team Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-stone-100 rounded-lg p-8 md:p-12"
                    >
                        <div className="md:flex items-center gap-12">
                            <div className="md:w-1/3 mb-8 md:mb-0">
                                <div className="aspect-square bg-stone-300 rounded-full overflow-hidden relative mx-auto max-w-[250px]">
                                    {/* Placeholder for Kevin's photo */}
                                    <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-medium bg-stone-200">
                                        Kevin's Photo
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-serif text-stone-900 mb-4">Meet Kevin</h2>
                                <p className="text-stone-700 mb-4">
                                    As the lead mason and owner of Cedartide Stone, Kevin oversees every project personally. His hands-on approach ensures that the company's high standards are met on every job site.
                                </p>
                                <p className="text-stone-700">
                                    "I've always believed that stone has a story to tell. My job is to listen to that story and help it unfold in a way that enhances the beauty of the home and the land it sits on. There's nothing more satisfying than standing back and looking at a finished wall or fireplace and knowing it will be there for a hundred years."
                                </p>
                                <p className="text-stone-900 font-serif mt-4 italic">— Kevin, Founder</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
