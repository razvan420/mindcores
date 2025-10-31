import { Navigation } from "@/components/navigation-i18n"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone, Brain } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/i18n"

export default async function CBTPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  // Type guards to check which structure we have
  const hasComponents = 'components' in t.CBTPage
  const hasPrinciples = 'principles' in t.CBTPage
  const hasProcess = 'process' in t.CBTPage

  return (
    <div className="min-h-screen">
      <Navigation locale={locale} t={t} />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Brain className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              {t.CBTPage.title}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            {t.CBTPage.subtitle}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t.Common.bookConsultation}
            </Button>
          </Link>
        </div>
      </section>

      {/* What is CBT Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">{t.CBTPage.what.title}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {t.CBTPage.what.description}
          </p>
        </div>
      </section>

      {/* Core Components/Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">
            {hasComponents ? (t.CBTPage as any).components.title : (t.CBTPage as any).principles.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {locale === 'en' && hasComponents && (
              <>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).components.cognitive.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).components.cognitive.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).components.behavioral.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).components.behavioral.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).components.exposure.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).components.exposure.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).components.skills.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).components.skills.description}
                    </p>
                  </CardContent>
                </Card>
              </>
            )}

            {locale === 'de' && hasPrinciples && (
              <>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).principles.cognitive.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).principles.cognitive.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).principles.behavioral.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).principles.behavioral.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).principles.problemSolving.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).principles.problemSolving.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).principles.exposure.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).principles.exposure.description}
                    </p>
                  </CardContent>
                </Card>
              </>
            )}

            {locale === 'ro' && hasComponents && (
              <>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).components.cognitive.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).components.cognitive.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).components.behavioral.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).components.behavioral.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).components.exposure.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).components.exposure.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                      {(t.CBTPage as any).components.problemSolving.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {(t.CBTPage as any).components.problemSolving.description}
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">{t.CBTPage.conditions.title}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {t.CBTPage.conditions.list.map((condition, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">{condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section (German only) */}
      {locale === 'de' && hasProcess && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">{(t.CBTPage as any).process.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {(t.CBTPage as any).process.assessment.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {(t.CBTPage as any).process.assessment.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {(t.CBTPage as any).process.education.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {(t.CBTPage as any).process.education.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {(t.CBTPage as any).process.identification.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {(t.CBTPage as any).process.identification.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {(t.CBTPage as any).process.challenging.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {(t.CBTPage as any).process.challenging.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {(t.CBTPage as any).process.practice.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {(t.CBTPage as any).process.practice.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {(t.CBTPage as any).process.maintenance.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {(t.CBTPage as any).process.maintenance.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">{t.CBTPage.expect.title}</h2>
          <div className="space-y-4">
            {t.CBTPage.expect.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t.CBTPage.cta.title}</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            {t.CBTPage.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={`/${locale}/contact`}>
              <Button size="lg" variant="secondary">
                {t.Common.scheduleConsultation}
              </Button>
            </Link>
            <a href="tel:+12122555511" className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5" />
              {t.Common.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}