"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/components/language-provider"
import { openWhatsApp } from "@/components/whatsapp-utils"

const orderContent = {
  en: {
    title: "Order Now",
    subtitle: "Reserve your table easily — all bookings are confirmed through WhatsApp.",
    backToHome: "Back to Home",
    form: {
      name: "Full Name",
      date: "Date",
      time: "Time",
      guests: "Number of Guests",
      namePlaceholder: "Enter your full name",
      submit: "Reserve Now",
    },
    times: [
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00",
    ],
    confirmation: {
      title: "Booking Request Sent!",
      message: "We've forwarded your booking request to WhatsApp. Please confirm there to complete your reservation.",
      backToHome: "Back to Home",
      viewMenu: "View Menu",
    },
    info: {
      note: "Bookings are only confirmed once you reply on WhatsApp.",
      contact: {
        phone: "+46 123 456 789",
        email: "info@crystalclasscuisine.se",
      },
    },
  },
  sv: {
    title: "Beställ Nu",
    subtitle: "Reservera ditt bord enkelt — alla bokningar bekräftas via WhatsApp.",
    backToHome: "Tillbaka till Hem",
    form: {
      name: "Fullständigt Namn",
      date: "Datum",
      time: "Tid",
      guests: "Antal Gäster",
      namePlaceholder: "Ange ditt fullständiga namn",
      submit: "Reservera Nu",
    },
    times: [
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00",
    ],
    confirmation: {
      title: "Bokningsförfrågan Skickad!",
      message:
        "Vi har vidarebefordrat din bokningsförfrågan till WhatsApp. Vänligen bekräfta där för att slutföra din reservation.",
      backToHome: "Tillbaka till Hem",
      viewMenu: "Se Meny",
    },
    info: {
      note: "Bokningar bekräftas endast när du svarar på WhatsApp.",
      contact: {
        phone: "+46 123 456 789",
        email: "info@crystalclasscuisine.se",
      },
    },
  },
}

export default function BookingPage() {
  const { language } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const content = orderContent[language]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const name = formData.get("name") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const guests = formData.get("guests") as string

    const message = `Hello, I'd like to book a table for ${guests} guests on ${date} at ${time}. My name is ${name}.`

    openWhatsApp(message)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">{content.confirmation.title}</h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{content.confirmation.message}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-secondary hover:bg-primary/90 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Link href="/">{content.confirmation.backToHome}</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="/menu">{content.confirmation.viewMenu}</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
    <section className="relative pt-20 pb-12 bg-gradient-to-br from-primary/20 via-secondary to-primary/15">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
    <h1 className="font-serif text-3xl lg:text-7xl font-bold text-primary mb-4 text-balance">
      {content.title}
    </h1>
    <p className="text-lg lg:text-2xl text-secondary-foreground mb-8 font-light text-balance max-w-3xl mx-auto leading-relaxed">
      {content.subtitle}
    </p>

    <Button
      asChild
      variant="outline"
      size="lg"
      className="border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-semibold px-6 py-3 text-base lg:px-8 lg:py-4 lg:text-lg rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
    >
      <Link href="/" className="flex items-center space-x-2">
        <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
        <span>{content.backToHome}</span>
      </Link>
    </Button>
  </div>
</section>


      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Simplified Booking Form */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-foreground mb-2">
                    {content.form.name} *
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-secondary-foreground mb-2">
                      {content.form.date} *
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-secondary-foreground mb-2">
                      {content.form.time} *
                    </label>
                    <Select name="time" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {content.times.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-secondary-foreground mb-2">
                      {content.form.guests} *
                    </label>
                    <Select name="guests" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}{" "}
                            {num === 1
                              ? language === "en"
                                ? "guest"
                                : "gäst"
                              : language === "en"
                                ? "guests"
                                : "gäster"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-secondary hover:bg-primary/90 font-semibold py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{content.form.submit}</span>
                </Button>
              </form>
            </div>

            <div className="animate-scale-in">
              <div className="bg-secondary rounded-lg p-8 sticky top-8">
                <div className="mb-6">
                  <p className="text-secondary-foreground leading-relaxed text-sm mb-4">{content.info.note}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm text-secondary-foreground">
                      <p>Phone: {content.info.contact.phone}</p>
                      <p>Email: {content.info.contact.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary">WhatsApp Booking</span>
                  </div>
                  <p className="text-sm text-secondary-foreground">
                    {language === "en"
                      ? "Your booking request will be sent via WhatsApp for instant confirmation."
                      : "Din bokningsförfrågan skickas via WhatsApp för omedelbar bekräftelse."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
