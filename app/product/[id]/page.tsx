"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/comp/Navbar";
import Footer from "../../../components/comp/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, ShoppingCart, Truck, ShieldCheck, Leaf } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/slices/cart.slice";

export default function ProductPage({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);

  // Mock Data
  const product = {
    name: "Organic Hass Avocados",
    price: 180,
    description: "Creamy, nutty, and perfectly ripe. Our organic Hass avocados are hand-picked from sustainable farms. Rich in healthy fats and perfect for toast, guacamole, or salads.",
    image: "https://images.unsplash.com/photo-1519162808019-7de1623bb133?auto=format&fit=crop&q=80&w=1000",
    nutrition: ["Organic", "Non-GMO", "Keto Friendly"],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* LEFT: Image Gallery */}
            <div className="relative h-[400px] lg:h-[600px] w-full bg-gray-50 rounded-3xl overflow-hidden border border-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* RIGHT: Product Info */}
            <div className="flex flex-col justify-center">
                <div className="mb-6 flex gap-2">
                    {product.nutrition.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-green-600 mb-6">₹{product.price.toFixed(2)} <span className="text-lg font-normal text-gray-500">/ each</span></p>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {product.description}
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10 border-b border-gray-100 pb-10">
                    {/* Quantity */}
                    <div className="flex items-center border border-gray-300 rounded-full w-max">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="p-3 hover:text-green-600 transition-colors"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-medium">{quantity}</span>
                        <button 
                             onClick={() => setQuantity(quantity + 1)}
                            className="p-3 hover:text-green-600 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Add to Cart */}
                    <Button 
                        variant="neon" 
                        size="lg" 
                        className="flex-1 rounded-full text-lg h-12"
                        onClick={() => dispatch(addItem({
                            id: params.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            quantity: quantity,
                            // unit: "each"
                        }))}
                    >
                        <ShoppingCart className="mr-2 w-5 h-5" /> Add to Cart — ₹{(product.price * quantity).toFixed(2)}
                    </Button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex gap-3">
                        <Truck className="text-green-600 shrink-0" />
                        <div>
                            <h4 className="font-semibold text-sm">Next Day Delivery</h4>
                            <p className="text-xs text-gray-500">Order by 2 PM</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <ShieldCheck className="text-green-600 shrink-0" />
                        <div>
                            <h4 className="font-semibold text-sm">Freshness Guaranteed</h4>
                            <p className="text-xs text-gray-500">Money back if not fresh</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                         <Leaf className="text-green-600 shrink-0" />
                         <div>
                            <h4 className="font-semibold text-sm">Sustainably Sourced</h4>
                            <p className="text-xs text-gray-500">Direct from farmers</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}