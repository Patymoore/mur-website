import Navbar from "@/components/Navbar"
import SolutionsSection from "@/components/SolutionsSection"
import AIShowcase from "@/components/AIShowcase"
import AboutUs from "@/components/AboutUs"
import OurProducts from "@/components/OurProducts"
import CaseStudyShowcase from "@/components/CaseStudyShowcase"
import AboutTheProcess from "@/components/AboutTheProcess"
import FAQs from "@/components/FAQs"
import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <SolutionsSection />
        <AIShowcase />
        <AboutUs />
        <OurProducts />
        <CaseStudyShowcase />
        <AboutTheProcess />
        <FAQs />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
