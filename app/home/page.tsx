"use client";

import Navbar from "@/components/comp/Navbar";
import { HeroSection } from "@/components/comp/HeroSection";
import GroceryCategories from "@/components/comp/CategoryCarousel";
import BestSeller from "@/components/comp/BestSeller"; // We will create this below
import { Footer } from "@/components/comp/Footer";

export default function StorePage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        <div className="container mx-auto px-4 py-12 space-y-20">
          <GroceryCategories />
          <BestSeller />
        </div>
      </main>
      <Footer />
    </div>
  );
}