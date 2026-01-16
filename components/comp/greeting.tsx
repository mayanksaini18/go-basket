
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import Magnet from "../Magnet";
import { ShoppingBasket, ArrowRight } from "lucide-react"; // Assuming you have lucide-react (standard in shadcn)

const Greeting = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-green-50/50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      
      {/* Main Content Container */}
      <main className="z-10 flex flex-col items-center gap-8 text-center px-4">
        
        {/* Interactive Logo Area */}
        <Magnet padding={50} disabled={false} magnetStrength={5}>
          <div className="relative flex items-center justify-center p-6 bg-white rounded-full shadow-xl ring-1 ring-gray-100 cursor-pointer transition-transform hover:scale-105">
            <Image
              src="/images/Go-basket-Logo.png"
              alt="Go-basket Fresh Grocery Logo"
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </div>
        </Magnet>

        {/* Text Content */}
        <div className="space-y-4 max-w-lg">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Freshness at your <span className="text-green-600">Doorstep</span>
          </h1>
          <p className="text-lg text-slate-600">
            Your neighborhood grocery store, now online. Order fresh produce, pantry staples, and more in minutes.
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/login">
        <Button 
          variant="neon" 
          size="lg" 
          className="group flex items-center gap-2 rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-green-500/20"
        >
          <ShoppingBasket className="w-5 h-5" />
          <span>Start Shopping</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
        </Link>
      </main>

      {/* Decorative Background Elements (Optional blobbies) */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Greeting;