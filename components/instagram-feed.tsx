"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import { InstagramIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { site } from "@/lib/site"

const posts = [
  "/images/gallery-2.png",
  "/images/dest-gramado.png",
  "/images/gallery-1.png",
  "/images/dest-buenosaires.png",
  "/images/gallery-3.png",
  "/images/dest-lisboa.png",
  "/images/gallery-4.png",
  "/images/dest-cancun.png",
]

export function InstagramFeed() {
  const loop = [...posts, ...posts]
  return (
    <section className="relative overflow-hidden bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <InstagramIcon className="h-4 w-4" />
            {site.instagramHandle}
          </span>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Acompanhe nossas viagens
          </h2>
          <p className="max-w-xl text-pretty text-muted-foreground">
            Inspiração diária, novidades e os bastidores das melhores experiências de viagem.
          </p>
        </Reveal>
      </div>

      <div className="pause-on-hover relative mt-14 flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 gap-4 pr-4">
          {loop.map((src, i) => (
            <a
              key={i}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-52 w-52 shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-64"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt="Publicação do Instagram da Angatu Viagens"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="256px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl justify-center px-5 sm:px-8">
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/80 px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
        >
          <InstagramIcon className="h-5 w-5" />
          Seguir no Instagram
        </a>
      </div>
    </section>
  )
}
