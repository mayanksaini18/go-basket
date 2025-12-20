// app/page.tsx
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


import CategoryTabs from "@/components/comp/Categorytabs";
import Navbar from "@/components/comp/Navbar";
import { useState } from "react";
import { AnimatedText } from "@/components/comp/animated-text";
import { Reveal } from "@/components/comp/reveal";
import { HeroSection } from "@/components/comp/hero-section";
import BestSeller from "@/components/comp/BestSeller";
import CategoryCarousel from "@/components/comp/CategoryCarousel";

export default function HomePage() {
  const [category, setCategory] = useState("Popular");
  return (
    <main className="min-h-screen bg-background px-6">
      {/* top Bar */}
      <Navbar />

      {/* <HeroSection/> */}
      <section className="max-w-6xl mx-auto text-center pt-28 pb-16">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight ">
            <AnimatedText text=" SHOP PRODUCTS" delay={0.5} />
            <span className="italic font-medium">
              <br />
              <AnimatedText text=" that YOU’LL LOVE." delay={1.1} />
            </span>
          </h1>
        </Reveal>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover premium products with quality, comfort, and modern design —
          delivered right to your doorstep.
        </p>

        {/* SEARCH BAR */}
        <div className="mt-10 flex max-w-2xl mx-auto gap-3">
          <Input
            placeholder="Search for products..."
            className="h-12 text-base"
          />
          <Button size="lg" variant="neon">
            Search
          </Button>
        </div>
      </section>

      <CategoryTabs active={category} onChange={setCategory} />

      {/* PRODUCTS SECTION */}
      <BestSeller/>
      <CategoryCarousel/>
    </main>
  );
}
