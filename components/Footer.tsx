import { Linkedin, Github, Mail, Shield } from "lucide-react"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="border-t border-accent/20 py-8">
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-grayL text-sm">© 2026 MUR Solutions. All rights reserved.</p>

            <nav className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-grayL hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-grayL hover:text-accent transition-colors">
                Terms
              </a>
              <a href="/dpa" className="text-grayL hover:text-accent transition-colors">
                DPA
              </a>
            </nav>

            <div className="flex items-center space-x-6">
              <a
                href={siteCopy.about.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-grayL hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteCopy.about.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-grayL hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a href="mailto:patricio@mur-solutions.com" className="text-grayL hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-grayL/70 text-xs">
            <Shield size={14} className="text-accent/70" />
            <span>GDPR-native · Built in Spain · You own your data, we act as processor under GDPR</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
