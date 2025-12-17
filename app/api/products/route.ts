// app/api/products/route.ts
import { NextResponse } from "next/server";
import { Product } from "@/lib/types";

const products: Product[] = [
  { id: "1", name: "T-Shirt", price: 799, image: "/t.png" },
  { id: "2", name: "Hoodie", price: 1499, image: "/h.png" },
];

export async function GET() {
  return NextResponse.json<Product[]>(products);
}
