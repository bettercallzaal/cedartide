import Navigation from '@/components/Navigation'
import { Metadata } from 'next'
import GalleryClient from '@/components/GalleryClient'

export const metadata: Metadata = {
  title: 'Landscape Stonework Gallery - Walls, Patios, & Walkways',
  description: 'View our landscape stonework projects including retaining walls, patios, walkways, and outdoor living spaces.',
  keywords: ['landscape stone gallery', 'retaining walls', 'stone patios', 'stone walkways', 'outdoor living'],
}

export default function LandscapeGallery() {

  // Project examples - actual project photos coming soon
  const projects = [
    {
      id: 1,
      title: "Dry Stone Retaining Wall",
      description: "Traditional dry stone wall construction",
      category: "Walls",
      image: "/images/placeholder.svg"
    },
    {
      id: 2,
      title: "Bluestone Patio",
      description: "Patterned bluestone patio installation",
      category: "Patios",
      image: "/images/placeholder.svg"
    },
    {
      id: 3,
      title: "Garden Steps",
      description: "Natural stone steps integrated into landscape",
      category: "Steps",
      image: "/images/placeholder.svg"
    },
    {
      id: 4,
      title: "Stone Walkway",
      description: "Curved stone walkway through garden",
      category: "Walkways",
      image: "/images/placeholder.svg"
    },
    {
      id: 5,
      title: "Pool Deck",
      description: "Stone pool surround and coping",
      category: "Pools",
      image: "/images/placeholder.svg"
    },
    {
      id: 6,
      title: "Outdoor Kitchen",
      description: "Stone veneer outdoor kitchen base",
      category: "Outdoor Living",
      image: "/images/placeholder.svg"
    }
  ]

  return (
    <GalleryClient
      title="Landscape Stonework"
      description="We specialize in creating stonework that harmonizes with natural landscapes. From retaining walls that shape the terrain to patios that create outdoor living spaces, our landscape projects are designed to blend seamlessly with the environment while providing lasting function."
      breadcrumb="Landscape Stonework"
      projects={projects}
      refPrefix="LS"
      galleryType="landscape"
    />
  )
}
