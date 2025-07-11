import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import TrustIndicators from "@/components/TrustIndicators"
import Services from "@/components/Services"
import ProcessTimeline from "@/components/ProcessTimeline"
import CaseStudyShowcase from "@/components/CaseStudyShowcase"
import About from "@/components/About"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <Services />
        <ProcessTimeline />
        <CaseStudyShowcase />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
