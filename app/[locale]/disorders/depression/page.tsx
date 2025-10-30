import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function DepressionPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Depression Treatment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Depression is more than just feeling sad. It's a serious mental health condition that affects how you feel,
            think, and handle daily activities. With professional support, recovery is possible.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Depression</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depression can manifest in various forms, including major depressive disorder, persistent depressive
              disorder, and seasonal affective disorder. It affects people of all ages and backgrounds.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Common symptoms include persistent sadness, loss of interest in activities, changes in appetite or sleep,
              fatigue, difficulty concentrating, feelings of worthlessness, and thoughts of death or suicide.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            We offer comprehensive, evidence-based treatment for depression:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Cognitive Behavioural Therapy (CBT)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Challenge negative thought patterns and develop healthier ways of thinking and behaving to improve
                  mood and functioning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Behavioral Activation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gradually increase engagement in meaningful activities to break the cycle of withdrawal and improve
                  mood through positive experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Schema Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Address deep-rooted patterns and beliefs that contribute to depression, promoting lasting emotional
                  healing and growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Mindfulness-Based Therapy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop awareness of thoughts and feelings without judgment, reducing rumination and preventing
                  relapse.
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
              "Thorough assessment of your symptoms, history, and current life circumstances",
              "Collaborative development of treatment goals and a personalized plan",
              "Learning to identify and challenge negative thought patterns",
              "Developing coping strategies and problem-solving skills",
              "Gradual increase in activities that bring meaning and pleasure",
              "Ongoing support and monitoring of progress throughout your recovery",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">You Don't Have to Suffer Alone</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Depression is treatable, and recovery is possible. Reach out today to begin your journey toward healing and
            hope.
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
