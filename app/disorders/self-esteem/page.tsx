import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function SelfEsteemPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Self-Esteem Issues
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Low self-esteem can affect every area of your life. Learn to develop a healthier relationship with yourself
            and build lasting confidence and self-worth.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Self-Esteem</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Self-esteem refers to how you value and perceive yourself. Low self-esteem can stem from various sources
            including childhood experiences, criticism, trauma, or ongoing negative self-talk.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Common signs include negative self-talk, difficulty accepting compliments, fear of failure, people-pleasing
            behaviors, and avoiding challenges or new experiences.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Cognitive Restructuring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identify and challenge negative self-beliefs, replacing them with more balanced and compassionate
                  perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Self-Compassion Training</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn to treat yourself with the same kindness and understanding you would offer a good friend.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Values Clarification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identify your core values and align your actions with what truly matters to you, building authentic
                  self-worth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Assertiveness Skills</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop confidence in expressing your needs, setting boundaries, and standing up for yourself
                  respectfully.
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
              "Exploration of the roots of low self-esteem and negative self-beliefs",
              "Learning to recognize and challenge self-critical thoughts",
              "Developing self-compassion and acceptance practices",
              "Building confidence through gradual exposure to challenges",
              "Strengthening your sense of identity and self-worth",
              "Creating lasting change in how you relate to yourself",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">You Are Worthy</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Build the confidence and self-worth you deserve. Contact us today to begin your journey toward greater
            self-acceptance.
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
