import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Container from "@/components/Container"

export const metadata = {
  title: "Terms of Service | MUR Solutions",
  description: "Terms and conditions for MUR Solutions AI & data consulting services.",
}

const sections = [
  {
    id: "subject",
    title: "1. Subject Matter & Parties",
    content: `These Terms of Service ("Terms") govern the provision and use of the AI and data consulting services ("Services") offered by **MUR Solutions S.L.** ("Provider") to business clients who engage the Provider ("Customer").

**Provider details:**
- Legal name: MUR Solutions S.L.
- Tax ID (CIF): B19837715
- Registered address: Torrent de l'Olla 121, 08012 Barcelona, Spain
- Contact: legal@mur-solutions.com

By engaging the Provider or accepting a proposal, the Customer agrees to be bound by these Terms. These Services are intended exclusively for business clients aged 18 or over.`,
  },
  {
    id: "service",
    title: "2. Service Description",
    content: `MUR Solutions provides AI and data consulting services tailored to each engagement. Services may include:

- Analytics dashboards and automated KPI reporting
- Cloud data pipelines, ingestion and orchestration
- Predictive and machine-learning models
- Custom AI assistants and automation

**Informational nature:** All analyses, forecasts, and deliverables are for **informational purposes only**. MUR Solutions does not guarantee specific business outcomes. Decisions made based on deliverables are the Customer's sole responsibility.`,
  },
  {
    id: "subscription",
    title: "3. Fees & Pricing",
    content: `Fees are defined per engagement in the applicable proposal or statement of work:

- Pricing may be fixed-scope, retainer, or time-and-materials as agreed in writing
- Invoiced according to the milestones or schedule set out in the proposal
- Prices exclude applicable taxes (VAT 21% in Spain)
- Any change to scope or fees requires written agreement by both parties`,
  },
  {
    id: "payment",
    title: "4. Payment & Billing",
    content: `- Payments are processed via the payment method agreed in the proposal.
- In the event of non-payment, access may be suspended after **7 days** from the due date.
- The Customer will receive electronic invoices in accordance with Spanish tax regulations.
- Billing disputes must be raised within **30 days** of the invoice date.`,
  },
  {
    id: "cancellation",
    title: "5. Termination",
    content: `Either party may terminate an engagement with written notice as set out in the applicable proposal, or by emailing **legal@mur-solutions.com**.

**Effects of termination:**
- The Customer is invoiced for work performed up to the termination date.
- No partial refunds are issued for completed work.
- After termination, client project data is available for export for **30 days**, after which it is permanently deleted.

The Provider may terminate or suspend Services for breach of these Terms with **15 days' notice**, except in cases of serious breach.`,
  },
  {
    id: "data",
    title: "6. Data Ownership",
    content: `**The Customer is the exclusive owner of all their data.**

MUR Solutions acts solely as a data processor for the Customer's data under GDPR. The Provider:

- Does not sell, transfer, or monetise Customer data with third parties
- Accesses data only to deliver the contracted Service and provide technical support
- May use anonymised, aggregated data to improve its methods, without identifying the Customer

The Customer warrants that they hold the necessary rights over all data provided for an engagement and that its use complies with applicable law.`,
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    content: `**7.1 Exclusions.** MUR Solutions shall not be liable for:
- Lost profits, indirect damages, or business losses arising from use of deliverables or reports
- Commercial decisions made by the Customer based on deliverables
- Interruptions to third-party services (infrastructure providers, payment processors)
- Data loss caused by the Customer

**7.2 Cap.** In any event, the Provider's maximum aggregate liability to the Customer shall not exceed the amounts paid by the Customer in the **3 months preceding the event** giving rise to the claim.

**7.3 Service standard.** The Provider will perform the Services with reasonable skill and care in line with industry standards. Where deliverables include hosted components, uninterrupted availability is not guaranteed.`,
  },
  {
    id: "ip",
    title: "8. Intellectual Property",
    content: `The Provider's pre-existing tools, source code, design, brand, methodologies, and documentation remain the exclusive property of MUR Solutions S.L. and are protected by applicable intellectual property law.

Upon full payment, the Customer receives ownership of the bespoke deliverables produced for their engagement, together with a **limited, non-exclusive, non-transferable licence** to any underlying Provider tooling required to use them.

Reverse engineering, copying, or redistributing the Provider's proprietary tools or methods is prohibited without the Provider's express written consent.`,
  },
  {
    id: "confidentiality",
    title: "9. Confidentiality",
    content: `Both parties agree to keep the other party's non-public information confidential. This obligation extends for **2 years** after the end of the contractual relationship.`,
  },
  {
    id: "modifications",
    title: "10. Modifications to These Terms",
    content: `The Provider may modify these Terms by notifying the Customer at least **30 days in advance** by email. Continued use of the Service after that period constitutes acceptance of the updated Terms.

Last updated: **May 2025**`,
  },
  {
    id: "law",
    title: "11. Governing Law & Jurisdiction",
    content: `These Terms are governed by Spanish law. For any dispute, the parties submit to the **Courts and Tribunals of Madrid**, expressly waiving any other jurisdiction that may apply.`,
  },
]

function renderLine(line: string, i: number) {
  if (line.startsWith("**") && line.endsWith("**")) {
    return (
      <p key={i} className="font-semibold text-white mt-4 mb-1">
        {line.replace(/\*\*/g, "")}
      </p>
    )
  }
  if (line.startsWith("- **")) {
    const match = line.match(/^- \*\*(.+?)\*\*(.*)$/)
    if (match) {
      return (
        <p key={i} className="ml-4 mb-1">
          <span className="text-accent font-medium">• {match[1]}</span>
          <span>{match[2]}</span>
        </p>
      )
    }
  }
  if (line.startsWith("- ")) {
    return <p key={i} className="ml-4 mb-1">• {line.slice(2)}</p>
  }
  if (line.trim() === "") return <div key={i} className="h-2" />
  if (line.includes("**")) {
    const parts = line.split(/\*\*/)
    return (
      <p key={i} className="mb-1">
        {parts.map((part, j) =>
          j % 2 === 1 ? <span key={j} className="text-white font-semibold">{part}</span> : part
        )}
      </p>
    )
  }
  return <p key={i} className="mb-1">{line}</p>
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <span className="text-accent text-sm font-inter font-medium">Legal</span>
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Terms of Service
            </h1>
            <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
              Terms and conditions for MUR Solutions AI &amp; data consulting services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-navy/50 border border-grayD/30 hover:border-accent/30 transition-colors duration-300 rounded-xl p-8"
              >
                <h2 className="font-montserrat font-semibold text-xl text-accent mb-4">{section.title}</h2>
                <div className="font-inter text-grayL leading-relaxed text-sm">
                  {section.content.split("\n").map((line, i) => renderLine(line, i))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
