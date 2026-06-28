"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, MessageCircle } from "lucide-react"
import Container from "./Container"

const faqCategories = [
  {
    category: "Project & Timeline",
    faqs: [
      {
        question: "What's the typical timeline for a data transformation project?",
        answer:
          "Most projects range from 10-15 weeks depending on complexity. We start with a 2-week discovery phase to provide accurate timelines. Simple dashboard implementations can be completed in 6-8 weeks, while comprehensive data platforms typically take 12-15 weeks.",
      },
      {
        question: "How do you handle project scope changes?",
        answer:
          "We use an agile approach with regular check-ins. Minor adjustments are included, while significant scope changes are discussed and documented with timeline and cost implications before implementation.",
      },
    ],
  },
  {
    category: "Technical & Integration",
    faqs: [
      {
        question: "Do you work with existing data infrastructure?",
        answer:
          "Absolutely. We specialize in integrating with existing systems including legacy databases, cloud platforms (AWS, Azure, GCP), and third-party APIs. Our approach minimizes disruption while maximizing the value of your current investments.",
      },
      {
        question: "What technologies do you typically use?",
        answer:
          "We use modern, proven technologies including Python, SQL, BigQuery, AWS, Kubernetes, Airflow, and various visualization tools like Data Studio and Tableau. Technology choices are always tailored to your specific needs and existing infrastructure.",
      },
    ],
  },
  {
    category: "Data Security & Best Practices",
    faqs: [
      {
        question: "How do you ensure data security and privacy?",
        answer:
          "We follow industry best practices including end-to-end encryption, role-based access controls, secure cloud infrastructure, and regular security audits. All data handling follows strict privacy protocols and your organization's security requirements.",
      },
      {
        question: "What data governance practices do you implement?",
        answer:
          "We establish clear data governance frameworks including data quality standards, access controls, audit trails, and documentation. This ensures data integrity, traceability, and compliance with your internal policies and industry standards.",
      },
    ],
  },
  {
    category: "Support & Training",
    faqs: [
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
