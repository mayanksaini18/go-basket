// app/cart/page.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment, decrement } from "@/store/slices/cart.slice";
import { Plus, Minus } from "lucide-react";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Your cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {/* CART ITEMS */}
      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id}>
            <CardContent className="flex items-center gap-4 p-4">
              
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="object-contain"
              />

              {/* INFO */}
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  ₹{item.price} each
                </p>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => dispatch(decrement(item.id))}
                >
                  <Minus size={14} />
                </Button>

                <span className="font-semibold w-6 text-center">
                  {item.quantity}
                </span>

                <Button
                  size="icon"
                  variant="neon"
                  onClick={() => dispatch(increment(item.id))}
                >
                  <Plus size={14} />
                </Button>
              </div>

              {/* ITEM TOTAL */}
              <div className="w-20 text-right font-semibold">
                ₹{item.price * item.quantity}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CART SUMMARY */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Delivery</span>
            <span>₹0</span>
          </div>

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          <Button
            variant="neon"
            size="lg"
            className="w-full"
          >
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>

    </main>
  );
}
