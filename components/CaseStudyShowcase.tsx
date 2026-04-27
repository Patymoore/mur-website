"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Clock, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import Container from "./Container"

const caseStudies = [
  {
    industry: "Food & Beverage",
    company: "La Taberna — 3-location tapas group, Madrid",
    challenge:
      "Reservation phone line overwhelmed at peak hours. Staff spending 2+ hours/day on calls and manual reminder messages, leading to a 28% no-show rate.",
    solution:
      "AI booking agent deployed via WhatsApp and Google Business. Handles reservations, sends automated reminders 24h and 2h before, and manages cancellations without staff involvement.",
    results: [
      { icon: TrendingUp, metric: "−35%", label: "No-show rate", color: "text-green-400" },
      { icon: Clock, metric: "2h/day", label: "Staff time recovered", color: "text-blue-400" },
      { icon: DollarSign, metric: "€6K/mo", label: "Revenue recovered", color: "text-purple-400" },
    ],
    technologies: ["WhatsApp Business API", "n8n", "OpenAI", "Google Calendar"],
    timeline: "3 weeks",
    testimonial: "We used to lose tables every weekend to no-shows. The agent basically paid for itself in the first month.",
  },
  {
    industry: "Food & Beverage",
    company: "Brauhaus Collective — craft beer bar & kitchen, Barcelona",
    challenge:
      "Weekend order volume overloaded bar staff. Customers waited 15+ minutes for takeaway orders placed by phone. One staff member dedicated solely to answering calls.",
    solution:
      "AI customer service agent trained on the full menu, daily specials and kitchen capacity. Takes orders via WhatsApp, confirms estimated pickup time and notifies kitchen automatically.",
    results: [
      { icon: Clock, metric: "−70%", label: "Phone call volume", color: "text-green-400" },
      { icon: DollarSign, metric: "€1,500/mo", label: "Labour cost saved", color: "text-blue-400" },
      { icon: TrendingUp, metric: "+11 NPS", label: "Customer satisfaction", color: "text-purple-400" },
    ],
    technologies: ["WhatsApp Business API", "OpenAI", "Airtable", "Make"],
    timeline: "4 weeks",
    testimonial: "Customers love ordering by WhatsApp. Orders arrive clean, no misunderstandings, and my team can focus on the bar.",
  },
  {
    industry: "Food & Beverage",
    company: "Fresco & Co — catering & meal-prep delivery, Valencia",
    challenge:
      "Weekly supplier ordering done manually from spreadsheets. Frequent stockouts of key ingredients mid-week and over-ordering of perishables caused €3K/month in waste.",
    solution:
      "Inventory tracking agent integrated with their POS. Monitors stock daily, forecasts weekly usage based on order history and auto-drafts supplier orders for manager approval.",
    results: [
      { icon: TrendingUp, metric: "−22%", label: "Food waste", color: "text-green-400" },
      { icon: DollarSign, metric: "€2,800/mo", label: "Waste cost saved", color: "text-blue-400" },
      { icon: Shield, metric: "Zero", label: "Stockout incidents/month", color: "text-purple-400" },
    ],
    technologies: ["Square POS API", "OpenAI", "Google Sheets", "n8n"],
    timeline: "5 weeks",
    testimonial: "I stopped doing Sunday night stock counts. The agent flags what we need before I even think about it.",
  },
]

export default function CaseStudyShowcase() {
  const [currentCase, setCurrentCase] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % caseStudies.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".case-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("visible")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length)
    setIsAutoPlaying(false)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
    setIsAutoPlaying(false)
  }

  const currentStudy = caseStudies[currentCase]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-navy/30 to-navy/50" id="case-studies">
      <Container>
        <div className="text-center mb-16">
          <h2 className="case-element fade-up font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Success Stories
          </h2>
          <p className="case-element fade-up font-inter text-lg text-grayL max-w-2xl mx-auto">
            Real results from real implementations across industries
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="case-element fade-up flex justify-between items-center mb-8">
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentCase(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCase ? "bg-accent scale-125" : "bg-grayD hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={prevCase}
                className="w-10 h-10 bg-navy/50 border border-grayD/30 rounded-full flex items-center justify-center hover:border-accent/50 transition-colors"
              >
                <ChevronLeft className="text-accent" size={20} />
              </button>
              <button
                onClick={nextCase}
                className="w-10 h-10 bg-navy/50 border border-grayD/30 rounded-full flex items-center justify-center hover:border-accent/50 transition-colors"
              >
                <ChevronRight className="text-accent" size={20} />
              </button>
            </div>
          </div>

          {/* Case Study Content */}
          <Card className="case-element fade-up bg-navy/50 border-grayD/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column - Details */}
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-accent/50 text-accent">
                      {currentStudy.industry}
                    </Badge>
                    <span className="text-grayL text-sm">{currentStudy.timeline}</span>
                  </div>

                  <div>
                    <h3 className="font-montserrat font-bold text-2xl text-white mb-2">{currentStudy.company}</h3>
                    <p className="text-grayL leading-relaxed">
                      <span className="text-red-400 font-medium">Challenge:</span> {currentStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-grayL leading-relaxed">
                      <span className="text-accent font-medium">Solution:</span> {currentStudy.solution}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-accent font-medium text-sm">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {currentStudy.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-accent pl-4 italic text-grayL">
                    "{currentStudy.testimonial}"
                  </blockquote>
                </div>

                {/* Right Column - Results */}
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8">
                  <h4 className="font-montserrat font-semibold text-xl text-white mb-6">Measurable Impact</h4>

                  <div className="space-y-6">
                    {currentStudy.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-4 group">
                        <div className="w-12 h-12 bg-navy/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <result.icon className={result.color} size={24} />
                        </div>
                        <div>
                          <div className={`text-2xl font-bold ${result.color}`}>{result.metric}</div>
                          <div className="text-grayL text-sm">{result.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}
