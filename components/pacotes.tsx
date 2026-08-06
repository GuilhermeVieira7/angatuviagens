"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Calendar, MapPin, PlaneTakeoff, Sparkles, MessageCircle, Heart, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { site } from "@/lib/site"

interface Pacote {
  id: string
  title: string
  subtitle: string
  location: string
  period: string
  departure?: string
  badge: string
  image: string
  description: string
  highlights: string[]
  whatsappText: string
  featured?: boolean
}

const pacotes: Pacote[] = [
  {
    id: "rio-reveillon",
    title: "Rio de Janeiro — Réveillon",
    subtitle: "Virada inesquecível na Cidade Maravilhosa",
    location: "Rio de Janeiro, RJ",
    period: "Réveillon (Dez/Jan)",
    departure: "Saindo de Carajás",
    badge: "Saída Carajás • Vagas Limitadas",
    image: "/images/promo-rio-reveillon.png",
    description: "Celebre o Réveillon mais famoso do planeta em Copacabana com o conforto e conveniência do voo direto saindo de Carajás.",
    highlights: ["Voo direto de Carajás", "Hospedagem selecionada", "Show de luzes & queima de fogos"],
    whatsappText: "Olá! Gostaria de mais informações sobre o Pacote Réveillon no Rio de Janeiro (saindo de Carajás).",
    featured: true,
  },
  {
    id: "rio-angra",
    title: "Rio de Janeiro & Angra dos Reis",
    subtitle: "Mar de águas cristalinas e energia carioca",
    location: "Rio de Janeiro + Angra dos Reis",
    period: "Outubro",
    badge: "Combo Especial Outubro",
    image: "/images/promo-rio-angra.png",
    description: "Combine o charme urbano do Rio com as ilhas paradisíacas e passeios de lancha pelas águas esmeraldas de Angra dos Reis.",
    highlights: ["Transfer exclusivo", "Passeio de escuna/lancha em Angra", "Roteiro flexível"],
    whatsappText: "Olá! Tenho interesse no Pacote Rio de Janeiro com Angra dos Reis para Outubro.",
  },
  {
    id: "salvador-ilhas",
    title: "Salvador & Ilhas Maravilhas",
    subtitle: "Cultura, axé e praias tropicais",
    location: "Salvador & Ilhas, BA",
    period: "Outubro",
    badge: "Bahia em Outubro",
    image: "/images/promo-salvador-ilhas.png",
    description: "Experiência completa unindo a gastronomia e história de Salvador aos recantos calmos e águas mornas das Ilhas Baianas.",
    highlights: ["Passeio de barco pelas Ilhas", "Centro Histórico & Pelourinho", "Praias paradisíacas"],
    whatsappText: "Olá! Quero saber mais sobre o Pacote Salvador com Ilhas Maravilhas para Outubro.",
  },
  {
    id: "gramado-namorados",
    title: "Gramado — Dia dos Namorados",
    subtitle: "Romance e aconchego na Serra Gaúcha",
    location: "Gramado & Canela, RS",
    period: "Dia dos Namorados 2027",
    badge: "Namorados 2027 • Reserva Antecipada",
    image: "/images/promo-gramado-namorados.png",
    description: "Celebre o amor em grande estilo. Fondue, arquitetura europeia, vinhos premiados e a atmosfera mais romântica do Brasil.",
    highlights: ["Noite romântica com fondue", "Tour de vinhos & chocolates", "Condições especiais de reserva"],
    whatsappText: "Olá! Quero garantir minha vaga no Pacote Gramado para o Dia dos Namorados 2027.",
  },
  {
    id: "santiago-namorados",
    title: "Santiago — Dia dos Namorados",
    subtitle: "Vinhos, Andes e neve no inverno chileno",
    location: "Santiago, Chile",
    period: "Dia dos Namorados 2027",
    badge: "Internacional Romântico 2027",
    image: "/images/promo-santiago-namorados.png",
    description: "Proporcione uma viagem inesquecível a dois, explorando vinhedos charmosos ao pé da Cordilheira e paisagens cobertas de neve.",
    highlights: ["Tour por vinhedos boutique", "Visita à Cordilheira dos Andes", "Pacote romântico para casais"],
    whatsappText: "Olá! Gostaria de orçar o Pacote Santiago no Dia dos Namorados 2027.",
  },
]

export function Pacotes() {
  return (
    <section id="pacotes" className="relative py-24 sm:py-32 bg-secondary/30 border-y border-border/50">
      {/* Glow decorativo de fundo */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pacotes Promocionais Exclusivos"
          title="Oportunidades Especiais de Viagem"
          description="Seleção premium de pacotes com datas comemorativas e saídas especiais. Reserve com antecedência e garanta os melhores valores."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pacotes.map((pacote, i) => {
            const waUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(pacote.whatsappText)}`

            return (
              <motion.article
                key={pacote.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15 ${
                  pacote.featured ? "lg:col-span-2 lg:flex-row" : ""
                }`}
              >
                {/* Imagem do Pacote */}
                <div
                  className={`relative overflow-hidden ${
                    pacote.featured ? "lg:w-1/2 aspect-[4/3] lg:aspect-auto" : "aspect-[16/11]"
                  }`}
                >
                  <Image
                    src={pacote.image}
                    alt={pacote.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badge Promocional */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/95 px-3 py-1 text-xs font-bold text-primary-foreground shadow-md backdrop-blur">
                      <Sparkles className="h-3.5 w-3.5" />
                      {pacote.badge}
                    </span>
                  </div>

                  {pacote.departure && (
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-semibold text-white border border-white/20 backdrop-blur">
                      <PlaneTakeoff className="h-3.5 w-3.5 text-primary" />
                      {pacote.departure}
                    </div>
                  )}
                </div>

                {/* Conteúdo do Card */}
                <div className={`flex flex-1 flex-col justify-between p-6 sm:p-7 ${pacote.featured ? "lg:w-1/2" : ""}`}>
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground gap-2">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {pacote.location}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-foreground">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {pacote.period}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {pacote.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-primary uppercase tracking-wider">{pacote.subtitle}</p>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pacote.description}</p>

                    {/* Destaques */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pacote.highlights.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/60 px-3 py-1 text-[11px] font-medium text-foreground/80"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botão de Ação WhatsApp */}
                  <div className="mt-7 pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                    <span className="text-xs text-muted-foreground">Consulte saídas e condições</span>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:scale-105 hover:shadow-primary/30"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Garantir Vaga
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
