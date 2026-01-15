"use client";

import { Button } from "@/components/ui/button";
import { Heart, Plus } from "lucide-react";
import Image from "next/image";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/slices/cart.slice";

// Mock Data
const products = [
  { id: 3, name: "Red Apple", price: "₹180", unit: "per kg", img: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&q=80&w=300" },
  { id: 4, name: "Whole Milk", price: "₹70", unit: "1 liter", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300" },
  { id: 5, name: "Brown Bread", price: "₹45", unit: "loaf", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300" },
  { id: 6, name: "Farm Eggs", price: "₹90", unit: "dozen", img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=300" },
  { id: 7, name: "Potatoes", price: "₹40", unit: "per kg", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=300" },
  { id: 8, name: "Tomatoes", price: "₹50", unit: "per kg", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=300" },
];

export default function BestSeller() {
  const dispatch = useAppDispatch();
  return (
    <section>
       <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Weekly Best Sellers</h2>
        <p className="text-gray-500 mt-2">Our most popular products this week.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-lg transition-all duration-300">
            
            {/* Image Area */}
            <div className="relative h-48 w-full bg-gray-50 rounded-xl overflow-hidden mb-4">
              <Image 
                src={product.img} 
                alt={product.name} 
                fill 
                className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-1 px-1">
                <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.unit}</p>
            </div>

            {/* Price & Action */}
            <div className="mt-4 flex items-center justify-between px-1">
                <span className="text-lg font-bold text-green-600">{product.price}</span>
                <Button 
                    size="sm" 
                    variant="neon" 
                    className="rounded-full w-8 h-8 p-0"
                    onClick={() => dispatch(addItem({
                        id: product.id.toString(),
                        name: product.name,
                        price: parseFloat(product.price.replace('₹', '')),
                        image: product.img,
                        quantity: 1,
                        unit: product.unit
                    }))}
                >
                    <Plus className="w-5 h-5" />
                </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}