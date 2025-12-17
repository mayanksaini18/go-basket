// app/cart/page.tsx
"use client";

import { useAppSelector } from "@/store/hooks";

export default function CartPage() {
  const items = useAppSelector(state => state.cart.items);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Cart</h1>
      {items.map(item => (
        <div key={item.id} className="border p-3">
          {item.name} × {item.quantity}
        </div>
      ))}
    </div>
  );
}
