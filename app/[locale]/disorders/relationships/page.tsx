import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function RelationshipsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Relationship Issues
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Healthy relationships are essential to our wellbeing. Whether you're facing communication challenges,
            conflict, or intimacy issues, we can help you build stronger, more fulfilling connections.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Relationship Challenges</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Relationship difficulties can arise in romantic partnerships, family relationships, friendships, or
            workplace connections. Common issues include communication breakdowns, trust issues, conflict patterns, and
            emotional disconnection.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These challenges can lead to feelings of loneliness, frustration, anger, or sadness, impacting your overall
            mental health and quality of life.
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
                  Communication Skills Training
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn effective communication techniques including active listening, assertiveness, and expressing
                  needs clearly and respectfully.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Conflict Resolution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop healthy strategies for managing disagreements, finding compromise, and resolving conflicts
                  constructively.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Attachment Patterns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understand how your attachment style affects relationships and develop more secure, healthy connection
                  patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Boundary Setting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn to establish and maintain healthy boundaries that protect your wellbeing while fostering
                  intimacy and connection.
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
              "Assessment of relationship patterns and areas of difficulty",
              "Identification of communication barriers and unhelpful patterns",
              "Learning practical skills for effective communication and conflict resolution",
              "Exploring attachment styles and their impact on relationships",
              "Developing strategies for building trust and emotional intimacy",
              "Support in creating healthier, more satisfying relationships",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Build Stronger Connections</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Improve your relationships and enhance your emotional wellbeing. Contact us today to begin your journey
            toward healthier connections.
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
