"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import EventsPage from "@/src/views/events-page"

function EventsPageWrapper() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <EventsPage />
      <Footer language={language} />
      <WhatsAppFloat language={language} />
    </div>
  )
}

export default function Events() {
  return (
    <LanguageProvider>
      <EventsPageWrapper />
    </LanguageProvider>
  )
}
