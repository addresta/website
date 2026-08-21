import { Property } from "@/types";

// NOTE: "Sample Project Name" is a fully fictional placeholder for template preview.
// "Life Republic Canvas" and "Vyomora" were sourced from the developers' own project
// microsites (configurations/pricing as published there at the time of entry) — verify
// current pricing, availability and possession directly with the developer/RERA listing
// before publishing, and replace the placeholder imagery with licensed listing photos.
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
  {
    name: "Life Republic Canvas",
    slug: "life-republic-canvas",
    developerSlug: "kolte-patil-developers",
    locationSlug: "hinjewadi",
    city: "Pune",
    propertyType: "Residential",
    status: "New Launch",
    configurations: [
      { type: "2 BHK", area: "740 - 900 sq.ft", price: "₹75 Lakh onwards" },
      { type: "2.5 BHK", area: "964 - 978 sq.ft", price: "₹1.01 Cr onwards" },
      { type: "3 BHK", area: "1024 - 1496 sq.ft", price: "₹1.04 Cr onwards" },
      { type: "3.5 BHK", area: "1700 sq.ft", price: "₹1.99 Cr onwards" },
      { type: "4 BHK", area: "2024 sq.ft", price: "₹2.45 Cr onwards" },
    ],
    priceFrom: "₹75 Lakh onwards",
    possession: "To be announced",
    amenities: [
      "Basketball Court",
      "Lawn Terraces",
      "Clubhouse with Gymnasium",
      "Children's Play Area",
      "Swimming Pool",
      "Amphitheater",
      "Jogging Track",
      "Skating Rink",
      "Multipurpose Lawn",
      "Surface Car Parking",
    ],
    // Sourced from the developer's project microsite (new-properties-launch.com) — Addresta
    // channel-partner authorized. These are the developer's artist's-impression renders, not
    // photos of a completed building.
    images: [
      "/images/life-republic-canvas/tower-exterior-dusk.jpg",
      "/images/life-republic-canvas/entrance-gate.jpg",
      "/images/life-republic-canvas/amenity-deck-aerial.jpg",
    ],
    featured: true,
    description:
      "Life Republic Canvas is a residential tower development by Kolte Patil in Hinjewadi, Pune, part of the larger Life Republic township. Towers rise to around 400 ft with wide private decks and panoramic views, set on a 6+ acre plot with an extensive amenity list spanning sport, leisure and family-focused spaces.",
    highlights: [
      "Part of the Life Republic Township",
      "Wide Private Decks",
      "Panoramic High-Rise Views",
      "Close to Hinjewadi IT Park",
      "Trusted Developer",
    ],
    faqs: [
      {
        question: "What configurations are available?",
        answer: "2 BHK, 2.5 BHK, 3 BHK, 3.5 BHK and 4 BHK residences are available.",
      },
      { question: "What is the starting price?", answer: "Pricing starts from ₹75 Lakh onwards for a 2 BHK." },
      {
        question: "What is the possession timeline?",
        answer: "Possession has not yet been announced by the developer — contact our advisors for the latest update.",
      },
      {
        question: "Where is the project located?",
        answer:
          "The project is located in Hinjewadi, Pune, around 10 minutes from Hinjewadi IT Park.",
      },
    ],
  },
  {
    name: "Vyomora",
    slug: "vyomora",
    developerSlug: "shapoorji-pallonji-group",
    locationSlug: "hinjewadi",
    city: "Pune",
    propertyType: "Residential",
    status: "New Launch",
    configurations: [
      { type: "2 BHK", area: "685 - 840 sq.ft", price: "₹84.99 Lakh onwards" },
      { type: "3 BHK", area: "1000 - 1200 sq.ft", price: "₹1.25 Cr onwards" },
      { type: "Duplex", area: "1400 sq.ft", price: "₹1.69 Cr onwards" },
    ],
    priceFrom: "₹84.99 Lakh onwards",
    possession: "To be announced",
    amenities: [
      "Gym & Fitness Center",
      "Swimming Pool",
      "Green Garden",
      "Children's Play Area",
      "24x7 Security & CCTV",
      "Clubhouse with River Views",
      "Sunken Garden",
      "Wi-Fi Zones",
      "Sports Court",
      "Parking",
    ],
    // Sourced from the developer's project microsite (shapoorjivyomora-hinjewadi.com) —
    // Addresta channel-partner authorized. These are the developer's artist's-impression
    // renders, not photos of a completed building.
    images: [
      "/images/vyomora/tower-exterior.webp",
      "/images/vyomora/interior-living-dining.webp",
      "/images/vyomora/pool-aerial.webp",
      "/images/vyomora/garden-swings.webp",
      "/images/vyomora/towers-cluster.webp",
    ],
    featured: true,
    description:
      "Vyomora is a low-density residential development by Shapoorji Pallonji on the banks of the Mula River in Hinjewadi, Pune. The 5-acre site holds only five towers, keeping a large share of the land as open, green space, with a clubhouse and sunken garden overlooking the river.",
    highlights: [
      "Riverfront Location on the Mula River",
      "Low-Density: 5 Towers on 5 Acres",
      "Majority Open Green Space",
      "Close to IT Hub and Metro",
      "Trusted Developer",
    ],
    faqs: [
      { question: "What configurations are available?", answer: "2 BHK, 3 BHK and 3 BHK duplex residences are available." },
      { question: "What is the starting price?", answer: "Pricing starts from ₹84.99 Lakh onwards for a 2 BHK." },
      {
        question: "What is the possession timeline?",
        answer: "Possession has not yet been announced by the developer — contact our advisors for the latest update.",
      },
      {
        question: "Where is the project located?",
        answer: "The project is located in Hinjewadi, Pune, along the Mula River, close to the IT hub and metro.",
      },
    ],
  },
  {
    name: "Qrious Phase 2",
    slug: "qrious-phase-2",
    developerSlug: "kolte-patil-developers",
    locationSlug: "hinjewadi",
    city: "Pune",
    propertyType: "Residential",
    status: "New Launch",
    configurations: [
      { type: "2 BHK", area: "~770 - 780 sq.ft carpet", price: "Price on Request" },
      { type: "2 BHK Large", area: "~1005 - 1011 sq.ft carpet", price: "Price on Request" },
      { type: "3 BHK", area: "~1005 - 1131 sq.ft carpet", price: "Price on Request" },
    ],
    priceFrom: "Price on Request",
    possession: "To be announced",
    amenities: [
      "The Q Club (~19,000 Sq.ft. Clubhouse)",
      "Swimming Pool",
      "Cabana",
      "Kids' Play Area",
      "Pet Park",
      "Multipurpose Lawn",
      "Fruit Orchard",
      "Butterfly Garden",
      "Jogging Track",
      "Basketball Court",
      "Futsal Court",
      "Cricket Practice Net",
      "Skating Rink",
    ],
    // Sourced from the developer's own project flipchart brochure — Addresta channel-partner
    // authorized. These are the developer's artist's-impression renders, not photos of a
    // completed building.
    images: [
      "/images/qrious-phase-2/the-q-club.jpg",
      "/images/qrious-phase-2/swimming-pool.jpg",
      "/images/qrious-phase-2/cabana.jpg",
    ],
    featured: true,
    description:
      "Qrious Phase 2 is a residential launch by Kolte Patil at Life Republic, near Hinjewadi, Pune. The launch spans 3 towers of 36 habitable floors each, built around a roughly 19,000 sq.ft. clubhouse (The Q Club) and 40+ amenities across landscaped grounds and podium-level outdoor spaces.",
    highlights: [
      "Part of the Life Republic Township",
      "3 Towers, 36 Habitable Floors",
      "~19,000 Sq.ft. Clubhouse",
      "40+ Amenities",
      "Trusted Developer",
    ],
    faqs: [
      {
        question: "What configurations are available?",
        answer: "2 BHK and 3 BHK residences are available, including Large and Luxurious variants with private terraces.",
      },
      {
        question: "What is the starting price?",
        answer: "Pricing is available on request from our advisory team.",
      },
      {
        question: "What is the possession timeline?",
        answer: "Possession has not yet been announced by the developer — contact our advisors for the latest update.",
      },
      {
        question: "Where is the project located?",
        answer: "The project is located at Life Republic, near Hinjewadi, Pune.",
      },
    ],
  },
  {
    name: "Echoes",
    slug: "echoes",
    developerSlug: "kolte-patil-developers",
    locationSlug: "hinjewadi",
    city: "Pune",
    propertyType: "Residential",
    status: "New Launch",
    configurations: [
      { type: "2 BHK", area: "Details on request", price: "Price on Request" },
      { type: "2.5 BHK", area: "Details on request", price: "Price on Request" },
    ],
    priceFrom: "Price on Request",
    possession: "To be announced",
    amenities: [
      "Lap Pool",
      "Outdoor Kids' Play Area",
      "40+ Amenities Across 3 Levels",
      "Landscaped Podium Gardens",
    ],
    // Sourced from the developer's own project brochure — Addresta channel-partner
    // authorized. These are the developer's artist's-impression renders, not photos of a
    // completed building.
    images: [
      "/images/echoes/tower-exterior.jpg",
      "/images/echoes/lap-pool.jpg",
      "/images/echoes/kids-play-area.jpg",
      "/images/echoes/living-room.jpg",
    ],
    featured: true,
    description:
      "Echoes is a 2 & 2.5 BHK residential launch by Kolte Patil at Life Republic, Hinjewadi-Marunji-Kasarsai Road, Pune, spread across roughly 5.89 acres with Towers A, B and E. The launch offers 40+ amenities across three levels, as part of the larger 400+ acre Life Republic township.",
    highlights: [
      "Part of the Life Republic Township",
      "~5.89 Acres, Towers A, B & E",
      "40+ Amenities Across 3 Levels",
      "Part of 400+ Acre Township",
      "Trusted Developer",
    ],
    faqs: [
      { question: "What configurations are available?", answer: "2 BHK and 2.5 BHK homes are available." },
      {
        question: "What is the starting price?",
        answer: "Pricing is available on request from our advisory team.",
      },
      {
        question: "What is the possession timeline?",
        answer: "Possession has not yet been announced by the developer — contact our advisors for the latest update.",
      },
      {
        question: "Where is the project located?",
        answer:
          "The project is located at Life Republic, Hinjawadi-Marunji-Kasarsai Road, Taluka Mulshi, Pune - 411057.",
      },
    ],
  },
];

export const getFeaturedProperties = () => properties.filter((p) => p.featured);
export const getPropertyBySlug = (slug: string) => properties.find((p) => p.slug === slug);
export const getPropertiesByLocation = (locationSlug: string) =>
  properties.filter((p) => p.locationSlug === locationSlug);
export const getPropertiesByDeveloper = (developerSlug: string) =>
  properties.filter((p) => p.developerSlug === developerSlug);
