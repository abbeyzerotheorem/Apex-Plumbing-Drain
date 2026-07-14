import { plumbingConfig } from "@/data/plumbing";

export function JsonLd() {
  const { brand, emergency, trust, coverage } = plumbingConfig;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["Plumber", "LocalBusiness"],
    "@id": "https://apexplumbing.example/#organization",
    name: brand.legalName,
    alternateName: brand.displayName,
    image: "https://apexplumbing.example/og-cover.jpg",
    url: "https://apexplumbing.example",
    telephone: emergency.livePhoneHref.replace("tel:", ""),
    email: emergency.dispatchEmail,
    priceRange: "$$",
    paymentAccepted: "Cash, Credit, Financing",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.headquarters.street,
      addressLocality: brand.headquarters.city,
      addressRegion: brand.headquarters.state,
      postalCode: brand.headquarters.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.197,
      longitude: -97.823,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: coverage.map((c) => ({
      "@type": "City",
      name: c.name,
      sameAs: `https://www.google.com/maps/search/${encodeURIComponent(c.name)}`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: trust.googleRating.toString(),
      reviewCount: trust.googleReviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    knowsAbout: ["Drain Cleaning", "Leak Repair", "Water Heaters", "Sewer Lines", "Repipe"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: plumbingConfig.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: s.startingPrice,
          maxPrice: s.endingPrice,
        },
      })),
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: plumbingConfig.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
