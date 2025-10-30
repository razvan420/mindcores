'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'
import { type Locale, locales, localeNames } from '@/lib/i18n'

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (newLocale: Locale) => {
    // Remove the current locale from the pathname
    const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'
    
    // Navigate to the new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`)
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        <Globe className="h-4 w-4" />
        <span>{localeNames[currentLocale]}</span>
      </button>
      <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="p-2">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={`block w-full text-left px-4 py-2 text-sm rounded-md transition-colors ${
                locale === currentLocale
                  ? 'bg-accent text-accent-foreground font-medium'
                  : 'text-card-foreground hover:bg-accent'
              }`}
            >
              {localeNames[locale]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}