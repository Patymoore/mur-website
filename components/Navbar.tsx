"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Container from "./Container"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-sm border-b border-accent/20" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="MUR Data Solutions"
              width={40}
              height={40}
              className="text-accent"
              priority
            />
            <span className="font-montserrat font-bold text-lg">MUR DATA</span>
          </div>

          <button onClick={scrollToContact} className="btn-primary btn-pulse">
            Get Started
          </button>
        </div>
      </Container>
    </nav>
  )
}
