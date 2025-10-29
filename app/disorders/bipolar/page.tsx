import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function BipolarPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Bipolar Disorder Treatment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Bipolar disorder involves significant mood swings between highs and lows. With proper treatment, you can
            manage symptoms and maintain stability.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Bipolar Disorder</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bipolar disorder is characterized by episodes of mania or hypomania (elevated mood and energy) and
            depression (low mood and energy). The severity and pattern of episodes vary among individuals.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Manic symptoms include increased energy, reduced need for sleep, racing thoughts, and impulsive behavior.
            Depressive symptoms include sadness, fatigue, difficulty concentrating, and loss of interest in activities.
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
                  Psychoeducation & Monitoring
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn to recognize early warning signs of mood episodes and develop strategies for maintaining
                  stability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">CBT for Bipolar Disorder</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Address negative thought patterns, develop coping strategies, and improve medication adherence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Interpersonal & Social Rhythm Therapy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stabilize daily routines and improve relationships to reduce mood episode triggers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Family-Focused Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Involve family members in understanding the condition and supporting your recovery.
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
              "Comprehensive assessment and diagnosis by experienced professionals",
              "Education about bipolar disorder and its management",
              "Development of mood monitoring and early warning sign recognition",
              "Strategies for maintaining regular sleep and daily routines",
              "Support in managing relationships and life stressors",
              "Coordination with psychiatrists for medication management",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Achieve Stability</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            With proper treatment, you can manage bipolar disorder and live a fulfilling life. Contact us today to get
            started.
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
