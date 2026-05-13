"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, MessageCircle } from "lucide-react"
import Container from "./Container"

const faqCategories = [
  {
    category: "Getting Started",
    faqs: [
      {
        question: "How fast can we go live?",
        answer:
          "First agent is live in 2–4 weeks. We start with one concrete pain point — food waste, labour cost, reservation no-shows — deploy the agent, and prove ROI before expanding. No big-bang projects, no months of consulting before you see anything.",
      },
      {
        question: "Do we need to replace our POS or existing systems?",
        answer:
          "No. We integrate with what you already use — Toast, Square, Lightspeed, TheFork, TripAdvisor, Google, and most major POS systems. Our job is to connect the dots between your existing tools, not to replace them.",
      },
    ],
  },
  {
    category: "The Agents",
    faqs: [
      {
        question: "What do the AI agents actually do day-to-day?",
        answer:
          "They monitor your margins, inventory, waste, guest reviews, and labour cost around the clock — without being asked. When something needs attention, an alert reaches you via WhatsApp or email, ranked by dollar impact. You get the signal, not the noise.",
      },
      {
        question: "Can we customise what the agents monitor and alert on?",
        answer:
          "Yes. Every deployment is tailored to your operation. During onboarding we define your key metrics, alert thresholds, and escalation rules. Agents learn your seasonal patterns over time and adjust their baselines automatically.",
      },
    ],
  },
  {
    category: "Pricing & Commitment",
    faqs: [
      {
        question: "How does pricing work?",
        answer:
          "Monthly subscription per venue. No long-term contracts — you can cancel any time. We start with a single venue so you can validate the ROI before rolling out to your full portfolio.",
      },
      {
        question: "What's the ROI we should expect?",
        answer:
          "Our clients typically see results in 60–90 days: food waste down 15–22%, manual reporting time down 40%, and labour scheduling efficiency up 10–15%. We track these metrics together so the value is always visible.",
      },
    ],
  },
  {
    category: "Data & Security",
    faqs: [
      {
        question: "Who owns the data?",
        answer:
          "You do. We act as a data processor under GDPR — your operational data belongs to your business. We never sell, share, or use your data to train models for other clients. You can export or delete everything at any time.",
      },
      {
        question: "Is the platform GDPR compliant?",
        answer:
          "Yes. We operate under Spanish/EU law, use EU-based infrastructure where possible, and maintain a full Data Processing Agreement with every client. Our privacy policy and terms of service are published and available on this site.",
      },
    ],
  },
]

export default function FAQs() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".faq-category")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible")
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

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <section ref={sectionRef} className="py-20 bg-navy/30" id="faqs">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            Everything you need to know about getting AI agents running in your restaurant
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category fade-up">
              <h3 className="font-montserrat font-semibold text-xl text-accent mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`
                  return (
                    <Card
                      key={key}
                      className="bg-navy/50 border-grayD/30 hover:border-accent/50 transition-all duration-300"
                    >
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors"
                        >
                          <h4 className="font-montserrat font-semibold text-white pr-4">{faq.question}</h4>
                          <ChevronDown
                            className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                              openItems[key] ? "rotate-180" : ""
                            }`}
                            size={20}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openItems[key] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-grayL leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-accent mb-2">
            <MessageCircle size={20} />
            <span className="font-medium">Still have questions?</span>
          </div>
          <p className="text-grayL text-sm">Schedule a free consultation to discuss your specific needs</p>
        </div>
      </Container>
    </section>
  )
}
