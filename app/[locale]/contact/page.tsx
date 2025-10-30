import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Globe, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">Get in Touch</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Ready to take the first step toward healing and growth? Contact us today to schedule a consultation or learn
            more about our services.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>

              <div className="space-y-6">
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <a href="tel:+12122555511" className="text-muted-foreground hover:text-foreground">
                          +1 (212) 255-5511
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Response within 24-48 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <a
                          href="mailto:contact@ralucatocoian.com"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          contact@ralucatocoian.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">We respond to all inquiries promptly</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Languages</h3>
                        <p className="text-muted-foreground">English, German, Romanian</p>
                        <p className="text-sm text-muted-foreground mt-1">Services available in multiple languages</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Office Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Evening appointments available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Location</h3>
                        <p className="text-muted-foreground">Online & In-Person Sessions Available</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Flexible options to meet your needs and preferences
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Send a Message</h2>

              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="individual">Individual Therapy</option>
                        <option value="couples">Couples Therapy</option>
                        <option value="group">Group Programs</option>
                        <option value="assessment">Psychological Assessment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us about what brings you here and how we can help..."
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="privacy" name="privacy" required className="mt-1" />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground">
                        I understand that this form is not for emergencies. If you are in crisis, please call 911 or go
                        to your nearest emergency room.
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We will respond to your inquiry within 24-48 hours
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-card-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">How do I schedule an appointment?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can schedule an appointment by calling us at +1 (212) 255-5511, sending an email, or filling out
                  the contact form above. We will respond within 24-48 hours to discuss availability and answer any
                  questions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Do you offer online therapy?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes, we offer secure online therapy sessions via video conferencing. This provides flexibility and
                  convenience while maintaining the same quality of care as in-person sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  What should I expect in the first session?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The first session is an opportunity to get to know each other, discuss what brings you to therapy,
                  review your history, and collaboratively develop treatment goals. It's a safe space to ask questions
                  and determine if we're a good fit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  How long does therapy typically last?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The duration of therapy varies depending on your individual needs and goals. Some people benefit from
                  short-term therapy (8-12 sessions), while others engage in longer-term treatment. We'll discuss this
                  during your initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">Is therapy confidential?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes, all therapy sessions are confidential. Information is only shared with your written consent,
                  except in specific situations required by law (such as risk of harm to self or others, child abuse, or
                  court orders).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-destructive/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4 text-destructive">In Case of Emergency</h3>
          <p className="text-muted-foreground mb-4">
            If you are experiencing a mental health emergency, please call 911 or go to your nearest emergency room.
          </p>
          <p className="text-muted-foreground">
            <strong>National Suicide Prevention Lifeline:</strong> 988 (available 24/7)
          </p>
        </div>
      </section>
    </div>
  )
}
