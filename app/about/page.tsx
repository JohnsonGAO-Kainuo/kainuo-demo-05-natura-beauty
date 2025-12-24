"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-6xl mb-8 leading-tight text-[#2C3333]"
            >
              Formulated with <br/> <span className="italic text-[#5F6F52]">Intention</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#2C3333]/70 leading-relaxed mb-8"
            >
              Natura was born from a desire to slow down. In a world of 10-step routines and harsh actives, we believe in the power of simplicity.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-[#2C3333]/70 leading-relaxed"
            >
              We source our botanicals from small, family-owned farms that practice regenerative agriculture. Every bottle is filled by hand in our studio in Portland, Oregon.
            </motion.p>
          </div>
          <div className="lg:w-1/2 relative aspect-[4/5] w-full">
            <Image 
              src="https://images.unsplash.com/photo-1556228720-1987dfdd7386?q=80&w=2070&auto=format&fit=crop" 
              alt="Making Process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-white py-24 mb-32 border-y border-[#E5E0D8]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto bg-[#F9F7F2] rounded-full flex items-center justify-center text-3xl">🌿</div>
              <h3 className="font-serif text-2xl text-[#2C3333]">Clean Formula</h3>
              <p className="text-sm text-[#2C3333]/60 leading-relaxed max-w-xs mx-auto">
                Free from parabens, sulfates, synthetic fragrances, and silicones. We use cold-pressed oils to preserve potency.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto bg-[#F9F7F2] rounded-full flex items-center justify-center text-3xl">🐇</div>
              <h3 className="font-serif text-2xl text-[#2C3333]">Cruelty-Free</h3>
              <p className="text-sm text-[#2C3333]/60 leading-relaxed max-w-xs mx-auto">
                We never test on animals. We are Leaping Bunny certified and donate 1% of profits to animal welfare.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto bg-[#F9F7F2] rounded-full flex items-center justify-center text-3xl">♻️</div>
              <h3 className="font-serif text-2xl text-[#2C3333]">Sustainable</h3>
              <p className="text-sm text-[#2C3333]/60 leading-relaxed max-w-xs mx-auto">
                Packaged in glass and recyclable aluminum. We offset 100% of our carbon footprint through reforestation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3 relative aspect-[3/4] w-full">
             <Image 
               src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
               alt="Founder"
               fill
               className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div className="md:w-2/3">
            <h2 className="font-serif text-4xl mb-8">"Beauty should be a ritual, not a chore."</h2>
            <p className="text-[#2C3333]/70 leading-relaxed mb-6">
              I started Natura in my kitchen, mixing oils for my own sensitive skin. I realized that the beauty industry was selling us "more" when what we needed was "better".
            </p>
            <p className="text-[#2C3333]/70 leading-relaxed mb-8">
              Our products are designed to reconnect you with yourself. The scent of wild rose, the texture of clay, the cooling sensation of aloe — these are moments of mindfulness.
            </p>
            <div className="font-serif italic text-xl text-[#5F6F52]">— Elena, Founder</div>
          </div>
        </div>
      </div>
    </div>
  );
}
