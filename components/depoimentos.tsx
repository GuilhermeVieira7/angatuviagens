"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const depoimentos = [
  {
    name: "Mariana Costa",
    city: "São Paulo, SP",
    avatar: "/images/avatar-1.png",
    text: "A Angatu transformou nossa lua de mel em algo mágico. Cada detalhe foi pensado com carinho e o atendimento foi impecável do começo ao fim.",
  },
  {
    name: "Ricardo Almeida",
    city: "Belo Horizonte, MG",
    avatar: "/images/avatar-2.png",
    text: "Viajei com a família para Cancún e foi tudo perfeito. Preço justo, suporte total e uma equipe que realmente se importa. Recomendo de olhos fechados!",
  },
  {
    name: "Juliana Ferreira",
    city: "Curitiba, PR",
    avatar: "/images/avatar-3.png",
    text: "Sempre tive medo de organizar viagens internacionais, mas a Angatu cuidou de tudo — vistos, seguros e roteiro. Me senti segura o tempo todo.",
  },
]

export function Depoimentos() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % depoimentos.length), [])
  const prev = () => setIndex((i) => (i - 1 + depoimentos.length) % depoimentos.length)

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const current = depoimentos[index]

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Histórias de quem viajou com a gente"
          description="A confiança dos nossos clientes é o nosso maior destino."
        />

        <div className="relative mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-xl shadow-primary/5 sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
                  &ldquo;{current.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-primary/20">
                    <Image src={current.avatar || "/placeholder.svg"} alt={current.name} fill className="object-cover" sizes="56px" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-foreground">{current.name}</p>
                    <p className="text-sm text-muted-foreground">{current.city}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Depoimento anterior"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para o depoimento ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Próximo depoimento"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
