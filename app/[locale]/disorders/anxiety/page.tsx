import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function AnxietyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Anxiety Disorders Treatment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Anxiety is a normal human emotion, but when it becomes overwhelming and interferes with daily life, it may
            be time to seek professional help. We provide evidence-based treatment to help you manage and overcome
            anxiety.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Anxiety</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Anxiety disorders are among the most common mental health conditions, affecting millions of people
              worldwide. They can manifest in various forms, including generalized anxiety disorder (GAD), social
              anxiety, panic disorder, and specific phobias.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Common symptoms include excessive worry, restlessness, difficulty concentrating, muscle tension, sleep
              disturbances, and physical symptoms such as rapid heartbeat, sweating, and trembling.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            We use evidence-based therapies tailored to your specific needs:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Cognitive Behavioural Therapy (CBT)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identify and challenge anxious thoughts, develop coping strategies, and gradually face feared
                  situations in a safe, controlled manner.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Acceptance & Commitment Therapy (ACT)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn to accept anxious thoughts and feelings while committing to actions aligned with your values,
                  reducing the struggle with anxiety.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Mindfulness Techniques</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practice present-moment awareness to reduce worry about the future and rumination about the past,
                  creating a sense of calm and control.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Exposure-Based Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gradually and safely confront feared situations to reduce avoidance behaviors and build confidence in
                  managing anxiety.
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
              "Comprehensive assessment of your anxiety symptoms and triggers",
              "Development of a personalized treatment plan tailored to your needs",
              "Learning practical coping strategies and relaxation techniques",
              "Gradual exposure to anxiety-provoking situations in a safe environment",
              "Regular progress monitoring and adjustment of treatment as needed",
              "Support in building long-term resilience and preventing relapse",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Take the First Step</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            You don't have to face anxiety alone. Contact us today to begin your journey toward a calmer, more confident
            life.
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
