import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function PerinatalMoodPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Perinatal Mood Disorders
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Pregnancy and the postpartum period can bring unexpected emotional challenges. You're not alone, and help is
            available for perinatal depression, anxiety, and related conditions.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Perinatal Mood Disorders</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Perinatal mood disorders include depression and anxiety that occur during pregnancy or in the first year
            after childbirth. These conditions are common, affecting up to 1 in 5 new mothers, and are highly treatable.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Symptoms may include persistent sadness, excessive worry, difficulty bonding with baby, intrusive thoughts,
            changes in sleep or appetite, and feelings of guilt or inadequacy.
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
                  Specialized Perinatal Therapy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Evidence-based treatment specifically designed for the unique challenges of pregnancy and new
                  motherhood.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">CBT for Perinatal Mood</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Address negative thoughts and develop coping strategies tailored to the perinatal period.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Mother-Infant Bonding Support
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Guidance and support in developing a secure attachment with your baby despite mood challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Partner Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Involving partners in treatment to build understanding and create a supportive home environment.
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
              "Compassionate, non-judgmental assessment of your symptoms and needs",
              "Education about perinatal mood disorders and their treatment",
              "Development of coping strategies for managing symptoms",
              "Support in adjusting to motherhood and building confidence",
              "Addressing sleep, self-care, and social support needs",
              "Coordination with your healthcare providers as needed",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">You Deserve Support</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Perinatal mood disorders are treatable. Reach out today to get the support you need during this important
            time.
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
