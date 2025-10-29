import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone, Heart } from "lucide-react"

export default function DBTPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Heart className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Dialectical Behavior Therapy (DBT)
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            DBT combines acceptance and change strategies to help you build a life worth living. It's particularly
            effective for emotional regulation and interpersonal difficulties.
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
          <h2 className="text-3xl font-serif font-bold mb-6">What is DBT?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dialectical Behavior Therapy is a modified form of CBT that emphasizes the balance between acceptance and
            change. The term "dialectical" refers to the synthesis of opposites - accepting yourself as you are while
            simultaneously working toward change.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Originally developed for borderline personality disorder, DBT has proven effective for various conditions
            involving emotional dysregulation, impulsivity, and relationship difficulties.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">The Four Modules of DBT</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Mindfulness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop awareness of the present moment without judgment, learning to observe thoughts and feelings
                  without being overwhelmed by them.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Distress Tolerance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn skills to tolerate and survive crises without making things worse, accepting reality when you
                  can't change it immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Emotion Regulation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understand and manage intense emotions, reduce emotional vulnerability, and increase positive
                  emotional experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Interpersonal Effectiveness
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop skills for asking for what you need, saying no, and managing conflict while maintaining
                  self-respect and relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Conditions Treated with DBT</h2>
          <p className="text-lg text-muted-foreground mb-6">
            DBT is particularly effective for conditions involving emotional dysregulation:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Borderline personality disorder",
              "Self-harm and suicidal behaviors",
              "Eating disorders",
              "Substance use disorders",
              "Post-traumatic stress disorder",
              "Depression with emotional dysregulation",
              "Bipolar disorder",
              "Chronic relationship difficulties",
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
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">What to Expect in DBT</h2>
          <div className="space-y-4">
            {[
              "Individual therapy sessions focused on your specific goals and challenges",
              "Skills training in the four core modules",
              "Learning practical techniques you can use in daily life",
              "Phone coaching for support between sessions (when needed)",
              "Homework assignments to practice new skills",
              "Commitment to treatment and willingness to work on change",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Build a Life Worth Living</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Learn powerful skills for managing emotions and improving relationships. Contact us today to begin your DBT
            journey.
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
