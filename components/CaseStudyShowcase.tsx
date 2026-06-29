"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Clock, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import Container from "./Container"
import { useStaggerReveal } from "@/hooks/useStaggerReveal"

const caseStudies = [
  {
    industry: "Global e-commerce",
    company: "Global e-commerce marketplace",
    challenge:
      "Invoice, receipt and transaction duplicates and missing entries across the accounting system were causing silent revenue leakage.",
    solution:
      "AI-driven reconciliation over the full order lifecycle — automatically flagging duplicates and gaps before they hit the ledger.",
    results: [
      { icon: DollarSign, metric: "$1.3M/mo", label: "Revenue Protected", color: "text-green-400" },
      { icon: TrendingUp, metric: "15%", label: "Error Reduction", color: "text-blue-400" },
      { icon: Clock, metric: "24/7", label: "Automated Monitoring", color: "text-purple-400" },
    ],
    technologies: ["Python", "BigQuery", "SQL", "ML reconciliation"],
  },
  {
    industry: "Electronics retail",
    company: "Electronics retail chain",
    challenge:
      "Stores lacked real-time inventory visibility, driving stockouts and delivery delays across locations.",
    solution:
      "Real-time inventory intelligence with predictive alerts, surfacing stock risk per store before it became a stockout.",
    results: [
      { icon: Clock, metric: "30%", label: "Faster Delivery", color: "text-green-400" },
      { icon: TrendingUp, metric: "+8 NPS", label: "Score Improvement", color: "text-blue-400" },
      { icon: Shield, metric: "99.2%", label: "Stock Accuracy", color: "text-purple-400" },
    ],
    technologies: ["Python", "BigQuery", "Airflow", "Forecasting"],
  },
  {
    industry: "Crypto-finance",
    company: "Global crypto-finance platform",
    challenge: "Manual compliance reporting was consuming roughly 40% of the team's capacity.",
    solution:
      "Automated compliance pipeline with real-time regulatory monitoring, replacing manual report assembly end-to-end.",
    results: [
      { icon: DollarSign, metric: "$700K", label: "OPEX Saved", color: "text-green-400" },
      { icon: Clock, metric: "40%", label: "Time Reduction", color: "text-blue-400" },
      { icon: Shield, metric: "Zero", label: "Compliance Fines", color: "text-purple-400" },
    ],
    technologies: ["Python", "AWS", "Kubernetes", "SQL"],
  },
]

export default function CaseStudyShowcase() {
  const [currentCase, setCurrentCase] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useStaggerReveal<HTMLElement>({ childClass: "case-element" })

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % caseStudies.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length)
    setIsAutoPlaying(false)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
    setIsAutoPlaying(false)
  }

  const currentStudy = caseStudies[currentCase]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-navy/30 to-navy/50" id="success-stories">
      <Container>
        <div className="text-center mb-16">
          <h2 className="case-element fade-up font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Client work
          </h2>
          <p className="case-element fade-up font-inter text-lg text-grayL max-w-2xl mx-auto">
            Selected projects from our team&apos;s track record — names kept confidential, results real
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="case-element fade-up flex justify-between items-center mb-8">
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentCase(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCase ? "bg-accent scale-125" : "bg-grayD hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={prevCase}
                className="w-10 h-10 bg-navy/50 border border-grayD/30 rounded-full flex items-center justify-center hover:border-accent/50 transition-colors"
              >
                <ChevronLeft className="text-accent" size={20} />
              </button>
              <button
                onClick={nextCase}
                className="w-10 h-10 bg-navy/50 border border-grayD/30 rounded-full flex items-center justify-center hover:border-accent/50 transition-colors"
              >
                <ChevronRight className="text-accent" size={20} />
              </button>
            </div>
          </div>

          {/* Case Study Content */}
          <Card className="case-element fade-up bg-navy/50 border-grayD/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column - Details */}
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-accent/50 text-accent">
                      {currentStudy.industry}
                    </Badge>
                    <span className="text-grayL/60 text-xs uppercase tracking-wider">Client confidential</span>
                  </div>

                  <div>
                    <h3 className="font-montserrat font-bold text-2xl text-white mb-2">{currentStudy.company}</h3>
                    <p className="text-grayL leading-relaxed">
                      <span className="text-red-400 font-medium">Challenge:</span> {currentStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-grayL leading-relaxed">
                      <span className="text-accent font-medium">Solution:</span> {currentStudy.solution}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-accent font-medium text-sm">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {currentStudy.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Column - Results */}
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8">
                  <h4 className="font-montserrat font-semibold text-xl text-white mb-6">Measurable Impact</h4>

                  <div className="space-y-6">
                    {currentStudy.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-4 group">
                        <div className="w-12 h-12 bg-navy/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <result.icon className={result.color} size={24} />
                        </div>
                        <div>
                          <div className={`text-2xl font-bold ${result.color}`}>{result.metric}</div>
                          <div className="text-grayL text-sm">{result.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}
