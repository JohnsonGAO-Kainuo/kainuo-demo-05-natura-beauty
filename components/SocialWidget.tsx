"use client";

import { MessageCircle, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SocialWidget() {
  const socialLinks = [
    { icon: MessageCircle, href: "#", color: "bg-[#25D366]", label: "WhatsApp" },
    { icon: Linkedin, href: "#", color: "bg-[#0077B5]", label: "LinkedIn" },
    { icon: Instagram, href: "#", color: "bg-[#E4405F]", label: "Instagram" },
    { icon: Facebook, href: "#", color: "bg-[#1877F2]", label: "Facebook" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.15 }}
          className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-xl transition-all cursor-pointer`}
          title={social.label}
        >
          <social.icon size={18} />
        </motion.a>
      ))}
    </div>
  );
}

