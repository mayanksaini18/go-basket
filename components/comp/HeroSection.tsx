"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { PackageCheck, Zap, ShieldCheck } from "lucide-react" 
import Image from "next/image"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      
      {/* 1. Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale }}
      >
        <Image 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop" 
            alt="Fresh Vegetables Background"
            fill
            priority
            className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* 2. Text Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center text-white"
        style={{ y: contentY, opacity: opacity }}
      >
        <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          Farm fresh goods <br />
          <span className="italic font-light text-green-300">for healthy living.</span>
        </motion.h1>

        <motion.p
            className="text-lg md:text-xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            Sourced directly from local farmers, delivered to your kitchen table in minutes. Taste the difference of genuine freshness.
        </motion.p>
      </motion.div>

      {/* 3. Info Strip (Glassmorphism) */}
      <motion.div
        className="absolute bottom-10 left-4 right-4 z-20 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 shadow-xl">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white">
            <div className="flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Free delivery over $50</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Delivered in 30 mins</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Freshness Guarantee</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}