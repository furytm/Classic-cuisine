"use client"
import Link from "next/link"
import { ArrowLeft, Heart, Users, Award, Globe, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { useLanguage } from "@/components/language-provider"

const aboutContent = {
  en: {
    title: "Our Story",
    subtitle: "A Journey from West Africa to Sweden",
    backToHome: "Back to Home",
    hero: {
      title: "Crystal Class Cuisine",
      description:
        "Born from a passion for authentic West African cuisine and a dream to share our rich cultural heritage with Sweden",
    },
    story: {
      title: "Our Heritage",
      content: [
        "Crystal Class Cuisine was founded with a simple yet profound mission: to bring the authentic taste of West Africa to Sweden while preserving the rich culinary traditions passed down through generations.",
        "Our journey began in the vibrant markets and family kitchens of West Africa, where recipes were not just instructions but stories of culture, community, and love. Each dish we serve carries the essence of our homeland and the warmth of African hospitality.",
        "Today, in the heart of Sweden, we continue this tradition by sourcing the finest ingredients and preparing each meal with the same care and authenticity that has defined African cuisine for centuries.",
      ],
    },
    mission: {
      title: "Our Mission",
      description:
        "To create an authentic West African dining experience that celebrates our cultural heritage while building bridges between communities through the universal language of food.",
    },
    values: [
      {
        icon: Heart,
        title: "Authenticity",
        description: "Every recipe is rooted in traditional West African cooking methods and family secrets",
      },
      {
        icon: Users,
        title: "Community",
        description: "We believe food brings people together, creating connections across cultures",
      },
      {
        icon: Award,
        title: "Excellence",
        description: "We are committed to the highest standards in ingredients, preparation, and service",
      },
      {
        icon: Globe,
        title: "Cultural Bridge",
        description: "Sharing the beauty of West African culture through authentic culinary experiences",
      },
    ],
    team: {
      title: "Meet Our Team",
      description: "Passionate individuals dedicated to bringing you the finest West African cuisine",
    },
    experience: {
      title: "The Crystal Class Experience",
      description:
        "More than just a meal, we offer a cultural journey that celebrates the rich traditions of West Africa",
      features: [
        "Traditional family recipes passed down through generations",
        "Fresh ingredients sourced daily for authentic flavors",
        "Warm African hospitality in every interaction",
        "Cultural storytelling through our dishes",
      ],
    },
    cta: {
      title: "Experience Our Heritage",
      description: "Join us for an authentic taste of West Africa in the heart of Sweden",
      bookTable: "Book Your Table",
      viewMenu: "View Our Menu",
    },
  },
  sv: {
    title: "Vår Historia",
    subtitle: "En Resa från Västafrika till Sverige",
    backToHome: "Tillbaka till Hem",
    hero: {
      title: "Crystal Class Cuisine",
      description:
        "Född ur en passion för autentisk västafrikansk mat och en dröm att dela vårt rika kulturella arv med Sverige",
    },
    story: {
      title: "Vårt Arv",
      content: [
        "Crystal Class Cuisine grundades med ett enkelt men djupgående uppdrag: att föra den autentiska smaken av Västafrika till Sverige samtidigt som vi bevarar de rika kulinariska traditionerna som förts vidare genom generationer.",
        "Vår resa började på de livliga marknaderna och i familjekök i Västafrika, där recept inte bara var instruktioner utan berättelser om kultur, gemenskap och kärlek. Varje rätt vi serverar bär essensen av vårt hemland och värmen av afrikansk gästfrihet.",
        "Idag, i hjärtat av Sverige, fortsätter vi denna tradition genom att köpa de finaste ingredienserna och tillaga varje måltid med samma omsorg och autenticitet som har definierat afrikansk mat i århundraden.",
      ],
    },
    mission: {
      title: "Vårt Uppdrag",
      description:
        "Att skapa en autentisk västafrikansk matupplevelse som firar vårt kulturella arv samtidigt som vi bygger broar mellan gemenskaper genom matens universella språk.",
    },
    values: [
      {
        icon: Heart,
        title: "Autenticitet",
        description: "Varje recept är rotat i traditionella västafrikanska tillagningsmetoder och familjehemligheter",
      },
      {
        icon: Users,
        title: "Gemenskap",
        description: "Vi tror att mat för människor samman och skapar förbindelser över kulturer",
      },
      {
        icon: Award,
        title: "Excellens",
        description: "Vi är engagerade i de högsta standarderna för ingredienser, tillagning och service",
      },
      {
        icon: Globe,
        title: "Kulturell Bro",
        description: "Dela skönheten i västafrikansk kultur genom autentiska kulinariska upplevelser",
      },
    ],
    team: {
      title: "Träffa Vårt Team",
      description: "Passionerade individer dedikerade till att ge dig den finaste västafrikanska maten",
    },
    experience: {
      title: "Crystal Class Upplevelsen",
      description: "Mer än bara en måltid, vi erbjuder en kulturell resa som firar Västafrikas rika traditioner",
      features: [
        "Traditionella familjerecept som förts vidare genom generationer",
        "Färska ingredienser som köps dagligen för autentiska smaker",
        "Varm afrikansk gästfrihet i varje interaktion",
        "Kulturellt berättande genom våra rätter",
      ],
    },
    cta: {
      title: "Upplev Vårt Arv",
      description: "Följ med oss för en autentisk smak av Västafrika i hjärtat av Sverige",
      bookTable: "Boka Ditt Bord",
      viewMenu: "Se Vår Meny",
    },
  },
}

export default function AboutPage() {
  const { language, setLanguage } = useLanguage()
  const content = aboutContent[language]

  return (
    <div className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />

 {/* Hero Section */}
<section className="relative min-h-[50vh]  lg:min-h-[75vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary to-primary/20" />
  </div>

  <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 animate-fade-in-up">
    <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold text-primary mb-4 text-balance">
      {content.title}
    </h1>
    <p className="text-lg lg:text-2xl text-secondary-foreground mb-3 font-light text-balance">
      {content.subtitle}
    </p>
    <p className="text-base lg:text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
      {content.hero.description}
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


      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 text-balance">
                {content.story.title}
              </h2>
              <div className="space-y-6">
                {content.story.content.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center text-primary">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-16 h-16" />
                  </div>
                  <p className="font-serif text-2xl font-semibold">West African Heritage</p>
                  <p className="text-lg mt-2">Authentic Traditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 text-balance animate-fade-in-up">
            {content.mission.title}
          </h2>
          <p className="text-xl text-secondary-foreground leading-relaxed animate-fade-in-up">
            {content.mission.description}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center text-primary">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-16 h-16" />
                  </div>
                  <p className="font-serif text-2xl font-semibold">Premium Experience</p>
                  <p className="text-lg mt-2">Cultural Journey</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
                {content.experience.title}
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                {content.experience.description}
              </p>
              <ul className="space-y-4">
                {content.experience.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                    </div>
                    <span className="text-secondary-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              {content.team.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{content.team.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member, index) => (
              <div key={member} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden mb-6 flex items-center justify-center">
                  <div className="text-center text-primary">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12" />
                    </div>
                    <p className="font-serif text-lg font-semibold">Team Member</p>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                  {language === "en" ? "Chef & Owner" : "Kock & Ägare"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "Passionate about authentic West African cuisine"
                    : "Passionerad för autentisk västafrikansk mat"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance animate-fade-in-up">
            {content.cta.title}
          </h2>
          <p className="text-xl mb-12 leading-relaxed animate-fade-in-up">{content.cta.description}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="/booking">{content.cta.bookTable}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="/menu">{content.cta.viewMenu}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer language={language} />
      <WhatsAppFloat language={language} />
    </div>
  )
}
