"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Cloud, Brain, MessageSquare, ArrowRight } from "lucide-react"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

const serviceIcons = {
  "Insight 360°": BarChart3,
  "Cloud Data Backbone": Cloud,
  "Predictive Insights Kit": Brain,
  "AI Chatbot Suite": MessageSquare,
}

const serviceIndustries = {
  "Insight 360°": ["E-commerce", "Retail", "SaaS"],
  "Cloud Data Backbone": ["Fintech", "Healthcare", "Manufacturing"],
  "Predictive Insights Kit": ["E-commerce", "Supply Chain", "Finance"],
  "AI Chatbot Suite": ["Customer Service", "E-commerce", "SaaS"],
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible")
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

  return (
    <section ref={sectionRef} className="py-20" id="services">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Specialized Services
          </h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            End-to-end data solutions designed to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteCopy.services.map((service, index) => {
            const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons]
            const industries = serviceIndustries[service.name as keyof typeof serviceIndustries]

            return (
              <Card
                key={index}
                className="service-card fade-up bg-navy/50 border-grayD/30 hover:border-accent/50 transition-all duration-300 hover:border-t-4 hover:border-t-accent group hover:scale-105"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <IconComponent className="text-accent group-hover:scale-110 transition-transform" size={32} />
                  </div>
                  <CardTitle className="font-montserrat font-semibold text-white group-hover:text-accent transition-colors">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="font-inter text-grayL leading-relaxed">{service.desc}</CardDescription>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-accent">Ideal for:</p>
                    <div className="flex flex-wrap gap-1">
                      {industries.map((industry, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs bg-accent/10 text-accent border-accent/20"
                        >
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-grayL mb-4">Don't see what you're looking for?</p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-accent hover:text-white transition-colors"
          >
            <span>Let's discuss your specific project</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  )
}
