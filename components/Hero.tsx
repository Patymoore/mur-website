import Image from "next/image"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <Container>
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/iso.svg"
              alt="MUR Data Solutions Logo"
              width={72}
              height={72}
              className="text-accent"
              priority
            />
          </div>

          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white">
            {siteCopy.hero.headline}
          </h1>

          <h2 className="font-inter font-medium text-xl md:text-2xl lg:text-3xl text-accent italic">
            {siteCopy.hero.tagline}
          </h2>

          <div className="pt-8">
            <a
              href="https://calendly.com/murdata/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-pulse text-lg px-8 py-4 inline-block"
            >
              {siteCopy.hero.cta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
