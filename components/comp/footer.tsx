"use client"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // ... (Keep your existing arrays for footerLinks and socialLinks here) ... 
  const footerLinks = {
    Shop: [
      { name: "Fruits & Vegetables", href: "#" },
      { name: "Dairy & Bakery", href: "#" },
      { name: "Snacks", href: "#" },
    ],
    Company: [
      { name: "About Go-Basket", href: "#" },
      { name: "Careers", href: "#" },
    ],
    Support: [
      { name: "Help Center", href: "#" },
      { name: "Delivery Info", href: "#" },
    ],
  }
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ]

  return (
    <div className="bg-neutral-900 text-white pt-16 pb-8 border-t border-neutral-800 mt-auto">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          
          {/* BRAND */}
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-white mb-4">Go-Basket</h3>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
                Your daily grocery partner. Fresh fruits, vegetables, and essentials — delivered fast.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} className="p-2 bg-white/10 rounded-full hover:bg-green-500 transition-colors">
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold text-white mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-gray-400 hover:text-green-400 text-sm transition-colors flex items-center gap-1 group">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {currentYear} Go-Basket. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
        </div>

      </div>
    </div>
  )
}