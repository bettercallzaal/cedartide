import Navigation from '@/components/Navigation'
import { Metadata } from 'next'
import GalleryClient from '@/components/GalleryClient'

export const metadata: Metadata = {
  title: 'Interior Stonework Gallery - Kitchens, Baths, & More',
  description: 'Explore our interior stonework projects including stone kitchens, bathrooms, wine cellars, and custom architectural details.',
  keywords: ['interior stone gallery', 'stone kitchen island', 'stone bathroom walls', 'wine cellar construction', 'interior masonry'],
}

export default function InteriorsGallery() {
  const projects = [
    {
      id: 1,
      title: "Stone Kitchen Island",
      description: "Custom stone facing for kitchen island",
      category: "Kitchen",
      image: "/images/placeholder.svg"
    },
    {
      id: 2,
      title: "Bathroom Stone Wall",
      description: "Natural stone accent wall in master bath",
      category: "Bathroom",
      image: "/images/placeholder.svg"
    },
    {
      id: 3,
      title: "Wine Cellar",
      description: "Traditional stone wine cellar construction",
      category: "Specialty",
      image: "/images/placeholder.svg"
    },
    {
      id: 4,
      title: "Entryway Stone Floor",
      description: "Durable natural stone flooring for entryway",
      category: "Flooring",
      image: "/images/placeholder.svg"
    },
    {
      id: 5,
      title: "Stone Archway",
      description: "Interior stone archway between rooms",
      category: "Architectural",
      image: "/images/placeholder.svg"
    },
    {
      id: 6,
      title: "Basement Bar",
      description: "Stone bar construction for entertainment area",
      category: "Entertainment",
      image: "/images/placeholder.svg"
    }
  ]

  return (
    <GalleryClient
      title="Interior Stonework"
      description="Bring the timeless beauty of nature indoors. Our interior stonework adds texture, warmth, and character to kitchens, bathrooms, wine cellars, and living spaces, creating unique environments that feel both grounded and refined."
      breadcrumb="Interiors"
      projects={projects}
      refPrefix="INT"
      galleryType="interior"
    />
  )
}
