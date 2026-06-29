"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, MessageCircle } from "lucide-react"
import Container from "./Container"
import { useStaggerReveal } from "@/hooks/useStaggerReveal"

const faqCategories = [
  {
    category: "Working with us",
    faqs: [
      {
        question: "How fast do we see something real?",
        answer:
          "We prototype on your real data first. The goal is a working AI prototype you can judge early — not a months-long roadmap before anything runs. Once it proves out, we move into a full production build.",
      },
      {
        question: "Do you only build with AI, or also plain software?",
        answer:
          "We're an AI company, but the AI is only useful wrapped in real software — pipelines, integrations, UI, monitoring. We build the whole thing end-to-end and ship it to production, the same way we run our own products.",
      },
      {
        question: "What if AI isn't the right answer for our problem?",
        answer:
          "Then we'll tell you. The prototype step exists to kill bad ideas cheaply. If a simpler system beats a model, we build that instead — we'd rather keep the relationship than oversell a model.",
      },
    ],
  },
  {
    category: "Technical & Integration",
    faqs: [
      {
        question: "Do you work with our existing systems?",
        answer:
          "Yes. We integrate with your existing databases, cloud platforms (AWS, Azure, GCP), POS and third-party APIs. We add AI on top of what you already run — no rip-and-replace required.",
      },
      {
        question: "What does your AI stack look like?",
        answer:
          "AI agents and LLMs (including private, self-hosted models), retrieval and orchestration, plus Python, SQL, BigQuery, AWS and Airflow underneath. We pick the model and architecture per use case — accuracy and cost, not hype.",
      },
    ],
  },
  {
    category: "Privacy & AI safety",
    faqs: [
      {
        question: "Does our data train someone else's model?",
        answer:
          "No. We default to private AI infrastructure — your data stays under your control and is never used to train third-party models. Where it fits, we run models you own. We act as a data processor under GDPR, with a DPA in place.",
      },
      {
        question: "How do you keep an AI system honest in production?",
        answer:
          "We instrument accuracy, cost and drift, add guardrails around model outputs, and keep humans in the loop where the stakes are high. As your data and business change, we re-tune the models rather than letting them quietly degrade.",
      },
    ],
  },
  {
    category: "Support & handover",
    faqs: [
      {
        question: "What happens after launch?",
        answer:
          "We keep the system running and improving — monitoring quality, tuning models, and giving you a direct line to the senior engineers who built it. No tier-1 ticket queue.",
      },
      {
        question: "Can our team own it eventually?",
        answer:
          "Yes. Every build ships with documentation and knowledge transfer so your team can operate and extend it. You own the deliverables; we stay as deep as you want us to.",
      },
    ],
  },
]

export default function FAQs() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
  const sectionRef = useStaggerReveal<HTMLElement>({ childClass: "faq-category" })

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
            Everything you need to know about working with us, organized by topic
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
