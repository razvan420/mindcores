import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function GriefLossPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Grief & Loss Support
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Grief is a natural response to loss, but it can feel overwhelming. We provide compassionate support to help
            you navigate your grief and find a path forward.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Grief</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Grief can result from many types of loss including death of a loved one, divorce, job loss, health changes,
            or other significant life transitions. Each person's grief journey is unique.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Common experiences include sadness, anger, guilt, confusion, numbness, physical symptoms, and difficulty
            with daily activities. These reactions are normal parts of the grieving process.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Grief Counseling</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Compassionate support as you process your loss, express difficult emotions, and adjust to life
                  changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Meaning-Making</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explore ways to find meaning in your loss and maintain connection with what or who you've lost.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Complicated Grief Treatment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized support for prolonged or intense grief that interferes significantly with daily
                  functioning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Coping Skills</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop healthy ways to manage grief while gradually re-engaging with life and relationships.
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
              "Safe, supportive space to express and process your grief",
              "Validation of your unique grief experience and timeline",
              "Help understanding and navigating the stages of grief",
              "Support in managing difficult emotions and memories",
              "Guidance in adjusting to life after loss",
              "Assistance in finding ways to honor and remember what was lost",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">You Don't Have to Grieve Alone</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Find support and compassion as you navigate your grief. Contact us today to begin your healing journey.
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
