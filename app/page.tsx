"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useCartStore } from "@/lib/store";

// Mock Data
const products = [
  {
    id: "1",
    name: "Botanical Facial Oil",
    price: 85,
    category: "Face",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=2068&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Hydrating Cream Cleanser",
    price: 45,
    category: "Cleanser",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Resurfacing Clay Mask",
    price: 60,
    category: "Treatment",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2076&auto=format&fit=crop"
  }
];

export default function Home() {
  const { addItem } = useCartStore();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=2070&auto=format&fit=crop" 
          alt="Natural Landscape" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="relative z-10 text-center text-[#F9F7F2] max-w-2xl px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.3em] text-sm mb-6"
          >
            The Art of Slow Beauty
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl mb-8 leading-tight"
          >
            Return to <br/> <span className="italic font-light">Nature</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/shop" className="inline-block border border-[#F9F7F2] px-10 py-4 hover:bg-[#F9F7F2] hover:text-[#2C3333] transition-all uppercase tracking-widest text-sm">
              Discover Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-32 px-6 container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C3333] mb-8 leading-snug">
            "We believe in the intelligence of plants and the wisdom of rituals."
          </h2>
          <p className="text-[#2C3333]/70 text-lg leading-relaxed font-serif">
            Formulated without compromise. Our skincare is handcrafted in small batches using only the most potent, sustainably harvested botanicals.
          </p>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h3 className="font-serif text-3xl text-[#2C3333]">Seasonal Favorites</h3>
            <Link href="/shop" className="text-sm border-b border-[#2C3333] pb-1 hover:text-[#5F6F52] hover:border-[#5F6F52] transition-colors">View All</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] bg-[#F9F7F2] mb-6 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <button 
                    onClick={() => addItem(product)}
                    className="absolute bottom-0 left-0 w-full bg-[#2C3333] text-[#F9F7F2] py-4 uppercase tracking-widest text-xs translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Add to Cart — ${product.price}
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-serif text-xl mb-1 group-hover:text-[#5F6F52] transition-colors">{product.name}</h4>
                    <p className="text-xs uppercase tracking-widest text-[#2C3333]/50">{product.category}</p>
                  </div>
                  <span className="font-medium">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Quiz CTA */}
      <section className="py-32 px-6 bg-[#5F6F52] text-[#F9F7F2]">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative aspect-square w-full">
             <Image 
               src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
               alt="Skin Texture"
               fill
               className="object-cover opacity-80"
             />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-serif text-5xl mb-6">Not sure where to start?</h2>
            <p className="text-xl opacity-80 mb-10 leading-relaxed max-w-md">
              Take our holistic skin analysis quiz. We'll curate a personalized ritual based on your environment, lifestyle, and skin concerns.
            </p>
            <Link href="/quiz" className="bg-[#F9F7F2] text-[#2C3333] px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#2C3333] hover:text-[#F9F7F2] transition-colors flex items-center gap-2 w-fit">
              Start Analysis <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
