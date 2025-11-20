export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cedartide Stone",
    "description": "Expert construction and renovation solutions specializing in stonework, masonry, and custom stone features.",
    "url": "https://cedartide.vercel.app",
    "telephone": "+1-860-670-7250",
    "email": "k.jepeal@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "CT",
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "name": "Kevin Jepeal"
    },
    "serviceArea": {
      "@type": "State",
      "name": "Connecticut"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stonework Construction",
            "description": "Custom stonework for residential and commercial properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stone Renovation",
            "description": "Professional stone renovation and restoration services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscape Stonework",
            "description": "Custom landscape stonework including retaining walls and outdoor features"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "40+"
    },
    "openingHours": "Mo-Sa 08:00-18:00"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
