"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import MenuPage from "@/src/views/menu-page"

function MenuPageWrapper() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="min-h-screen w-full overflow-x-hidden touch-manipulation">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <MenuPage />
      <Footer language={language} />
      <WhatsAppFloat language={language} />
    </div>
  )
}

export default function Menu() {
  return (
    <LanguageProvider>
      <MenuPageWrapper />
    </LanguageProvider>
  )
}
