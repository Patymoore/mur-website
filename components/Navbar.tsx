"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import Container from "./Container"

const navItems = [
  { name: "Solutions", href: "#solutions" },
  { name: "About Us", href: "#about" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "About the Process", href: "#process" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact Us", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("solutions")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      },
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-sm border-b border-accent/20" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logos/mur-solutions-logo.svg"
              alt="MUR Solutions Logo"
              width={110}
              height={100}
              className="drop-shadow-lg"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-inter text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  activeSection === item.href.slice(1) ? "text-accent" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={() => scrollToSection("#contact")} className="btn-primary text-sm px-4 py-2">
              Contact
            </button>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-accent transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 bg-navy/95 backdrop-blur-sm border-t border-accent/20"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-2 font-inter text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  activeSection === item.href.slice(1) ? "text-accent bg-accent/10" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  )
}
