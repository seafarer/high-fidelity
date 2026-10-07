// Single source for site identity, shared by meta tags, JSON-LD, and llms.txt.
export const SITE = {
  name: "High Fidelity",
  url: "https://www.highfidelity.dev",
  description:
    "Senior engineering, technical leadership, and product strategy for teams that need experienced hands without adding a full-time hire.",
  email: "info@highfidelity.dev",
  telephone: "+1-970-404-0988",
  locale: "en_US",
};

export const PERSON = {
  name: "Colin O'Brien",
  jobTitle: "Senior Web Engineer & Technical Lead",
  sameAs: ["https://www.linkedin.com/in/colinobrien1/", "https://github.com/seafarer"],
  knowsAbout: [
    "Platform modernization",
    "CMS migrations",
    "WordPress",
    "Drupal",
    "React",
    "Next.js",
    "Astro",
    "TypeScript",
    "Headless CMS",
    "Fractional technical leadership",
    "Product and UX design",
    "AI-assisted development",
  ],
};

export const SERVICES = [
  "Platform modernization & migrations",
  "Prototype to production",
  "Senior engineering",
  "Fractional technical & product leadership",
];

const PERSON_ID = `${SITE.url}/#colin`;
const BUSINESS_ID = `${SITE.url}/#business`;
const WEBSITE_ID = `${SITE.url}/#website`;

export const ref = (id: string) => ({ "@id": id });
export const ids = { person: PERSON_ID, business: BUSINESS_ID, website: WEBSITE_ID };

/** Entities describing the site, its owner, and the business. Included on every page. */
export function siteGraph() {
  return [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE.url}/`,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en-US",
      publisher: ref(BUSINESS_ID),
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: PERSON.name,
      jobTitle: PERSON.jobTitle,
      url: `${SITE.url}/#about`,
      sameAs: PERSON.sameAs,
      knowsAbout: PERSON.knowsAbout,
      worksFor: ref(BUSINESS_ID),
      address: { "@type": "PostalAddress", addressRegion: "CO", addressCountry: "US" },
    },
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: SITE.name,
      url: `${SITE.url}/`,
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.telephone,
      image: `${SITE.url}/og-image.png`,
      logo: `${SITE.url}/images/icon-512.png`,
      founder: ref(PERSON_ID),
      areaServed: { "@type": "Country", name: "United States" },
      address: { "@type": "PostalAddress", addressRegion: "CO", addressCountry: "US" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: SERVICES.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
  ];
}

/** Home > Section > Page breadcrumb for detail pages. */
export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).href,
    })),
  };
}
