"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  increment,
  decrement,
  removeItem,
  clearCart,
} from "@/store/slices/cart.slice";
import { Plus, Minus, Trash2, Currency } from "lucide-react";

import { loadRazorpay } from "@/lib/razorpay";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
      alert("Razorpay Key ID is missing");
      return;
    }

    //create order
    const res = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ amount: subtotal }),
    });

    if (!res.ok) {
      alert("Failed to create order");
      return;
    }

    const order = await res.json();
    console.log(order);

    //open razoprpay
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: "INR",
      name: "Go Basket",
      description: "Order Payment",
      order_id: order.id,

      handler: function () {
        dispatch(clearCart());
        alert("Payment successful !");
      },

      prefill: {
        name: "Customer",
        email: "customer@test.com",
        contact: "9999999999",
      },

      theme: {
        color: "#E4FF97",
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Your cart is empty 🛒</p>
        <Button variant="neon" onClick={() => history.back()}>
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6 pb-32 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <Button variant="ghost" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>

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

              {/* REMOVE */}
              <Button
                size="icon"
                variant="ghost"
                onClick={() => dispatch(removeItem(item.id))}
              >
                <Trash2 size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* DESKTOP SUMMARY */}
      <Card className="hidden md:block">
        <CardContent className="p-4 space-y-4">
          <Summary subtotal={subtotal} />
          <Button
            variant="neon"
            size="lg"
            className="w-full"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>

      {/* MOBILE STICKY CHECKOUT */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 md:hidden">
        <div className="flex justify-between font-semibold mb-2">
          <span>Total</span>
          <span>₹{subtotal}</span>
        </div>
        <Button
          variant="neon"
          size="lg"
          className="w-full"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </div>
    </main>
  );
}

/* 🔹 Summary Component */
function Summary({ subtotal }: { subtotal: number }) {
  return (
    <>
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
    </>
  );
}
