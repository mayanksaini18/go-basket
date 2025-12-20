"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/slices/cart.slice";

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  //find the product
  const product = products.find((p) => {
    return p.id === id;
  });

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 pt-24 max-w-6xl mx-auto">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-6 gap-2"
      >
        <ChevronLeft size={20} /> Back
      </Button>

       <div className="grid md:grid-cols-2 gap-12">
      {/* image */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 flex items-center justify-center aspect-square relative">
          <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8"
          priority
          />
      </div>

        {/* details */}
      <div className="space-y-6 py-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
            <p className="text-lg text-muted-foreground mt-2">{product.unit}</p>
          </div>
          
          <p className="text-3xl font-bold">₹{product.price}</p>
             <p className="text-lg leading-relaxed text-muted-foreground">
            {product.description || "No description available for this product."}
          </p>
             <Button size="lg" variant="neon" className="w-full md:w-auto px-8" onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}>
            Add to Cart
          </Button>
      </div>
    </div>

  </div>
  );
}
