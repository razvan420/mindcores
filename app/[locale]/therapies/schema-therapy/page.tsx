import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone, Layers } from "lucide-react"

export default function SchemaTherapyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Layers className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">Schema Therapy</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Schema Therapy addresses deep-rooted patterns and unmet emotional needs from childhood. It's particularly
            effective for long-standing issues and personality disorders.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">What is Schema Therapy?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Schema Therapy is an integrative approach that combines elements of cognitive-behavioral, attachment,
            psychodynamic, and emotion-focused therapies. It was developed to treat chronic, difficult-to-treat
            psychological problems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The therapy focuses on identifying and changing maladaptive schemas (deeply held beliefs about oneself and
            the world) and schema modes (emotional states) that developed in childhood and continue to cause problems in
            adult life.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Key Concepts in Schema Therapy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Early Maladaptive Schemas
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep, pervasive patterns or themes about oneself and relationships that developed during childhood and
                  are dysfunctional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Schema Modes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Emotional states and coping responses that everyone experiences, including child modes, coping modes,
                  and healthy adult mode.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Limited Reparenting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The therapist provides, within professional boundaries, some of the unmet emotional needs from
                  childhood.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Experiential Techniques</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use of imagery, chair work, and other emotional techniques to access and heal childhood wounds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Conditions Treated with Schema Therapy</h2>
          <p className="text-lg text-muted-foreground mb-6">Schema Therapy is particularly effective for:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Borderline personality disorder",
              "Narcissistic personality disorder",
              "Avoidant personality disorder",
              "Chronic depression",
              "Anxiety disorders with early origins",
              "Eating disorders",
              "Relationship problems",
              "Low self-esteem and self-worth issues",
            ].map((condition, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">{condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">What to Expect in Schema Therapy</h2>
          <div className="space-y-4">
            {[
              "Assessment of your schemas and modes through questionnaires and discussion",
              "Exploration of childhood experiences and unmet emotional needs",
              "Use of imagery and experiential techniques to access emotions",
              "Cognitive work to challenge and modify maladaptive beliefs",
              "Behavioral pattern-breaking to develop healthier coping strategies",
              "Longer-term treatment (typically 1-3 years) for lasting change",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Heal Deep Emotional Wounds</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Address the root causes of long-standing patterns and build lasting emotional health. Contact us today to
            begin Schema Therapy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
            </Link>
            <a href="tel:+12122555511" className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5" />
              +1 (212) 255-5511
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
