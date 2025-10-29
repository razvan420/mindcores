import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function SexualDysfunctionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Sexual Dysfunctions Treatment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Sexual difficulties are common and treatable. We provide confidential, compassionate support to help you
            address concerns and improve sexual wellbeing.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Sexual Dysfunctions</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Sexual dysfunctions can affect desire, arousal, orgasm, or cause pain during sexual activity. They can
            result from physical, psychological, or relational factors, and often involve a combination of causes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Common issues include low sexual desire, erectile difficulties, premature or delayed ejaculation, difficulty
            with arousal or orgasm, and pain during intercourse.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Sex Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized counseling addressing psychological and relational factors contributing to sexual
                  difficulties.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Cognitive-Behavioral Approaches
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Address anxiety, negative thoughts, and unhelpful beliefs that interfere with sexual functioning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Couples Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Work with partners to improve communication, intimacy, and address relationship factors affecting
                  sexual health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Mindfulness-Based Therapy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Increase present-moment awareness and reduce performance anxiety through mindfulness practices.
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
              "Confidential, non-judgmental assessment of sexual concerns",
              "Exploration of physical, psychological, and relational factors",
              "Education about sexual health and functioning",
              "Development of personalized treatment strategies",
              "Practical exercises and techniques to improve sexual wellbeing",
              "Coordination with medical providers when appropriate",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Reclaim Your Sexual Wellbeing</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Sexual difficulties are treatable. Contact us today for confidential support in a safe, professional
            environment.
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
