"use client";

import { cn } from "@/lib/utils";

const categories = [
  "Popular",
  "Ready to Eat",
  "Snacks & Candy",
  "Drinks",
  "Frozen",
  "Personal Care",
  "Grocery",
];

export default function CategoryTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border",
            active === cat
              ? "bg-[#E4FF97] text-[#273603] border-transparent"
              : "bg-background hover:bg-muted"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
