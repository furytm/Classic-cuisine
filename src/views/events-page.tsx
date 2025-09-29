"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { whatsappMessages, openWhatsApp } from "@/components/whatsapp-utils"

const eventsContent = {
  en: {
    title: "Events & Celebrations",
    subtitle: "Cultural Nights & Special Occasions",
    backToHome: "Back to Home",
    description: "Join us for special cultural events, celebrations, and unique dining experiences",
    upcoming: "Upcoming Events",
    past: "Past Events",
    bookEvent: "Book Event",
    learnMore: "Learn More",
    noEvents: "No upcoming events at the moment. Check back soon!",
  },
  sv: {
    title: "Evenemang & Firanden",
    subtitle: "Kulturella Kvällar & Speciella Tillfällen",
    backToHome: "Tillbaka till Hem",
    description: "Följ med oss för speciella kulturella evenemang, firanden och unika matupplevelser",
    upcoming: "Kommande Evenemang",
    past: "Tidigare Evenemang",
    bookEvent: "Boka Evenemang",
    learnMore: "Läs Mer",
    noEvents: "Inga kommande evenemang för tillfället. Kom tillbaka snart!",
  },
}

const events = {
  en: [
    {
      id: 1,
      title: "West African Cultural Night",
      description:
        "Experience authentic West African culture through music, dance, and traditional cuisine. A night celebrating our heritage with live performances and storytelling.",
      date: "2025-02-15",
      time: "18:00 - 23:00",
      location: "Crystal Class Cuisine",
      capacity: 50,
      price: "450 SEK",
      status: "upcoming",
      featured: true,
    },
    {
      id: 2,
      title: "Valentine's Day Special Menu",
      description:
        "Romantic dinner featuring our finest West African delicacies with a special tasting menu designed for couples.",
      date: "2025-02-14",
      time: "17:00 - 22:00",
      location: "Crystal Class Cuisine",
      capacity: 30,
      price: "650 SEK per couple",
      status: "upcoming",
      featured: false,
    },
    {
      id: 3,
      title: "Cooking Workshop: Traditional Soups",
      description:
        "Learn to prepare authentic West African soups with our head chef. Hands-on experience with traditional cooking techniques.",
      date: "2025-03-08",
      time: "14:00 - 17:00",
      location: "Crystal Class Cuisine",
      capacity: 15,
      price: "350 SEK",
      status: "upcoming",
      featured: false,
    },
    {
      id: 4,
      title: "New Year Celebration 2025",
      description: "We celebrated the New Year with traditional West African festivities, music, and a special feast.",
      date: "2025-01-01",
      time: "20:00 - 02:00",
      location: "Crystal Class Cuisine",
      capacity: 80,
      price: "550 SEK",
      status: "past",
      featured: false,
    },
  ],
  sv: [
    {
      id: 1,
      title: "Västafrikansk Kulturkväll",
      description:
        "Upplev autentisk västafrikansk kultur genom musik, dans och traditionell mat. En kväll som firar vårt arv med liveframträdanden och berättelser.",
      date: "2025-02-15",
      time: "18:00 - 23:00",
      location: "Crystal Class Cuisine",
      capacity: 50,
      price: "450 SEK",
      status: "upcoming",
      featured: true,
    },
    {
      id: 2,
      title: "Alla Hjärtans Dag Specialmeny",
      description:
        "Romantisk middag med våra finaste västafrikanska delikatesser med en speciell smaksmeny designad för par.",
      date: "2025-02-14",
      time: "17:00 - 22:00",
      location: "Crystal Class Cuisine",
      capacity: 30,
      price: "650 SEK per par",
      status: "upcoming",
      featured: false,
    },
    {
      id: 3,
      title: "Matlagningsworkshop: Traditionella Soppor",
      description:
        "Lär dig tillaga autentiska västafrikanska soppor med vår kökschef. Praktisk erfarenhet med traditionella matlagningstekniker.",
      date: "2025-03-08",
      time: "14:00 - 17:00",
      location: "Crystal Class Cuisine",
      capacity: 15,
      price: "350 SEK",
      status: "upcoming",
      featured: false,
    },
    {
      id: 4,
      title: "Nyårsfirande 2025",
      description: "Vi firade det nya året med traditionella västafrikanska festiviteter, musik och en speciell fest.",
      date: "2025-01-01",
      time: "20:00 - 02:00",
      location: "Crystal Class Cuisine",
      capacity: 80,
      price: "550 SEK",
      status: "past",
      featured: false,
    },
  ],
}

export default function EventsPage() {
  const { language } = useLanguage()
  const content = eventsContent[language]
  const eventList = events[language]

  const upcomingEvents = eventList.filter((event) => event.status === "upcoming")
  const pastEvents = eventList.filter((event) => event.status === "past")

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === "en" ? "en-US" : "sv-SE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleEventBooking = (eventTitle: string) => {
    const message = whatsappMessages[language].eventInquiry(eventTitle)
    openWhatsApp(message)
  }

  return (
    <>
  {/* Hero Section */}
<section className="relative min-h-[50vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-gradient-to-br from-primary/25 via-secondary to-primary/15" />
  </div>

  <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 animate-fade-in-up">
    <h1 className="font-serif text-3xl  lg:text-6xl font-bold text-primary mb-4 text-balance">
      {content.title}
    </h1>
    <p className="text-lg lg:text-2xl text-secondary-foreground mb-3 font-light text-balance">
      {content.subtitle}
    </p>
    <p className="text-base lg:text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
      {content.description}
    </p>

    <Button
      asChild
      variant="outline"
      size="lg"
      className="border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent text-base lg:text-lg"
    >
      <Link href="/" className="flex items-center space-x-2">
        <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
        <span className="text-sm lg:text-base">{content.backToHome}</span>
      </Link>
    </Button>
  </div>
</section>


      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center animate-fade-in-up">
            {content.upcoming}
          </h2>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in ${
                    event.featured ? "lg:col-span-2" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-8">
                    {event.featured && (
                      <div className="inline-flex items-center space-x-2 bg-primary text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Star className="w-4 h-4" />
                        <span>{language === "en" ? "Featured Event" : "Utvalt Evenemang"}</span>
                      </div>
                    )}

                    <h3 className="font-serif text-2xl font-semibold text-primary mb-4">{event.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-secondary-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-secondary-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-secondary-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-secondary-foreground">
                        <Users className="w-5 h-5 text-primary" />
                        <span>
                          {language === "en" ? `Max ${event.capacity} guests` : `Max ${event.capacity} gäster`}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{event.price}</span>
                      <Button
                        onClick={() => handleEventBooking(event.title)}
                        className="bg-primary text-secondary hover:bg-primary/90 font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        {content.bookEvent}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-12 h-12 text-primary" />
              </div>
              <p className="text-xl text-muted-foreground">{content.noEvents}</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center animate-fade-in-up">
              {content.past}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-primary mb-3">{event.title}</h3>
                    <p className="text-secondary-foreground/80 mb-4 leading-relaxed text-sm">{event.description}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-secondary-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-secondary-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{event.capacity} guests</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
