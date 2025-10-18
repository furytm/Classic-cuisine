"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import ContactPage from "@/src/views/contact-page"
import { Toaster } from "@/components/ui/toaster"


function ContactPageWrapper() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <ContactPage />
      <Footer language={language} />
      <WhatsAppFloat language={language} />
    </div>
  )
}

export default function Contact() {
  return (
    <LanguageProvider>
      
      <ContactPageWrapper />
         <Toaster /> 
    </LanguageProvider>
  )
}
