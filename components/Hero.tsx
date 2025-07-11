"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Users, TrendingUp, Shield } from "lucide-react"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = siteCopy.hero.tagline

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0a1525] to-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,194,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,194,255,0.05),transparent_50%)]" />
      </div>

      <Container className="relative z-10">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image
                src="/iso.svg"
                alt="MUR Data Solutions Logo"
                width={72}
                height={72}
                className="text-accent drop-shadow-2xl"
                priority
              />
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>

          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            {siteCopy.hero.headline}
          </h1>

          <div className="h-16 flex items-center justify-center">
            <h2 className="font-inter font-medium text-xl md:text-2xl lg:text-3xl text-accent italic">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto py-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-accent mr-2" size={24} />
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <p className="text-grayL">Projects completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="text-accent mr-2" size={24} />
                <span className="text-3xl font-bold text-white">$2M+</span>
              </div>
              <p className="text-grayL">Savings generated</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="text-accent mr-2" size={24} />
                <span className="text-3xl font-bold text-white">10+</span>
              </div>
              <p className="text-grayL">Years of experience</p>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <a
              href="https://calendly.com/murdata/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-pulse text-lg px-8 py-4 inline-flex items-center space-x-2 group"
            >
              <span>{siteCopy.hero.cta}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-grayL text-sm">Free 30-minute consultation • No commitment</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
