"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Linkedin, Github, Brain, Target, Users, Award, MessageSquare, Wrench } from "lucide-react"
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

const founders = [
  {
    name: "Patricio Moore",
    image: "/patricio.jpeg", // Updated placeholder
    credentials: [
      "MSc in Data Science & Big Data from leading university",
      "10+ years in end-to-end AI & data workflows across industries",
      "Proven impact across Fortune 500 companies & high-growth SMEs",
      "Expert in driving efficiency & strategic value with advanced analytics tools",
    ],
    linkedin: "https://www.linkedin.com/in/patricio-moore-bb3b2b121/",
    github: "https://github.com/Patymoore",
    icon: Brain,
  },
  {
    name: "Mathias Moore", // Reordered
    image: "/mathias.jpg", // Updated placeholder
    credentials: [
      "Civil Engineer turned Data Leader",
      "5+ years leading analytics & cultural data transformation",
      "Delivered end-to-end data projects in early-stage orgs",
      "Focus on impact, adoption & long-term value across the data stack",
    ],
    linkedin: "https://www.linkedin.com/in/mathias-moore-6ab4a1150/",
    github: "#",
    icon: Wrench,
  },
  {
    name: "Mariano Carchio", // Reordered
    image: "/mariano.jpeg", // Updated placeholder
    credentials: [
      "Communication Expert with 10+ years in entertainment & personal care industries",
      "Skilled in client relations across diverse audiences",
      "Strong people management and leadership attitude",
      "Proven ability to build trust and drive team performance",
    ],
    linkedin: "https://www.linkedin.com/in/marianocarchio/",
    github: "#",
    icon: MessageSquare,
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

        {/* Founders Section */}
        <div className="mb-12">
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-white text-center mb-12">
            Meet Our Founders
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="about-element fade-up bg-navy/50 border-grayD/30 hover:border-accent/50 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-accent/30 group-hover:border-accent/50 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <founder.icon className="text-accent" size={20} />
                    </div>
                  </div>

                  {/* Name */}
                  <h4 className="font-montserrat font-bold text-xl text-white text-center mb-4 group-hover:text-accent transition-colors">
                    {founder.name}
                  </h4>

                  {/* Credentials */}
                  <div className="space-y-3 mb-6">
                    {founder.credentials.map((credential, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-grayL text-sm leading-relaxed">{credential}</p>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-navy transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    {founder.github !== "#" && (
                      <a
                        href={founder.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-navy transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
