import Image from "next/image"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "@/components/brand-icons"
import { site, whatsappUrl, navLinks } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-border">
                <Image src="/images/logo-angatu.png" alt="Angatu Viagens" fill className="object-cover" sizes="48px" />
              </span>
              <span className="font-display text-lg font-bold text-foreground">
                Angatu<span className="text-primary"> Viagens</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Seu próximo destino começa aqui. Planejamos sua viagem com segurança, conforto e atendimento
              personalizado.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Navegação</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Contato</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={site.phoneHref} className="transition-colors hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Onde estamos
            </h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Localização da Angatu Viagens"
                src="https://www.google.com/maps?q=Avenida%20Paulista%20São%20Paulo&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-44 w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Angatu Viagens. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com dedicação para levar você mais longe.
          </p>
        </div>
      </div>
    </footer>
  )
}
