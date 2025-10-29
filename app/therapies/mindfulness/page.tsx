import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone, Sparkles } from "lucide-react"

export default function MindfulnessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Mindfulness-Based Therapy
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Mindfulness practices help you become aware of thoughts and emotions without judgment. Learn to be present
            and respond skillfully to life's challenges.
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
          <h2 className="text-3xl font-serif font-bold mb-6">What is Mindfulness?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Mindfulness is the practice of paying attention to the present moment with openness, curiosity, and
            acceptance. It involves observing thoughts, feelings, and sensations without judgment or trying to change
            them.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Mindfulness-based therapies integrate meditation and mindfulness practices with psychological principles to
            help reduce stress, manage emotions, and improve overall wellbeing. These approaches have strong scientific
            support for various mental health conditions.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Mindfulness-Based Approaches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Mindfulness-Based Stress Reduction (MBSR)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  An 8-week program combining mindfulness meditation and yoga to reduce stress and improve quality of
                  life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Mindfulness-Based Cognitive Therapy (MBCT)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Combines mindfulness practices with cognitive therapy to prevent depression relapse and manage
                  recurring negative thoughts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Meditation Practices</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Various forms including breath awareness, body scan, loving-kindness, and walking meditation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Informal Mindfulness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bringing mindful awareness to everyday activities like eating, walking, or listening to others.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Benefits of Mindfulness</h2>
          <p className="text-lg text-muted-foreground mb-6">Research shows mindfulness can help with:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Stress reduction and relaxation",
              "Anxiety and worry management",
              "Depression prevention and treatment",
              "Chronic pain management",
              "Improved emotional regulation",
              "Better focus and concentration",
              "Enhanced self-awareness",
              "Improved sleep quality",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">
            What to Expect in Mindfulness Therapy
          </h2>
          <div className="space-y-4">
            {[
              "Learning various mindfulness meditation techniques",
              "Guided practice during sessions with audio recordings for home use",
              "Exploration of how mindfulness applies to your specific challenges",
              "Daily practice assignments to build your mindfulness skills",
              "Discussion of experiences and obstacles in practice",
              "Integration of mindfulness into daily life activities",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Cultivate Present-Moment Awareness</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Discover the transformative power of mindfulness. Contact us today to begin your journey toward greater
            peace and clarity.
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
