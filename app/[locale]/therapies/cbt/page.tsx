import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone, Brain } from "lucide-react"

export default function CBTPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Brain className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Cognitive Behavioural Therapy (CBT)
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            CBT is one of the most researched and effective forms of psychotherapy. It helps you identify and change
            unhelpful thought patterns and behaviors to improve emotional wellbeing.
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
          <h2 className="text-3xl font-serif font-bold mb-6">What is CBT?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cognitive Behavioural Therapy is based on the idea that our thoughts, feelings, and behaviors are
            interconnected. By changing negative thought patterns and behaviors, we can improve how we feel and function
            in daily life.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            CBT is a structured, goal-oriented, and time-limited approach that focuses on present-day problems and
            practical solutions. It's highly effective for a wide range of mental health conditions.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Core Components of CBT</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Cognitive Restructuring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn to identify negative automatic thoughts and cognitive distortions, then challenge and replace
                  them with more balanced, realistic thinking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Behavioral Activation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Increase engagement in meaningful activities to improve mood and break cycles of avoidance and
                  withdrawal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Exposure Therapy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gradually face feared situations or objects in a safe, controlled way to reduce anxiety and avoidance
                  behaviors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Problem-Solving Skills</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop systematic approaches to identifying problems, generating solutions, and implementing
                  effective strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Conditions Treated with CBT</h2>
          <p className="text-lg text-muted-foreground mb-6">
            CBT has been proven effective for numerous mental health conditions:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Depression and mood disorders",
              "Anxiety disorders (GAD, social anxiety, panic disorder)",
              "Post-traumatic stress disorder (PTSD)",
              "Obsessive-compulsive disorder (OCD)",
              "Eating disorders",
              "Insomnia and sleep disorders",
              "Chronic pain management",
              "Substance use disorders",
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
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">What to Expect in CBT</h2>
          <div className="space-y-4">
            {[
              "Collaborative goal-setting at the beginning of treatment",
              "Structured sessions with clear agendas and homework assignments",
              "Learning to identify and track thoughts, feelings, and behaviors",
              "Practicing new skills between sessions to reinforce learning",
              "Regular progress monitoring and adjustment of strategies",
              "Typically 12-20 sessions, though duration varies by individual needs",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Start Your CBT Journey</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Experience the proven benefits of Cognitive Behavioural Therapy. Contact us today to begin developing
            practical skills for lasting change.
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
