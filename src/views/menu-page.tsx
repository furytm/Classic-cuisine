"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { whatsappMessages, openWhatsApp } from "@/components/whatsapp-utils"

const menuContent = {
  en: {
    title: "Our Menu",
    subtitle: "Authentic West African Delicacies",
    description:
      "Discover the rich flavors of traditional West African cuisine, prepared with love and authentic recipes",
    categories: ["All", "Soups", "Rice Dishes", "Grilled Items", "Stews", "Desserts", "Snacks"],
    orderViaWhatsApp: "Order via WhatsApp",
    backToHome: "Back to Home",
    currency: "SEK",
  },
  sv: {
    title: "Vår Meny",
    subtitle: "Autentiska Västafrikanska Delikatesser",
    description:
      "Upptäck de rika smakerna av traditionell västafrikansk mat, tillagad med kärlek och autentiska recept",
    categories: ["Alla", "Soppor", "Risrätter", "Grillade Rätter", "Grytor", "Efterrätter", "Snacks"],
    orderViaWhatsApp: "Beställ via WhatsApp",
    backToHome: "Tillbaka till Hem",
    currency: "SEK",
  },
}

const menuItems = {
  en: [
    {
      id: 1,
      name: "Egusi Soup",
      description:
        "Traditional Nigerian soup with ground melon seeds, leafy vegetables, and assorted meat served with pounded yam",
      price: 195,
      category: "Soups",
      image: "/images/egusi-soup.jpg",
      popular: true,
    },
    {
      id: 2,
      name: "Efo Riro",
      description: "Rich Nigerian spinach stew with assorted meat, fish, and traditional spices in palm oil base",
      price: 185,
      category: "Soups",
      image: "/images/efo-riro.jpg",
      popular: true,
    },
   {
      id: 3,
      name: "Edikaikong Soup",
      description: "Nutritious Cross River soup with waterleaf, fluted pumpkin leaves, and premium proteins",
      price: 175,
      category: "Soups",
      image: "/images/edikaikong-soup.jpg",
      popular: false,
    },
    {
      id: 16,
      name: "Okro Soup",
      description: "Traditional Nigerian okra soup with vegetables, meat, and rich aromatic broth",
      price: 165,
      category: "Soups",
      image: "/images/okro-soup.jpg",
      popular: true,
    },
    {
      id: 17,
      name: "Okro Soup with Seafood",
      description: "Premium okra soup with fresh shrimp, crab, and mixed vegetables in savory broth",
      price: 195,
      category: "Soups",
      image: "/images/okro-soup-2.jpg",
      popular: false,
    },
    {
      id: 18,
      name: "Ogbono Soup",
      description: "Rich Nigerian soup made from ground ogbono seeds with assorted meat and traditional spices",
      price: 175,
      category: "Soups",
      image: "/images/ogbono-soup.jpg",
      popular: true,
    },
    {
      id: 19,
      name: "Oha Soup",
      description: "Traditional Igbo soup made with oha leaves, assorted meat, and authentic seasonings",
      price: 185,
      category: "Soups",
      image: "/images/oha-soup.jpg",
      popular: false,
    },
    {
      id: 25,
      name: "White Soup (Ofe Nsala)",
      description: "Traditional Nigerian white soup with fish, peppers, and aromatic spices in light-colored broth",
      price: 175,
      category: "Soups",
      image: "/images/white-soup-ofe-nsala.jpg",
      popular: true,
    },
    {
      id: 4,
      name: "Banga Soup",
      description: "Traditional palm nut soup with assorted meat and fish, rich in flavor and nutrients",
      price: 185,
      category: "Soups",
      image: "/images/banga-soup.jpg",
      popular: false,
    },
    {
      id: 5,
      name: "Catfish Peppersoup",
      description: "Spicy and aromatic catfish soup with traditional African spices and vegetables",
      price: 165,
      category: "Soups",
      image: "/images/catfish-peppersoup.jpg",
      popular: false,
    },
    {
      id: 6,
      name: "Afang Soup",
      description: "Nutritious vegetable soup with afang leaves, waterleaf, and assorted proteins",
      price: 175,
      category: "Soups",
      image: "/images/afang-soup.jpg",
      popular: false,
    },
    {
      id: 7,
      name: "Jollof Rice",
      description:
        "West Africa's signature rice dish cooked in rich tomato sauce with vegetables and your choice of protein",
      price: 155,
      category: "Rice Dishes",
      image: "/images/jollof-rice.jpg",
      popular: true,
    },
    {
      id: 8,
      name: "Fried Rice",
      description: "Colorful Nigerian fried rice with mixed vegetables, prawns, and aromatic spices",
      price: 145,
      category: "Rice Dishes",
      image: "/images/fried-rice.jpg",
      popular: true,
    },
    {
      id: 26,
      name: "White Rice with Stew",
      description: "Perfectly cooked white rice served with rich Nigerian tomato stew and vegetables",
      price: 135,
      category: "Rice Dishes",
      image: "/images/white-rice-with-stew.jpg",
      popular: true,
    },
    {
      id: 27,
      name: "White Rice with Vegetables",
      description: "Steamed white rice served with sautéed spinach stew and diced plantains",
      price: 125,
      category: "Rice Dishes",
      image: "/images/white-rice-with-vegetables.jpg",
      popular: false,
    },
    {
      id: 9,
      name: "Grilled Fish",
      description: "Fresh whole fish marinated in African spices and grilled to perfection, served with vegetables",
      price: 225,
      category: "Grilled Items",
      image: "/images/grilled-fish.jpg",
      popular: true,
    },
    {
      id: 20,
      name: "Peppered Meat & Plantain",
      description: "Spicy Nigerian peppered meat served with golden fried plantain slices",
      price: 165,
      category: "Grilled Items",
      image: "/images/peppered-meat-plantain.jpg",
      popular: true,
    },
    {
      id: 21,
      name: "Mackerel Stew",
      description: "Rich tomato-based fish stew with mackerel, peppers, and traditional Nigerian spices",
      price: 155,
      category: "Stews",
      image: "/images/mackerel-stew.jpg",
      popular: false,
    },
    {
      id: 28,
      name: "Nigerian Stew",
      description: "Rich tomato-based stew with tender chicken pieces in authentic Nigerian spices and peppers",
      price: 165,
      category: "Stews",
      image: "/images/stew.jpg",
      popular: true,
    },
    {
      id: 10,
      name: "Luxury Cupcake",
      description: "Decadent chocolate cupcake with rich chocolate frosting and elegant decorative elements",
      price: 65,
      category: "Desserts",
      image: "/images/cupcake.jpg",
      popular: false,
    },
    {
      id: 11,
      name: "Artisan Doughnuts",
      description: "Assorted fresh doughnuts with various glazes and toppings, made daily in our kitchen",
      price: 45,
      category: "Desserts",
      image: "/images/doughnut.jpg",
      popular: true,
    },
    {
      id: 12,
      name: "Rose Macarons Cake",
      description: "Elegant cake with pink macarons, meringues, and delicate rose decorations",
      price: 125,
      category: "Desserts",
      image: "/images/cake-3.jpg",
      popular: false,
    },
    {
      id: 13,
      name: "Luxury Cake",
      description: "Decadent black forest cake with cherries, whipped cream, and chocolate decorations",
      price: 95,
      category: "Desserts",
      image: "/images/cake.jpg",
      popular: false,
    },
    {
      id: 14,
      name: "Nigerian Egg Rolls",
      description: "Traditional Nigerian snack - soft, fluffy bread rolls with perfectly cooked eggs inside",
      price: 35,
      category: "Snacks",
      image: "/images/egg-rolls.jpg",
      popular: true,
    },
    {
      id: 22,
      name: "Meat Pie",
      description: "Golden-brown Nigerian meat pie with flaky pastry crust filled with seasoned minced meat",
      price: 45,
      category: "Snacks",
      image: "/images/meat-pie.jpg",
      popular: true,
    },
    {
      id: 23,
      name: "Peppered Pomo",
      description: "Spicy cow skin delicacy cooked with peppers, onions, and traditional Nigerian seasonings",
      price: 85,
      category: "Snacks",
      image: "/images/peppered-pomo.jpg",
      popular: false,
    },
    {
      id: 24,
      name: "Puff Puff",
      description: "Popular Nigerian sweet fried dough balls, golden and fluffy, perfect as a snack or dessert",
      price: 35,
      category: "Snacks",
      image: "/images/puff-puff.jpg",
      popular: true,
    },
    {
      id: 29,
      name: "Small Chops Platter",
      description:
        "Assorted Nigerian party snacks including puff puff, spring rolls, and samosas in decorative baskets",
      price: 125,
      category: "Snacks",
      image: "/images/small-chops.jpg",
      popular: true,
    },
    {
      id: 30,
      name: "Sausage Rolls",
      description: "Golden-brown puff pastry rolls filled with seasoned sausage meat, baked to perfection",
      price: 55,
      category: "Snacks",
      image: "/images/sausage-rolls.jpg",
      popular: true,
    },
    {
      id: 31,
      name: "Scotch Eggs",
      description: "Hard-boiled eggs wrapped in seasoned sausage meat, breaded and fried until golden",
      price: 65,
      category: "Snacks",
      image: "/images/scotch-eggs.jpg",
      popular: false,
    },
    {
      id: 15,
      name: "African Salad (Abacha)",
      description: "Traditional cassava salad with grilled fish, vegetables, and authentic seasonings",
      price: 145,
      category: "Snacks",
      image: "/images/african-salad.jpg",
      popular: false,
    },
  ],
  sv: [
    {
      id: 1,
      name: "Egusi Soppa",
      description:
        "Traditionell nigeriansk soppa med malda melonfrön, gröna bladgrönsaker och blandat kött serverat med stampat jams",
      price: 195,
      category: "Soppor",
      image: "/images/egusi-soup.jpg",
      popular: true,
    },
    {
      id: 2,
      name: "Efo Riro",
      description: "Rik nigeriansk spenatgryta med blandat kött, fisk och traditionella kryddor i palmolja",
      price: 185,
      category: "Soppor",
      image: "/images/efo-riro.jpg",
      popular: true,
    },
    
    {
      id: 3,
      name: "Edikaikong Soppa",
      description: "Näringsrik Cross River-soppa med vattenblad, räfflad pumpa blad och premium proteiner",
      price: 175,
      category: "Soppor",
      image: "/images/edikaikong-soup.jpg",
      popular: false,
    },
    {
      id: 16,
      name: "Okro Soppa",
      description: "Traditionell nigeriansk okrasoppa med grönsaker, kött och rik aromatisk buljong",
      price: 165,
      category: "Soppor",
      image: "/images/okro-soup.jpg",
      popular: true,
    },
    {
      id: 17,
      name: "Okro Soppa med Skaldjur",
      description: "Premium okrasoppa med färska räkor, krabba och blandade grönsaker i smakrik buljong",
      price: 195,
      category: "Soppor",
      image: "/images/okro-soup-2.jpg",
      popular: false,
    },
    {
      id: 18,
      name: "Ogbono Soppa",
      description: "Rik nigeriansk soppa gjord av malda ogbono-frön med blandat kött och traditionella kryddor",
      price: 175,
      category: "Soppor",
      image: "/images/ogbono-soup.jpg",
      popular: true,
    },
    {
      id: 19,
      name: "Oha Soppa",
      description: "Traditionell Igbo-soppa gjord med oha-blad, blandat kött och autentiska kryddor",
      price: 185,
      category: "Soppor",
      image: "/images/oha-soup.jpg",
      popular: false,
    },
    {
      id: 25,
      name: "Vit Soppa (Ofe Nsala)",
      description: "Traditionell nigeriansk vit soppa med fisk, paprika och aromatiska kryddor i ljus buljong",
      price: 175,
      category: "Soppor",
      image: "/images/white-soup-ofe-nsala.jpg",
      popular: true,
    },
    {
      id: 4,
      name: "Banga Soppa",
      description: "Traditionell palmkärnssoppa med blandat kött och fisk, rik på smak och näringsämnen",
      price: 185,
      category: "Soppor",
      image: "/images/banga-soup.jpg",
      popular: false,
    },
    {
      id: 5,
      name: "Mal Pepparsoppa",
      description: "Kryddig och aromatisk malsoppa med traditionella afrikanska kryddor och grönsaker",
      price: 165,
      category: "Soppor",
      image: "/images/catfish-peppersoup.jpg",
      popular: false,
    },
    {
      id: 6,
      name: "Afang Soppa",
      description: "Näringsrik grönsakssoppa med afangblad, vattenblad och blandade proteiner",
      price: 175,
      category: "Soppor",
      image: "/images/afang-soup.jpg",
      popular: false,
    },
    {
      id: 7,
      name: "Jollof Ris",
      description: "Västafrikas signaturrisrätt tillagad i rik tomatsås med grönsaker och ditt val av protein",
      price: 155,
      category: "Risrätter",
      image: "/images/jollof-rice.jpg",
      popular: true,
    },
    {
      id: 8,
      name: "Stekt Ris",
      description: "Färgglad nigeriansk stekt ris med blandade grönsaker, räkor och aromatiska kryddor",
      price: 145,
      category: "Risrätter",
      image: "/images/fried-rice.jpg",
      popular: true,
    },
    {
      id: 26,
      name: "Vitt Ris med Gryta",
      description: "Perfekt tillagat vitt ris serverat med rik nigeriansk tomatgryta och grönsaker",
      price: 135,
      category: "Risrätter",
      image: "/images/white-rice-with-stew.jpg",
      popular: true,
    },
    {
      id: 27,
      name: "Vitt Ris med Grönsaker",
      description: "Ångat vitt ris serverat med sauterad spenatgryta och tärnad plantain",
      price: 125,
      category: "Risrätter",
      image: "/images/white-rice-with-vegetables.jpg",
      popular: false,
    },
    {
      id: 9,
      name: "Grillad Fisk",
      description: "Färsk hel fisk marinerad i afrikanska kryddor och grillad till perfektion, serverad med grönsaker",
      price: 225,
      category: "Grillade Rätter",
      image: "/images/grilled-fish.jpg",
      popular: true,
    },
    {
      id: 20,
      name: "Peppad Kött & Plantain",
      description: "Kryddig nigeriansk peppad kött serverad med gyllene stekta plantainskivor",
      price: 165,
      category: "Grillade Rätter",
      image: "/images/peppered-meat-plantain.jpg",
      popular: true,
    },
    {
      id: 21,
      name: "Makrill Gryta",
      description: "Rik tomatbaserad fiskgryta med makrill, paprika och traditionella nigerianska kryddor",
      price: 155,
      category: "Grytor",
      image: "/images/mackerel-stew.jpg",
      popular: false,
    },
    {
      id: 28,
      name: "Nigeriansk Gryta",
      description: "Rik tomatbaserad gryta med mör kyckling i autentiska nigerianska kryddor och paprika",
      price: 165,
      category: "Grytor",
      image: "/images/stew.jpg",
      popular: true,
    },
    {
      id: 10,
      name: "Lyxig Cupcake",
      description: "Dekadent chokladcupcake med rik chokladfrosting och eleganta dekorativa element",
      price: 65,
      category: "Efterrätter",
      image: "/images/cupcake.jpg",
      popular: false,
    },
    {
      id: 11,
      name: "Hantverks Munkar",
      description: "Blandade färska munkar med olika glasyr och toppings, gjorda dagligen i vårt kök",
      price: 45,
      category: "Efterrätter",
      image: "/images/doughnut.jpg",
      popular: true,
    },
    {
      id: 12,
      name: "Ros Macarons Tårta",
      description: "Elegant tårta med rosa macarons, marängsvampar och delikata rosdekorationer",
      price: 125,
      category: "Efterrätter",
      image: "/images/cake-3.jpg",
      popular: false,
    },
    {
      id: 13,
      name: "Lyxig Tårta",
      description: "Dekadent schwarzwaldtårta med körsbär, vispgrädde och chokladdekorationer",
      price: 95,
      category: "Efterrätter",
      image: "/images/cake.jpg",
      popular: false,
    },
    {
      id: 14,
      name: "Nigerianska Äggbullar",
      description: "Traditionell nigeriansk snack - mjuka, fluffiga brödbullar med perfekt tillagade ägg inuti",
      price: 35,
      category: "Snacks",
      image: "/images/egg-rolls.jpg",
      popular: true,
    },
    {
      id: 22,
      name: "Köttpaj",
      description: "Gyllenbrun nigeriansk köttpaj med flagnig pajdeg fylld med kryddat malet kött",
      price: 45,
      category: "Snacks",
      image: "/images/meat-pie.jpg",
      popular: true,
    },
    {
      id: 23,
      name: "Peppad Pomo",
      description: "Kryddig koskinn delikatess tillagad med paprika, lök och traditionella nigerianska kryddor",
      price: 85,
      category: "Snacks",
      image: "/images/peppered-pomo.jpg",
      popular: false,
    },
    {
      id: 24,
      name: "Puff Puff",
      description: "Populär nigeriansk söt friterad degboll, gyllene och fluffig, perfekt som snack eller efterrätt",
      price: 35,
      category: "Snacks",
      image: "/images/puff-puff.jpg",
      popular: true,
    },
    {
      id: 29,
      name: "Små Snacks Tallrik",
      description: "Blandade nigerianska festsnacks inklusive puff puff, vårrullar och samosas i dekorativa korgar",
      price: 125,
      category: "Snacks",
      image: "/images/small-chops.jpg",
      popular: true,
    },
    {
      id: 30,
      name: "Korvbröd",
      description: "Gyllenbrun smördegsbröd fyllda med kryddat korv kött, bakade till perfektion",
      price: 55,
      category: "Snacks",
      image: "/images/sausage-rolls.jpg",
      popular: true,
    },
    {
      id: 31,
      name: "Skotska Ägg",
      description: "Hårdkokta ägg inslagna i kryddat korv kött, panerade och friterade tills gyllene",
      price: 65,
      category: "Snacks",
      image: "/images/scotch-eggs.jpg",
      popular: false,
    },
    {
      id: 15,
      name: "Afrikansk Sallad (Abacha)",
      description: "Traditionell kassavasallad med grillad fisk, grönsaker och autentiska kryddor",
      price: 145,
      category: "Snacks",
      image: "/images/african-salad.jpg",
      popular: false,
    },
  ],
}

