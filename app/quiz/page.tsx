"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const questions = [
  {
    id: 1,
    question: "How does your skin feel midday?",
    options: [
      { label: "Oily & Shiny", value: "oily" },
      { label: "Dry & Tight", value: "dry" },
      { label: "Balanced", value: "normal" },
      { label: "Oily T-zone, Dry Cheeks", value: "combo" }
    ]
  },
  {
    id: 2,
    question: "What is your primary concern?",
    options: [
      { label: "Acne & Blemishes", value: "acne" },
      { label: "Fine Lines & Aging", value: "aging" },
      { label: "Dullness & Uneven Tone", value: "dullness" },
      { label: "Sensitivity & Redness", value: "sensitivity" }
    ]
  },
  {
    id: 3,
    question: "Describe your environment.",
    options: [
      { label: "Urban & Polluted", value: "urban" },
      { label: "Dry & Arid", value: "dry_climate" },
      { label: "Humid & Tropical", value: "humid" },
      { label: "Balanced Climate", value: "balanced" }
    ]
  }
];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleSelect = (value: string) => {
    setAnswers({ ...answers, [step]: value });
    setTimeout(() => {
      setStep(step + 1);
    }, 400);
  };

  const isFinished = step === questions.length;

  return (
    <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-[#F9F7F2]">
      <div className="w-full max-w-2xl px-6">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#2C3333]/10" />
          <span className="text-xs uppercase tracking-widest text-[#2C3333]/50">
            {isFinished ? "Analysis Complete" : `Question ${step + 1} of ${questions.length}`}
          </span>
          <div className="h-px flex-1 bg-[#2C3333]/10" />
        </div>

        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <h2 className="font-serif text-4xl mb-12">{questions[step].question}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {questions[step].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`p-8 border text-left transition-all group ${answers[step] === option.value ? 'border-[#5F6F52] bg-[#5F6F52] text-[#F9F7F2]' : 'border-[#E5E0D8] hover:border-[#5F6F52]'}`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-serif">{option.label}</span>
                      {answers[step] === option.value && <Check size={20} />}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <h2 className="font-serif text-5xl mb-6">Your Ritual Is Ready</h2>
              <p className="text-lg text-[#2C3333]/70 mb-12 max-w-lg mx-auto">
                Based on your skin profile, we've curated a balancing routine to restore hydration and protect against environmental stressors.
              </p>
              
              <div className="bg-white p-8 mb-12 flex flex-col md:flex-row items-center gap-8 text-left border border-[#E5E0D8]">
                <div className="relative w-32 h-40 flex-shrink-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=2068&auto=format&fit=crop" 
                    alt="Product"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5F6F52] mb-2 block">Top Match</span>
                  <h3 className="font-serif text-2xl mb-2">Botanical Facial Oil</h3>
                  <p className="text-sm text-[#2C3333]/60 mb-6">Rich in antioxidants and omega fatty acids to deeply nourish dry skin.</p>
                  <Link href="/shop" className="text-sm uppercase tracking-widest border-b border-[#2C3333] pb-1 hover:text-[#5F6F52] hover:border-[#5F6F52] transition-colors">
                    Add to Routine — $85
                  </Link>
                </div>
              </div>

              <button onClick={() => setStep(0)} className="text-sm text-[#2C3333]/50 hover:text-[#2C3333] transition-colors">
                Retake Quiz
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

