"use client"

import { motion } from "motion/react"
import { Plane, Hotel, Car, ShieldCheck, Ship, FileText, CreditCard, Headphones } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const servicos = [
  { icon: Plane, title: "Passagens aéreas", desc: "As melhores tarifas nacionais e internacionais." },
  { icon: Hotel, title: "Hospedagem", desc: "Hotéis e resorts selecionados para você." },
  { icon: Car, title: "Aluguel de veículos", desc: "Mobilidade e liberdade no seu destino." },
  { icon: ShieldCheck, title: "Seguro viagem", desc: "Tranquilidade e proteção em toda a viagem." },
  { icon: Ship, title: "Cruzeiros", desc: "Roteiros marítimos inesquecíveis." },
  { icon: FileText, title: "Assessoria para viagens", desc: "Vistos, documentação e planejamento completo." },
  { icon: CreditCard, title: "Parcelamento facilitado", desc: "Condições especiais que cabem no seu bolso." },
  { icon: Headphones, title: "Atendimento personalizado", desc: "Um consultor dedicado do início ao fim." },
]

export function Servicos() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Tudo para sua viagem em um só lugar"
          description="Da passagem ao seguro, cuidamos de cada etapa para você viajar sem preocupações."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
