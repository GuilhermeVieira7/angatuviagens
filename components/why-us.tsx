"use client"

import { motion } from "motion/react"
import { Award, HeartHandshake, BadgePercent, LifeBuoy } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const reasons = [
  {
    icon: Award,
    title: "Experiência",
    desc: "Anos de estrada e milhares de viagens realizadas com excelência e confiança.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    desc: "Você fala com pessoas de verdade, que entendem o seu sonho de viajar.",
  },
  {
    icon: BadgePercent,
    title: "Melhores preços",
    desc: "Negociamos as melhores condições e o parcelamento ideal para você.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte durante toda a viagem",
    desc: "Estamos com você antes, durante e depois — a qualquer momento.",
  },
]

const stats = [
  { value: "5.000+", label: "Viagens realizadas" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "40+", label: "Destinos no mundo" },
  { value: "24h", label: "Suporte disponível" },
]

export function WhyUs() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Por que escolher a Angatu?"
          title="Uma agência feita para cuidar de você"
          description="Mais do que vender viagens, criamos experiências memoráveis com dedicação em cada detalhe."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg shadow-primary/25">
                <r.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-2 gap-6 rounded-3xl border border-primary/15 bg-gradient-to-br from-accent to-card p-8 sm:p-10 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-primary sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
