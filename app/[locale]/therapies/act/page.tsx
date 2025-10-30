import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone, Compass } from "lucide-react"

export default function ACTPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Compass className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Acceptance & Commitment Therapy (ACT)
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            ACT helps you accept what's out of your control and commit to actions that enrich your life. It's about
            living according to your values, even in the presence of difficult thoughts and feelings.
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
          <h2 className="text-3xl font-serif font-bold mb-6">What is ACT?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Acceptance and Commitment Therapy is a mindfulness-based behavioral therapy that uses acceptance and
            mindfulness strategies, together with commitment and behavior change strategies, to increase psychological
            flexibility.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Rather than trying to eliminate or control difficult thoughts and feelings, ACT teaches you to accept them
            as a normal part of life while taking action guided by your values. The goal is to create a rich, meaningful
            life while accepting the pain that inevitably comes with it.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">The Six Core Processes of ACT</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Acceptance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn to allow difficult thoughts and feelings to come and go without struggling against them or
                  letting them control your behavior.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Cognitive Defusion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Change your relationship with thoughts, seeing them as just words or mental events rather than
                  absolute truths.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Present Moment Awareness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop the ability to be psychologically present and engaged with whatever is happening in the here
                  and now.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Self-as-Context</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recognize that you are more than your thoughts, feelings, and experiences - you are the observer of
                  them.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Values Clarification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identify what truly matters to you and what you want your life to stand for, providing direction for
                  action.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Committed Action</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Take effective action guided by your values, even when difficult thoughts and feelings show up.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Conditions Treated with ACT</h2>
          <p className="text-lg text-muted-foreground mb-6">ACT has been shown to be effective for:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Anxiety disorders",
              "Depression",
              "Chronic pain",
              "Stress management",
              "Substance use disorders",
              "Eating disorders",
              "Obsessive-compulsive disorder",
              "Work-related stress and burnout",
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
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">What to Expect in ACT</h2>
          <div className="space-y-4">
            {[
              "Exploration of your values and what matters most to you",
              "Learning mindfulness and acceptance techniques",
              "Practicing cognitive defusion to change your relationship with thoughts",
              "Setting goals aligned with your values",
              "Taking committed action despite difficult internal experiences",
              "Using metaphors and experiential exercises to deepen understanding",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Live a Values-Driven Life</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Discover what truly matters to you and take action toward a meaningful life. Contact us today to begin your
            ACT journey.
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
