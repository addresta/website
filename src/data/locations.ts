import { LocationArea, LocationDetail } from "@/types";

export const locations: LocationArea[] = [
  { name: "Baner", slug: "baner", region: "West Pune" },
  { name: "Balewadi", slug: "balewadi", region: "West Pune" },
  { name: "Wakad", slug: "wakad", region: "West Pune" },
  { name: "Tathawade", slug: "tathawade", region: "West Pune" },
  { name: "Hinjewadi", slug: "hinjewadi", region: "West Pune" },
  { name: "Ravet", slug: "ravet", region: "West Pune" },
  { name: "Kharadi", slug: "kharadi", region: "East Pune" },
  { name: "Viman Nagar", slug: "viman-nagar", region: "East Pune" },
  { name: "Mundhwa", slug: "mundhwa", region: "East Pune" },
  { name: "Hadapsar", slug: "hadapsar", region: "East Pune" },
  { name: "Koregaon Park", slug: "koregaon-park", region: "Central Pune" },
  { name: "Kalyani Nagar", slug: "kalyani-nagar", region: "Central Pune" },
  { name: "Shivajinagar", slug: "shivajinagar", region: "Central Pune" },
  { name: "Deccan", slug: "deccan", region: "Central Pune" },
];

export const locationsByRegion = {
  "West Pune": locations.filter((l) => l.region === "West Pune"),
  "East Pune": locations.filter((l) => l.region === "East Pune"),
  "Central Pune": locations.filter((l) => l.region === "Central Pune"),
};

// NOTE: Placeholder editorial content for a subset of locations to demonstrate the
// location detail template. Replace "Why this location", connectivity, lifestyle and
// market copy with verified, locally-accurate information before launch.
export const locationDetails: Record<string, LocationDetail> = {
  baner: {
    name: "Baner",
    slug: "baner",
    region: "West Pune",
    heading: "Property in Baner",
    intro:
      "Discover residential and investment opportunities in one of Pune's most sought-after western corridors.",
    whyThisLocation:
      "Baner has grown into one of West Pune's most established residential and lifestyle destinations, known for its mix of modern apartments, social infrastructure and proximity to the city's IT corridor.",
    connectivity:
      "Well connected to Mumbai-Pune Expressway, Hinjewadi IT Park and central Pune via Baner Road and the Mumbai-Bangalore Highway.",
    lifestyle:
      "Home to a wide range of restaurants, malls, reputed schools and healthcare facilities, with easy access to weekend leisure spots along the Pune-Bangalore Highway.",
    propertyMarket:
      "Content pending verified market data — to be added by the Addresta research team.",
    popularConfigurations: ["2 BHK", "3 BHK", "4 BHK", "Luxury"],
    faqs: [
      {
        question: "Why should I consider buying property in Baner?",
        answer:
          "Baner offers strong connectivity to Pune's IT hubs, established social infrastructure and a wide mix of residential options across budgets.",
      },
      {
        question: "What configurations are commonly available in Baner?",
        answer: "2 BHK, 3 BHK, 4 BHK and select luxury residences are available across projects in Baner.",
      },
    ],
  },
  wakad: {
    name: "Wakad",
    slug: "wakad",
    region: "West Pune",
    heading: "Property in Wakad",
    intro:
      "Explore residential opportunities in one of West Pune's fastest-growing IT-adjacent neighbourhoods.",
    whyThisLocation:
      "Wakad's proximity to Hinjewadi IT Park has made it a preferred residential choice for working professionals and investors alike.",
    connectivity:
      "Direct access to the Mumbai-Pune Expressway and Hinjewadi via Wakad-Hinjewadi Road, with the upcoming metro corridor improving connectivity further.",
    lifestyle:
      "A growing mix of malls, multiplexes, restaurants and schools cater to a young, working-professional demographic.",
    propertyMarket:
      "Content pending verified market data — to be added by the Addresta research team.",
    popularConfigurations: ["1 BHK", "2 BHK", "3 BHK"],
    faqs: [
      {
        question: "Is Wakad a good option for IT professionals?",
        answer: "Yes — Wakad's proximity to Hinjewadi IT Park makes it a popular choice for a short commute.",
      },
    ],
  },
};
