import { Navigation } from "@/components/navigation-i18n"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/i18n"
import { ContactForm } from "@/components/contact-form"

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getTranslations(locale)

  return (
    <div className="min-h-screen">
      <Navigation locale={locale} t={t} />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            {t.ContactPage.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            {t.ContactPage.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">{t.ContactPage.info.title}</h2>

              <div className="space-y-6">
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{t.ContactPage.info.phone}</h3>
                        <a href="tel:+12122555511" className="text-muted-foreground hover:text-foreground">
                          {t.ContactPage.info.phoneValue}
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">{t.ContactPage.info.responseTimeValue}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{t.ContactPage.info.email}</h3>
                        <a
                          href="mailto:contact@ralucatocoian.com"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          contact@ralucatocoian.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">{t.ContactPage.info.responseTimeValue}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{t.ContactPage.info.languages}</h3>
                        <p className="text-muted-foreground">{t.ContactPage.info.languagesValue}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {locale === 'en' && 'Services available in multiple languages'}
                          {locale === 'de' && 'Dienstleistungen in mehreren Sprachen verfügbar'}
                          {locale === 'ro' && 'Servicii disponibile în mai multe limbi'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">
                          {locale === 'en' && 'Office Hours'}
                          {locale === 'de' && 'Bürozeiten'}
                          {locale === 'ro' && 'Program'}
                        </h3>
                        <div className="text-muted-foreground space-y-1">
                          {locale === 'en' && (
                            <>
                              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                              <p>Saturday: 10:00 AM - 4:00 PM</p>
                              <p>Sunday: Closed</p>
                            </>
                          )}
                          {locale === 'de' && (
                            <>
                              <p>Montag - Freitag: 9:00 - 19:00 Uhr</p>
                              <p>Samstag: 10:00 - 16:00 Uhr</p>
                              <p>Sonntag: Geschlossen</p>
                            </>
                          )}
                          {locale === 'ro' && (
                            <>
                              <p>Luni - Vineri: 9:00 - 19:00</p>
                              <p>Sâmbătă: 10:00 - 16:00</p>
                              <p>Duminică: Închis</p>
                            </>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {locale === 'en' && 'Evening appointments available'}
                          {locale === 'de' && 'Abendtermine verfügbar'}
                          {locale === 'ro' && 'Programări seara disponibile'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">
                          {locale === 'en' && 'Location'}
                          {locale === 'de' && 'Standort'}
                          {locale === 'ro' && 'Locație'}
                        </h3>
                        <p className="text-muted-foreground">
                          {locale === 'en' && 'Online & In-Person Sessions Available'}
                          {locale === 'de' && 'Online- und persönliche Sitzungen verfügbar'}
                          {locale === 'ro' && 'Sesiuni online și în persoană disponibile'}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {locale === 'en' && 'Flexible options to meet your needs and preferences'}
                          {locale === 'de' && 'Flexible Optionen, um Ihre Bedürfnisse und Vorlieben zu erfüllen'}
                          {locale === 'ro' && 'Opțiuni flexibile pentru a vă satisface nevoile și preferințele'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form - Now using the new ContactForm component */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">{t.ContactPage.form.title}</h2>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <ContactForm translations={t.ContactPage.form} locale={locale} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-card-foreground">
            {t.ContactPage.faq.title}
          </h2>

          <div className="space-y-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {t.ContactPage.faq.q1.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.ContactPage.faq.q1.answer}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {t.ContactPage.faq.q2.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.ContactPage.faq.q2.answer}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {t.ContactPage.faq.q3.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.ContactPage.faq.q3.answer}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {locale === 'en' && 'How long does therapy typically last?'}
                  {locale === 'de' && 'Wie lange dauert die Therapie in der Regel?'}
                  {locale === 'ro' && 'Cât durează de obicei terapia?'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {locale === 'en' && 'The duration of therapy varies depending on your individual needs and goals. Some people benefit from short-term therapy (8-12 sessions), while others engage in longer-term treatment. We\'ll discuss this during your initial consultation.'}
                  {locale === 'de' && 'Die Dauer der Therapie variiert je nach Ihren individuellen Bedürfnissen und Zielen. Manche Menschen profitieren von einer Kurzzeittherapie (8-12 Sitzungen), während andere eine längerfristige Behandlung durchführen. Wir werden dies während Ihrer Erstberatung besprechen.'}
                  {locale === 'ro' && 'Durata terapiei variază în funcție de nevoile și obiectivele tale individuale. Unii oameni beneficiază de terapie pe termen scurt (8-12 sesiuni), în timp ce alții se angajează în tratament pe termen lung. Vom discuta acest lucru în timpul consultației inițiale.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {locale === 'en' && 'Is therapy confidential?'}
                  {locale === 'de' && 'Ist die Therapie vertraulich?'}
                  {locale === 'ro' && 'Este terapia confidențială?'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {locale === 'en' && 'Yes, all therapy sessions are confidential. Information is only shared with your written consent, except in specific situations required by law (such as risk of harm to self or others, child abuse, or court orders).'}
                  {locale === 'de' && 'Ja, alle Therapiesitzungen sind vertraulich. Informationen werden nur mit Ihrer schriftlichen Zustimmung weitergegeben, außer in bestimmten gesetzlich vorgeschriebenen Situationen (wie Gefahr für sich selbst oder andere, Kindesmissbrauch oder gerichtliche Anordnungen).'}
                  {locale === 'ro' && 'Da, toate sesiunile de terapie sunt confidențiale. Informațiile sunt partajate doar cu consimțământul tău scris, cu excepția anumitor situații prevăzute de lege (cum ar fi riscul de vătămare a propriei persoane sau a altora, abuzul asupra copiilor sau ordine judecătorești).'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-destructive/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4 text-destructive">
            {locale === 'en' && 'In Case of Emergency'}
            {locale === 'de' && 'Im Notfall'}
            {locale === 'ro' && 'În Caz de Urgență'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {locale === 'en' && 'If you are experiencing a mental health emergency, please call 911 or go to your nearest emergency room.'}
            {locale === 'de' && 'Wenn Sie einen psychiatrischen Notfall erleben, rufen Sie bitte 112 an oder gehen Sie zur nächsten Notaufnahme.'}
            {locale === 'ro' && 'Dacă experimentezi o urgență de sănătate mintală, te rog sună la 112 sau mergi la cea mai apropiată cameră de urgență.'}
          </p>
          <p className="text-muted-foreground">
            {locale === 'en' && (
              <>
                <strong>National Suicide Prevention Lifeline:</strong> 988 (available 24/7)
              </>
            )}
            {locale === 'de' && (
              <>
                <strong>Nationale Suizidpräventions-Hotline:</strong> 112 (24/7 verfügbar)
              </>
            )}
            {locale === 'ro' && (
              <>
                <strong>Linie Națională de Prevenire a Suicidului:</strong> 112 (disponibil 24/7)
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  )
}
