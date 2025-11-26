'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
    id: number
    title: string
    description: string
    category: string
    image: string
}

interface GalleryClientProps {
    title: string
    description: string
    breadcrumb: string
    projects: Project[]
    refPrefix: string
    galleryType: string // e.g. "fireplaces" for the empty state message
}

export default function GalleryClient({
    title,
    description,
    breadcrumb,
    projects,
    refPrefix,
    galleryType
}: GalleryClientProps) {
    return (
        <div className="min-h-screen bg-stone-50">

            {/* Header */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <nav className="text-sm text-stone-600 mb-4">
                            <a href="/portfolio" className="hover:text-stone-800">Our Work</a>
                            <span className="mx-2">›</span>
                            <span>{breadcrumb}</span>
                        </nav>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl sm:text-4xl font-serif text-stone-900 mb-6 font-normal"
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-stone-700 max-w-3xl leading-relaxed"
                        >
                            {description}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6"
                        >
                            <p className="text-amber-800 text-center font-medium">
                                🚧 Gallery images coming soon! Contact us to see examples of our recent {galleryType} projects.
                            </p>
                        </motion.div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Project Image */}
                                <div className="h-64 relative bg-stone-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">
                                            {project.category}
                                        </span>
                                        <span className="text-xs text-stone-400">
                                            Ref: {refPrefix}-{project.id.toString().padStart(3, '0')}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-serif text-stone-900 mb-2">{project.title}</h3>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm"
                    >
                        <h2 className="text-2xl font-serif text-stone-900 mb-4">Inspired by What You See?</h2>
                        <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
                            Reference any project numbers that interest you when you contact us. We'll discuss how we can
                            incorporate similar design elements, materials, or techniques into your custom project.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-stone-800 text-white px-8 py-3 rounded-sm hover:bg-stone-900 transition-colors duration-200 font-medium"
                        >
                            Start Your Project
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
