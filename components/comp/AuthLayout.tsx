"use client";

import Image from "next/image";
import { ReactNode } from "react";

type AuthLayoutProps = {
  title: string;
  subtitle?: ReactNode;
  image: string;
  children: ReactNode;
};

export default function AuthLayout({
  title,
  subtitle,
  image,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex bg-white text-slate-900 overflow-hidden">
      {/* LEFT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">{title}</h1>
            {subtitle}
          </div>

          {children}
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:block lg:w-1/2 relative bg-slate-100">
        <Image
          src="https://images.unsplash.com/photo-1513672494107-cd9d848a383e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveGVzfGVufDB8fDB8fHww"
          alt="Auth visual"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
