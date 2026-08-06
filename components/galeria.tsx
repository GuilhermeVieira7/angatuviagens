"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { SectionHeading } from "@/components/section-heading"

const gallery = [
  { src: "/images/gallery-1.png", alt: "Bangalôs sobre a água nas Maldivas", ratio: "aspect-[3/4]" },
  { src: "/images/dest-maceio.png", alt: "Praia de Maceió", ratio: "aspect-square" },
  { src: "/images/gallery-2.png", alt: "Santorini na Grécia", ratio: "aspect-[4/5]" },
  { src: "/images/dest-paris.png", alt: "Torre Eiffel em Paris", ratio: "aspect-[4/3]" },
  { src: "/images/gallery-3.png", alt: "Rio de Janeiro ao pôr do sol", ratio: "aspect-[3/4]" },
  { src: "/images/dest-cancun.png", alt: "Praia de Cancún", ratio: "aspect-square" },
  { src: "/images/gallery-4.png", alt: "Skyline de Dubai", ratio: "aspect-[4/5]" },
  { src: "/images/dest-lisboa.png", alt: "Bondinho em Lisboa", ratio: "aspect-[4/3]" },
]

export function Galeria() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title="Destinos que inspiram a próxima aventura"
          description="Um pequeno vislumbre dos lugares incríveis que já levamos nossos clientes."
        />

        <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {gallery.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block break-inside-avoid overflow-hidden rounded-2xl"
            >
              <div className={`relative ${img.ratio} w-full`}>
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="absolute bottom-3 left-4 right-4 translate-y-2 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
