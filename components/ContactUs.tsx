"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Github, Mail, Send, Calendar, MapPin, Phone, Clock, Users, MessageCircle } from "lucide-react"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="py-20 bg-navy/30" id="contact">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">Contact Us</h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let&apos;s discuss your project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Send a Message */}
            <Card className="bg-navy/50 border-grayD/30 h-fit">
              <CardHeader className="pb-4">
                <CardTitle className="font-montserrat font-semibold text-white text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-navy/70 border-grayD/50 text-white placeholder:text-grayL focus:border-accent"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-navy/70 border-grayD/50 text-white placeholder:text-grayL focus:border-accent"
                    />
                  </div>

                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="bg-navy/70 border-grayD/50 text-white placeholder:text-grayL focus:border-accent resize-none"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-navy" />
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && <p className="text-accent text-center">Message sent successfully!</p>}
                  {submitStatus === "error" && (
                    <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Connect With Us */}
            <Card className="bg-navy/50 border-grayD/30">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-white text-lg mb-3">Connect With Us</h3>
                  <p className="text-grayL text-sm mb-4">
                    Follow our journey and stay updated with the latest insights.
                  </p>

                  {/* Extra line to mirror height of Book a Discovery Call */}
                  <div className="flex items-center space-x-2 text-grayL text-xs mb-4">
                    <MessageCircle size={14} />
                    <span>Join our community for exclusive updates</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={siteCopy.about.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-accent/10 hover:bg-accent hover:text-navy text-accent rounded-lg py-3 px-4 transition-colors text-sm font-medium"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={siteCopy.about.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-accent/10 hover:bg-accent hover:text-navy text-accent rounded-lg py-3 px-4 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Get in Touch */}
            <Card className="bg-accent/10 border-accent/30">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-white text-lg mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:patricio@murdatasolutions.com"
                    className="flex items-center space-x-3 text-grayL hover:text-accent transition-colors"
                  >
                    <Mail size={18} />
                    <span className="text-sm">patricio@murdatasolutions.com</span>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center space-x-3 text-grayL hover:text-accent transition-colors"
                  >
                    <Phone size={18} />
                    <span className="text-sm">+1 (234) 567-8900</span>
                  </a>
                  <div className="flex items-center space-x-3 text-grayL">
                    <MapPin size={18} />
                    <span className="text-sm">Remote &amp; On-site Worldwide</span>
                  </div>
                  <div className="flex items-center space-x-3 text-grayL">
                    <Clock size={18} />
                    <span className="text-sm">Response within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Book a Discovery Call */}
            <Card className="bg-navy/50 border-grayD/30">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-white text-lg mb-3">Book a Discovery Call</h3>
                  <p className="text-grayL text-sm mb-4 leading-relaxed">
                    Schedule a 30-minute consultation to discuss your data challenges and explore tailored solutions.
                  </p>
                  <div className="flex items-center space-x-2 text-grayL text-xs mb-4">
                    <Users size={14} />
                    <span>Free consultation • No commitment required</span>
                  </div>
                </div>

                <a
                  href="https://calendly.com/murdata/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2 w-full justify-center"
                >
                  <Calendar size={18} />
                  <span>Schedule Call</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}
