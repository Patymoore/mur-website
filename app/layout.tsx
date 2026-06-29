import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "MUR Solutions — An AI company that ships",
  description:
    "MUR Solutions is an AI company that builds the agents, models and software that read your operations and act on them — shipped to production, not slideware. The studio behind Sophios and Kairos.",
  openGraph: {
    title: "MUR Solutions — An AI company that ships",
    description:
      "We build the AI agents, models and software that read your operations and act on them — shipped as real products.",
    type: "website",
  },
  // Favicon y iconos
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth bg-navy text-white ${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-navy">{children}</body>
    </html>
  )
}
