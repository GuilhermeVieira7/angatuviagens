"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { MapPin, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { whatsappUrl } from "@/lib/site"

const destinos = [
  {
    name: "Gramado",
    country: "Brasil",
    image: "/images/dest-gramado.png",
    description: "Charme europeu na serra gaúcha, com gastronomia, vinho e clima aconchegante.",
    price: "a partir de R$ 1.290",
  },
  {
    name: "Maceió",
    country: "Brasil",
    image: "/images/dest-maceio.png",
    description: "Piscinas naturais de águas cristalinas e praias paradisíacas do nordeste.",
    price: "a partir de R$ 1.590",
  },
  {
    name: "Cancún",
    country: "México",
    image: "/images/dest-cancun.png",
    description: "Resorts all inclusive, mar do Caribe e areias brancas de tirar o fôlego.",
    price: "a partir de R$ 4.890",
  },
  {
    name: "Paris",
    country: "França",
    image: "/images/dest-paris.png",
    description: "A cidade luz, com arte, romance e a icônica Torre Eiffel ao pôr do sol.",
    price: "a partir de R$ 6.290",
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    image: "/images/dest-buenosaires.png",
    description: "Tango, gastronomia e a energia vibrante da capital portenha.",
    price: "a partir de R$ 2.190",
  },
  {
    name: "Lisboa",
    country: "Portugal",
    image: "/images/dest-lisboa.png",
    description: "Ruas históricas, bondinhos amarelos e o encanto atemporal de Portugal.",
    price: "a partir de R$ 5.490",
  },
]

export function Destinos() {
  return (
    <section id="destinos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Destinos em destaque"
          title="Lugares que vão marcar sua história"
          description="Selecionamos experiências inesquecíveis pelo Brasil e pelo mundo. Escolha o seu e deixe o resto com a gente."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinos.map((dest, i) => (
            <motion.article
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={`${dest.name}, ${dest.country}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  <MapPin className="h-3.5 w-3.5" />
                  {dest.country}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/70">{dest.price}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">{dest.name}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                    {dest.description}
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground opacity-0 transition-all duration-500 group-hover:opacity-100"
                  >
                    Saiba mais
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
