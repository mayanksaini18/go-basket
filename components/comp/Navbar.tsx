"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const items = useAppSelector((state) => state.cart.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 backdrop-blur-md
  bg-white/60 dark:bg-black/40 flex items-center justify-between border-b border-white/20 ">
      <div className="flex items-center h-16 gap-2">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <Image
            src={"/images/Go-basket-Logo.png"}
            alt="go-basket Logo"
            width={38}
            height={38}
          />
        </Link>
   
       </div>

       <div className="flex items-center gap-3"> 

        {/* RIGHT ACTIONS */}
        
        <Link href="/login">
          <Button variant="neon" className="relative gap-2">
            <User />
            Login
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-semibold rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Button>
        </Link>
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
    </nav>
  );
}
