import { Navigation } from "@/components/navigation-i18n"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Heart, Brain, Users, Sparkles, Phone, Globe } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/i18n"

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  return (
    <div className="min-h-screen">
      <Navigation locale={locale} t={t} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            {t.HomePage.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-pretty">
            {t.HomePage.hero.subtitle}
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            {t.HomePage.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t.HomePage.hero.bookConsultation}
              </Button>
            </Link>
            <Link href={`/${locale}/disorders/anxiety`}>
              <Button size="lg" variant="outline">
                {t.HomePage.hero.exploreDisorders}
              </Button>
            </Link>
          </div>

          {/* Languages */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Globe className="h-4 w-4" />
            <span>{t.HomePage.hero.languagesAvailable}</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 text-card-foreground">
            {t.HomePage.philosophy.title}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty leading-relaxed">
            {t.HomePage.philosophy.description}
          </p>

          {/* Philosophy Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  {t.HomePage.philosophy.compassionate.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.HomePage.philosophy.compassionate.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <Brain className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  {t.HomePage.philosophy.evidenceBased.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.HomePage.philosophy.evidenceBased.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  {t.HomePage.philosophy.personalized.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.HomePage.philosophy.personalized.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <Sparkles className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  {t.HomePage.philosophy.holistic.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.HomePage.philosophy.holistic.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disorders Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              {t.HomePage.disorders.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              {t.HomePage.disorders.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(t.DisordersList).slice(0, 6).map(([key, name]) => (
              <Link key={key} href={`/${locale}/disorders/${key}`}>
                <Card className="border-none shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif font-semibold text-card-foreground">
                      {name as string}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href={`/${locale}/disorders`}>
              <Button variant="outline" size="lg">
                {t.HomePage.disorders.viewAll}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Therapies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-card-foreground">
              {t.HomePage.therapies.title}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t.HomePage.therapies.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href={`/${locale}/therapies/cbt`}>
              <Card className="border-none shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {t.HomePage.therapies.cbt.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.HomePage.therapies.cbt.description}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href={`/${locale}/therapies/dbt`}>
              <Card className="border-none shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {t.HomePage.therapies.dbt.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.HomePage.therapies.dbt.description}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href={`/${locale}/therapies/act`}>
              <Card className="border-none shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {t.HomePage.therapies.act.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.HomePage.therapies.act.description}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href={`/${locale}/therapies/emdr`}>
              <Card className="border-none shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {t.HomePage.therapies.emdr.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.HomePage.therapies.emdr.description}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href={`/${locale}/therapies/schema-therapy`}>
              <Card className="border-none shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {t.HomePage.therapies.schema.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.HomePage.therapies.schema.description}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href={`/${locale}/therapies/mindfulness`}>
              <Card className="border-none shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {t.HomePage.therapies.mindfulness.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.HomePage.therapies.mindfulness.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
            {t.HomePage.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            {t.HomePage.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t.HomePage.cta.button}
              </Button>
            </Link>
            <a href={`tel:${t.Common.phone}`} className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5" />
              {t.Common.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo.png" 
                alt="Mindcores Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-lg font-serif font-semibold text-card-foreground">
                {t.Navigation.brandName}
              </h3>
            </div>
            <p className="text-muted-foreground">
              {t.HomePage.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-card-foreground">
              {t.HomePage.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.Navigation.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/disorders`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.Navigation.disorders}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/therapies`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.Navigation.therapies}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/group-programs`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.Navigation.groupPrograms}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.Navigation.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-card-foreground">
              {t.HomePage.footer.contact}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>{t.HomePage.footer.phone}</li>
              <li>{t.HomePage.footer.responseTime}</li>
              <li>{t.HomePage.footer.languages}</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {t.HomePage.footer.copyright}
        </div>
      </footer>
    </div>
  )
}