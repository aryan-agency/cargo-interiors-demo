const SITE_URL = "https://cargointerior.in";
const LOGO_URL = `${SITE_URL}/logo.png`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cargo Interiors",
  url: SITE_URL,
  logo: LOGO_URL,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9050656162",
    contactType: "customer service",
    areaServed: ["Gurugram", "Delhi NCR"],
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignBusiness",
  name: "Cargo Interiors",
  image: LOGO_URL,
  url: SITE_URL,
  telephone: "+91-9050656162",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Gurugram" },
    { "@type": "Place", name: "Delhi NCR" },
  ],
  priceRange: "$$",
  openingHours: "Mo-Sa 10:00-19:00",
};

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Cargo Interiors",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Gurugram",
    },
  };
}
