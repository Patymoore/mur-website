"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, MessageCircle } from "lucide-react"
import Container from "./Container"

const faqs = [
  {
    question: "What's the typical timeline for a data transformation project?",
    answer:
      "Most projects range from 6-12 weeks depending on complexity. We start with a 1-week discovery phase to provide accurate timelines. Simple dashboard implementations can be completed in 4-6 weeks, while comprehensive data platforms typically take 8-12 weeks.",
  },
  {
    question: "Do you work with existing data infrastructure?",
    answer:
      "Absolutely. We specialize in integrating with existing systems including legacy databases, cloud platforms (AWS, Azure, GCP), and third-party APIs. Our approach minimizes disruption while maximizing the value of your current investments.",
  },
  {
    question: "What industries do you have experience with?",
    answer:
      "We've successfully delivered projects across e-commerce, fintech, healthcare, manufacturing, and logistics. Our Fortune 500 experience includes retail chains, financial institutions, and supply chain companies with complex regulatory requirements.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer:
      "We follow enterprise-grade security practices including end-to-end encryption, role-based access controls, and secure cloud infrastructure. All solutions are designed with GDPR, HIPAA, and SOX compliance in mind, depending on your industry requirements.",
  },
  {
    question: "What kind of ongoing support do you provide?",
    answer:
      "We offer flexible support packages including 24/7 monitoring, monthly optimization reviews, and priority technical support. Most clients choose our managed service option which includes proactive maintenance and continuous improvements.",
  },
  {
    question: "Can you help with team training and knowledge transfer?",
    answer:
      "Yes, every project includes comprehensive documentation and team training. We provide hands-on workshops, video tutorials, and ongoing mentorship to ensure your team can effectively manage and extend the solutions we build.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".faq-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible")
              }, index * 100)
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
    <section ref={sectionRef} className="py-20" id="faq">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="faq-item fade-up bg-navy/50 border-grayD/30 hover:border-accent/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors"
                >
                  <h3 className="font-montserrat font-semibold text-white pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-grayL leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
