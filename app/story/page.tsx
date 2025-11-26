import { Metadata } from 'next'
import StoryClient from './StoryClient'

export const metadata: Metadata = {
  title: 'Our Story - Cedartide Stone',
  description: 'Learn about the history of Cedartide Stone, our commitment to traditional craftsmanship, and the values that drive our work.',
  keywords: ['Cedartide Stone history', 'masonry company Connecticut', 'stone craftsmanship values', 'Kevin stone mason'],
}

export default function Story() {
  return <StoryClient />
}
