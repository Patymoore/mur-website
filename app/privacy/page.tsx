import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Container from "@/components/Container"

export const metadata = {
  title: "Privacy Policy | MUR Solutions",
  description: "Privacy policy and data protection information for MUR Solutions, compliant with GDPR (EU 2016/679).",
}

const sections = [
  {
    id: "controller",
    title: "1. Data Controller",
    content: `MUR Solutions S.L. ("the Company") is the data controller for personal data collected through this platform.

**Company details:**
- Legal name: MUR Solutions S.L.
- Tax ID (CIF): B19837715
- Registered address: Torrent de l'Olla 121, 08012 Barcelona, Spain
- Contact: legal@mur-solutions.com

This service is intended exclusively for business clients aged 18 or over. MUR Solutions does not knowingly collect data from minors.`,
  },
  {
    id: "data",
    title: "2. Data We Collect",
    content: `We collect the following data when you use our platform:

**Account data:**
- Full name
- Email address
- Password (encrypted and managed by Clerk)

**Client project data:**
- Business datasets provided for analysis and consulting
- Operational and performance metrics relevant to engagements
- Company name and contact details

**App usage data:**
- Pages visited and features used
- Error logs and technical events
- IP address and device information`,
  },
  {
    id: "purpose",
    title: "3. Purpose & Legal Basis",
    table: [
      ["Delivery of the contracted consulting services", "Performance of a contract (Art. 6.1.b GDPR)"],
      ["Account management and authentication", "Performance of a contract (Art. 6.1.b GDPR)"],
      ["Usage analytics to improve the product", "Legitimate interest (Art. 6.1.f GDPR)"],
      ["Service communications", "Performance of a contract (Art. 6.1.b GDPR)"],
      ["Compliance with legal obligations", "Legal obligation (Art. 6.1.c GDPR)"],
    ],
  },
  {
    id: "processors",
    title: "4. Sub-processors",
    content: `To deliver our services we rely on the following technology providers acting as sub-processors:

- **Vercel** — hosting and deployment infrastructure (US/EU)
- **Neon / PostgreSQL** — cloud database storage (EU)
- **Resend** — transactional email (EU)
- **Sentry** — error monitoring and tracing, PII scrubbed (US, DPF certified)
- **Clerk** — authentication, where an account is provisioned (US, DPF certified)

All sub-processors are bound by Data Processing Agreements and comply with GDPR. We do not sell or share data with third parties for advertising purposes. Where we process personal data on behalf of a client, we act as Processor and the client acts as Controller — see our Data Processing Agreement at /dpa.`,
  },
  {
    id: "transfers",
    title: "5. International Data Transfers",
    content: `Some of our technology providers are based in or process data in the United States or other countries outside the European Economic Area (EEA). All such transfers are carried out with appropriate safeguards under GDPR Chapter V:

- **Standard Contractual Clauses (SCCs)** adopted by the European Commission (Implementing Decision EU 2021/914), binding Clerk, Vercel, Sentry and Upstash for US transfers.
- **EU–US Data Privacy Framework (DPF)** where the provider holds valid certification.

To request details of the specific safeguards in place, email legal@mur-solutions.com.`,
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: `We retain your data for as long as your account is active. After subscription cancellation:

- Client project data is kept for **30 days** to allow export.
- After that period, it is permanently deleted from our systems.
- Billing records are retained for **5 years** in accordance with Spanish tax law.`,
  },
  {
    id: "rights",
    title: "7. Your Rights",
    content: `As a data subject, you have the following rights under GDPR and the Spanish LOPDGDD:

- **Access:** Obtain confirmation of whether we process your data and receive a copy.
- **Rectification:** Correct inaccurate or incomplete data.
- **Erasure ("right to be forgotten"):** Request deletion of your data when it is no longer necessary.
- **Portability:** Receive your data in a structured, machine-readable format.
- **Restriction:** Request suspension of processing in certain circumstances.
- **Objection:** Object to processing based on legitimate interest.

To exercise your rights, email **legal@mur-solutions.com** with the subject "GDPR Rights Request" and a copy of your ID document.

You also have the right to lodge a complaint with the **Spanish Data Protection Agency (AEPD)** at www.aepd.es, or with your national supervisory authority.`,
  },
  {
    id: "cookies",
    title: "8. Cookies",
    content: `We use strictly necessary technical cookies for platform operation (session, authentication) and first-party analytics cookies to improve the service.

We do not use third-party tracking or advertising cookies.`,
  },
  {
    id: "security",
    title: "9. Security",
    content: `We apply appropriate technical and organisational measures to protect your data: TLS encryption in transit, encryption at rest, role-based access control, and periodic security audits.`,
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    content: `We may update this policy to reflect changes in our practices or applicable law. We will notify you by email at least **30 days in advance** of any material changes.

Last updated: **May 2025**`,
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
    return (
      <p key={i} className="ml-4 mb-1">• {line.slice(2)}</p>
    )
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

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="font-inter text-lg text-grayL max-w-2xl mx-auto">
              Pursuant to EU General Data Protection Regulation (GDPR 2016/679) and Spanish LOPDGDD
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
                  {section.table ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-grayD/40">
                            <th className="text-left py-2 pr-4 font-semibold text-white">Purpose</th>
                            <th className="text-left py-2 font-semibold text-white">Legal basis</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.map(([purpose, basis], i) => (
                            <tr key={i} className="border-b border-grayD/20">
                              <td className="py-2 pr-4 text-grayL">{purpose}</td>
                              <td className="py-2 text-grayL">{basis}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    section.content!.split("\n").map((line, i) => renderLine(line, i))
                  )}
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
