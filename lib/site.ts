export const site = {
  name: "Angatu Viagens",
  tagline: "Seu próximo destino começa aqui",
  phoneDisplay: "(11) 99999-0000",
  phoneHref: "tel:+5511999990000",
  whatsappNumber: "5511999990000",
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento de viagem com a Angatu Viagens.",
  instagram: "https://instagram.com",
  instagramHandle: "@angatuviagens",
  facebook: "https://facebook.com",
  address: "Av. das Nações, 1000 - São Paulo, SP",
  hours: "Seg a Sex: 9h às 18h · Sáb: 9h às 13h",
} as const

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Pacotes", href: "#pacotes" },
  { label: "Destinos", href: "#destinos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
]
