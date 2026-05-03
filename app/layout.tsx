import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Employee Skill Gap Analyzer",
  description: "Identify team skill gaps from job postings. AI-powered resume analysis and training recommendations for HR managers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bdd008af-1272-449f-9043-faed83875a9b"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
