"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, TrendingDown, AlertTriangle, CheckCircle2 } from "lucide-react"
import Container from "./Container"

const insights = [
  {
    icon: TrendingDown,
    tone: "warn",
    agent: "Margin agent",
    text: "Ribeye margin dropped 6.8 pts vs. last month — supplier price up, menu price unchanged.",
  },
  {
    icon: AlertTriangle,
    tone: "alert",
    agent: "Inventory agent",
    text: "Dairy spend up 18% since May 3rd with flat covers. Likely over-ordering or waste.",
  },
  {
    icon: CheckCircle2,
    tone: "ok",
    agent: "Reconciliation agent",
    text: "All 1,204 invoices matched to ledger this week. 3 duplicates caught before payment.",
  },
]

const toneStyles: Record<string, string> = {
  warn: "text-amber-400",
  alert: "text-red-400",
  ok: "text-green-400",
}

export default function AIShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            insights.forEach((_, i) => {
              setTimeout(() => setVisibleCount(i + 1), i * 700)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-navy/30 border-y border-accent/10" id="ai">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="text-accent" size={14} />
              <span className="text-accent text-sm font-inter font-medium">AI at the core</span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
              We build AI that reads your data and tells you what to do.
            </h2>
            <p className="font-inter text-lg text-grayL leading-relaxed mb-6">
              Not another dashboard to stare at. Our systems run AI agents on top of your operations — catching the
              margin leak, the duplicate invoice, the silent stockout — and explaining it in plain language, ranked by
              what it costs you.
            </p>
            <ul className="space-y-3">
              {[
                "Private AI — your data never trains anyone else's model",
                "Agents that act, not charts you have to interpret",
                "Built into software we ship, not slideware",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-grayL">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mock AI feed */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-6 shadow-xl hero-glow">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-white font-medium text-sm">AI insight feed</span>
                </div>
                <span className="text-grayL/60 text-xs uppercase tracking-wider">Illustrative</span>
              </div>

              <div className="space-y-3">
                {insights.map((insight, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 ${
                      i < visibleCount ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-navy/60 flex items-center justify-center flex-shrink-0">
                      <insight.icon className={toneStyles[insight.tone]} size={18} />
                    </div>
                    <div>
                      <p className="text-accent text-xs font-medium mb-1">{insight.agent}</p>
                      <p className="text-grayL text-sm leading-relaxed">{insight.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
