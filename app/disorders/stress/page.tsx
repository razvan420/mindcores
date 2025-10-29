import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Phone } from "lucide-react"

export default function StressPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Stress Management
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Chronic stress can impact every aspect of your life. Learn effective strategies to manage stress, build
            resilience, and restore balance to your daily life.
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
          <h2 className="text-3xl font-serif font-bold mb-6">Understanding Stress</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            While stress is a normal part of life, chronic or overwhelming stress can lead to physical and mental health
            problems. It can affect your relationships, work performance, and overall quality of life.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Common symptoms include tension, irritability, difficulty concentrating, sleep problems, headaches, muscle
            tension, and changes in appetite or mood.
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
                  Stress Reduction Techniques
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn practical relaxation methods including deep breathing, progressive muscle relaxation, and
                  mindfulness practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Cognitive Restructuring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identify and change stress-inducing thought patterns, developing more balanced and helpful ways of
                  thinking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Time Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop effective strategies for prioritizing tasks, setting boundaries, and creating a sustainable
                  work-life balance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">Lifestyle Optimization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Address sleep, exercise, nutrition, and social connection to build a strong foundation for stress
                  resilience.
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
              "Assessment of your stress triggers and current coping strategies",
              "Development of a personalized stress management plan",
              "Learning evidence-based relaxation and mindfulness techniques",
              "Building problem-solving skills for challenging situations",
              "Creating sustainable lifestyle changes to reduce stress",
              "Ongoing support in maintaining balance and preventing burnout",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Take Control of Your Stress</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Learn effective strategies to manage stress and improve your quality of life. Contact us today to get
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
