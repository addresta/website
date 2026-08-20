export type PropertyType = "Residential" | "Commercial" | "Luxury";

export type PropertyStatus = "New Launch" | "Under Construction" | "Ready to Move";

export interface PropertyConfiguration {
  type: string; // e.g. "2 BHK"
  area: string; // e.g. "780 - 820 sq.ft"
  price: string; // e.g. "₹78 Lakh onwards"
}

export interface PropertyFAQ {
  question: string;
  answer: string;
}

export interface Property {
  name: string;
  slug: string;
  developerSlug: string;
  locationSlug: string;
  city: string;
  propertyType: PropertyType;
  status: PropertyStatus;
  configurations: PropertyConfiguration[];
  priceFrom: string; // display string, e.g. "₹65 Lakh onwards"
  possession: string;
  amenities: string[];
  images: string[];
  featured: boolean;
  description: string;
  highlights: string[];
  map?: string;
  brochure?: string;
  faqs?: PropertyFAQ[];
}

export interface LocationArea {
  name: string;
  slug: string;
  region: "West Pune" | "East Pune" | "Central Pune";
}

export interface LocationDetail extends LocationArea {
  heading: string;
  intro: string;
  whyThisLocation: string;
  connectivity: string;
  lifestyle: string;
  propertyMarket: string;
  popularConfigurations: string[];
  faqs: PropertyFAQ[];
}

export interface Developer {
  name: string;
  slug: string;
  logo?: string;
  description: string;
  projectCount: number;
  keyStrengths: string[];
  locations: string[];
}

export interface Service {
  title: string;
  slug: string;
  summary: string;
  description: string;
}

export interface InsightArticle {
  title: string;
  slug: string;
  category: "Market Insights" | "Buying Guides" | "Investment" | "Locations" | "Property Guides";
  description: string;
  author: string;
  date: string;
  heroImage?: string;
  content: string;
  keyTakeaways: string[];
}

export interface Testimonial {
  quote: string;
  clientName: string;
  clientRole: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
