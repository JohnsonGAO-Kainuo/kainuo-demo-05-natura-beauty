"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="lg:w-1/2">
            <h1 className="font-serif text-6xl mb-8 leading-tight">Formulated with <br/> <span className="italic text-[#5F6F52]">Intention</span></h1>
            <p className="text-lg text-[#2C3333]/70 leading-relaxed mb-8">
              Natura was born from a desire to slow down. In a world of 10-step routines and harsh actives, we believe in the power of simplicity.
            </p>
            <p className="text-lg text-[#2C3333]/70 leading-relaxed">
              We source our botanicals from small, family-owned farms that practice regenerative agriculture. Every bottle is filled by hand in our studio in Portland, Oregon.
            </p>
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

        <div className="grid md:grid-cols-3 gap-12 text-center bg-white p-16 border border-[#E5E0D8]">
          <div>
            <h3 className="font-serif text-2xl mb-4">Clean</h3>
            <p className="text-sm text-[#2C3333]/60 leading-relaxed">Free from parabens, sulfates, synthetic fragrances, and silicones. Always.</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Cruelty-Free</h3>
            <p className="text-sm text-[#2C3333]/60 leading-relaxed">We never test on animals. We are Leaping Bunny certified.</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Sustainable</h3>
            <p className="text-sm text-[#2C3333]/60 leading-relaxed">Packaged in glass and recyclable aluminum. We offset 100% of our carbon footprint.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

