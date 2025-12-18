"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const items = useAppSelector((state) => state.cart.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 ">
      <div className="max-w-6xl mx-auto flex items-center justify-end px-6 h-16">
{/*         
        LOGO / BRAND
        <Link href="/" className="text-xl font-bold tracking-tight">
          Green<span className="text-[#E4FF97]">Cart</span>
        </Link> */}

        {/* RIGHT ACTIONS */}
        <Link href="/cart">
          <Button variant="neon" className="relative gap-2">
            <ShoppingCart />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-semibold rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Button>
        </Link>

      </div>
    </header>
  );
}
