import Navigation from '@/components/Navigation'
import { Metadata } from 'next'
import GalleryClient from '@/components/GalleryClient'

export const metadata: Metadata = {
  title: 'Fireplaces and Chimneys Gallery - Custom Stone Fireplaces',
  description: 'View our gallery of custom stone fireplaces and chimneys. Each piece serves as a stunning focal point crafted with precision and artistry.',
  keywords: ['stone fireplace gallery', 'custom fireplace construction', 'stone chimney work', 'fireplace stonework examples'],
}

export default function FireplacesGallery() {
  // Project examples - actual project photos coming soon
  const projects = [
    {
      id: 1,
      title: "Custom Stone Fireplace",
      description: "Example of our custom fireplace construction",
      category: "Residential",
      image: "/images/placeholder.svg"
    },
    {
      id: 2,
      title: "Stone Chimney Work",
      description: "Professional chimney construction and repair",
      category: "Residential",
      image: "/images/placeholder.svg"
    },
    {
      id: 3,
      title: "Natural Stone Fireplace",
      description: "Handcrafted natural stone fireplace installation",
      category: "Residential",
      image: "/images/placeholder.svg"
    },
    {
      id: 4,
      title: "Outdoor Fire Feature",
      description: "Outdoor stone fireplace for entertaining",
      category: "Landscape",
      image: "/images/placeholder.svg"
    },
    {
      id: 5,
      title: "Stone Restoration Project",
      description: "Professional restoration of existing stonework",
      category: "Restoration",
      image: "/images/placeholder.svg"
    },
    {
      id: 6,
      title: "Commercial Stone Feature",
      description: "Commercial fireplace installation",
      category: "Commercial",
      image: "/images/placeholder.svg"
    }
  ]

  return (
    <GalleryClient
      title="Fireplaces and Chimneys"
      description="Each fireplace we create serves as more than just a source of warmth—it becomes the heart of the home. Our custom stone fireplaces and chimneys are crafted with precision and artistry, creating stunning focal points that blend seamlessly with your home's architecture."
      breadcrumb="Fireplaces and Chimneys"
      projects={projects}
      refPrefix="FP"
      galleryType="fireplace"
    />
  )
}
