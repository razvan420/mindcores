import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function AddictionPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Addiction Treatment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Addiction is a complex condition that affects the brain and behavior. Recovery is possible with the right
            support and evidence-based treatment.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Addiction</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Addiction can involve substances like alcohol, drugs, or prescription medications, as well as behaviors such
            as gambling, gaming, or shopping. It's characterized by compulsive engagement despite negative consequences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Common signs include loss of control, continued use despite problems, neglecting responsibilities, tolerance
            and withdrawal symptoms, and unsuccessful attempts to quit.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">CBT for Addiction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identify triggers, develop coping strategies, and change thought patterns that contribute to addictive
                  behaviors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Dialectical Behavior Therapy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn emotional regulation, distress tolerance, and mindfulness skills to manage urges and prevent
                  relapse.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Relapse Prevention</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop a comprehensive plan to identify warning signs, manage high-risk situations, and maintain
                  recovery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Underlying Issues Treatment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Address co-occurring mental health conditions like depression, anxiety, or trauma that may contribute
                  to addiction.
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
              "Comprehensive assessment of addiction patterns and contributing factors",
              "Development of personalized treatment goals and recovery plan",
              "Learning practical skills for managing cravings and triggers",
              "Addressing underlying emotional and psychological issues",
              "Building a support network and healthy lifestyle habits",
              "Ongoing support for maintaining long-term recovery",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Recovery is Possible</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Take the first step toward freedom from addiction. Contact us today to begin your recovery journey.
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
