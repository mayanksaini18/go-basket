"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Category {
  id: string;
  title: string;
  items: number;
  image: string;
}

const categories: Category[] = [
  {
    id: "fruits-vegetables",
    title: "Fruits & Vegetables",
    items: 120,
    image: "/images/categories/vegetables-fruits.webp",
  },
  {
    id: "dairy-bakery",
    title: "Dairy & Bakery",
    items: 80,
    image: "/images/categories/egg-dairy.jpg",
  },
  {
    id: "snacks",
    title: "Snacks & Munchies",
    items: 95,
    image: "/images/categories/snacks and biscuits.jpg",
  },
  {
    id: "beverages",
    title: "Beverages",
    items: 60,
    image: "/images/categories/beverages.webp",
  },
  {
    id: "personal-care",
    title: "Personal care",
    items: 45,
    image: "/images/categories/personal-care.jpg",
  },
 
];

export default function GroceryCategories() {
  const router = useRouter();

  return (
    <section className="py-14">
      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">
          Shop by Category
        </h2>
        <p className="text-muted-foreground mt-2">
          Daily essentials delivered to your doorstep
        </p>
      </div>

      {/* CATEGORY SCROLL */}
      <div className="flex gap-5 overflow-x-auto px-6 scrollbar-hide">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => router.push(`/category/${cat.id}`)}
            className="
              relative
              min-w-[220px] h-[280px]
              rounded-2xl
              overflow-hidden
              cursor-pointer
              group
              border
            "
          >
            {/* IMAGE */}
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            {/* TEXT */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold leading-tight">
                {cat.title}
              </h3>
              <p className="text-xs opacity-90">
                {cat.items}+ items
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <p className="text-center text-xs text-muted-foreground mt-5">
        ← Swipe to explore categories →
      </p>
    </section>
  );
}
