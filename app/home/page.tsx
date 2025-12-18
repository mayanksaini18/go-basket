// app/page.tsx
"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { products } from "@/lib/products";
import ProductCard from "@/components/comp/Productcard" 
import CategoryTabs from "@/components/comp/Categorytabs" 
import Navbar from "@/components/comp/Navbar" 
import { useState } from "react";

export default function HomePage() {
    const [category, setCategory] = useState("Popular");
  return (
    <main className="min-h-screen bg-background px-6">
     {/* top Bar */}
    <Navbar/>
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto text-center pt-28 pb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight " >
          SHOP PRODUCTS <br />
          YOU’LL LOVE
        </h1>

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
          <Button size="lg" variant= "neon" >Search</Button>
        </div>
      </section>

      <CategoryTabs active={category} onChange={setCategory} />

      {/* PRODUCTS SECTION */}
      <section className="max-w-6xl mx-auto pb-24">
        <h2 className="text-2xl font-semibold mb-6">
          Featured Products
        </h2>

        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
           
             <ProductCard key={product.name} {...product} />
          ))}
        </div> 
      </section>

    </main>
  );
}
