import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Brain, Users, Sparkles, Phone, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Heal, Restore and Thrive
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-pretty">
            We remodel your boundaries and success
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Professional psychological services, cognitive assessments, diagnosis, and counseling in a warm, open, and
            non-judgmental environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book a Consultation
              </Button>
            </Link>
            <Link href="/disorders/anxiety">
              <Button size="lg" variant="outline">
                Explore Disorders
              </Button>
            </Link>
          </div>

          {/* Languages */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Globe className="h-4 w-4" />
            <span>Available in English, German & Romanian</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 text-card-foreground">
            I Believe Your Mental Health Matters
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty leading-relaxed">
            Often, our lives are complicated, and the same goes for our problems. Psychotherapy is the process of
            identifying and defining the problem you are experiencing and finding new ways to approach it.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Compassionate Care</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fresh approaches to mental health care in a warm, open and non-judgmental environment, to help reduce
                  emotional suffering and behavioral concerns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <Brain className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Evidence-Based Methods</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizing well-researched evidence-based and talk-based psychological techniques including CBT, DBT,
                  ACT, EMDR, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Personalized Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clients receive a personalized service tailored to their specific needs, in a collaborative manner
                  that respects your unique journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Holistic Wellbeing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Looking at eight distinct forms of intelligence and addressing physical, mental, emotional, and social
                  health factors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disorders Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">Disorders We Treat</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto text-pretty">
            Comprehensive treatment for a wide range of mental health concerns
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Anxiety", href: "/disorders/anxiety" },
              { name: "Depression", href: "/disorders/depression" },
              { name: "Trauma & PTSD", href: "/disorders/trauma-ptsd" },
              { name: "Stress", href: "/disorders/stress" },
              { name: "Relationships", href: "/disorders/relationships" },
              { name: "Grief & Loss", href: "/disorders/grief-loss" },
              { name: "Addiction", href: "/disorders/addiction" },
              { name: "ADHD", href: "/disorders/adhd" },
              { name: "Personality Disorders", href: "/disorders/personality-disorders" },
              { name: "Eating Disorders", href: "/disorders/eating-disorders" },
              { name: "Bipolar Disorder", href: "/disorders/bipolar" },
              { name: "Self-Esteem", href: "/disorders/self-esteem" },
            ].map((disorder) => (
              <Link key={disorder.href} href={disorder.href}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-card-foreground">{disorder.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/disorders/anxiety">
              <Button variant="outline" size="lg">
                View All Disorders
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Therapies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-card-foreground">
            Evidence-Based Therapies
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto text-pretty">
            We use the techniques of CBT, DBT, ACT, ST, SFT, PPT, ITP, NLP, and EMDR for therapies
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Cognitive Behavioural Therapy (CBT)",
                description:
                  "Combat present-time issues through problem-solving and identifying unhelpful thought patterns.",
                href: "/therapies/cbt",
              },
              {
                name: "Dialectical Behavioural Therapy (DBT)",
                description:
                  "A modified version of CBT that brings together acceptance and change for optimal results.",
                href: "/therapies/dbt",
              },
              {
                name: "Acceptance & Commitment Therapy (ACT)",
                description:
                  "Mindfulness-based approach that teaches acceptance of emotions while committing to positive action.",
                href: "/therapies/act",
              },
              {
                name: "EMDR Therapy",
                description:
                  "Eye Movement Desensitization Reprocessing for healing from trauma and emotional distress.",
                href: "/therapies/emdr",
              },
              {
                name: "Schema Therapy",
                description: "Unified approach combining cognitive, behavioral, and gestalt therapy methods.",
                href: "/therapies/schema-therapy",
              },
              {
                name: "Mindfulness",
                description: "Practices to become aware of thoughts and emotions without judgment or distraction.",
                href: "/therapies/mindfulness",
              },
            ].map((therapy) => (
              <Link key={therapy.href} href={therapy.href}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif font-semibold mb-3 text-card-foreground">{therapy.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{therapy.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Take the first step towards emotional growth and meaningful change. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
            </Link>
            <a href="tel:+12122555511" className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5" />
              +1 (212) 255-5511
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-serif font-semibold mb-4 text-card-foreground">Raluca Diana Tocoian</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Psychologie, Psychotherapie Coaching & Mentoring
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-card-foreground">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link href="/disorders/anxiety" className="text-sm text-muted-foreground hover:text-foreground">
                  Disorders
                </Link>
                <Link href="/therapies/cbt" className="text-sm text-muted-foreground hover:text-foreground">
                  Therapies
                </Link>
                <Link href="/group-programs" className="text-sm text-muted-foreground hover:text-foreground">
                  Group Programs
                </Link>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-card-foreground">Contact</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <p>Phone: +1 (212) 255-5511</p>
                <p>Response within 24-48 hours</p>
                <p className="mt-2">Languages: English, German, Romanian</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Raluca Diana Tocoian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
