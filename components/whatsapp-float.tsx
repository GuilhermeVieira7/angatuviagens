"use client"

import { motion } from "motion/react"
import { MessageCircle } from "lucide-react"
import { whatsappUrl } from "@/lib/site"

export function WhatsappFloat() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-xl shadow-black/20 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="h-6 w-6" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[140px] sm:block">
        Fale conosco
      </span>
    </motion.a>
  )
}
