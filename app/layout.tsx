import type React from "react"
import type { Metadata, Viewport  } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Crystal Class Cuisine - Authentic West African Restaurant in Sweden",
  description:
    "Experience the finest West African cuisine in Sweden. Crystal Class Cuisine offers authentic homemade delicacies with a luxury dining experience.",
  keywords: "West African restaurant, Swedish restaurant, African cuisine, luxury dining, Stockholm restaurant",
 
  generator: "v0.app",
  
  icons: {
    icon: "/images/crystal-class-logo2.png", 
  },

}
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground overflow-x-hidden touch-manipulation">{children}</body>
    </html>
  )
}
