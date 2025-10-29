import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function AttachmentDisorderPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Attachment Disorder Treatment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Attachment difficulties can affect your ability to form and maintain healthy relationships. We help you
            understand your attachment patterns and develop more secure connections.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Attachment Disorders</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Attachment patterns develop in early childhood and influence how we relate to others throughout life.
            Insecure attachment styles (anxious, avoidant, or disorganized) can lead to difficulties in relationships,
            emotional regulation, and self-esteem.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Common signs include fear of abandonment, difficulty trusting others, emotional distance, intense
            relationship anxiety, or chaotic relationship patterns.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Attachment-Based Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explore early attachment experiences and their impact on current relationships, working toward more
                  secure patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Schema Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Address core emotional needs and maladaptive patterns that developed from early attachment
                  disruptions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Emotionally Focused Therapy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strengthen emotional bonds and create secure attachment in current relationships through structured
                  interventions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Mentalization-Based Therapy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Improve ability to understand your own and others' mental states, enhancing relationship quality and
                  security.
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
              "Assessment of your attachment style and relationship patterns",
              "Exploration of early experiences that shaped your attachment",
              "Understanding how attachment affects current relationships",
              "Developing more secure ways of relating to others",
              "Building trust and emotional regulation skills",
              "Creating healthier, more satisfying relationships",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Build Secure Connections</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Develop healthier attachment patterns and more fulfilling relationships. Contact us today to begin your
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
