"use client"

import { useEffect, useRef } from "react"
import { Database, Bot, BellRing, CheckCircle } from "lucide-react"
import Container from "./Container"

const steps = [
  {
    icon: Database,
    title: "Connect your stack",
    desc: "POS, reservation system, review platforms. We integrate with what you already use — no ripping anything out.",
    label: "Step 1",
  },
  {
    icon: Bot,
    title: "Agents run 24/7",
    desc: "AI agents monitor margins, waste, reputation, inventory and guest patterns around the clock without being asked.",
    label: "Step 2",
  },
  {
    icon: BellRing,
    title: "Intelligence finds you",
    desc: "When something needs attention, an alert reaches you via WhatsApp or email — ranked by dollar impact, not noise.",
    label: "Step 3",
  },
  {
    icon: CheckCircle,
    title: "Decide in seconds",
    desc: "Open the Command Center for full context, or act directly from the alert. No dashboards to hunt. No Monday catch-up.",
    label: "Step 4",
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(".hiw-step")
            els.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20" id="how-it-works">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            How It Works
          </h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            Intelligence finds you. You don't go looking for it.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="hiw-step fade-up flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300">
                    <step.icon className="text-accent" size={28} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-navy border border-accent/40 rounded-full flex items-center justify-center text-accent text-xs font-bold">
                    {i + 1}
                  </span>
                </div>

                <span className="text-accent text-xs font-medium tracking-widest uppercase mb-2">{step.label}</span>
                <h3 className="font-montserrat font-semibold text-lg text-white mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-grayL text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-16 border border-accent/20 rounded-lg p-6 max-w-2xl mx-auto text-center bg-accent/5">
          <p className="text-white font-medium mb-1">Problem detected → message to your phone → decision made.</p>
          <p className="text-grayL text-sm">That's the whole loop. No analyst needed.</p>
        </div>
      </Container>
    </section>
  )
}
