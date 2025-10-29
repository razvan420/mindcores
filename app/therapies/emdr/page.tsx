import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone, Eye } from "lucide-react"

export default function EMDRPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Eye className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">EMDR Therapy</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapy for processing traumatic memories
            and reducing their emotional impact.
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
          <h2 className="text-3xl font-serif font-bold mb-6">What is EMDR?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            EMDR is an evidence-based psychotherapy that helps people heal from trauma and other distressing life
            experiences. It uses bilateral stimulation (typically eye movements) to help the brain process traumatic
            memories in a way that reduces their lingering effects.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Unlike traditional talk therapy, EMDR doesn't require detailed descriptions of traumatic events. The therapy
            helps your brain's natural healing process work more effectively, similar to how the body heals from
            physical trauma.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">The Eight Phases of EMDR</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">History & Planning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Assessment of your history and identification of specific memories to target for processing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Preparation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learning relaxation and coping techniques to manage emotional distress during and between sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Assessment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identifying specific components of target memories including images, beliefs, emotions, and body
                  sensations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Desensitization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Processing traumatic memories using bilateral stimulation to reduce their emotional charge.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Installation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strengthening positive beliefs to replace negative ones associated with the traumatic memory.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Body Scan</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identifying and processing any remaining physical tension or discomfort related to the memory.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Closure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ensuring you return to a state of equilibrium at the end of each session, using relaxation techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Reevaluation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reviewing progress and identifying any additional memories or issues that need processing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Conditions Treated with EMDR</h2>
          <p className="text-lg text-muted-foreground mb-6">EMDR is recognized as an effective treatment for:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Post-traumatic stress disorder (PTSD)",
              "Complex trauma",
              "Anxiety and panic attacks",
              "Depression",
              "Phobias",
              "Grief and loss",
              "Performance anxiety",
              "Disturbing memories",
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
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">What to Expect in EMDR</h2>
          <div className="space-y-4">
            {[
              "Thorough preparation before processing traumatic memories",
              "You remain in control and can stop at any time",
              "Sessions typically last 60-90 minutes",
              "You may experience vivid memories or emotions during processing",
              "Many people experience significant relief in fewer sessions than traditional therapy",
              "Continued processing may occur between sessions through dreams or insights",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Process Trauma Effectively</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Experience the healing power of EMDR therapy. Contact us today to begin processing traumatic memories and
            reclaiming your life.
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
