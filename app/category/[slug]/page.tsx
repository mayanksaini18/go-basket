"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, ChevronDown, Star, Plus } from "lucide-react";
import Navbar from "@/components/comp/Navbar";
import { Footer } from "@/components/comp/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/slices/cart.slice";

// Mock Data
const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: i % 2 === 0 ? "Fresh Oranges" : "Fresh Strawberries",
  price: i % 2 === 0 ? 60 : 250,
  unit: i % 2 === 0 ? "dozen" : "box",
  rating: 4.8,
  reviews: 120,
  image: i % 2 === 0 
    ? "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=600"
    : "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=600",
  isNew: i < 2,
}));

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const dispatch = useAppDispatch();
  // Determine title based on slug (formatting helper)
  const title = params.slug.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Navbar />
      
      {/* HEADER BANNER */}
      <div className="relative h-48 md:h-64 w-full bg-green-900 overflow-hidden">
        <Image
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1920"
            alt="Header"
            fill
            className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
                {title}
            </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
        
        {/* SIDEBAR FILTERS (Hidden on mobile for brevity) */}
        <aside className="hidden lg:block w-64 space-y-8 shrink-0">
            <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <SlidersHorizontal size={18} /> Filters
                </h3>
                <Separator className="mb-4" />
                
                {/* Price Filter */}
                <div className="space-y-3">
                    <h4 className="font-medium text-sm text-gray-900">Price Range</h4>
                    <div className="flex items-center gap-2">
                        <Checkbox id="p1" /> <label htmlFor="p1" className="text-sm text-gray-600">₹0 - ₹100</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="p2" /> <label htmlFor="p2" className="text-sm text-gray-600">₹100 - ₹500</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="p3" /> <label htmlFor="p3" className="text-sm text-gray-600">₹500+</label>
                    </div>
                </div>
            </div>
        </aside>

        {/* PRODUCT GRID */}
        <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">Showing {products.length} results</p>
                <Button variant="outline" size="sm" className="gap-2">
                    Sort by: Recommended <ChevronDown size={14} />
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Link href={`/product/${product.id}`} key={product.id} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 relative">
                        {product.isNew && (
                            <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                                NEW
                            </span>
                        )}
                        
                        {/* Image */}
                        <div className="relative h-48 bg-gray-50">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Details */}
                        <div className="p-4">
                            <div className="flex items-center gap-1 mb-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                <span className="text-xs text-gray-500">{product.rating} ({product.reviews})</span>
                            </div>
                            <h3 className="font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                            <p className="text-sm text-gray-500 mb-3">1 {product.unit}</p>
                            
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-lg text-gray-900">₹{product.price.toFixed(2)}</span>
                                <Button 
                                    size="sm" 
                                    variant="neon" 
                                    className="h-8 w-8 rounded-full p-0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        dispatch(addItem({
                                            id: product.id.toString(),
                                            name: product.name,
                                            price: product.price,
                                            image: product.image,
                                            quantity: 1,
                                            unit: product.unit
                                        }));
                                    }}
                                >
                                    <Plus className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}