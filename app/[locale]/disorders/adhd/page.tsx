import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function ADHDPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            ADHD Treatment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Attention-Deficit/Hyperactivity Disorder affects focus, impulse control, and organization. Learn strategies
            to manage symptoms and thrive in daily life.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding ADHD</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ADHD is a neurodevelopmental condition that affects both children and adults. It involves persistent
            patterns of inattention, hyperactivity, and impulsivity that interfere with functioning and development.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Common symptoms include difficulty sustaining attention, forgetfulness, disorganization, restlessness,
            impulsive decision-making, and challenges with time management and task completion.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">CBT for ADHD</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Address negative thought patterns, develop organizational skills, and create effective coping
                  strategies for ADHD challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Executive Function Training
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strengthen planning, organization, time management, and impulse control through targeted skill
                  building.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Behavioral Strategies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implement practical systems and routines to manage daily tasks, reduce distractions, and improve
                  productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Mindfulness Techniques</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practice attention training and emotional regulation to improve focus and reduce impulsivity.
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
              "Comprehensive assessment of ADHD symptoms and their impact",
              "Development of personalized strategies for managing attention and organization",
              "Learning practical tools for time management and task completion",
              "Building systems to reduce forgetfulness and improve follow-through",
              "Addressing co-occurring issues like anxiety or low self-esteem",
              "Ongoing support in implementing and refining strategies",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Thrive with ADHD</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Learn to work with your brain, not against it. Contact us today to develop effective strategies for managing
            ADHD.
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
