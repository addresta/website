import { Property } from "@/types";

// NOTE: Placeholder property listings to demonstrate the data model, listing grid and
// project detail template. Replace with verified, developer-approved project data
// before launch. Do not publish price, area or possession details that have not been
// confirmed with the developer.
export const properties: Property[] = [
  {
    name: "Sample Project Name",
    slug: "sample-project-name",
    developerSlug: "developer-name-placeholder",
    locationSlug: "baner",
    city: "Pune",
    propertyType: "Residential",
    status: "Under Construction",
    configurations: [
      { type: "2 BHK", area: "780 - 820 sq.ft", price: "₹78 Lakh onwards" },
      { type: "3 BHK", area: "1050 - 1120 sq.ft", price: "₹1.05 Cr onwards" },
    ],
    priceFrom: "₹78 Lakh onwards",
    possession: "Dec 2027",
    amenities: [
      "Clubhouse",
      "Swimming Pool",
      "Landscaped Gardens",
      "Gymnasium",
      "24x7 Security",
      "Children's Play Area",
    ],
    // Concept/demo photography for template preview only — swap for real, developer-approved
    // project photography before launch.
    images: ["/images/luxury-lounge-interior.jpg"],
    featured: true,
    description:
      "Placeholder project overview. Replace with verified, developer-approved project description before launch.",
    highlights: [
      "Prime Location",
      "Premium Amenities",
      "Excellent Connectivity",
      "Trusted Developer",
      "Investment Potential",
    ],
    faqs: [
      { question: "What configurations are available?", answer: "2 BHK and 3 BHK residences are available." },
      { question: "What is the starting price?", answer: "Pricing starts from ₹78 Lakh onwards." },
      { question: "What is the possession timeline?", answer: "Possession is expected by December 2027." },
      { question: "Where is the project located?", answer: "The project is located in Baner, Pune." },
    ],
  },
];

export const getFeaturedProperties = () => properties.filter((p) => p.featured);
export const getPropertyBySlug = (slug: string) => properties.find((p) => p.slug === slug);
export const getPropertiesByLocation = (locationSlug: string) =>
  properties.filter((p) => p.locationSlug === locationSlug);
export const getPropertiesByDeveloper = (developerSlug: string) =>
  properties.filter((p) => p.developerSlug === developerSlug);
