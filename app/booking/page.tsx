"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import BookingPage from "@/src/pages/booking-page"

function BookingPageWrapper() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <BookingPage />
      <Footer language={language} />
      <WhatsAppFloat language={language} />
    </div>
  )
}

export default function Booking() {
  return (
    <LanguageProvider>
      <BookingPageWrapper />
    </LanguageProvider>
  )
}
