import Navbar from "@/components/Navbar"
import SolutionsSection from "@/components/SolutionsSection"
import AboutUs from "@/components/AboutUs"
import SuccessStories from "@/components/SuccessStories"
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
        <AboutUs />
        <SuccessStories />
        <AboutTheProcess />
        <FAQs />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
