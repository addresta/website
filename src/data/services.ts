import { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Property Buying Advisory",
    slug: "property-buying-advisory",
    summary:
      "Understand your requirements, shortlist relevant properties and navigate the buying journey with greater confidence.",
    description:
      "Understand your requirements, shortlist relevant properties and navigate the buying journey with greater confidence.",
  },
  {
    title: "Property Selling",
    slug: "property-selling",
    summary: "Position your property effectively and connect with qualified prospective buyers.",
    description: "Position your property effectively and connect with qualified prospective buyers.",
  },
  {
    title: "Investment Advisory",
    slug: "investment-advisory",
    summary:
      "Explore opportunities aligned with your investment objectives, budget and preferred locations.",
    description:
      "Explore opportunities aligned with your investment objectives, budget and preferred locations.",
  },
  {
    title: "Luxury Property Advisory",
    slug: "luxury-property-advisory",
    summary: "Access carefully selected premium and luxury property opportunities.",
    description: "Access carefully selected premium and luxury property opportunities.",
  },
  {
    title: "Commercial Real Estate",
    slug: "commercial-real-estate",
    summary: "Explore commercial opportunities for businesses, investors and occupiers.",
    description: "Explore commercial opportunities for businesses, investors and occupiers.",
  },
  {
    title: "NRI Property Assistance",
    slug: "nri-property-assistance",
    summary:
      "Simplifying property discovery and coordination for NRIs looking at opportunities in Pune.",
    description:
      "Simplifying property discovery and coordination for NRIs looking at opportunities in Pune.",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
