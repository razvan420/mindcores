'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { LanguageSwitcher } from './language-switcher'
import { type Locale } from '@/lib/i18n'

interface NavigationProps {
  locale: Locale
  t: any
}

export function Navigation({ locale, t }: NavigationProps) {
  const disorders = [
    { name: t.DisordersList.anxiety, href: `/${locale}/disorders/anxiety` },
    { name: t.DisordersList.depression, href: `/${locale}/disorders/depression` },
    { name: t.DisordersList.trauma, href: `/${locale}/disorders/trauma-ptsd` },
    { name: t.DisordersList.stress, href: `/${locale}/disorders/stress` },
    { name: t.DisordersList.relationships, href: `/${locale}/disorders/relationships` },
    { name: t.DisordersList.perinatalMood, href: `/${locale}/disorders/perinatal-mood` },
    { name: t.DisordersList.selfEsteem, href: `/${locale}/disorders/self-esteem` },
    { name: t.DisordersList.grief, href: `/${locale}/disorders/grief-loss` },
    { name: t.DisordersList.addiction, href: `/${locale}/disorders/addiction` },
    { name: t.DisordersList.adhd, href: `/${locale}/disorders/adhd` },
    { name: t.DisordersList.personality, href: `/${locale}/disorders/personality-disorders` },
    { name: t.DisordersList.sexualDysfunctions, href: `/${locale}/disorders/sexual-dysfunctions` },
    { name: t.DisordersList.eating, href: `/${locale}/disorders/eating-disorders` },
    { name: t.DisordersList.bipolar, href: `/${locale}/disorders/bipolar` },
    { name: t.DisordersList.mensMentalHealth, href: `/${locale}/disorders/mens-mental-health` },
    { name: t.DisordersList.attachmentDisorder, href: `/${locale}/disorders/attachment-disorder` },
  ]

  const therapies = [
    { name: t.TherapiesList.cbt, href: `/${locale}/therapies/cbt` },
    { name: t.TherapiesList.dbt, href: `/${locale}/therapies/dbt` },
    { name: t.TherapiesList.act, href: `/${locale}/therapies/act` },
    { name: t.TherapiesList.schemaTherapy, href: `/${locale}/therapies/schema-therapy` },
    { name: t.TherapiesList.emdr, href: `/${locale}/therapies/emdr` },
    { name: t.TherapiesList.mindfulness, href: `/${locale}/therapies/mindfulness` },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Mindcores Logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl md:text-2xl font-serif font-semibold text-foreground">
              {t.Navigation.brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href={`/${locale}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.Navigation.home}
            </Link>

            {/* Disorders Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t.Navigation.disorders}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2 max-h-96 overflow-y-auto">
                  {disorders.map((disorder) => (
                    <Link
                      key={disorder.href}
                      href={disorder.href}
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent rounded-md transition-colors"
                    >
                      {disorder.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Therapies Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t.Navigation.therapies}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {therapies.map((therapy) => (
                    <Link
                      key={therapy.href}
                      href={therapy.href}
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent rounded-md transition-colors"
                    >
                      {therapy.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={`/${locale}/group-programs`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.Navigation.groupPrograms}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.Navigation.contact}
            </Link>

            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>
    </nav>
  )
}