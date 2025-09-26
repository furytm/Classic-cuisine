"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import GalleryPage from "@/src/views/gallery-page"

function GalleryPageWrapper() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <GalleryPage />
      <Footer language={language} />
      <WhatsAppFloat language={language} />
    </div>
  )
}

export default function Gallery() {
  return (
    <LanguageProvider>
      <GalleryPageWrapper />
    </LanguageProvider>
  )
}
