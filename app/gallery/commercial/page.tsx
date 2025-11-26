import Navigation from '@/components/Navigation'
import { Metadata } from 'next'
import GalleryClient from '@/components/GalleryClient'

export const metadata: Metadata = {
  title: 'Commercial Stone Projects - Corporate, Institutional, & Public',
  description: 'View our commercial stonework portfolio including corporate headquarters, university campuses, restaurants, and public parks.',
  keywords: ['commercial stone projects', 'corporate stonework', 'institutional masonry', 'public park stone features', 'commercial stone facade'],
}

export default function CommercialGallery() {

  // Project examples - actual project photos coming soon
  const projects = [
    {
      id: 1,
      title: "Corporate Headquarters Entrance",
      description: "Impressive stone entrance signage and walls",
      category: "Corporate",
      image: "/images/placeholder.svg"
    },
    {
      id: 2,
      title: "University Campus Stonework",
      description: "Stone walls and features for campus grounds",
      category: "Institutional",
      image: "/images/placeholder.svg"
    },
    {
      id: 3,
      title: "Restaurant Facade",
      description: "Inviting stone facade for upscale restaurant",
      category: "Hospitality",
      image: "/images/placeholder.svg"
    },
    {
      id: 4,
      title: "Public Park Features",
      description: "Durable stone walls and seating for public park",
      category: "Public",
      image: "/images/placeholder.svg"
    },
    {
      id: 5,
      title: "Retail Center Stonework",
      description: "Decorative stone accents for retail complex",
      category: "Retail",
      image: "/images/placeholder.svg"
    },
    {
      id: 6,
      title: "Church Restoration",
      description: "Restoration of historic stone church exterior",
      category: "Restoration",
      image: "/images/placeholder.svg"
    }
  ]

  return (
    <GalleryClient
      title="Commercial Projects"
      description="We bring the same level of craftsmanship and attention to detail to our commercial projects as we do to our residential work. From corporate headquarters to public spaces, we create durable, impressive stonework that enhances the built environment and withstands high traffic."
      breadcrumb="Commercial Projects"
      projects={projects}
      refPrefix="COM"
      galleryType="commercial"
    />
  )
}
