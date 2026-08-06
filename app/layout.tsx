import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Angatu Viagens | Seu próximo destino começa aqui',
  description:
    'Agência de viagens premium. Planejamos sua viagem com segurança, conforto e atendimento personalizado. Passagens, hospedagem, cruzeiros, seguro viagem e muito mais.',
  keywords: [
    'agência de viagens',
    'Angatu Viagens',
    'pacotes de viagem',
    'passagens aéreas',
    'cruzeiros',
    'seguro viagem',
    'viagens internacionais',
  ],
  openGraph: {
    title: 'Angatu Viagens | Seu próximo destino começa aqui',
    description:
      'Planejamos sua viagem com segurança, conforto e atendimento personalizado.',
    type: 'website',
    locale: 'pt_BR',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
