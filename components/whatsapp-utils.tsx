"use client"

export const whatsappNumber = "+46764140284"

export const createWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
}

export const whatsappMessages = {
  en: {
    quickOrder: (itemName: string, price: number) =>
      `Hi! I would like to order ${itemName} (${price} SEK). Please confirm availability and delivery details.`,

    reservation: (details: {
      name: string
      date: string
      time: string
      guests: number
      occasion?: string
      requests?: string
    }) => `Table Reservation Request:

Name: ${details.name}
Date: ${details.date}
Time: ${details.time}
Number of Guests: ${details.guests}
${details.occasion ? `Special Occasion: ${details.occasion}` : ""}
${details.requests ? `Special Requests: ${details.requests}` : ""}

Please confirm this reservation. Thank you!`,

    contact: (details: {
      name: string
      email: string
      subject: string
      message: string
    }) => `Contact Form Submission:

Name: ${details.name}
Email: ${details.email}
Subject: ${details.subject}
Message: ${details.message}`,

    eventInquiry: (eventName: string) =>
      `Hi! I'm interested in the "${eventName}" event. Can you provide more details about booking and availability?`,

    generalInquiry: () => "Hi! I have a question about Crystal Class Cuisine. Can you help me?",
  },

  sv: {
    quickOrder: (itemName: string, price: number) =>
      `Hej! Jag skulle vilja beställa ${itemName} (${price} SEK). Vänligen bekräfta tillgänglighet och leveransdetaljer.`,

    reservation: (details: {
      name: string
      date: string
      time: string
      guests: number
      occasion?: string
      requests?: string
    }) => `Bordsbokningsförfrågan:

Namn: ${details.name}
Datum: ${details.date}
Tid: ${details.time}
Antal Gäster: ${details.guests}
${details.occasion ? `Speciellt Tillfälle: ${details.occasion}` : ""}
${details.requests ? `Speciella Önskemål: ${details.requests}` : ""}

Vänligen bekräfta denna reservation. Tack!`,

    contact: (details: {
      name: string
      email: string
      subject: string
      message: string
    }) => `Kontaktformulär:

Namn: ${details.name}
E-post: ${details.email}
Ämne: ${details.subject}
Meddelande: ${details.message}`,

    eventInquiry: (eventName: string) =>
      `Hej! Jag är intresserad av evenemanget "${eventName}". Kan ni ge mer information om bokning och tillgänglighet?`,

    generalInquiry: () => "Hej! Jag har en fråga om Crystal Class Cuisine. Kan ni hjälpa mig?",
  },
}

export const openWhatsApp = (message: string): void => {
  const url = createWhatsAppUrl(message)
  window.open(url, "_blank")
}
