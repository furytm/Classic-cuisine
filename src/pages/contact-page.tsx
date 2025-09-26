"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/components/language-provider"
import { whatsappMessages, openWhatsApp } from "@/components/whatsapp-utils"

const contactContent = {
  en: {
    title: "Contact Us",
    subtitle: "Get in Touch",
    backToHome: "Back to Home",
    description: "We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.",
    contactInfo: "Contact Information",
    location: "Location",
    phone: "Phone",
    email: "Email",
    hours: "Opening Hours",
    sendMessage: "Send Message",
    form: {
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      namePlaceholder: "Enter your full name",
      emailPlaceholder: "Enter your email address",
      subjectPlaceholder: "What is this regarding?",
      messagePlaceholder: "Tell us how we can help you...",
    },
    info: {
      address: "Kungsgatan 12, 111 43 Stockholm, Sweden",
      phone: "+46 123 456 789",
      email: "info@crystalclasscuisine.se",
      weekdays: "Monday - Thursday: 11:00 - 22:00",
      weekends: "Friday - Sunday: 11:00 - 23:00",
    },
    whatsapp: "Message us on WhatsApp",
    directions: "Get Directions",
  },
  sv: {
    title: "Kontakta Oss",
    subtitle: "Hör av Dig",
    backToHome: "Tillbaka till Hem",
    description:
      "Vi skulle älska att höra från dig. Kontakta oss för reservationer, förfrågningar eller bara för att säga hej.",
    contactInfo: "Kontaktinformation",
    location: "Plats",
    phone: "Telefon",
    email: "E-post",
    hours: "Öppettider",
    sendMessage: "Skicka Meddelande",
    form: {
      name: "Ditt Namn",
      email: "Din E-post",
      subject: "Ämne",
      message: "Ditt Meddelande",
      send: "Skicka Meddelande",
      namePlaceholder: "Ange ditt fullständiga namn",
      emailPlaceholder: "Ange din e-postadress",
      subjectPlaceholder: "Vad gäller detta?",
      messagePlaceholder: "Berätta hur vi kan hjälpa dig...",
    },
    info: {
      address: "Kungsgatan 12, 111 43 Stockholm, Sverige",
      phone: "+46 123 456 789",
      email: "info@crystalclasscuisine.se",
      weekdays: "Måndag - Torsdag: 11:00 - 22:00",
      weekends: "Fredag - Söndag: 11:00 - 23:00",
    },
    whatsapp: "Skicka meddelande på WhatsApp",
    directions: "Få Vägbeskrivning",
  },
}

export default function ContactPage() {
  const { language } = useLanguage()
  const content = contactContent[language]

  const handleWhatsAppContact = () => {
    const message = whatsappMessages[language].generalInquiry()
    openWhatsApp(message)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    const whatsappMessage = whatsappMessages[language].contact({
      name: name as string,
      email: email as string,
      subject: subject as string,
      message: message as string,
    })

    openWhatsApp(whatsappMessage)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] lg:min-h-[75vh]  flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/15 via-secondary to-primary/10" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 text-balance">
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-secondary-foreground mb-4 font-light text-balance">
            {content.subtitle}
          </p>
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            {content.description}
          </p>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>{content.backToHome}</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">{content.contactInfo}</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{content.location}</h3>
                    <p className="text-muted-foreground leading-relaxed">{content.info.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{content.phone}</h3>
                    <p className="text-muted-foreground">{content.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{content.email}</h3>
                    <p className="text-muted-foreground">{content.info.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{content.hours}</h3>
                    <div className="text-muted-foreground">
                      <p>{content.info.weekdays}</p>
                      <p>{content.info.weekends}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-green-800">{content.whatsapp}</h3>
                </div>
                <p className="text-green-700 mb-4 text-sm">
                  {language === "en"
                    ? "Get instant responses to your questions and make quick reservations."
                    : "Få omedelbara svar på dina frågor och gör snabba reservationer."}
                </p>
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in">
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">{content.sendMessage}</h2>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-foreground mb-2">
                    {content.form.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={content.form.namePlaceholder}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-foreground mb-2">
                    {content.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={content.form.emailPlaceholder}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-foreground mb-2">
                    {content.form.subject}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder={content.form.subjectPlaceholder}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-foreground mb-2">
                    {content.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder={content.form.messagePlaceholder}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-secondary hover:bg-primary/90 font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  {content.form.send}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center animate-fade-in-up">
            {language === "en" ? "Find Us" : "Hitta Oss"}
          </h2>

          <div className="bg-background rounded-lg overflow-hidden shadow-lg animate-scale-in">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  {language === "en" ? "Interactive Map" : "Interaktiv Karta"}
                </h3>
                <p className="mb-4">{content.info.address}</p>
                <Button
                  asChild
                  className="bg-primary text-secondary hover:bg-primary/90 font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(content.info.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.directions}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