export default function MenuPage() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("All")
  const content = menuContent[language]
  const items = menuItems[language]

  const filteredItems =
    activeCategory === "All" || activeCategory === "Alla"
      ? items
      : items.filter((item) => item.category === activeCategory)

  const handleWhatsAppOrder = (itemName: string, price: number) => {
    const message = whatsappMessages[language].quickOrder(itemName, price)
    openWhatsApp(message)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary to-primary/10" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 md:mb-6 text-balance">
            {content.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary-foreground mb-3 md:mb-4 font-light text-balance">
            {content.subtitle}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-secondary-foreground/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            {content.description}
          </p>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">{content.backToHome}</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 md:mb-16">
            {content.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base touch-manipulation ${
                  activeCategory === category
                    ? "bg-primary text-secondary shadow-lg scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in touch-manipulation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  {item.popular && (
                    <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-primary text-secondary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                      {language === "en" ? "Popular" : "Populär"}
                    </div>
                  )}
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-primary mb-2">{item.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl md:text-2xl font-bold text-primary">
                      {item.price} {content.currency}
                    </span>
                    <Button
                      onClick={() => handleWhatsAppOrder(item.name, item.price)}
                      className="bg-green-600 hover:bg-green-700 text-white font-medium px-3 md:px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center space-x-1 md:space-x-2 text-xs md:text-sm touch-manipulation"
                    >
                      <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                 <span>  {language === "en"
                ? "Order"
                : "Beställa "}</span>

                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Contact Info */}
          <div className="mt-12 md:mt-16 text-center bg-secondary rounded-lg p-6 md:p-8">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-4">
              {language === "en" ? "Order Information" : "Beställningsinformation"}
            </h3>
            <p className="text-secondary-foreground mb-6 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              {language === "en"
                ? "All orders are processed through WhatsApp for personalized service. Click any 'Order' button to start your order with our team."
                : "Alla beställningar behandlas via WhatsApp för personlig service. Klicka på valfri 'Beställ via WhatsApp'-knapp för att starta din beställning med vårt team."}
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-600 font-semibold">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">+46 123 456 789</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
