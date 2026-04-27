import Navbar from "@/components/Navbar"
import SolutionsSection from "@/components/SolutionsSection"
import AboutUs from "@/components/AboutUs"
import SuccessStories from "@/components/SuccessStories"
import HowItWorks from "@/components/HowItWorks"
import FAQs from "@/components/FAQs"
import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <SolutionsSection />
        <AboutUs />
        <SuccessStories />
        <HowItWorks />
        <FAQs />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
