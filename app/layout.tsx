import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
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

export const metadata: Metadata = {
  title: "MUR SOLUTIONS - From Data to Impact",
  description:
    "Transform your business with data-driven insights, cloud infrastructure, and AI solutions. Expert data science consulting for Fortune 500 and SMEs.",
  openGraph: {
    title: "MUR SOLUTIONS - From Data to Impact",
    description: "Transform your business with data-driven insights, cloud infrastructure, and AI solutions.",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth bg-navy text-white ${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-navy via-[#06101E] to-navy">{children}</body>
    </html>
  )
}
