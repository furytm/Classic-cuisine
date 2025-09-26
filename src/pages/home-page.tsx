"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Clock, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { useLanguage } from "@/components/language-provider"

const homeContent = {
  en: {
    hero: {
      title: "Crystal Class Cuisine",
      subtitle: "Authentic West African Delicacies",
      description: "Experience the rich flavors and cultural heritage of Africa in the heart of Sweden",
      viewMenu: "View Menu",
      bookTable: "Book a Table",
    },
    highlights: {
      title: "Why Choose Crystal Class Cuisine",
      subtitle: "A culinary journey through West Africa",
      features: [
        {
          icon: Star,
          title: "Authentic Recipes",
          description: "Traditional family recipes passed down through generations",
        },
        {
          icon: Clock,
          title: "Fresh Daily",
          description: "All dishes prepared fresh daily with premium ingredients",
        },
        {
          icon: Users,
          title: "Cultural Experience",
          description: "Immerse yourself in the rich culture of West Africa",
        },
        {
          icon: Award,
          title: "Award Winning",
          description: "Recognized for excellence in authentic African cuisine",
        },
      ],
    },
    featured: {
      title: "Featured Dishes",
      subtitle: "Taste the essence of West Africa",
      viewAll: "View Full Menu",
    },
    story: {
      title: "Our Story",
      content:
        "Crystal Class Cuisine brings the authentic taste of West Africa to Sweden. Our passion for traditional cooking methods and premium ingredients creates an unforgettable dining experience that celebrates our rich cultural heritage.",
      learnMore: "Learn More About Us",
    },
  },
  sv: {
    hero: {
      title: "Crystal Class Cuisine",
      subtitle: "Autentiska Västafrikanska Delikatesser",
      description: "Upplev de rika smakerna och det kulturella arvet från Afrika i hjärtat av Sverige",
      viewMenu: "Se Meny",
      bookTable: "Boka Bord",
    },
    highlights: {
      title: "Varför Välja Crystal Class Cuisine",
      subtitle: "En kulinarisk resa genom Västafrika",
      features: [
        {
          icon: Star,
          title: "Autentiska Recept",
          description: "Traditionella familjerecept som förts vidare genom generationer",
        },
        {
          icon: Clock,
          title: "Färskt Dagligen",
          description: "Alla rätter tillagas färskt dagligen med förstklassiga ingredienser",
        },
        {
          icon: Users,
          title: "Kulturell Upplevelse",
          description: "Fördjupa dig i Västafrikas rika kultur",
        },
        {
          icon: Award,
          title: "Prisbelönt",
          description: "Erkänd för excellens inom autentisk afrikansk mat",
        },
      ],
    },
    featured: {
      title: "Utvalda Rätter",
      subtitle: "Smaka essensen av Västafrika",
      viewAll: "Se Hela Menyn",
    },
    story: {
      title: "Vår Historia",
      content:
        "Crystal Class Cuisine för den autentiska smaken av Västafrika till Sverige. Vår passion för traditionella tillagningsmetoder och förstklassiga ingredienser skapar en oförglömlig matupplevelse som firar vårt rika kulturella arv.",
      learnMore: "Läs Mer Om Oss",
    },
  },
}

export default function HomePage() {
  const { language, setLanguage } = useLanguage()
  const content = homeContent[language]

  return (
    <div className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-section.jpg"
            alt="Crystal Class Cuisine Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 text-balance">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-4 font-light text-balance">
            {content.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            {content.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-secondary hover:bg-primary/90 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 animate-gold-glow"
            >
              <Link href="/menu" className="flex items-center space-x-2">
                <span>{content.hero.viewMenu}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-secondary hover:text-primary font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="/booking">{content.hero.bookTable}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              {content.highlights.title}
            </h2>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto text-balance">
              {content.highlights.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.highlights.features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-secondary-foreground/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              {content.featured.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{content.featured.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
            <div className="group cursor-pointer animate-scale-in">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 relative">
                 <Image
            src="/images/egusi-soup-2.jpg"
            alt="Signature Dish"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-xl font-semibold">Signature Dish</h3>
                  <p className="text-sm">Traditional West African</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 relative">
                 <Image
            src="/images/fried-rice.jpg" 
            alt="Signature Dish"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-xl font-semibold">Popular Choice</h3>
                  <p className="text-sm">Customer Favorite</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 relative">
                 <Image
            src="/images/peppered-meat-plantain.jpg" 
            alt="Signature Dish"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-xl font-semibold">Chef Special</h3>
                  <p className="text-sm">Limited Time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-secondary hover:bg-primary/90 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Link href="/menu" className="flex items-center space-x-2">
                <span>{content.featured.viewAll}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
                {content.story.title}
              </h2>
              <p className="text-lg text-secondary-foreground/80 leading-relaxed mb-8">{content.story.content}</p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/about" className="flex items-center space-x-2">
                  <span>{content.story.learnMore}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-scale-in">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center text-primary">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-12 h-12" />
                    </div>
                    <p className="font-serif text-xl font-semibold">Our Heritage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
      <WhatsAppFloat language={language} />
    </div>
  )
}
