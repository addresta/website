"use client";

import { useMemo, useState } from "react";
import { Property } from "@/types";
import PropertyFilters, { PropertyFilterState } from "./PropertyFilters";
import PropertyGrid from "./PropertyGrid";
import { locations } from "@/data/locations";

const EMPTY_FILTERS: PropertyFilterState = {
  location: "",
  propertyType: "",
  budget: "",
  configuration: "",
  developer: "",
  possession: "",
  sort: "Featured",
};

export default function PropertiesListing({ properties }: { properties: Property[] }) {
  const [filters, setFilters] = useState<PropertyFilterState>(EMPTY_FILTERS);

  const filtered = useMemo(() => {
    let result = [...properties];

    if (filters.location) {
      const slug = locations.find((l) => l.name === filters.location)?.slug;
      result = result.filter((p) => p.locationSlug === slug);
    }
    if (filters.propertyType) {
      result = result.filter((p) => p.propertyType === filters.propertyType);
    }
    if (filters.configuration) {
      result = result.filter((p) => p.configurations.some((c) => c.type === filters.configuration));
    }
    if (filters.possession) {
      result = result.filter((p) => p.status === filters.possession);
    }

    if (filters.sort === "Featured") {
      result.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return result;
  }, [properties, filters]);

  return (
    <div>
      <PropertyFilters filters={filters} onChange={setFilters} />
      <PropertyGrid properties={filtered} />
    </div>
  );
}
