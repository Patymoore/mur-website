"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

export default function Hero() {

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0a1525] to-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,194,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,194,255,0.04),transparent_60%)]" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto py-12">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logos/mur-solutions-logo.svg"
              alt="MUR Solutions Logo"
              width={280}
              height={280}
              className="drop-shadow-2xl"
              priority
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-inter font-medium tracking-wide">AI Command Center for F&B Operators</span>
          </div>

          {/* Headline */}
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Your operation.<br />
            <span className="text-accent">In seconds.</span>
          </h1>

          {/* Description */}
          <p className="text-grayL text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We deploy AI agents that monitor margins, waste, inventory and guest patterns 24/7 — and alert you via WhatsApp before problems hit your P&L.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#contact"
              className="btn-primary text-base md:text-lg px-8 py-4 inline-flex items-center space-x-2 group hover:scale-105 transition-all duration-300"
            >
              <span>{siteCopy.hero.cta}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#solutions" className="text-grayL hover:text-accent transition-colors text-sm flex items-center gap-2">
              See what we build <ArrowRight size={14} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-grayD/20 rounded-2xl overflow-hidden border border-grayD/20 max-w-3xl mx-auto">
            <div className="bg-navy/80 px-8 py-6 text-center group hover:bg-navy/60 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors">20+</div>
              <div className="text-accent text-xs font-medium uppercase tracking-widest mb-1">Agents Deployed</div>
              <div className="text-grayL text-xs">across F&B operations</div>
            </div>
            <div className="bg-navy/80 px-8 py-6 text-center group hover:bg-navy/60 transition-colors border-x border-grayD/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors">€170K+</div>
              <div className="text-accent text-xs font-medium uppercase tracking-widest mb-1">Annual Savings</div>
              <div className="text-grayL text-xs">generated for clients</div>
            </div>
            <div className="bg-navy/80 px-8 py-6 text-center group hover:bg-navy/60 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors">2–4 wks</div>
              <div className="text-accent text-xs font-medium uppercase tracking-widest mb-1">Time to First Agent</div>
              <div className="text-grayL text-xs">live and running</div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
