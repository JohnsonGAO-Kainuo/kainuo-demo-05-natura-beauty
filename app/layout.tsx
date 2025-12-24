import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import SocialWidget from "@/components/SocialWidget";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natura | Organic Skincare & Fragrance",
  description: "Pure, botanical formulations for the modern ritual. Handcrafted with intention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans bg-[#F9F7F2] text-[#2C3333] antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <SocialWidget />
      </body>
    </html>
  );
}
