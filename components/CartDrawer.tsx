"use client";

import { useCartStore } from "@/lib/store";
import { X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CartDrawer() {
  const { isOpen, toggleCart, items, total, removeItem, addItem } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#F9F7F2] z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-[#E5E0D8] flex items-center justify-between">
              <h2 className="font-serif text-2xl text-[#2C3333]">Your Cart ({items.length})</h2>
              <button onClick={toggleCart} className="hover:rotate-90 transition-transform duration-300">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-[#2C3333]/50">
                  <span className="text-4xl mb-4">🍂</span>
                  <p className="font-serif text-xl">Your basket is empty.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-24 h-32 bg-white">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif text-lg leading-tight mb-1">{item.name}</h3>
                          <button onClick={() => removeItem(item.id)} className="text-[#2C3333]/40 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs uppercase tracking-widest text-[#2C3333]/60">{item.category}</p>
                      </div>
                      
                      <div className="flex justify-between items-end">
                         <div className="flex items-center border border-[#E5E0D8]">
                           <button className="px-2 py-1 hover:bg-[#E5E0D8] transition-colors"><Minus size={14} /></button>
                           <span className="px-2 text-sm">{item.quantity}</span>
                           <button onClick={() => addItem(item)} className="px-2 py-1 hover:bg-[#E5E0D8] transition-colors"><Plus size={14} /></button>
                         </div>
                         <p className="font-medium">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-[#E5E0D8] bg-white">
                <div className="flex justify-between mb-4 font-serif text-xl">
                  <span>Subtotal</span>
                  <span>${total()}</span>
                </div>
                <p className="text-xs text-[#2C3333]/50 mb-6 text-center">Shipping & taxes calculated at checkout</p>
                <button className="w-full bg-[#2C3333] text-[#F9F7F2] py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#5F6F52] transition-colors flex items-center justify-center gap-2 group">
                  Checkout <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

