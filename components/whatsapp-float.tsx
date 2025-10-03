"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppFloatProps {
  language: "en" | "sv"
}

const whatsappContent = {
  en: {
    tooltip: "Chat with us on WhatsApp",
    greeting: "Hi! How can we help you today?",
    options: [
      {
        id: "reservation",
        text: "Make a Reservation",
        message: "Hi! I would like to make a reservation at Crystal Class Cuisine. Please let me know available times.",
      },
      {
        id: "menu",
        text: "Ask about Menu",
        message: "Hi! I would like to know more about your menu and dishes. Can you help me?",
      },
      {
        id: "events",
        text: "Inquire about Events",
        message: "Hi! I'm interested in your upcoming events and cultural nights. Can you provide more information?",
      },
      {
        id: "general",
        text: "General Inquiry",
        message: "Hi! I have a question about Crystal Class Cuisine. Can you help me?",
      },
    ],
  },
  sv: {
    tooltip: "Chatta med oss på WhatsApp",
    greeting: "Hej! Hur kan vi hjälpa dig idag?",
    options: [
      {
        id: "reservation",
        text: "Gör en Reservation",
        message: "Hej! Jag skulle vilja göra en reservation på Crystal Class Cuisine. Låt mig veta tillgängliga tider.",
      },
      {
        id: "menu",
        text: "Fråga om Menyn",
        message: "Hej! Jag skulle vilja veta mer om er meny och rätter. Kan ni hjälpa mig?",
      },
      {
        id: "events",
        text: "Fråga om Evenemang",
        message: "Hej! Jag är intresserad av era kommande evenemang och kulturella kvällar. Kan ni ge mer information?",
      },
      {
        id: "general",
        text: "Allmän Förfrågan",
        message: "Hej! Jag har en fråga om Crystal Class Cuisine. Kan ni hjälpa mig?",
      },
    ],
  },
}

export default function WhatsAppFloat({ language }: WhatsAppFloatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const content = whatsappContent[language]

  const handleOptionClick = (message: string) => {
    const whatsappUrl = `https://wa.me/46764140284?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Options Menu */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 animate-scale-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-black">{content.greeting}</h3>
            <button onClick={() => setIsOpen(false)} className="text-black hover:text-black transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {content.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.message)}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-green-50 hover:text-green-700 transition-colors text-sm text-black"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-gold-glow"
        title={content.tooltip}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  )
}
