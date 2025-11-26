import { Metadata } from 'next'
import ExpertiseClient from './ExpertiseClient'

export const metadata: Metadata = {
  title: 'Expertise & Experience - Cedartide Stone',
  description: 'With over 35 years of experience, Cedartide Stone specializes in traditional stonemasonry, historic restoration, and modern stone applications.',
  keywords: ['stone construction expertise', 'masonry experience', 'stonework craftsmanship', 'Connecticut stone contractor', 'stone construction techniques'],
}

export default function Expertise() {
  return <ExpertiseClient />
}
