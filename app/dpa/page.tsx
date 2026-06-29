import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Container from "@/components/Container"

export const metadata = {
  title: "Data Processing Agreement | MUR Solutions",
  description:
    "Data Processing Agreement (DPA) governing how MUR Solutions processes personal data on behalf of its clients, pursuant to GDPR (EU 2016/679).",
}

const sections = [
  {
    id: "parties",
    title: "1. Parties & Scope",
    content: `This Data Processing Agreement ("DPA") forms part of the engagement between **MUR Solutions S.L.** ("Processor") and the client ("Controller") and governs the processing of personal data carried out by the Processor on the Controller's behalf.

**Processor details:**
- Legal name: MUR Solutions S.L.
- Tax ID (CIF): B19837715
- Registered address: Torrent de l'Olla 121, 08012 Barcelona, Spain
- Contact: legal@mur-solutions.com

This DPA applies whenever the Processor processes personal data on behalf of the Controller in the course of delivering the contracted Services. In all such cases the **Controller determines the purposes and means** of processing and the Processor acts only on documented instructions.`,
  },
  {
    id: "roles",
    title: "2. Roles of the Parties",
    content: `Where MUR Solutions processes personal data supplied by, or generated on behalf of, the client to deliver an engagement, **MUR Solutions acts as Processor and the client acts as Controller** within the meaning of Article 4 GDPR.

The Processor shall process personal data only on the documented instructions of the Controller, including with regard to international transfers, unless required to do otherwise by EU or Member State law.`,
  },
  {
    id: "subject",
    title: "3. Subject Matter & Duration",
    content: `**Subject matter:** processing of personal data as necessary to deliver the AI and data consulting Services agreed in the applicable proposal or statement of work.

**Duration:** for the term of the engagement and any agreed data-export period thereafter.

**Nature & purpose:** analysis, modelling, pipeline development, dashboarding and automation of the Controller's business data.

**Categories of data subjects:** the Controller's customers, employees and contacts, as determined by the data the Controller provides.

**Categories of personal data:** as provided by the Controller; the Controller is responsible for not sharing special-category data unless expressly agreed in writing.`,
  },
  {
    id: "obligations",
    title: "4. Processor Obligations",
    content: `MUR Solutions shall:

- Process personal data only on the Controller's documented instructions.
- Ensure persons authorised to process the data are bound by confidentiality.
- Implement appropriate technical and organisational security measures (see clause 6).
- Engage sub-processors only under clause 5.
- Assist the Controller in responding to data-subject rights requests.
- Assist the Controller with security, breach-notification and impact-assessment obligations (Arts. 32–36 GDPR).
- At the Controller's choice, delete or return all personal data at the end of the engagement, except any copies required by law.
- Make available the information necessary to demonstrate compliance and allow for audits.`,
  },
  {
    id: "subprocessors",
    title: "5. Sub-processors",
    content: `The Controller provides general authorisation for the Processor to engage the sub-processors listed below. The Processor remains fully liable for their performance and binds each by a written agreement with data-protection obligations no less protective than this DPA.

- **Vercel** — hosting and deployment infrastructure (US/EU)
- **Neon / PostgreSQL** — cloud database storage (EU)
- **Resend** — transactional email (EU)
- **Sentry** — error monitoring and tracing, PII scrubbed (US, DPF certified)
- **Clerk** — authentication, where an account is provisioned (US, DPF certified)

The Processor will give the Controller **30 days' prior notice** of any intended addition or replacement of a sub-processor, during which the Controller may object on reasonable data-protection grounds.`,
  },
  {
    id: "transfers",
    title: "6. International Transfers",
    content: `Where a sub-processor processes data outside the European Economic Area, transfers are protected by:

- **EU–US Data Privacy Framework (DPF)** for certified vendors, or
- **Standard Contractual Clauses (SCCs)** adopted by the European Commission (Implementing Decision EU 2021/914).

To request details of the specific safeguards in place, email legal@mur-solutions.com.`,
  },
  {
    id: "security",
    title: "7. Security Measures",
    content: `The Processor applies appropriate technical and organisational measures, including:

- TLS encryption in transit and encryption at rest.
- Role-based access control and the principle of least privilege.
- Logging, monitoring and periodic security review.
- PII minimisation and, where feasible, redaction before processing.`,
  },
  {
    id: "breach",
    title: "8. Personal Data Breach",
    content: `The Processor shall notify the Controller **without undue delay** after becoming aware of a personal data breach affecting the Controller's data, and provide the information reasonably required for the Controller to meet its own notification obligations under Articles 33–34 GDPR.`,
  },
  {
    id: "return",
    title: "9. Return & Deletion",
    content: `On termination of the engagement, the Processor will, at the Controller's choice, return or delete all personal data processed on the Controller's behalf within **30 days**, except where retention is required by applicable law (e.g. Spanish tax law for billing records).`,
  },
  {
    id: "law",
    title: "10. Governing Law",
    content: `This DPA is governed by Spanish law and the GDPR. In the event of conflict between this DPA and the main engagement terms, this DPA prevails in respect of data processing.

Last updated: **June 2026**`,
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

export default function DPAPage() {
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
              Data Processing Agreement
            </h1>
            <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
              How MUR Solutions processes personal data on behalf of its clients, pursuant to GDPR (EU 2016/679)
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
