"use client"

import Image from "next/image"
import { ArrowRight, TrendingUp, Shield, Brain, Database, Zap } from "lucide-react"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

const shipped = [
  { icon: Zap, value: "2", label: "AI products in production" },
  { icon: Shield, value: "Private", label: "AI — your data stays yours" },
  { icon: TrendingUp, value: "48h", label: "From kickoff to live" },
]

const stack = [
  { icon: Brain, label: "AI agents" },
  { icon: Database, label: "Private LLMs" },
  { icon: Zap, label: "Real-time" },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Blueprint grid — fine technical lines, masked to fade at edges */}
      <div className="absolute inset-0 blueprint-grid grid-mask" />
      {/* A single faint horizontal sweep, like a scope baseline */}
      <div className="absolute left-0 right-0 top-[38%] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <Container className="relative z-10 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow + logo */}
          <div className="flex items-center gap-4 mb-10">
            <Image
              src="/logos/mur-solutions-logo.svg"
              alt="MUR Solutions"
              width={52}
              height={52}
              priority
              className="h-12 w-12"
            />
            <div className="flex items-center gap-3">
              <span className="mono-label">MUR Solutions</span>
              <span className="h-3 w-px bg-white/20" />
              <span className="font-mono text-xs text-grayL/70 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                AI systems · in production
              </span>
            </div>
          </div>

          {/* Headline — left aligned, editorial */}
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              Your data already knows what to fix.
              <span className="block text-accent">We make it talk.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-grayL leading-relaxed">
              We&apos;re an AI company. We build the agents, models and software that read your operations and act on
              them — <span className="text-white font-medium">shipped as real products, not slide decks.</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/murdata/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              <span>{siteCopy.hero.cta}</span>
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3 font-medium text-grayL hover:border-accent/50 hover:text-white transition-colors"
            >
              See what we&apos;ve shipped
            </a>
          </div>

          <p className="mt-4 font-mono text-xs text-grayL/70 max-w-2xl">
            <span className="text-accent">$</span> start with a free data audit — 30 min, no slides. We name the 3
            highest-leverage fixes, hire us or not.
          </p>

          {/* Spec strip — shipped metrics, mono numbers, bordered panels */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10">
            {shipped.map((item) => (
              <div key={item.label} className="group bg-[#0E2034] p-6 transition-colors hover:bg-[#11263F]">
                <item.icon className="text-accent mb-4" size={20} />
                <div className="font-mono text-3xl font-bold text-white tabular-nums">{item.value}</div>
                <div className="mt-1 text-sm text-grayL">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Stack row — quiet, technical */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="mono-label">Stack</span>
            {stack.map((s) => (
              <span key={s.label} className="inline-flex items-center gap-2 text-grayL text-sm">
                <s.icon className="text-accent/80" size={16} />
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  )
}
