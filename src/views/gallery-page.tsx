"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const galleryContent = {
  en: {
    title: "Gallery & Reviews",
    subtitle: "Moments & Testimonials",
    backToHome: "Back to Home",
    description: "Discover our culinary artistry and hear from our valued guests",
    gallery: "Photo Gallery",
    testimonials: "Customer Reviews",
    categories: ["All", "Food", "Restaurant", "Events"],
  },
  sv: {
    title: "Galleri & Recensioner",
    subtitle: "Ögonblick & Vittnesmål",
    backToHome: "Tillbaka till Hem",
    description: "Upptäck vår kulinariska konst och hör från våra värdefulla gäster",
    gallery: "Fotogalleri",
    testimonials: "Kundrecensioner",
    categories: ["Alla", "Mat", "Restaurang", "Evenemang"],
  },
}

const galleryImages = [
  {
    id: 1,
    src: "/images/banga-soup.jpg",
    alt: "Banga Soup",
    category: "Food",
    title: "Traditional Banga Soup",
  },
  {
    id: 2,
    src: "/images/catfish-peppersoup.jpg",
    alt: "Catfish Peppersoup",
    category: "Food",
    title: "Spicy Catfish Peppersoup",
  },
  {
    id: 3,
    src: "/images/african-salad.jpg",
    alt: "African Salad",
    category: "Food",
    title: "African Salad (Abacha)",
  },
  {
    id: 4,
    src: "/images/afang-soup.jpg",
    alt: "Afang Soup",
    category: "Food",
    title: "Nutritious Afang Soup",
  },
  {
    id: 5,
    src: "/images/cake.jpg",
    alt: "Luxury Cake",
    category: "Food",
    title: "Decadent Dessert",
  },
  {
    id: 6,
    src: "/images/cake-3.jpg",
    alt: "Rose Macarons Cake",
    category: "Food",
    title: "Elegant Rose Cake",
  },
]

const testimonials = {
  en: [
    {
      id: 1,
      name: "Anna Lindberg",
      location: "Stockholm",
      rating: 5,
      text: "Absolutely incredible experience! The authentic West African flavors transported me to another world. The Banga soup was phenomenal, and the service was impeccable. Crystal Class Cuisine truly lives up to its name.",
      date: "2025-01-15",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      location: "Gothenburg",
      rating: 5,
      text: "As someone who has traveled extensively in West Africa, I can confidently say this is the most authentic African restaurant in Sweden. The catfish peppersoup reminded me of my time in Lagos. Highly recommended!",
      date: "2025-01-10",
    },
    {
      id: 3,
      name: "Fatima Al-Hassan",
      location: "Malmö",
      rating: 5,
      text: "The cultural experience here goes beyond just food. The atmosphere, the music, the storytelling - everything comes together beautifully. The African salad was a delightful surprise. Will definitely return!",
      date: "2025-01-08",
    },
    {
      id: 4,
      name: "Erik Svensson",
      location: "Uppsala",
      rating: 5,
      text: "Took my family here for a special dinner and we were blown away. The kids loved the desserts, and my wife and I were amazed by the complex flavors in the soups. Exceptional quality and presentation.",
      date: "2025-01-05",
    },
    {
      id: 5,
      name: "Amara Okafor",
      location: "Stockholm",
      rating: 5,
      text: "Finally, a place that serves authentic West African food in Sweden! As a Nigerian living here, this restaurant feels like home. The Afang soup was prepared exactly like my grandmother used to make it.",
      date: "2025-01-03",
    },
    {
      id: 6,
      name: "Sofia Andersson",
      location: "Linköping",
      rating: 5,
      text: "The Valentine's Day special menu was absolutely perfect. Romantic atmosphere, incredible food, and the staff made us feel so welcome. The rose cake was a work of art. Thank you for a memorable evening!",
      date: "2024-12-28",
    },
  ],
  sv: [
    {
      id: 1,
      name: "Anna Lindberg",
      location: "Stockholm",
      rating: 5,
      text: "Helt otrolig upplevelse! De autentiska västafrikanska smakerna transporterade mig till en annan värld. Banga-soppan var fenomenal och servicen var oklanderlig. Crystal Class Cuisine lever verkligen upp till sitt namn.",
      date: "2025-01-15",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      location: "Göteborg",
      rating: 5,
      text: "Som någon som har rest mycket i Västafrika kan jag med säkerhet säga att detta är den mest autentiska afrikanska restaurangen i Sverige. Mal-pepparsoppan påminde mig om min tid i Lagos. Rekommenderas varmt!",
      date: "2025-01-10",
    },
    {
      id: 3,
      name: "Fatima Al-Hassan",
      location: "Malmö",
      rating: 5,
      text: "Den kulturella upplevelsen här går bortom bara mat. Atmosfären, musiken, berättelserna - allt kommer samman vackert. Den afrikanska salladen var en härlig överraskning. Kommer definitivt tillbaka!",
      date: "2025-01-08",
    },
    {
      id: 4,
      name: "Erik Svensson",
      location: "Uppsala",
      rating: 5,
      text: "Tog min familj hit för en speciell middag och vi blev helt förvånade. Barnen älskade efterrätterna, och min fru och jag blev förvånade över de komplexa smakerna i sopporna. Exceptionell kvalitet och presentation.",
      date: "2025-01-05",
    },
    {
      id: 5,
      name: "Amara Okafor",
      location: "Stockholm",
      rating: 5,
      text: "Äntligen en plats som serverar autentisk västafrikansk mat i Sverige! Som nigerian som bor här känns denna restaurang som hemma. Afang-soppan var tillagad precis som min mormor brukade göra den.",
      date: "2025-01-03",
    },
    {
      id: 6,
      name: "Sofia Andersson",
      location: "Linköping",
      rating: 5,
      text: "Alla hjärtans dag-specialmenyn var helt perfekt. Romantisk atmosfär, otrolig mat och personalen fick oss att känna oss så välkomna. Rostårtan var ett konstverk. Tack för en minnesvärd kväll!",
      date: "2024-12-28",
    },
  ],
}

export default function GalleryPage() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("All")
  const content = galleryContent[language]
  const reviews = testimonials[language]

  const filteredImages =
    activeCategory === "All" || activeCategory === "Alla"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === "en" ? "en-US" : "sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
    {/* Hero Section */}
<section className="relative min-h-[50vh]  lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary to-primary/10" />
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


      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center animate-fade-in-up">
            {content.gallery}
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {content.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-secondary shadow-lg scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center animate-fade-in-up">
            {content.testimonials}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-secondary-foreground mb-4 leading-relaxed italic">"{review.text}"</p>

                <div className="border-t border-primary/20 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-primary">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{formatDate(review.date)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review Summary */}
          <div className="mt-16 text-center bg-background/30 backdrop-blur-sm rounded-lg p-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-primary fill-current" />
                ))}
              </div>
              <span className="text-3xl font-bold text-primary">5.0</span>
            </div>
            <p className="text-xl text-secondary-foreground mb-2">
              {language === "en" ? "Excellent Rating" : "Utmärkt Betyg"}
            </p>
            <p className="text-muted-foreground">
              {language === "en" ? "Based on 150+ customer reviews" : "Baserat på 150+ kundrecensioner"}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
