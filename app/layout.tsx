import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Pro } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const crimsonPro = Crimson_Pro({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Raluca Diana Tocoian - Psychotherapy & Counseling",
  description:
    "Professional psychological services, cognitive assessments, diagnosis, and counseling. Evidence-based therapies including CBT, DBT, ACT, EMDR, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body>{children}</body>
    </html>
  )
}
