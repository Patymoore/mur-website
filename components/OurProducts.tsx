"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Ship, UtensilsCrossed } from "lucide-react"
import Container from "./Container"

const products = [
  {
    name: "Sophios",
    icon: Ship,
    url: "https://sophios.tech",
    tagline: "The Operating System for Luxury Assets",
    description:
      "Unified financial and operational management across yachts, jets, properties and vehicles — with private AI infrastructure so data never leaves the client's control.",
    audience: "Family offices & high-net-worth operators",
    highlights: [
      "95%+ accuracy on AI invoice & expense extraction",
      "Operational in 48 hours",
      "Crew, payroll, approvals & predictive maintenance",
    ],
    tags: ["Private AI", "OCR", "Multi-asset"],
  },
  {
    name: "Kairos",
    icon: UtensilsCrossed,
    url: "https://kairos.rest",
    tagline: "Restaurant intelligence, treated right",
    description:
      "Six AI agents watch margins, inventory, reputation, menu, revenue and recipe drift for restaurant groups — surfacing problems in plain language before they cost a quarter.",
    audience: "European restaurant groups",
    highlights: [
      "6 monitoring agents, alerts ranked by financial impact",
      "1-week setup, no POS replacement",
      "GDPR-native by design",
    ],
    tags: ["AI agents", "POS integration", "Real-time"],
  },
]

export default function OurProducts() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".product-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible")
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
    <section ref={sectionRef} className="py-20" id="products">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <span className="text-accent text-sm font-inter font-medium">Built by us</span>
          </div>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            We don't just advise — we ship.
          </h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            MUR Solutions is the studio behind two AI products running in production. The same team builds for you.
          </p>
        </div>

        {/* Real product-backed stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">2</div>
            <p className="text-grayL">AI products in production</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">95%+</div>
            <p className="text-grayL">AI extraction accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">48h</div>
            <p className="text-grayL">From kickoff to live</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="product-card fade-up bg-navy/50 border-grayD/30 hover:border-accent/50 transition-all duration-300 group"
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <product.icon className="text-accent" size={28} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-2xl text-white group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-accent text-sm font-medium">{product.tagline}</p>
                    </div>
                  </div>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${product.name}`}
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-navy transition-colors flex-shrink-0"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                <p className="text-grayL leading-relaxed">{product.description}</p>

                <div>
                  <p className="text-accent text-xs font-medium uppercase tracking-wider mb-1">Built for</p>
                  <p className="text-white text-sm">{product.audience}</p>
                </div>

                <ul className="space-y-2">
                  {product.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-grayL text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {product.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Track record — anonymized, no client names */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-accent text-xs font-medium uppercase tracking-wider mb-3">Before MUR</p>
          <p className="font-inter text-lg text-grayL leading-relaxed">
            Our team has delivered data &amp; AI projects inside some of the world&apos;s largest operators — across{" "}
            <span className="text-white font-medium">global e-commerce</span>,{" "}
            <span className="text-white font-medium">electronics retail</span> and{" "}
            <span className="text-white font-medium">crypto-finance</span>. Client names stay confidential; the
            experience comes with us.
          </p>
        </div>
      </Container>
    </section>
  )
}
