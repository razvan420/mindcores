import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function TraumaPTSDPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Trauma & PTSD Treatment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Trauma can have lasting effects on your mental and emotional wellbeing. We provide specialized,
            trauma-informed care to help you process difficult experiences and reclaim your life.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Trauma & PTSD</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Post-Traumatic Stress Disorder (PTSD) can develop after experiencing or witnessing a traumatic event.
              Trauma can result from various experiences including accidents, violence, abuse, natural disasters, or
              other life-threatening situations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Common symptoms include intrusive memories, flashbacks, nightmares, avoidance of reminders, negative
              changes in thoughts and mood, and heightened reactivity such as being easily startled or feeling on edge.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            We use specialized trauma-focused therapies proven effective for PTSD:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">EMDR Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Eye Movement Desensitization and Reprocessing helps process traumatic memories and reduce their
                  emotional impact through bilateral stimulation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Trauma-Focused CBT</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Address trauma-related thoughts and beliefs while gradually processing traumatic memories in a safe,
                  controlled manner.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Schema Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Heal deep emotional wounds and change maladaptive patterns that developed as a result of traumatic
                  experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Somatic Experiencing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Release trauma stored in the body through gentle awareness of physical sensations and nervous system
                  regulation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">What to Expect in Treatment</h2>
          <div className="space-y-4">
            {[
              "Safe, supportive environment where you control the pace of treatment",
              "Comprehensive trauma assessment and personalized treatment planning",
              "Learning grounding and stabilization techniques before processing trauma",
              "Gradual processing of traumatic memories using evidence-based methods",
              "Development of healthy coping strategies and emotional regulation skills",
              "Support in rebuilding a sense of safety, trust, and empowerment",
            ].map((item, index) => (
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Healing is Possible</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            You deserve to feel safe and at peace. Contact us today to begin your journey toward trauma recovery and
            renewed hope.
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
