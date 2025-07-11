"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Github, Mail, Send } from "lucide-react"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

export default function Contact() {
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
        headers: {
          "Content-Type": "application/json",
        },
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 bg-navy/30" id="contact">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">Get In Touch</h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-navy/50 border-grayD/30">
            <CardHeader>
              <CardTitle className="font-montserrat font-semibold text-white text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-navy/70 border-grayD/50 text-white placeholder:text-grayL focus:border-accent"
                  />
                </div>
                <div>
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
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-navy/70 border-grayD/50 text-white placeholder:text-grayL focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-navy"></div>
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

          <div className="space-y-8">
            <Card className="bg-accent/10 border-accent/30">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-white text-lg mb-4">Let's Connect</h3>
                <div className="space-y-4">
                  <a
                    href={siteCopy.about.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-grayL hover:text-accent transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={siteCopy.about.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-grayL hover:text-accent transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="mailto:patricio@murdatasolutions.com"
                    className="flex items-center space-x-3 text-grayL hover:text-accent transition-colors"
                  >
                    <Mail size={20} />
                    <span>patricio@murdatasolutions.com</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy/50 border-grayD/30">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-white text-lg mb-4">Book a Discovery Call</h3>
                <p className="text-grayL mb-4">
                  Schedule a 30-minute consultation to discuss your data challenges and explore solutions.
                </p>
                <a
                  href="https://calendly.com/murdata/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Schedule Call
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}
