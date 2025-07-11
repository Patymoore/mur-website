"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Linkedin, Github, GraduationCap, Briefcase, Brain, Building } from "lucide-react"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

export default function About() {
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
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">About Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="about-element fade-up lg:w-1/3">
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="Patricio Moore"
                width={256}
                height={256}
                className="rounded-full border-4 border-accent/30"
              />
            </div>
          </div>

          <div className="about-element fade-up lg:w-2/3 space-y-8">
            <p className="font-inter text-lg text-grayL leading-relaxed">{siteCopy.about.bio}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-accent" size={24} />
                <span className="font-inter text-white">MSc Data Science & Big Data</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="text-accent" size={24} />
                <span className="font-inter text-white">10+ years experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="text-accent" size={24} />
                <span className="font-inter text-white">AI & ML specialist</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building className="text-accent" size={24} />
                <span className="font-inter text-white">Fortune 500 & SME track record</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href={siteCopy.about.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href={siteCopy.about.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent text-accent hover:bg-accent hover:text-navy font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
