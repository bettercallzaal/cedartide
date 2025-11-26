import Navigation from '@/components/Navigation'
import { Metadata } from 'next'
import GalleryClient from '@/components/GalleryClient'

export const metadata: Metadata = {
  title: 'Stone Houses Gallery - Custom Homes & Restorations',
  description: 'View our gallery of stone houses, including new construction, historic restorations, and additions.',
  keywords: ['stone houses gallery', 'stone home construction', 'historic stone restoration', 'stone veneers', 'stone estate'],
}

export default function StoneHousesGallery() {

  // Project examples - actual project photos coming soon
  const projects = [
    {
      id: 1,
      title: "Complete Stone Facade",
      description: "Full natural stone veneer for luxury home",
      category: "New Construction",
      image: "/images/placeholder.svg"
    },
    {
      id: 2,
      title: "Historic Farmhouse Restoration",
      description: "Restoration of 18th-century stone farmhouse",
      category: "Restoration",
      image: "/images/placeholder.svg"
    },
    {
      id: 3,
      title: "Stone Cottage Addition",
      description: "Matching stone addition to existing cottage",
      category: "Additions",
      image: "/images/placeholder.svg"
    },
    {
      id: 4,
      title: "Modern Stone Residence",
      description: "Contemporary home with stone architectural features",
      category: "Modern",
      image: "/images/placeholder.svg"
    },
    {
      id: 5,
      title: "Stone Foundation Repair",
      description: "Structural repair and repointing of stone foundation",
      category: "Structural",
      image: "/images/placeholder.svg"
    },
    {
      id: 6,
      title: "Estate Entrance",
      description: "Grand stone entrance for private estate",
      category: "Entrances",
      image: "/images/placeholder.svg"
    }
  ]

  return (
    <GalleryClient
      title="Stone Houses"
      description="There is a permanence and dignity to a stone house that no other material can match. Whether restoring a historic structure or building a new legacy home, we have the expertise to execute large-scale structural stonework with precision and beauty."
      breadcrumb="Stone Houses"
      projects={projects}
      refPrefix="SH"
      galleryType="stone house"
    />
  )
}
