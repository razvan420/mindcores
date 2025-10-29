import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Users, Calendar, Clock, Phone } from "lucide-react"

export default function GroupProgramsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Group Programs
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Connect with others facing similar challenges in a supportive, therapeutic environment. Our group programs
            offer evidence-based skills training and peer support.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Inquire About Groups
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Benefits of Group Therapy</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Group therapy provides unique advantages that complement individual therapy:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">Shared Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with others who understand what you're going through, reducing feelings of isolation and
                  normalizing your experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">Peer Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Give and receive support from group members, building meaningful connections and learning from others'
                  perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">Skill Practice</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practice new skills in a safe environment with immediate feedback and support from both therapist and
                  peers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">Cost-Effective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Group therapy is typically more affordable than individual therapy while still providing professional
                  guidance and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-card-foreground">
            Current Group Programs
          </h2>

          <div className="space-y-8">
            {/* DBT Skills Group */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold mb-2 text-card-foreground">DBT Skills Group</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Learn the four core modules of Dialectical Behavior Therapy: mindfulness, distress tolerance,
                      emotion regulation, and interpersonal effectiveness. Ideal for those struggling with emotional
                      dysregulation, impulsivity, or relationship difficulties.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Weekly sessions</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>90 minutes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>6-8 participants</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-card-foreground">What You'll Learn:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Mindfulness techniques for present-moment awareness</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Skills to tolerate distress without making things worse</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Strategies for managing intense emotions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Communication skills for healthier relationships</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Anxiety Management Group */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold mb-2 text-card-foreground">
                      Anxiety Management Group
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A structured program using CBT and mindfulness techniques to help you understand and manage
                      anxiety. Learn practical strategies to reduce worry, face fears, and regain control of your life.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>8-week program</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>75 minutes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>6-10 participants</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-card-foreground">What You'll Learn:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Understanding the anxiety cycle and your triggers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Cognitive restructuring to challenge anxious thoughts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Relaxation and breathing techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Gradual exposure strategies to face fears</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mindfulness & Stress Reduction */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold mb-2 text-card-foreground">
                      Mindfulness & Stress Reduction
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Based on Mindfulness-Based Stress Reduction (MBSR), this program teaches meditation and
                      mindfulness practices to reduce stress, improve focus, and enhance overall wellbeing. Suitable for
                      anyone experiencing stress or seeking greater peace.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>8-week program</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>90 minutes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>8-12 participants</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-card-foreground">What You'll Learn:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Various meditation techniques and practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Body awareness and gentle yoga movements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Integrating mindfulness into daily activities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Managing stress and difficult emotions mindfully</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Group for Depression */}
            <Card className="border-none shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold mb-2 text-card-foreground">
                      Support Group for Depression
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A supportive environment for individuals experiencing depression. Share experiences, learn coping
                      strategies, and build connections with others who understand. Combines psychoeducation with peer
                      support.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Ongoing, drop-in</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>75 minutes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>6-10 participants</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-card-foreground">What You'll Gain:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Reduced isolation through shared experiences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Practical strategies for managing depressive symptoms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Behavioral activation and mood improvement techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Hope and encouragement from peers in recovery</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">How to Join a Group</h2>

          <div className="space-y-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Reach out via phone, email, or our contact form to express interest in a group program. We'll
                      discuss which group might be the best fit for your needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Schedule a brief individual consultation to assess your needs, answer questions, and ensure the
                      group is appropriate for you.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Join the Group</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Once approved, you'll receive information about group logistics, guidelines, and your start date.
                      Most groups begin at scheduled intervals throughout the year.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Join a Group?</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Experience the power of connection and shared healing. Contact us today to learn more about our group
            programs and find the right fit for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get Started
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
