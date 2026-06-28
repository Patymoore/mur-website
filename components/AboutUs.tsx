"use client"

import { useEffect, useRef } from "react"
import { Target, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Container from "./Container"

const missionValues = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Transform businesses through data-driven insights, making complex analytics accessible and actionable for every organization.",
  },
  {
    icon: Users,
    title: "Our Values",
    description:
      "Transparency, innovation, and client success drive everything we do. We believe in building long-term partnerships, not just projects.",
  },
  {
    icon: Award,
    title: "Our Approach",
    description:
      "Hands-on collaboration with Fortune 500 and SMEs alike, delivering measurable results through proven methodologies and cutting-edge technology.",
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
            Transforming data into business impact through expertise, innovation, and proven results
          </p>
        </div>

        {/* Mission, Values, Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

      </Container>
    </section>
  )
}
