"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

export default function Success() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".impact-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible")
              }, index * 150)
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
    <section ref={sectionRef} className="py-20 bg-navy/30" id="success">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Success Stories
          </h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            Real impact delivered to businesses across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteCopy.success.map((impact, index) => (
            <Card
              key={index}
              className="impact-card fade-up bg-accent/10 border-accent/30 hover:bg-accent/20 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <p className="font-inter font-medium text-white text-lg leading-relaxed">{impact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
