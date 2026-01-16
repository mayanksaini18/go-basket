"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { useAppSelector } from "../../store/hooks";

export default function NavbarModern() {
  const items = useAppSelector((state) => state.cart.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-black/5 rounded-full px-4 py-2 flex items-center justify-between transition-all hover:bg-white/90">
        
        {/* LEFT: Logo & Menu */}
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5">
                <Menu className="w-5 h-5 text-gray-700" />
            </Button>
            
            <Link href="/" className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-green-100 flex items-center justify-center">
                     <Image src="/images/Go-basket-Logo.png" alt="Logo" width={24} height={24} />
                </div>
                <span className="font-bold text-lg tracking-tight text-gray-900 hidden sm:block">
                    Go-basket
                </span>
            </Link>
        </div>

        {/* CENTER: Compact Search */}
        <div className="hidden md:flex items-center bg-gray-100/80 rounded-full px-4 py-2 w-80 hover:bg-white hover:ring-2 hover:ring-green-100 transition-all cursor-text group border border-transparent hover:border-green-200">
            <Search className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
            <input 
                className="bg-transparent border-none outline-none text-sm ml-2 w-full placeholder:text-gray-400 text-gray-800"
                placeholder="Search..."
            />
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2">
            <Link href="/login">
                <Button variant="ghost" className="rounded-full text-sm font-semibold text-gray-600 hover:text-black hover:bg-gray-100">
                    Sign in
                </Button>
            </Link>

            <Link href="/cart">
                <Button variant="neon" className="rounded-full px-5 py-5 flex items-center gap-2 shadow-lg shadow-green-500/20">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="font-semibold">Cart</span>
                    {cartCount > 0 && (
                        <span className="bg-white text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-1">
                            {cartCount}
                        </span>
                    )}
                </Button>
            </Link>
        </div>

      </nav>
    </div>
  );
}