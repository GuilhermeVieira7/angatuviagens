import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Pacotes } from "@/components/pacotes"
import { Destinos } from "@/components/destinos"
import { Servicos } from "@/components/servicos"
import { WhyUs } from "@/components/why-us"
import { Depoimentos } from "@/components/depoimentos"
import { Galeria } from "@/components/galeria"
import { InstagramFeed } from "@/components/instagram-feed"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Pacotes />
      <Destinos />
      <Servicos />
      <WhyUs />
      <Depoimentos />
      <Galeria />
      <InstagramFeed />
      <Cta />
      <Footer />
      <WhatsappFloat />
    </main>
  )
}
