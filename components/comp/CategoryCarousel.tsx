"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

// Using real-ish placeholders or colors if images fail
const categories = [
  { id: "fruits", title: "Fresh Fruits", items: 45, color: "bg-orange-100", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=300" },
  { id: "veg", title: "Vegetables", items: 120, color: "bg-green-100", img: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=300" },
  { id: "dairy", title: "Dairy & Eggs", items: 30, color: "bg-blue-100", img: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=300" },
  { id: "bakery", title: "Bakery", items: 25, color: "bg-yellow-100", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300" },
  { id: "meat", title: "Meat & Fish", items: 18, color: "bg-red-100", img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=300" },
];

export default function GroceryCategories() {
  const router = useRouter();

  return (
    <section>
      <div className="flex items-end justify-between mb-8 px-2">
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
            <p className="text-gray-500 mt-2">The best of the market, organized for you.</p>
        </div>
        <button className="text-green-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => router.push(`/category/${cat.id}`)}
            className="snap-start shrink-0 relative w-[240px] h-[300px] rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={cat.img}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-xl font-bold">{cat.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{cat.items} Products</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}