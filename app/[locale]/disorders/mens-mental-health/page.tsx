import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function MensMentalHealthPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Men's Mental Health
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Men face unique mental health challenges and often struggle to seek help. We provide a supportive,
            non-judgmental space to address your concerns and build emotional wellbeing.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Men's Mental Health</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Men often face societal pressure to appear strong and self-reliant, which can make it difficult to
            acknowledge mental health struggles. Common issues include depression, anxiety, stress, anger management,
            and relationship difficulties.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Men may express mental health issues differently, sometimes through irritability, anger, risk-taking
            behavior, or substance use rather than traditional symptoms of sadness or worry.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Male-Focused Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Therapy approaches that acknowledge and address the unique ways men experience and express mental
                  health concerns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Stress Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practical strategies for managing work stress, financial pressure, and other common male stressors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Anger Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn to understand and express anger in healthy ways, improving relationships and emotional
                  regulation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Relationship & Communication Skills
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop skills for emotional expression, vulnerability, and building stronger connections with
                  partners and family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">What to Expect in Treatment</h2>
          <div className="space-y-4">
            {[
              "Non-judgmental space to discuss challenges and emotions",
              "Practical, action-oriented strategies for managing stress and emotions",
              "Understanding how societal expectations affect mental health",
              "Building emotional awareness and expression skills",
              "Improving relationships and communication with partners and family",
              "Developing sustainable habits for long-term mental wellbeing",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Strength Includes Seeking Help</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Taking care of your mental health is a sign of strength, not weakness. Contact us today to get the support
            you deserve.
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
