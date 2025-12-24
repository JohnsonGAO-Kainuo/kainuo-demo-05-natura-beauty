"use client";

import { useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/lib/store";

const products = [
  { id: "1", name: "Botanical Facial Oil", price: 85, category: "Face", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=2068&auto=format&fit=crop" },
  { id: "2", name: "Hydrating Cream Cleanser", price: 45, category: "Cleanser", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop" },
  { id: "3", name: "Resurfacing Clay Mask", price: 60, category: "Treatment", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2076&auto=format&fit=crop" },
  { id: "4", name: "Rosewater Mist", price: 35, category: "Toner", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop" },
  { id: "5", name: "Vitamin C Serum", price: 92, category: "Serum", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop" },
  { id: "6", name: "Night Recovery Balm", price: 78, category: "Moisturizer", image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1974&auto=format&fit=crop" },
];

const categories = ["All", "Face", "Cleanser", "Treatment", "Toner", "Serum", "Moisturizer"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addItem } = useCartStore();

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-5xl text-[#2C3333] mb-12 text-center">The Collection</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm uppercase tracking-widest">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-1 border-b-2 transition-colors ${activeCategory === cat ? 'border-[#5F6F52] text-[#5F6F52]' : 'border-transparent text-[#2C3333]/50 hover:text-[#2C3333]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-white mb-6 overflow-hidden">
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
    </div>
  );
}

