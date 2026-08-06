"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { MessageCircle, ArrowRight, Star, ShieldCheck, ChevronDown } from "lucide-react"
import { whatsappUrl } from "@/lib/site"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85])

  return (
    <section id="inicio" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-beach.png"
          alt="Praia paradisíaca de águas cristalinas"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/50 to-black/70"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-24 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md"
          >
            <span className="flex items-center gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="text-white/90">Mais de 5.000 viagens realizadas</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Angatu Viagens
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-xl font-medium text-primary-foreground sm:text-2xl"
          >
            <span className="bg-primary/90 box-decoration-clone rounded-md px-2 py-0.5">
              Seu próximo destino começa aqui
            </span>
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
            Planejamos sua viagem com segurança, conforto e atendimento personalizado — do sonho ao embarque, cuidamos
            de cada detalhe.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pacotes"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:scale-[1.03] hover:shadow-primary/50"
            >
              Ver pacotes promocionais
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary-foreground" />
              Atendimento seguro e personalizado
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Parcelamento facilitado
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de rolagem */}
      <motion.a
        href="#pacotes"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/90 transition-all hover:text-white group"
      >
        <span className="text-[11px] font-medium tracking-wide text-white/90 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 group-hover:border-white/40 transition-colors shadow-lg">
          deslize para baixo para mais informações
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 border border-white/25 backdrop-blur-md shadow-md group-hover:bg-white/30"
        >
          <ChevronDown className="h-4 w-4 text-white" />
        </motion.div>
      </motion.a>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
