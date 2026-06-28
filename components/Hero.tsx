"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Users, TrendingUp, Shield, BarChart3, Database, Zap } from "lucide-react"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Enhanced Background with Geometric Pattern */}
      <div className="absolute inset-0">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0a1525] to-[#051018]" />
        
        {/* Tech-focused radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,194,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(0,194,255,0.08),transparent_50%)]" />
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C2FF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }} />
        
        {/* Data visualization inspired lines with animation */}
        <div className="absolute top-20 left-10 w-32 h-[1px] data-line" />
        <div className="absolute top-40 right-20 w-24 h-[1px] data-line" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-40 h-[1px] data-line" style={{ animationDelay: '2s' }} />
      </div>

      <Container className="relative z-10 py-16 lg:py-20">
        {/* Vertical Single Column Layout */}
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          
          {/* Logo and Headline as one unit */}
          <div className="flex flex-col items-center space-y-2">
            {/* Logo - Compact */}
            <Image
              src="/logos/mur-solutions-logo.svg"
              alt="MUR Solutions Logo"
              width={400}
              height={400}
              className="drop-shadow-xl"
              priority
            />
            
            {/* Headline immediately after logo */}
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.1]">
                Enterprise-Grade
                <span className="block text-accent font-extrabold">Data Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium italic tracking-wide">
                {siteCopy.hero.tagline}
              </p>
            </div>
          </div>

          {/* Main Content & CTAs */}
          <div className="space-y-6 w-full mt-6">
            {/* Description */}
            <p className="text-lg md:text-xl text-grayL leading-relaxed max-w-3xl mx-auto">
              Transform your business with AI-powered analytics, cloud infrastructure, and predictive insights. 
              <span className="text-white font-medium"> Trusted by Fortune 500 companies.</span>
            </p>

            {/* Enhanced CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/murdata/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center space-x-3 group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-accent/25"
                >
                  <span>{siteCopy.hero.cta}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => {
                    const successStoriesElement = document.getElementById('success-stories');
                    if (successStoriesElement) {
                      successStoriesElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="border-2 border-accent/40 text-accent hover:bg-accent/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:border-accent/80 backdrop-blur-sm"
                >
                  View Case Studies
                </button>
              </div>
              <p className="text-grayL text-sm opacity-90">
                <span className="inline-flex items-center space-x-1">
                  <Zap size={14} className="text-accent" />
                  <span>Free 30-minute consultation</span>
                </span>
                <span className="mx-2">•</span>
                <span>No commitment required</span>
              </p>
            </div>
          </div>

          {/* 3. Proven Impact Stats */}
          <div className="w-full max-w-2xl">
            <div className="glass-card rounded-2xl p-8 shadow-xl hero-glow">
              <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-8 text-center">
                Proven Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group cursor-pointer">
                  <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-accent/10 hover:border-accent/30">
                    <div className="w-16 h-16 bg-accent/15 rounded-xl flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                      <Users className="text-accent" size={28} />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">50+</div>
                      <div className="text-grayL text-sm font-medium">Projects Delivered</div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-accent/10 hover:border-accent/30">
                    <div className="w-16 h-16 bg-accent/15 rounded-xl flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                      <TrendingUp className="text-accent" size={28} />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">$2M+</div>
                      <div className="text-grayL text-sm font-medium">Cost Savings</div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-accent/10 hover:border-accent/30">
                    <div className="w-16 h-16 bg-accent/15 rounded-xl flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                      <Shield className="text-accent" size={28} />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">10+</div>
                      <div className="text-grayL text-sm font-medium">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Enterprise Technologies */}
          <div className="w-full max-w-xl">
            <div className="glass-card rounded-2xl p-8 shadow-xl hero-glow">
              <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-6 text-center">
                Enterprise Technologies
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <Database className="text-accent group-hover:scale-110 transition-transform" size={32} />
                  <span className="text-grayL text-sm font-medium">Cloud Data</span>
                </div>
                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <BarChart3 className="text-accent group-hover:scale-110 transition-transform" size={32} />
                  <span className="text-grayL text-sm font-medium">AI Analytics</span>
                </div>
                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <Zap className="text-accent group-hover:scale-110 transition-transform" size={32} />
                  <span className="text-grayL text-sm font-medium">Real-time</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  )
}
