"use client";

import { ShoppingBag, Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCartStore } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { items, toggleCart } = useCartStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-[#F9F7F2]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#2C3333]" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>

        {/* Desktop Links - Left */}
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase font-medium">
          <Link href="/shop" className="hover:text-[#5F6F52] transition-colors relative group">
            Shop
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5F6F52] transition-all group-hover:w-full" />
          </Link>
          <Link href="/about" className="hover:text-[#5F6F52] transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5F6F52] transition-all group-hover:w-full" />
          </Link>
          <Link href="/quiz" className="hover:text-[#5F6F52] transition-colors relative group text-[#5F6F52]">
            Skin Quiz
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5F6F52] transition-all group-hover:w-full" />
          </Link>
        </div>

        {/* Logo */}
        <Link href="/" className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#2C3333]">
          Natura<span className="text-[#5F6F52]">.</span>
        </Link>

        {/* Icons - Right */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block hover:text-[#5F6F52] transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={toggleCart}
            className="relative hover:text-[#5F6F52] transition-colors"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#5F6F52] text-[#F9F7F2] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {items.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-50 bg-[#F9F7F2] p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
               <span className="font-serif text-2xl">Menu</span>
               <button onClick={() => setMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-serif">
              <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop All</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
              <Link href="/quiz" onClick={() => setMobileMenuOpen(false)}>Skin Quiz</Link>
              <Link href="/journal" onClick={() => setMobileMenuOpen(false)}>Journal</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

