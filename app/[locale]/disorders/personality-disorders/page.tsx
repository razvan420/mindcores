import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function PersonalityDisordersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Personality Disorders Treatment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Personality disorders involve enduring patterns of thinking, feeling, and behaving that can cause distress.
            Specialized therapy can help you develop healthier patterns and improve quality of life.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Personality Disorders</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Personality disorders are characterized by persistent patterns of thoughts, feelings, and behaviors that
            differ significantly from cultural expectations and cause distress or impairment in relationships and
            functioning.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Common types include borderline, narcissistic, avoidant, dependent, and obsessive-compulsive personality
            disorders. Each has unique features but all can benefit from specialized treatment.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Dialectical Behavior Therapy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Particularly effective for borderline personality disorder, teaching emotional regulation, distress
                  tolerance, and interpersonal skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Schema Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Address deep-rooted patterns and unmet emotional needs that drive personality disorder symptoms and
                  behaviors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Mentalization-Based Therapy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Improve ability to understand your own and others' mental states, enhancing relationships and
                  emotional regulation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Transference-Focused Therapy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explore relationship patterns as they emerge in therapy to develop more stable sense of self and
                  others.
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
              "Thorough assessment and diagnosis by experienced professionals",
              "Long-term, structured therapy tailored to your specific needs",
              "Learning skills for emotional regulation and impulse control",
              "Improving interpersonal relationships and communication",
              "Developing a more stable and positive sense of self",
              "Consistent support through the challenges of change",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Change is Possible</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            With specialized treatment, you can develop healthier patterns and improve your relationships. Contact us
            today to begin.
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
