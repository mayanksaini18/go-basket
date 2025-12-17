// app/products/page.tsx
import { Product } from "@/lib/types";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border p-4">
          <h2>{p.name}</h2>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
