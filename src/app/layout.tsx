import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'arnaldoucuassapi',
  description: 'Hey, I’m Arnaldo Ucuassapi 👋',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-zinc-950 text-white px-24`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
