// app/layout.tsx
import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "Budget Fashions",
  description: "Print on Demand Apparel Store",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  )
}
