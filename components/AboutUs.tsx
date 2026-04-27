"use client"

import { useEffect, useRef } from "react"
import { Bot, Target, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Container from "./Container"

const missionValues = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Give small and mid-sized businesses access to AI tools that were previously only affordable at enterprise scale — practical agents that solve real operational problems from day one.",
  },
  {
    icon: Users,
    title: "Our Values",
    description:
      "Transparency, fast iteration and measurable outcomes. We build with you, not for you — and we don't consider a project done until you can see the impact on your numbers.",
  },
  {
    icon: Award,
    title: "Our Approach",
    description:
      "We start with one concrete pain point, deploy an agent in 3–5 weeks, and prove ROI before expanding. No big-bang projects, no months of consulting before you see anything.",
  },
]

const whyUs = [
  {
    icon: Bot,
    title: "AI-native from day one",
    description: "We don't bolt AI onto legacy workflows. Every solution is designed around agents and automation.",
  },
  {
    icon: Target,
    title: "F&B specialists",
    description: "We understand reservations, kitchen ops, delivery, waste and labour cost — the metrics that matter in your industry.",
  },
  {
    icon: Users,
    title: "Small team, direct access",
    description: "You work directly with the people building your solution. No account managers, no handoffs.",
  },
]

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".about-element")
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

  return (
    <section ref={sectionRef} className="py-20" id="about">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">About Us</h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            We build AI agents for restaurants, bars and food businesses that want to automate operations without hiring more staff
          </p>
        </div>

        {/* Mission, Values, Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {missionValues.map((item, index) => (
            <Card
              key={index}
              className="about-element fade-up bg-navy/50 border-grayD/30 hover:border-accent/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <item.icon className="text-accent" size={28} />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-white mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-grayL leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyUs.map((item, index) => (
            <div
              key={index}
              className="about-element fade-up flex items-start space-x-4 p-4 rounded-lg border border-grayD/20 hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="text-accent" size={20} />
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-grayL text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
