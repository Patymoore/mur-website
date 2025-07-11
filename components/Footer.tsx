import { Linkedin, Github, Mail } from "lucide-react"
import Container from "./Container"
import { siteCopy } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="border-t border-accent/20 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-grayL text-sm">© 2024 MUR Data Solutions. All rights reserved.</p>

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
            <a href="mailto:patricio@mursolutions.com" className="text-grayL hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
