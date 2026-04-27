"use client"

import { useEffect, useRef } from "react"
import { Shield, Users, Zap, TrendingDown } from "lucide-react"
import Container from "./Container"

const trustMetrics = [
  {
    icon: Zap,
    value: "2–4 weeks",
    label: "Time to Live",
    description: "First agent deployed and running",
  },
  {
    icon: TrendingDown,
    value: "Up to 60%",
    label: "Reduction in Manual Tasks",
    description: "Staff time reclaimed by automation",
  },
  {
    icon: Users,
    value: "SMB-first",
    label: "Built for Small Business",
    description: "No enterprise budget required",
  },
  {
    icon: Shield,
    value: "< 48h",
    label: "Support Response",
    description: "Direct access to your team",
  },
]

export default function TrustIndicators() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".trust-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-navy/50 to-navy/30 border-y border-accent/10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="trust-item fade-up text-center group cursor-pointer">
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                  <metric.icon className="text-accent group-hover:scale-110 transition-transform" size={28} />
                </div>
                <div className="absolute -inset-2 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                  {metric.value}
                </div>
                <div className="text-accent font-medium text-sm">{metric.label}</div>
                <div className="text-grayL text-xs">{metric.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
