import Navigation from '@/components/Navigation'
import { Metadata } from 'next'
import GalleryClient from '@/components/GalleryClient'

export const metadata: Metadata = {
  title: 'Stone Details Gallery - Carving, Engraving, & Features',
  description: 'View our gallery of intricate stone details, including hand-carved features, engraving, and custom masonry elements.',
  keywords: ['stone details gallery', 'stone carving', 'stone engraving', 'custom masonry details', 'architectural stone features'],
}

export default function StoneDetailsGallery() {
  const projects = [
    {
      id: 1,
      title: "Hand-Carved Keystone",
      description: "Custom limestone keystone for archway",
      category: "Carving",
      image: "/images/placeholder.svg"
    },
    {
      id: 2,
      title: "Stone Pillars",
      description: "Entrance pillars with intricate detailing",
      category: "Entrances",
      image: "/images/placeholder.svg"
    },
    {
      id: 3,
      title: "Window Surrounds",
      description: "Limestone window surrounds and sills",
      category: "Architectural",
      image: "/images/placeholder.svg"
    },
    {
      id: 4,
      title: "Garden Ornament",
      description: "Custom stone garden feature",
      category: "Garden",
      image: "/images/placeholder.svg"
    },
    {
      id: 5,
      title: "Stone Mailbox",
      description: "Custom masonry mailbox column",
      category: "Functional",
      image: "/images/placeholder.svg"
    },
    {
      id: 6,
      title: "Engraved Plaque",
      description: "Custom engraved stone address plaque",
      category: "Engraving",
      image: "/images/placeholder.svg"
    }
  ]

  return (
    <GalleryClient
      title="Stone Details"
      description="It's the small details that make a project truly exceptional. Our gallery of stone details showcases the intricate craftsmanship, hand-carving, and precise finishing touches that define Cedartide Stone's commitment to excellence."
      breadcrumb="Stone Details"
      projects={projects}
      refPrefix="SD"
      galleryType="detail"
    />
  )
}
