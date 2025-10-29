import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function EatingDisordersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Eating Disorders Treatment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Eating disorders are serious but treatable conditions. We provide specialized, compassionate care to help
            you develop a healthier relationship with food and your body.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Eating Disorders</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Eating disorders include anorexia nervosa, bulimia nervosa, binge eating disorder, and other specified
            feeding or eating disorders. They involve serious disturbances in eating behaviors and related thoughts and
            emotions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Common signs include preoccupation with food, weight, or body shape, restrictive eating, binge eating,
            purging behaviors, excessive exercise, and significant distress about eating or body image.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-card-foreground">Our Treatment Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">CBT for Eating Disorders</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Address distorted thoughts about food, weight, and body image while developing healthier eating
                  patterns and coping strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                  Dialectical Behavior Therapy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn emotional regulation and distress tolerance skills to manage triggers for disordered eating
                  behaviors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Family-Based Treatment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Involve family members in supporting recovery, particularly effective for adolescents with eating
                  disorders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Body Image Work</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop a more accepting and compassionate relationship with your body through specialized
                  interventions.
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
              "Comprehensive assessment of eating patterns and related concerns",
              "Collaborative treatment planning with clear, achievable goals",
              "Nutritional counseling and meal planning support",
              "Addressing underlying emotional and psychological factors",
              "Building healthy coping strategies beyond food-related behaviors",
              "Coordination with medical and nutritional professionals as needed",
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
            With specialized treatment, you can overcome your eating disorder and build a healthier future. Contact us
            today to begin.
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
