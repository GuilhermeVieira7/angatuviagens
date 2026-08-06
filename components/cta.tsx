"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react"
import { Send, CheckCircle2, MessageCircle } from "lucide-react"
import { whatsappUrl, site } from "@/lib/site"

export function Cta() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const nome = String(data.get("nome") || "")
    const destino = String(data.get("destino") || "")
    const msg = `Olá! Meu nome é ${nome} e gostaria de um orçamento para: ${destino}.`
    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank")
    setSent(true)
  }

  return (
    <section id="contato" className="relative isolate overflow-hidden py-24 sm:py-32">
      <Image src="/images/cta-clouds.png" alt="" fill className="-z-20 object-cover" sizes="100vw" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/90 via-primary/80 to-black/70" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white"
        >
          <h2 className="text-balance font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Pronto para viver sua próxima aventura?
          </h2>
          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-white/85">
            Nossa equipe está pronta para encontrar o destino perfeito para você. Solicite um orçamento sem compromisso.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
          >
            <MessageCircle className="h-5 w-5" />
            Prefiro falar no WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-white/20 bg-background/95 p-7 shadow-2xl backdrop-blur-xl sm:p-9"
        >
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <h3 className="font-display text-2xl font-bold text-foreground">Solicitação enviada!</h3>
              <p className="text-muted-foreground">
                Abrimos o WhatsApp para você finalizar. Nossa equipe responderá em instantes.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-display text-2xl font-bold text-foreground">Solicitar orçamento</h3>
              <p className="mt-1 text-sm text-muted-foreground">Preencha e retornaremos rapidinho.</p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className="text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    required
                    placeholder="Seu nome completo"
                    className="rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="destino" className="text-sm font-medium text-foreground">
                    Destino desejado
                  </label>
                  <input
                    id="destino"
                    name="destino"
                    required
                    placeholder="Ex: Maceió, Cancún, Paris..."
                    className="rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.02]"
                >
                  Solicitar orçamento
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
