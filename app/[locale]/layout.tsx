import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Pro } from "next/font/google"
import "../globals.css"
import { type Locale, locales, getTranslations } from "@/lib/i18n"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const crimsonPro = Crimson_Pro({ subsets: ["latin"], variable: "--font-serif" })

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale)
  
  return {
    title: `${t.Navigation.brandName} - Psychotherapy & Counseling`,
    description: t.HomePage.hero.description,
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params as { locale: Locale }
  
  return (
    <html lang={locale} className={`${inter.variable} ${crimsonPro.variable}`}>
      <body>{children}</body>
    </html>
  )
}