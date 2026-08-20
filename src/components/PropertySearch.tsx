"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { locations } from "@/data/locations";

const BUDGETS = ["Under ₹50 Lakh", "₹50 Lakh - ₹1 Cr", "₹1 Cr - ₹2 Cr", "₹2 Cr+"];
const CONFIGS = ["1 BHK", "2 BHK", "3 BHK", "4 BHK+"];

export default function PropertySearch() {
  const router = useRouter();
  const [lookingTo, setLookingTo] = useState("Buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [configuration, setConfiguration] = useState("");

  function handleSearch() {
    const params = new URLSearchParams();
    if (lookingTo) params.set("intent", lookingTo);
    if (location) params.set("location", location);
    if (propertyType) params.set("type", propertyType);
    if (budget) params.set("budget", budget);
    if (configuration) params.set("config", configuration);
    router.push(`/properties?${params.toString()}`);
  }

  return (
    <div className="rounded-[6px] border border-border-card bg-pure-white p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <SelectField label="I'm Looking To" value={lookingTo} onChange={setLookingTo} options={["Buy", "Invest"]} />
        <SelectField
          label="Location"
          value={location}
          onChange={setLocation}
          options={["Pune", ...locations.map((l) => l.name)]}
          placeholder="Any Location"
        />
        <SelectField
          label="Property Type"
          value={propertyType}
          onChange={setPropertyType}
          options={["Residential", "Commercial"]}
          placeholder="Any Type"
        />
        <SelectField label="Budget" value={budget} onChange={setBudget} options={BUDGETS} placeholder="Select Budget" />
        <SelectField
          label="Configuration"
          value={configuration}
          onChange={setConfiguration}
          options={CONFIGS}
          placeholder="Any Configuration"
        />
      </div>
      <button
        type="button"
        onClick={handleSearch}
        className="mt-6 w-full md:w-auto inline-flex items-center justify-center rounded-[6px] bg-charcoal px-8 py-3.5 text-sm font-semibold text-pure-white hover:bg-rich-gold transition-colors"
      >
        Search Properties
      </button>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-grey">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-[4px] border border-border bg-warm-white px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:border-champagne-gold"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
