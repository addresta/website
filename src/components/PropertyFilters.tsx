"use client";

import { locations } from "@/data/locations";
import { developers } from "@/data/developers";

export interface PropertyFilterState {
  location: string;
  propertyType: string;
  budget: string;
  configuration: string;
  developer: string;
  possession: string;
  sort: string;
}

interface PropertyFiltersProps {
  filters: PropertyFilterState;
  onChange: (filters: PropertyFilterState) => void;
}

const SORT_OPTIONS = ["Featured", "Newest", "Price: Low to High", "Price: High to Low"];

export default function PropertyFilters({ filters, onChange }: PropertyFiltersProps) {
  function update<K extends keyof PropertyFilterState>(key: K, value: string) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
        <FilterSelect
          label="Location"
          value={filters.location}
          onChange={(v) => update("location", v)}
          options={locations.map((l) => l.name)}
        />
        <FilterSelect
          label="Type"
          value={filters.propertyType}
          onChange={(v) => update("propertyType", v)}
          options={["Residential", "Commercial", "Luxury"]}
        />
        <FilterSelect
          label="Configuration"
          value={filters.configuration}
          onChange={(v) => update("configuration", v)}
          options={["1 BHK", "2 BHK", "3 BHK", "4 BHK+"]}
        />
        <FilterSelect
          label="Developer"
          value={filters.developer}
          onChange={(v) => update("developer", v)}
          options={developers.map((d) => d.name)}
        />
        <FilterSelect
          label="Possession"
          value={filters.possession}
          onChange={(v) => update("possession", v)}
          options={["Ready to Move", "Under Construction", "New Launch"]}
        />
      </div>
      <div className="sm:ml-auto">
        <FilterSelect
          label="Sort"
          value={filters.sort}
          onChange={(v) => update("sort", v)}
          options={SORT_OPTIONS}
          fullWidth
        />
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  fullWidth = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  fullWidth?: boolean;
}) {
  return (
    <label className={`flex items-center gap-2 text-sm ${fullWidth ? "w-full" : ""}`}>
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-[4px] border border-border bg-pure-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-champagne-gold ${
          fullWidth ? "" : "sm:w-auto"
        }`}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
