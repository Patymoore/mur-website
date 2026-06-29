"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Cloud, Brain, MessageSquare, ArrowRight } from "lucide-react"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"
import { useStaggerReveal } from "@/hooks/useStaggerReveal"

const serviceIcons = {
  "Dashboards & KPIs": BarChart3,
  "Data pipelines & cloud": Cloud,
  "Forecasting & ML": Brain,
  "Custom AI assistants": MessageSquare,
}

const serviceIndustries = {
  "Dashboards & KPIs": ["E-commerce", "Retail", "SaaS"],
  "Data pipelines & cloud": ["Fintech", "Healthcare", "Manufacturing"],
  "Forecasting & ML": ["E-commerce", "Supply Chain", "Finance"],
  "Custom AI assistants": ["Customer Service", "E-commerce", "SaaS"],
}

export default function Services() {
  const sectionRef = useStaggerReveal<HTMLElement>({ childClass: "service-card" })

  return (
    <section ref={sectionRef} className="py-20" id="services">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            What we build
          </h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            AI-powered software and data systems, built end-to-end and shipped into production
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
                    {service.brand && (
                      <span className="block text-xs font-normal text-grayL/70 mt-1">{service.brand}</span>
                    )}
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
