"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Container from "./Container"

const processSteps = [
  {
    phase: "Discovery",
    duration: "Week 1-2",
    title: "Data Audit & Strategy",
    description: "Comprehensive analysis of your current data infrastructure, pain points, and business objectives.",
    deliverables: ["Data maturity assessment", "Gap analysis report", "Strategic roadmap"],
  },
  {
    phase: "Design",
    duration: "Week 3-5",
    title: "Architecture & Prototyping",
    description: "Custom solution design with scalable architecture and proof-of-concept development.",
    deliverables: ["Technical specifications", "System architecture", "Interactive prototype"],
  },
  {
    phase: "Development",
    duration: "Week 6-12",
    title: "Implementation & Integration",
    description: "Agile development with continuous testing and seamless integration with existing systems.",
    deliverables: ["Core system build", "API integrations", "Quality assurance testing"],
  },
  {
    phase: "Deployment",
    duration: "Week 13-15",
    title: "Launch & Optimization",
    description: "Smooth production deployment with performance monitoring and initial optimizations.",
    deliverables: ["Production deployment", "Performance monitoring", "Team training"],
  },
]

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll(".process-step")
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add("visible")
              }, index * 300)
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
    <section ref={sectionRef} className="py-20" id="process">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">Proven Process</h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            A systematic approach refined over 50+ successful implementations
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-step fade-up flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-navy shadow-lg"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}
                >
                  <Card className="bg-navy/50 border-grayD/30 hover:border-accent/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                            <span className="text-accent font-bold text-sm">{index + 1}</span>
                          </div>
                          <span className="text-accent font-medium text-sm">{step.phase}</span>
                        </div>
                        <span className="text-grayL text-sm">{step.duration}</span>
                      </div>

                      <h3 className="font-montserrat font-semibold text-xl text-white mb-3 group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-grayL mb-4 leading-relaxed">{step.description}</p>

                      <div className="space-y-2">
                        <p className="text-accent font-medium text-sm">Key Deliverables:</p>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-grayL text-sm">
                              <CheckCircle size={14} className="text-accent flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-accent">
            <span className="font-medium">Ready to get started?</span>
            <ArrowRight size={16} />
          </div>
          <p className="text-grayL text-sm mt-2">Most projects see initial results within 45 days</p>
        </div>
      </Container>
    </section>
  )
}
