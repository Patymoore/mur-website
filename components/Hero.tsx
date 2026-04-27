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
    }, 60)
    return () => clearInterval(timer)
  }, [fullText])

  return (
    <section className="min-h-screen flex items-center justify-center pt-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0a1525] to-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,194,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,194,255,0.04),transparent_60%)]" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto -mt-16">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/logos/mur-solutions-logo.svg"
                alt="MUR Solutions Logo"
                width={400}
                height={400}
                className="drop-shadow-2xl"
                priority
              />
              <div className="absolute -inset-2 bg-accent/6 rounded-full blur-lg animate-pulse opacity-40" />
            </div>
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center mt-4 mb-6">
            <h2 className="font-inter font-medium text-lg md:text-xl lg:text-2xl text-accent italic tracking-wide">
              {typedText}
              <span className="animate-pulse">{typedText === fullText ? "" : "|"}</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-grayL text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            We build AI agents and data Command Centers for businesses that want their operational data accessible, actionable and working for them — in any industry.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto py-6">
            <div className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors">
                  <Users className="text-accent" size={20} />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-white">20+</span>
              </div>
              <p className="text-grayL text-sm font-medium">AI agents deployed</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="text-accent" size={20} />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-white">€80K+</span>
              </div>
              <p className="text-grayL text-sm font-medium">Annual savings for clients</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors">
                  <Shield className="text-accent" size={20} />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-white">3–5 wks</span>
              </div>
              <p className="text-grayL text-sm font-medium">Time to first live agent</p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 space-y-3">
            <a
              href="https://calendly.com/murdata/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base md:text-lg px-8 py-4 inline-flex items-center space-x-2 group hover:scale-105 transition-all duration-300"
            >
              <span>{siteCopy.hero.cta}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-grayL text-sm opacity-80">Free 30-minute consultation • No commitment required</p>
          </div>

        </div>
      </Container>
    </section>
  )
}
