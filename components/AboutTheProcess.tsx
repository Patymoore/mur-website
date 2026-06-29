"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Search, Lightbulb, Code, Rocket } from "lucide-react"
import Container from "./Container"

const processSteps = [
  {
    phase: "Step 1",
    duration: "Audit",
    title: "Find the highest-leverage problem",
    description:
      "We map your data and operations, then pick the one place where AI pays for itself fastest. No boil-the-ocean roadmaps.",
    deliverables: ["Data & ops review", "Use-case shortlist", "Clear success metric"],
    icon: Search,
  },
  {
    phase: "Step 2",
    duration: "Prototype",
    title: "Working AI, not slides",
    description:
      "We build a private AI prototype against your real data — so you see it work on your problem before committing to a full build.",
    deliverables: ["Private AI prototype", "Accuracy & cost check", "Go / no-go decision"],
    icon: Lightbulb,
  },
  {
    phase: "Step 3",
    duration: "Build",
    title: "Ship it into production",
    description:
      "We turn the prototype into real software — agents, pipelines and UI — integrated with your systems and running in production.",
    deliverables: ["Production AI system", "Integrations & pipelines", "Monitoring & guardrails"],
    icon: Code,
  },
  {
    phase: "Step 4",
    duration: "Run",
    title: "Improve while it runs",
    description:
      "We keep the system honest — tracking accuracy, cost and drift — and improve the models as your data and business change.",
    deliverables: ["Ongoing tuning", "Drift & quality monitoring", "Senior support"],
    icon: Rocket,
  },
]

export default function AboutTheProcess() {
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
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            How we work
          </h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            The same path we use to ship our own AI products — prototype on real data first, build only what works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="process-step fade-up bg-navy/50 border-grayD/30 hover:border-accent/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <step.icon className="text-accent" size={24} />
                  </div>
                  <span className="text-grayL text-sm">{step.duration}</span>
                </div>

                <div className="mb-4">
                  <span className="text-accent font-medium text-sm">{step.phase}</span>
                  <h3 className="font-montserrat font-semibold text-xl text-white mt-1 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-grayL mb-4 leading-relaxed text-sm">{step.description}</p>

                <div className="space-y-2">
                  <p className="text-accent font-medium text-xs">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {step.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-grayL text-xs">
                        <CheckCircle size={12} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-accent mb-2">
            <span className="font-medium">Ready to get started?</span>
            <ArrowRight size={16} />
          </div>
          <p className="text-grayL text-sm">It starts with a free data audit — no commitment, no slides</p>
        </div>
      </Container>
    </section>
  )
}
