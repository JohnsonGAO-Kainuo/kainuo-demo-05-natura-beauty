"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C3333] text-[#F9F7F2] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-semibold tracking-tight mb-6 block">
              Natura<span className="text-[#5F6F52]">.</span>
            </Link>
            <p className="text-[#F9F7F2]/60 max-w-sm mb-8">
              Pure, botanical formulations for the modern ritual. Handcrafted with intention in Portland, Oregon.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#F9F7F2]/20 flex items-center justify-center hover:bg-[#5F6F52] hover:border-[#5F6F52] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#F9F7F2]/20 flex items-center justify-center hover:bg-[#5F6F52] hover:border-[#5F6F52] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#F9F7F2]/20 flex items-center justify-center hover:bg-[#5F6F52] hover:border-[#5F6F52] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Shop</h4>
            <ul className="space-y-4 text-[#F9F7F2]/60 text-sm tracking-wide">
              <li><Link href="/shop" className="hover:text-[#F9F7F2] transition-colors">All Products</Link></li>
              <li><Link href="/shop" className="hover:text-[#F9F7F2] transition-colors">Bestsellers</Link></li>
              <li><Link href="/quiz" className="hover:text-[#F9F7F2] transition-colors">Skin Quiz</Link></li>
              <li><Link href="#" className="hover:text-[#F9F7F2] transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Newsletter</h4>
            <p className="text-[#F9F7F2]/60 text-sm mb-4">Subscribe for 10% off your first order.</p>
            <div className="flex border-b border-[#F9F7F2]/30 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none w-full text-sm placeholder-[#F9F7F2]/30"
              />
              <button className="text-[#F9F7F2]/60 hover:text-[#F9F7F2] transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F9F7F2]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#F9F7F2]/40">
          <p>&copy; {new Date().getFullYear()} Natura Beauty. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#F9F7F2]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#F9F7F2]">Terms of Service</Link>
            <Link href="#" className="hover:text-[#F9F7F2]">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

