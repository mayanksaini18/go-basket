"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/comp/Navbar";
import { Footer } from "@/components/comp/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, ArrowRight, Minus, Plus } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { increment, decrement, removeItem } from "@/store/slices/cart.slice";
import { ShoppingBasket } from "lucide-react";

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = 40.00;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Your Basket</h1>

        {cartItems.length === 0 ? (
            // EMPTY STATE
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBasket className="w-8 h-8 text-gray-400" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Your basket is empty</h2>
                <Link href="/">
                    <Button variant="neon" className="mt-4">Start Shopping</Button>
                </Link>
            </div>
        ) : (
            // FILLED STATE
            <div className="flex flex-col lg:flex-row gap-10">
            
            {/* ITEMS LIST */}
            <div className="flex-1 space-y-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                        {/* Image */}
                        <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden shrink-0">
                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                    <p className="text-sm text-gray-500">₹{item.price} / unit</p>
                                </div>
                                <button 
                                    onClick={() => dispatch(removeItem(item.id))}
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                {/* Quantity Control */}
                                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                    <button 
                                        onClick={() => dispatch(decrement(item.id))}
                                        className="p-1 hover:bg-white rounded-md shadow-sm transition-all"
                                    ><Minus className="w-3 h-3" /></button>
                                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                    <button 
                                        onClick={() => dispatch(increment(item.id))}
                                        className="p-1 hover:bg-white rounded-md shadow-sm transition-all"
                                    ><Plus className="w-3 h-3" /></button>
                                </div>
                                <p className="font-bold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* SUMMARY CARD */}
            <div className="lg:w-96 h-fit bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-6">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Delivery Fee</span>
                        <span>₹{deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg text-gray-900">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                </div>

                <div className="flex gap-2 mb-6">
                    <Input placeholder="Promo code" className="bg-gray-50" />
                    <Button variant="outline">Apply</Button>
                </div>

                <Button variant="neon" className="w-full h-12 text-lg font-semibold rounded-xl flex items-center justify-between px-6">
                    <span>Checkout</span>
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>
            </div>
        )}
      </main>

      <Footer />
    </div>
  );
}