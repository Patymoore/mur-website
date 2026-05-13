import { Linkedin, Github, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

const navLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "About Us", href: "/#about" },
  { label: "How It Works", href: "/#process" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/#contact" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
]

export default function Footer() {
  return (
    <footer className="border-t border-accent/20 pt-14 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div className="space-y-4">
            <Image
              src="/logos/mur-solutions-logo.svg"
              alt="MUR Solutions"
              width={130}
              height={40}
              className="drop-shadow-lg"
            />
            <p className="text-grayL text-sm leading-relaxed max-w-xs">
              AI agents and Command Centers for restaurant operators who want their data working for them — 24/7.
            </p>
            <a
              href="mailto:legal@mur-solutions.com"
              className="text-grayL hover:text-accent transition-colors text-sm flex items-center gap-2"
            >
              <Mail size={14} />
              legal@mur-solutions.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-grayL hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4 className="font-montserrat font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-grayL hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-montserrat font-semibold text-white text-sm uppercase tracking-widest mb-3">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              <a
                href={siteCopy.about.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-accent/10 hover:bg-accent hover:text-navy text-accent rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={siteCopy.about.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-accent/10 hover:bg-accent hover:text-navy text-accent rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-grayD/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-grayL/60 text-xs">© 2025 MUR Solutions. All rights reserved. Spain / EU.</p>
          <p className="text-grayL/40 text-xs">Built with AI. Powered by data.</p>
        </div>
      </Container>
    </footer>
  )
}
