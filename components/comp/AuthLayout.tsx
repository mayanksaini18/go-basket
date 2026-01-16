import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Make sure you have lucide-react installed

interface AuthLayoutProps {
  title: string;
  subtitle: React.ReactNode;
  image: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, subtitle, image, children }: AuthLayoutProps) => {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      
      {/* LEFT SIDE: Form & Content */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background relative">
        
        {/* 'Back to Home' Button - Top Left */}
        <Link 
          href="/" 
          className="absolute top-8 left-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {/* Back to store */}
        </Link>

        {/* Form Container */}
        <div className="mx-auto grid w-full max-w-[400px] gap-6">
          
          {/* Header Section */}
          <div className="flex flex-col space-y-2 text-center">
            {/* Mobile Logo (Visible only on small screens) */}
            <div className="lg:hidden flex justify-center mb-4">
               {/* <Image
                src="/images/go-basket-logo.png"
                alt="Go-basket"
                width={60}
                height={60}
                className="object-contain"
              /> */}
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
            <div className="text-sm text-muted-foreground">
              {subtitle}
            </div>
          </div>

          {/* The Actual Form (Login or Signup) */}
          <div className="mt-4">
            {children}
          </div>
          
          {/* Copyright / Footer */}
          <div className="text-center text-xs text-muted-foreground mt-4">
            &copy; {new Date().getFullYear()} Go-basket Inc.
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Hero Image & Branding */}
      <div className="hidden lg:block relative bg-muted text-white">
        {/* The Image */}
        <Image
          src="https://images.unsplash.com/photo-1604719312566-b72d7f960315?q=80&w=2574&auto=format&fit=crop" // Placeholder unsplash image
          alt="Fresh Vegetables"
          fill
          className="object-cover"
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-zinc-900/30" />

        {/* Branding Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-10 z-20">
          
          {/* Top: Logo */}
          <div className="flex items-center gap-2 text-lg font-medium">
            <div className="bg-white/90 p-2 rounded-lg backdrop-blur-sm">
                <Image
                src="/images/go-basket-logo.png"
                alt="Go-basket Logo"
                width={32}
                height={32}
                />
            </div>
            <span className="font-bold tracking-wide">Go-basket</span>
          </div>

          {/* Bottom: Quote / Slogan */}
          <blockquote className="space-y-2">
            <p className="text-lg font-medium leading-relaxed drop-shadow-md">
              &ldquo;The freshest ingredients for your family, delivered from the farm directly to your doorstep in minutes, not days.&rdquo;
            </p>
            <footer className="text-sm font-light text-zinc-200">
              — The Go-basket Promise
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;