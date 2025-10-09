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
    categories: [
      "All",
      "Rice & Sides",
      "Swallow & Soups",
      "Proteins & Grills",
      "Special Dishes",
      "Pepper Soups",
      "Snacks",
      "Desserts", // Added Desserts category
      "Beverages",
      "Drinks",
    ],
    orderViaWhatsApp: "Order via WhatsApp",
    backToHome: "Back to Home",
    currency: "kr",
  },
  sv: {
    title: "Vår Meny",
    subtitle: "Autentiska Västafrikanska Delikatesser",
    description:
      "Upptäck de rika smakerna av traditionell västafrikansk mat, tillagad med kärlek och autentiska recept",
    categories: [
      "Alla",
      "Ris & Tillbehör",
      "Swallow & Soppor",
      "Proteiner & Grill",
      "Specialrätter",
      "Pepparsoppor",
      "Snacks",
      "Efterrätter", // Added Desserts category in Swedish
      "Varma Drycker",
      "Drycker",
    ],
    orderViaWhatsApp: "Beställ via WhatsApp",
    backToHome: "Tillbaka till Hem",
    currency: "kr",
  },
}

const menuItems = {
  en: [
    // Rice & Sides
    {
      id: 1,
      name: "Jollof Rice",
      description: "West Africa's signature rice dish cooked in rich tomato sauce with aromatic spices",
      price: 200,
      category: "Rice & Sides",
      image: "images/jollof-rice.jpg",
      popular: true,
    },
    {
      id: 2,
      name: "Fried Rice",
      description: "Colorful Nigerian fried rice with mixed vegetables and aromatic seasonings",
      price: 200,
      category: "Rice & Sides",
      image: "images/fried-rice.jpg",
      popular: true,
    },
    {
      id: 3,
      name: "White Rice",
      description: "Perfectly steamed white rice, a versatile accompaniment to any dish",
      price: 200,
      category: "Rice & Sides",
      image: "images/whitericem.webp",
      popular: false,
    },
    {
      id: 4,
      name: "White Rice with Stew",
      description: "Perfectly cooked white rice served with rich Nigerian tomato stew and vegetables",
      price: 200,
      category: "Rice & Sides",
      image: "images/white-rice-with-stew.jpg",
      popular: true,
    },
    {
      id: 5,
      name: "White Rice with Vegetables",
      description: "Steamed white rice served with sautéed spinach stew and diced plantains",
      price: 200,
      category: "Rice & Sides",
      image: "images/white-rice-with-vegetables.jpg",
      popular: false,
    },
    {
      id: 6,
      name: "Beans & Plantain",
      description: "Traditional Nigerian beans served with sweet fried plantain",
      price: 200,
      category: "Rice & Sides",
      image: "images/beans-p.jpg",
      popular: true,
    },
    {
      id: 7,
      name: "Yam Porridge",
      description: "Hearty yam porridge cooked with vegetables and traditional spices",
      price: 200,
      category: "Rice & Sides",
      image: "images/yamm-p.jpg",
      popular: false,
    },
    {
      id: 8,
      name: "Boiled Yam & Vegetable Sauce",
      description: "Soft boiled yam served with flavorful vegetable sauce",
      price: 200,
      category: "Rice & Sides",
      image: "images/boiledyam-v.jpg",
      popular: false,
    },

    // Swallow & Soups
    {
      id: 9,
      name: "Pounded Yam",
      description: "Traditional Nigerian swallow made from pounded yam, smooth and stretchy",
      price: 200,
      category: "Swallow & Soups",
      image: "images/pounded-yam.jpg",
      popular: true,
    },
    {
      id: 10,
      name: "Amala",
      description: "Dark brown swallow made from yam flour, a Yoruba delicacy",
      price: 200,
      category: "Swallow & Soups",
      image: "images/amala.webp",
      popular: true,
    },
    {
      id: 11,
      name: "Plantain Fufu",
      description: "Smooth swallow made from plantain, slightly sweet and nutritious",
      price: 200,
      category: "Swallow & Soups",
      image: "images/plantain-fufu.webp",
      popular: false,
    },
    {
      id: 12,
      name: "Eba",
      description: "Popular Nigerian swallow made from cassava flour (garri)",
      price: 200,
      category: "Swallow & Soups",
      image: "images/eba-garri.webp",
      popular: true,
    },
    {
      id: 13,
      name: "Semolina",
      description: "Smooth and light swallow made from wheat semolina",
      price: 200,
      category: "Swallow & Soups",
      image: "images/semolina-swallow.webp",
      popular: false,
    },
    {
      id: 14,
      name: "Wheat",
      description: "Nutritious swallow made from wheat flour",
      price: 200,
      category: "Swallow & Soups",
      image: "images/wheat-swallow.png",
      popular: false,
    },
    {
      id: 15,
      name: "Egusi Soup",
      description: "Traditional Nigerian soup with ground melon seeds, leafy vegetables, and assorted meat",
      price: 100,
      category: "Swallow & Soups",
      image: "images/egusi-soup.jpg",
      popular: true,
    },
    {
      id: 16,
      name: "Efo Riro",
      description: "Rich Nigerian spinach stew with assorted meat, fish, and traditional spices in palm oil base",
      price: 100,
      category: "Swallow & Soups",
      image: "images/efo-riro.jpg",
      popular: true,
    },
    {
      id: 17,
      name: "Edikaikong Soup",
      description: "Nutritious Cross River soup with waterleaf, fluted pumpkin leaves, and premium proteins",
      price: 100,
      category: "Swallow & Soups",
      image: "images/edikaikong-soup.jpg",
      popular: false,
    },
    {
      id: 18,
      name: "Vegetable Soup",
      description: "Nutritious soup with assorted vegetables and traditional seasonings",
      price: 100,
      category: "Swallow & Soups",
      image: "images/vegetable-soup-nigerian.webp",
      popular: true,
    },
    {
      id: 19,
      name: "Okro Soup",
      description: "Traditional Nigerian okra soup with vegetables, meat, and rich aromatic broth",
      price: 100,
      category: "Swallow & Soups",
      image: "images/okro-soup.jpg",
      popular: true,
    },
    {
      id: 20,
      name: "Okro Soup with Seafood",
      description: "Premium okra soup with fresh shrimp, crab, and mixed vegetables in savory broth",
      price: 100,
      category: "Swallow & Soups",
      image: "images/okro-soup-2.jpg",
      popular: false,
    },
    {
      id: 21,
      name: "Ogbono Soup",
      description: "Rich Nigerian soup made from ground ogbono seeds with assorted meat and traditional spices",
      price: 100,
      category: "Swallow & Soups",
      image: "images/ogbono-soup.jpg",
      popular: true,
    },
    {
      id: 22,
      name: "Oha Soup",
      description: "Traditional Igbo soup made with oha leaves, assorted meat, and authentic seasonings",
      price: 100,
      category: "Swallow & Soups",
      image: "images/oha-soup.jpg",
      popular: false,
    },
    {
      id: 23,
      name: "White Soup (Ofe Nsala)",
      description: "Traditional Nigerian white soup with fish, peppers, and aromatic spices in light-colored broth",
      price: 100,
      category: "Swallow & Soups",
      image: "images/white-soup-ofe-nsala.jpg",
      popular: true,
    },
    {
      id: 24,
      name: "Afang Soup",
      description: "Nutritious vegetable soup with afang leaves and waterleaf",
      price: 100,
      category: "Swallow & Soups",
      image: "images/afang-soup.jpg",
      popular: false,
    },
    {
      id: 25,
      name: "Usala Soup",
      description: "Traditional soup with rich flavors and authentic spices",
      price: 100,
      category: "Swallow & Soups",
      image: "images/white-soup-ofe-nsala.jpg",
      popular: false,
    },
    {
      id: 26,
      name: "Bitter Leaf Soup",
      description: "Medicinal soup made with bitter leaf and assorted proteins",
      price: 100,
      category: "Swallow & Soups",
      image: "images/bitter-leaf-soup.jpg",
      popular: false,
    },
    {
      id: 27,
      name: "Banga Soup",
      description: "Traditional palm nut soup rich in flavor and nutrients",
      price: 100,
      category: "Swallow & Soups",
      image: "images/banga-soup.jpg",
      popular: false,
    },
    {
      id: 28,
      name: "Ewedu Soup",
      description: "Smooth jute leaf soup, a Yoruba specialty",
      price: 100,
      category: "Swallow & Soups",
     image: "images/ewedu-soup.webp",
      popular: false,
    },
    {
      id: 29,
      name: "Assorted Stew",
      description: "Rich tomato stew with assorted meats and traditional spices",
      price: 150,
      category: "Rice & Sides",
   image: "images/stew.jpg",
      popular: false,
    },

    // Proteins & Grills
    {
      id: 30,
      name: "Turkey",
      description: "Tender turkey meat, perfectly seasoned",
      price: 70,
      category: "Proteins & Grills",
    image: "images/turkey.jpg",
      popular: false,
    },
    {
      id: 31,
      name: "Chicken",
      description: "Juicy chicken pieces, well-seasoned",
      price: 50,
      category: "Proteins & Grills",
        image: "images/chicken.jpg",
      popular: true,
    },
    {
      id: 32,
      name: "Grilled Fish & Fried Plantain with Sauce",
      description: "Fresh whole fish marinated in African spices and grilled to perfection, served with fried plantain",
      price: 250,
      category: "Proteins & Grills",
      image: "images/grilled-fish.jpg",
      popular: true,
    },
    {
      id: 33,
      name: "Grilled Fish & Fried Yam",
      description: "Grilled fish served with crispy fried yam",
      price: 250,
      category: "Proteins & Grills",
       image: "images/grilledfish-y.jpg",
      popular: true,
    },
    {
      id: 34,
      name: "Fried Turkey",
      description: "Crispy fried turkey with golden-brown coating",
      price: 80,
      category: "Proteins & Grills",
   image: "images/fried-turkey.jpg",
      popular: false,
    },
    {
      id: 35,
      name: "Fried Chicken",
      description: "Crispy fried chicken with special seasoning",
      price: 60,
      category: "Proteins & Grills",
      image: "images/fried-chicken.jpg",
      popular: true,
    },
    {
      id: 36,
      name: "Fried Meat",
      description: "Tender fried beef with traditional spices",
      price: 100,
      category: "Proteins & Grills",
     image: "images/fried-meat.jpg",
      popular: false,
    },
    {
      id: 37,
      name: "Suya",
      description: "Spicy grilled meat skewers with peanut spice blend",
      price: 200,
      category: "Proteins & Grills",
   image: "images/suya.webp",
      popular: true,
    },
    {
      id: 38,
      name: "Nkwobi",
      description: "Spicy cow foot delicacy in palm oil sauce",
      price: 200,
      category: "Proteins & Grills",
       image: "images/nkwobi.webp",
      popular: false,
    },
    {
      id: 39,
      name: "Pepper Gizzard",
      description: "Spicy chicken gizzard cooked with peppers and onions",
      price: 200,
      category: "Proteins & Grills",
     image: "images/peppered-gizzard.jpg",
      popular: false,
    },
    {
      id: 40,
      name: "Pepper Pomo",
      description: "Spicy cow skin delicacy cooked with peppers, onions, and traditional Nigerian seasonings",
      price: 200,
      category: "Proteins & Grills",
      image: "images/peppered-pomo.jpg",
      popular: false,
    },
    {
      id: 41,
      name: "Peppered Meat & Plantain",
      description: "Spicy Nigerian peppered meat served with golden fried plantain slices",
      price: 200,
      category: "Proteins & Grills",
      image: "images/peppered-meat-plantain.jpg",
      popular: true,
    },

    // Special Dishes
    {
      id: 42,
      name: "Abacha",
      description:
        "Traditional African salad made from cassava with grilled fish, vegetables, and authentic seasonings",
      price: 200,
      category: "Special Dishes",
      image: "images/african-salad.jpg",
      popular: true,
    },
    {
      id: 43,
      name: "Crispy Chicken & Chips",
      description: "Crispy fried chicken served with golden chips",
      price: 150,
      category: "Special Dishes",
    image: "images/chicken-chips.jpg",
      popular: true,
    },
    {
      id: 44,
      name: "Coconut Rice",
      description: "Fragrant rice cooked in coconut milk with spices",
      price: 200,
      category: "Rice & Sides",
     image: "images/coconut-rice.jpg",
      popular: false,
    },
    {
      id: 45,
      name: "Ofada Rice",
      description: "Local Nigerian rice served with special ofada sauce",
      price: 250,
      category: "Special Dishes",
      image: "images/ofada.jpg",
      popular: true,
    },
    {
      id: 46,
      name: "Mackerel Stew",
      description: "Rich tomato-based fish stew with mackerel, peppers, and traditional Nigerian spices",
      price: 150,
      category: "Rice & Sides",
      image: "images/mackerel-stew.jpg",
      popular: false,
    },
   

    // Pepper Soups
    {
      id: 48,
      name: "Fish Pepper Soup",
      description: "Spicy and aromatic fish soup with traditional African spices",
      price: 250,
      category: "Pepper Soups",
   image: "images/fishpepper-soup.jpg",
      popular: true,
    },
    {
      id: 49,
      name: "Catfish Peppersoup",
      description: "Spicy and aromatic catfish soup with traditional African spices and vegetables",
      price: 100,
      category: "Pepper Soups",
      image: "images/catfish-peppersoup.jpg",
      popular: false,
    },
    {
      id: 50,
      name: "Goat Pepper Soup",
      description: "Spicy goat meat soup with aromatic herbs and spices",
      price: 250,
      category: "Pepper Soups",
       image: "images/Goatmeatpp.jpg",
      popular: true,
    },
    {
      id: 51,
      name: "Assorted Pepper Soup",
      description: "Mixed meat pepper soup with traditional spices",
      price: 250,
      category: "Pepper Soups",
     image: "images/assortedpp.webp",
      popular: false,
    },

    // Snacks
    {
      id: 52,
      name: "Spring Rolls",
      description: "Crispy spring rolls filled with vegetables",
      price: 25,
      category: "Snacks",
   image: "images/springrolls.jpg",
      popular: false,
    },
    {
      id: 53,
      name: "Samosa",
      description: "Crispy triangular pastries filled with spiced filling",
      price: 25,
      category: "Snacks",
    image: "images/samosa.webp",
      popular: true,
    },
    {
      id: 54,
      name: "Puff Puff",
      description: "Popular Nigerian sweet fried dough balls, golden and fluffy, perfect as a snack or dessert",
      price: 59,
      category: "Snacks",
      image: "images/puff-puff.jpg",
      popular: true,
    },
    {
      id: 55,
      name: "Egg Roll",
      description: "Traditional Nigerian snack - soft, fluffy bread rolls with perfectly cooked eggs inside",
      price: 25,
      category: "Snacks",
      image: "images/egg-rolls.jpg",
      popular: true,
    },
    {
      id: 56,
      name: "Sausage Roll",
      description: "Golden-brown puff pastry rolls filled with seasoned sausage meat, baked to perfection",
      price: 25,
      category: "Snacks",
      image: "images/sausage-rolls.jpg",
      popular: true,
    },
    {
      id: 57,
      name: "Meat Pie",
      description: "Golden-brown Nigerian meat pie with flaky pastry crust filled with seasoned minced meat",
      price: 25,
      category: "Snacks",
      image: "images/meat-pie.jpg",
      popular: true,
    },
    {
      id: 58,
      name: "Chicken Pie",
      description: "Savory pie filled with seasoned chicken",
      price: 30,
      category: "Snacks",
         image: "images/chicken-pie.jpeg",
      popular: false,
    },
    {
      id: 59,
      name: "Fish Pie",
      description: "Flaky pastry filled with seasoned fish",
      price: 25,
      category: "Snacks",
    image: "images/fish-pie.jpg",
      popular: false,
    },
    {
      id: 60,
      name: "Donut",
      description: "Sweet fried dough with various glazes",
      price: 25,
      category: "Snacks",
      image: "images/doughnutt.jpg",
      popular: true,
    },
    {
      id: 61,
      name: "Small Chops Platter",
      description:
        "Assorted Nigerian party snacks including puff puff, spring rolls, and samosas in decorative baskets",
      price: 125,
      category: "Snacks",
      image: "images/small-chops.jpg",
      popular: true,
    },
    {
      id: 62,
      name: "Scotch Eggs",
      description: "Hard-boiled eggs wrapped in seasoned sausage meat, breaded and fried until golden",
      price: 25,
      category: "Snacks",
      image: "images/scotch-eggs.jpg",
      popular: false,
    },

    {
      id: 63,
      name: "Luxury Cupcake",
      description: "Decadent chocolate cupcake with rich chocolate frosting and elegant decorative elements",
      price: 65,
      category: "Desserts",
      image: "images/cupcake.jpg",
      popular: false,
    },
    {
      id: 64,
      name: "Artisan Doughnuts",
      description: "Assorted fresh doughnuts with various glazes and toppings, made daily in our kitchen",
      price: 25,
      category: "Desserts",
      image: "images/doughnut.jpg",
      popular: true,
    },
    {
      id: 65,
      name: "Rose Macarons Cake",
      description: "Elegant cake with pink macarons, meringues, and delicate rose decorations",
      price: 125,
      category: "Desserts",
      image: "images/cake-3.jpg",
      popular: false,
    },
    {
      id: 66,
      name: "Luxury Cake",
      description: "Decadent black forest cake with cherries, whipped cream, and chocolate decorations",
      price: 95,
      category: "Desserts",
      image: "images/cake.jpg",
      popular: false,
    },

    // Beverages
    {
      id: 67,
      name: "Coffee",
      description: "Freshly brewed hot coffee",
      price: 20,
      category: "Beverages",
       image: "images/coffee.jpg",
      popular: true,
    },
    {
      id: 68,
      name: "Ice Coffee",
      description: "Refreshing iced coffee",
      price: 40,
      category: "Beverages",
       image: "images/icecoffe.webp",
      popular: true,
    },
    {
      id: 69,
      name: "Tea",
      description: "Hot tea selection",
      price: 20,
      category: "Beverages",
    image: "images/tea.jpg",
      popular: false,
    },
    {
      id: 70,
      name: "Chocolate Drink",
      description: "Rich hot chocolate beverage",
      price: 30,
      category: "Beverages",
    image: "images/chocolate-drink.jpg",
      popular: true,
    },

    // Drinks
    {
      id: 71,
      name: "Water",
      description: "Bottled water",
      price: 20,
      category: "Drinks",
         image: "images/water.jpg",
      popular: false,
    },
    {
      id: 72,
      name: "Tiger Nut Juice",
      description: "Traditional Nigerian tiger nut drink",
      price: 150,
      category: "Drinks",
            image: "images/tigernut.webp",
      popular: true,
    },
    {
      id: 73,
      name: "Orange Juice",
      description: "Fresh orange juice",
      price: 70,
      category: "Drinks",
            image: "images/orangejuice.jpg",
      popular: true,
    },
    {
      id: 74,
      name: "Zobo Juice",
      description: "Traditional Nigerian hibiscus drink",
      price: 150,
      category: "Drinks",
       image: "images/zobo.jpg",
      popular: true,
    },
    {
      id: 75,
      name: "Malt",
      description: "Non-alcoholic malt drink",
      price: 35,
      category: "Drinks",
        image: "images/malt.jpg",
      popular: false,
    },
    {
      id: 76,
      name: "Coca Cola",
      description: "Classic Coca Cola",
      price: 25,
      category: "Drinks",
       image: "images/cocacola.jpg",
      popular: true,
    },
    {
      id: 77,
      name: "Fanta",
      description: "Orange flavored soda",
      price: 25,
      category: "Drinks",
  image: "images/fanta.jpg",
      popular: false,
    },
    {
      id: 78,
      name: "Pepsi",
      description: "Classic Pepsi cola",
      price: 25,
      category: "Drinks",
  image: "images/pepsi.webp",
      popular: false,
    },
    {
      id: 79,
      name: "Pineapple Juice",
      description: "Fresh pineapple juice",
      price: 40,
      category: "Drinks",
             image: "images/pineapplejuice.jpg",
      popular: false,
    },
    {
      id: 80,
      name: "Mango Juice",
      description: "Fresh mango juice",
      price: 40,
      category: "Drinks",
           image: "images/mangojuice.jpg",
      popular: false,
    },
    {
      id: 81,
      name: "Coconut Drink",
      description: "Refreshing coconut water",
      price: 40,
      category: "Drinks",
    image: "images/coconutdrink.jpg",
      popular: false,
    },
    {
      id: 82,
      name: "Ginger Beer",
      description: "Spicy ginger beer",
      price: 150,
      category: "Drinks",
     image: "images/gingerbeer.jpg",
      popular: false,
    },
  ],
  sv: [
    // Rice & Sides
    {
      id: 1,
      name: "Jollof Ris",
      description: "Västafrikas signaturrisrätt tillagad i rik tomatsås med aromatiska kryddor",
      price: 200,
      category: "Ris & Tillbehör",
      image: "images/jollof-rice.jpg",
      popular: true,
    },
    {
      id: 2,
      name: "Stekt Ris",
      description: "Färgglad nigeriansk stekt ris med blandade grönsaker och aromatiska kryddor",
      price: 200,
      category: "Ris & Tillbehör",
      image: "images/fried-rice.jpg",
      popular: true,
    },
    {
      id: 3,
      name: "Vitt Ris",
      description: "Perfekt ångat vitt ris, ett mångsidigt tillbehör till alla rätter",
      price: 200,
      category: "Ris & Tillbehör",
   image: "images/whitericem.webp",
      popular: false,
    },
    {
      id: 4,
      name: "Vitt Ris med Gryta",
      description: "Perfekt tillagat vitt ris serverat med rik nigeriansk tomatgryta och grönsaker",
      price: 200,
      category: "Ris & Tillbehör",
      image: "images/white-rice-with-stew.jpg",
      popular: true,
    },
    {
      id: 5,
      name: "Vitt Ris med Grönsaker",
      description: "Ångat vitt ris serverat med sauterad spenatgryta och tärnad plantain",
      price: 200,
      category: "Ris & Tillbehör",
      image: "images/white-rice-with-vegetables.jpg",
      popular: false,
    },
    {
      id: 6,
      name: "Bönor & Plantain",
      description: "Traditionella nigerianska bönor serverade med söt stekt plantain",
      price: 200,
      category: "Ris & Tillbehör",
     image: "images/beans-p.jpg",
      popular: true,
    },
    {
      id: 7,
      name: "Jams Gröt",
      description: "Kraftig jams gröt tillagad med grönsaker och traditionella kryddor",
      price: 200,
      category: "Ris & Tillbehör",
      image: "images/yamm-p.jpg",
      popular: false,
    },
    {
      id: 8,
      name: "Kokt Jams & Grönsakssås",
      description: "Mjuk kokt jams serverad med smakrik grönsakssås",
      price: 200,
      category: "Ris & Tillbehör",
      image: "images/boiledyam-v.jpg",
      popular: false,
    },

    // Swallow & Soups
    {
      id: 9,
      name: "Stampat Jams",
      description: "Traditionell nigeriansk swallow gjord av stampat jams, slät och seg",
      price: 200,
      category: "Swallow & Soppor",
      image: "images/pounded-yam.jpg",
      popular: true,
    },
    {
      id: 10,
      name: "Amala",
      description: "Mörkbrun swallow gjord av jamsmjöl, en Yoruba delikatess",
      price: 200,
      category: "Swallow & Soppor",
      image: "images/amala.webp",
      popular: true,
    },
    {
      id: 11,
      name: "Plantain Fufu",
      description: "Slät swallow gjord av plantain, lätt söt och näringsrik",
      price: 200,
      category: "Swallow & Soppor",
      image: "images/plantain-fufu.webp",
      popular: false,
    },
    {
      id: 12,
      name: "Eba",
      description: "Populär nigeriansk swallow gjord av kassavamjöl (garri)",
      price: 200,
      category: "Swallow & Soppor",
      image: "images/eba-garri.webp",
      popular: true,
    },
    {
      id: 13,
      name: "Semolina",
      description: "Slät och lätt swallow gjord av vete semolina",
      price: 200,
      category: "Swallow & Soppor",
      image: "images/semolina-swallow.webp",
      popular: false,
    },
    {
      id: 14,
      name: "Vete",
      description: "Näringsrik swallow gjord av vetemjöl",
      price: 200,
      category: "Swallow & Soppor",
      image: "images/wheat-swallow.png",
      popular: false,
    },
    {
      id: 15,
      name: "Egusi Soppa",
      description: "Traditionell nigeriansk soppa med malda melonfrön, gröna bladgrönsaker och blandat kött",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/egusi-soup.jpg",
      popular: true,
    },
    {
      id: 16,
      name: "Efo Riro",
      description: "Rik nigeriansk spenatgryta med blandat kött, fisk och traditionella kryddor i palmolja",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/efo-riro.jpg",
      popular: true,
    },
    {
      id: 17,
      name: "Edikaikong Soppa",
      description: "Näringsrik Cross River-soppa med vattenblad, räfflad pumpa blad och premium proteiner",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/edikaikong-soup.jpg",
      popular: false,
    },
    {
      id: 18,
      name: "Grönsakssoppa",
      description: "Näringsrik soppa med blandade grönsaker och traditionella kryddor",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/vegetable-soup-nigerian.webp",
      popular: true,
    },
    {
      id: 19,
      name: "Okro Soppa",
      description: "Traditionell nigeriansk okrasoppa med grönsaker, kött och rik aromatisk buljong",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/okro-soup.jpg",
      popular: true,
    },
    {
      id: 20,
      name: "Okro Soppa med Skaldjur",
      description: "Premium okrasoppa med färska räkor, krabba och blandade grönsaker i smakrik buljong",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/okro-soup-2.jpg",
      popular: false,
    },
    {
      id: 21,
      name: "Ogbono Soppa",
      description: "Rik nigeriansk soppa gjord av malda ogbono-frön med blandat kött och traditionella kryddor",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/ogbono-soup.jpg",
      popular: true,
    },
    {
      id: 22,
      name: "Oha Soppa",
      description: "Traditionell Igbo-soppa gjord med oha-blad, blandat kött och autentiska kryddor",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/oha-soup.jpg",
      popular: false,
    },
    {
      id: 23,
      name: "Vit Soppa (Ofe Nsala)",
      description: "Traditionell nigeriansk vit soppa med fisk, paprika och aromatiska kryddor i ljus buljong",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/white-soup-ofe-nsala.jpg",
      popular: true,
    },
    {
      id: 24,
      name: "Afang Soppa",
      description: "Näringsrik grönsakssoppa med afangblad och vattenblad",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/afang-soup.jpg",
      popular: false,
    },
    {
      id: 25,
      name: "Usala Soppa",
      description: "Traditionell soppa med rika smaker och autentiska kryddor",
      price: 100,
      category: "Swallow & Soppor",
   image: "images/white-soup-ofe-nsala.jpg",
      popular: false,
    },
    {
      id: 26,
      name: "Bitter Leaf Soppa",
      description: "Medicinsk soppa gjord med bitterblad och blandade proteiner",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/bitter-leaf-soup.jpg",
      popular: false,
    },
    {
      id: 27,
      name: "Banga Soppa",
      description: "Traditionell palmkärnssoppa rik på smak och näringsämnen",
      price: 100,
      category: "Swallow & Soppor",
      image: "images/banga-soup.jpg",
      popular: false,
    },
    {
      id: 28,
      name: "Ewedu Soppa",
      description: "Slät juteblad soppa, en Yoruba specialitet",
      price: 100,
      category: "Swallow & Soppor",
     image: "images/ewedu-soup.webp",
      popular: false,
    },
    {
      id: 29,
      name: "Blandad Gryta",
      description: "Rik tomatgryta med blandat kött och traditionella kryddor",
      price: 150,
      category: "Ris & Tillbehör",
    image: "images/stew.jpg",
      popular: false,
    },

    // Proteins & Grills
    {
      id: 30,
      name: "Kalkon",
      description: "Mört kalkonkött, perfekt kryddat",
      price: 70,
      category: "Proteiner & Grill",
    image: "images/turkey.jpg",
      popular: false,
    },
    {
      id: 31,
      name: "Kyckling",
      description: "Saftig kyckling, välkryddad",
      price: 50,
      category: "Proteiner & Grill",
      image: "images/chicken.jpg",
      popular: true,
    },
    {
      id: 32,
      name: "Grillad Fisk & Stekt Plantain med Sås",
      description:
        "Färsk hel fisk marinerad i afrikanska kryddor och grillad till perfektion, serverad med stekt plantain",
      price: 250,
      category: "Proteiner & Grill",
      image: "images/grilled-fish.jpg",
      popular: true,
    },
    {
      id: 33,
      name: "Grillad Fisk & Stekt Jams",
      description: "Grillad fisk serverad med krispig stekt jams",
      price: 250,
      category: "Proteiner & Grill",
       image: "images/grilledfish-y.jpg",
      popular: true,
    },
    {
      id: 34,
      name: "Stekt Kalkon",
      description: "Krispig stekt kalkon med gyllenbrun coating",
      price: 80,
      category: "Proteiner & Grill",
      image: "images/fried-turkey.jpg",
      popular: false,
    },
    {
      id: 35,
      name: "Stekt Kyckling",
      description: "Krispig stekt kyckling med speciell kryddning",
      price: 60,
      category: "Proteiner & Grill",
    image: "images/fried-chicken.jpg",
      popular: true,
    },
    {
      id: 36,
      name: "Stekt Kött",
      description: "Mört stekt nötkött med traditionella kryddor",
      price: 100,
      category: "Proteiner & Grill",
     image: "images/fried-meat.jpg",
      popular: false,
    },
    {
      id: 37,
      name: "Suya",
      description: "Kryddiga grillade köttspett med jordnötskryddblandning",
      price: 200,
      category: "Proteiner & Grill",
     image: "images/suya.webp",
      popular: true,
    },
    {
      id: 38,
      name: "Nkwobi",
      description: "Kryddig kofot delikatess i palmoljesås",
      price: 200,
      category: "Proteiner & Grill",
       image: "images/nkwobi.webp",
      popular: false,
    },
    {
      id: 39,
      name: "Peppar Gizzard",
      description: "Kryddig kycklingmage tillagad med paprika och lök",
      price: 200,
      category: "Proteiner & Grill",
     image: "images/peppered-gizzard.jpg",
      popular: false,
    },
    {
      id: 40,
      name: "Peppar Pomo",
      description: "Kryddig koskinn delikatess tillagad med paprika, lök och traditionella nigerianska kryddor",
      price: 200,
      category: "Proteiner & Grill",
      image: "images/peppered-pomo.jpg",
      popular: false,
    },
    {
      id: 41,
      name: "Peppad Kött & Plantain",
      description: "Kryddig nigeriansk peppad kött serverad med gyllene stekta plantainskivor",
      price: 200,
      category: "Proteiner & Grill",
      image: "images/peppered-meat-plantain.jpg",
      popular: true,
    },

    // Special Dishes
    {
      id: 42,
      name: "Abacha",
      description: "Traditionell afrikansk sallad gjord av kassava med grillad fisk, grönsaker och autentiska kryddor",
      price: 200,
      category: "Specialrätter",
      image: "images/african-salad.jpg",
      popular: true,
    },
    {
      id: 43,
      name: "Krispig Kyckling & Chips",
      description: "Krispig stekt kyckling serverad med gyllene chips",
      price: 150,
      category: "Specialrätter",
     image: "images/chicken-chips.jpg",
      popular: true,
    },
    {
      id: 44,
      name: "Kokosnöt Ris",
      description: "Doftande ris tillagat i kokosmjölk med kryddor",
      price: 200,
      category: "Ris & Tillbehör",
     image: "images/coconut-rice.jpg",
      popular: false,
    },
    {
      id: 45,
      name: "Ofada Ris",
      description: "Lokalt nigerianskt ris serverat med speciell ofada sås",
      price: 250,
      category:"Ris & Tillbehör",
      image: "images/ofada.jpg",
      popular: true,
    },
    {
      id: 46,
      name: "Makrill Gryta",
      description: "Rik tomatbaserad fiskgryta med makrill, paprika och traditionella nigerianska kryddor",
      price: 150,
      category: "Ris & Tillbehör",
      image: "images/mackerel-stew.jpg",
      popular: false,
    },
   

    // Pepper Soups
    {
      id: 48,
      name: "Fisk Pepparsoppa",
      description: "Kryddig och aromatisk fisksoppa med traditionella afrikanska kryddor",
      price: 250,
      category: "Pepparsoppor",
    image: "images/fishpepper-soup.jpg",
      popular: true,
    },
    {
      id: 49,
      name: "Mal Pepparsoppa",
      description: "Kryddig och aromatisk malsoppa med traditionella afrikanska kryddor och grönsaker",
      price: 100,
      category: "Pepparsoppor",
      image: "images/catfish-peppersoup.jpg",
      popular: false,
    },
    {
      id: 50,
      name: "Get Pepparsoppa",
      description: "Kryddig getköttsoppa med aromatiska örter och kryddor",
      price: 250,
      category: "Pepparsoppor",
    image: "images/Goatmeatpp.jpg",
      popular: true,
    },
    {
      id: 51,
      name: "Blandad Pepparsoppa",
      description: "Blandad kött pepparsoppa med traditionella kryddor",
      price: 250,
      category: "Pepparsoppor",
      image: "images/assortedpp.webp",
      popular: false,
    },

    // Snacks
    {
      id: 52,
      name: "Vårrullar",
      description: "Krispiga vårrullar fyllda med grönsaker",
      price: 25,
      category: "Snacks",
      image: "images/springrolls.jpg",
      popular: false,
    },
    {
      id: 53,
      name: "Samosa",
      description: "Krispiga triangulära bakverk fyllda med kryddad fyllning",
      price: 25,
      category: "Snacks",
    image: "images/samosa.webp",
      popular: true,
    },
    {
      id: 54,
      name: "Puff Puff",
      description: "Populär nigeriansk söt friterad degboll, gyllene och fluffig, perfekt som snack eller efterrätt",
      price: 59,
      category: "Snacks",
      image: "images/puff-puff.jpg",
      popular: true,
    },
    {
      id: 55,
      name: "Nigerianska Äggbullar",
      description: "Traditionell nigeriansk snack - mjuka, fluffiga brödbullar med perfekt tillagade ägg inuti",
      price: 25,
      category: "Snacks",
      image: "images/egg-rolls.jpg",
      popular: true,
    },
    {
      id: 56,
      name: "Korvbröd",
      description: "Gyllenbrun smördegsbröd fyllda med kryddat korv kött, bakade till perfektion",
      price: 25,
      category: "Snacks",
      image: "images/sausage-rolls.jpg",
      popular: true,
    },
    {
      id: 57,
      name: "Köttpaj",
      description: "Gyllenbrun nigeriansk köttpaj med flagnig pajdeg fylld med kryddat malet kött",
      price: 25,
      category: "Snacks",
      image: "images/meat-pie.jpg",
      popular: true,
    },
    {
      id: 58,
      name: "Kycklingpaj",
      description: "Smakrik paj fylld med kryddad kyckling",
      price: 30,
      category: "Snacks",
       image: "images/chicken-pie.jpeg",
      popular: false,
    },
    {
      id: 59,
      name: "Fiskpaj",
      description: "Flagnig deg fylld med kryddad fisk",
      price: 25,
      category: "Snacks",
    image: "images/fish-pie.jpg",
      popular: false,
    },
    {
      id: 60,
      name: "Munk",
      description: "Söt friterad deg med olika glasyr",
      price: 25,
      category: "Snacks",
      image: "images/doughnutt.jpg",
      popular: true,
    },
    {
      id: 61,
      name: "Små Snacks Tallrik",
      description: "Blandade nigerianska festsnacks inklusive puff puff, vårrullar och samosas i dekorativa korgar",
      price: 125,
      category: "Snacks",
      image: "images/small-chops.jpg",
      popular: true,
    },
    {
      id: 62,
      name: "Skotska Ägg",
      description: "Hårdkokta ägg inslagna i kryddat korv kött, panerade och friterade tills gyllene",
      price: 25,
      category: "Snacks",
      image: "images/scotch-eggs.jpg",
      popular: false,
    },

    {
      id: 63,
      name: "Lyxig Cupcake",
      description: "Dekadent chokladcupcake med rik chokladfrosting och eleganta dekorativa element",
      price: 65,
      category: "Efterrätter",
      image: "images/cupcake.jpg",
      popular: false,
    },
    {
      id: 64,
      name: "Hantverks Munkar",
      description: "Blandade färska munkar med olika glasyr och toppings, gjorda dagligen i vårt kök",
      price: 25,
      category: "Efterrätter",
      image: "images/doughnut.jpg",
      popular: true,
    },
    {
      id: 65,
      name: "Ros Macarons Tårta",
      description: "Elegant tårta med rosa macarons, marängsvampar och delikata rosdekorationer",
      price: 125,
      category: "Efterrätter",
      image: "images/cake-3.jpg",
      popular: false,
    },
    {
      id: 66,
      name: "Lyxig Tårta",
      description: "Dekadent schwarzwaldtårta med körsbär, vispgrädde och chokladdekorationer",
      price: 95,
      category: "Efterrätter",
      image: "images/cake.jpg",
      popular: false,
    },

    // Beverages
    {
      id: 67,
      name: "Kaffe",
      description: "Nybryggt varmt kaffe",
      price: 20,
      category: "Varma Drycker",
            image: "images/coffee.jpg",
      popular: true,
    },
    {
      id: 68,
      name: "Iskaffe",
      description: "Uppfriskande iskaffe",
      price: 40,
      category: "Varma Drycker",
    image: "images/icecoffe.webp",
      popular: true,
    },
    {
      id: 69,
      name: "Te",
      description: "Varmt te urval",
      price: 20,
      category: "Varma Drycker",
      image: "images/tea.jpg",
      popular: false,
    },
    {
      id: 70,
      name: "Chokladdryck",
      description: "Rik varm choklad dryck",
      price: 30,
      category: "Varma Drycker",
      image: "images/chocolate-drink.jpg",
      popular: true,
    },

    // Drinks
    {
      id: 71,
      name: "Vatten",
      description: "Flaskvatten",
      price: 20,
      category: "Drycker",
          image: "images/water.jpg",
      popular: false,
    },
    {
      id: 72,
      name: "Tiger Nöt Juice",
      description: "Traditionell nigeriansk tiger nöt dryck",
      price: 150,
      category: "Drycker",
           image: "images/tigernut.webp",
      popular: true,
    },
    {
      id: 73,
      name: "Apelsinjuice",
      description: "Färsk apelsinjuice",
      price: 70,
      category: "Drycker",
          image: "images/orangejuice.jpg",
      popular: true,
    },
    {
      id: 74,
      name: "Zobo Juice",
      description: "Traditionell nigeriansk hibiskus dryck",
      price: 150,
      category: "Drycker",
      image: "images/zobo.jpg",
      popular: true,
    },
    {
      id: 75,
      name: "Malt",
      description: "Alkoholfri maltdryck",
      price: 35,
      category: "Drycker",
            image: "images/malt.jpg",
      popular: false,
    },
    {
      id: 76,
      name: "Coca Cola",
      description: "Klassisk Coca Cola",
      price: 25,
      category: "Drycker",
              image: "images/cocacola.jpg",
      popular: true,
    },
    {
      id: 77,
      name: "Fanta",
      description: "Apelsinsmakad läsk",
      price: 25,
      category: "Drycker",
     image: "images/fanta.jpg",
      popular: false,
    },
    {
      id: 78,
      name: "Pepsi",
      description: "Klassisk Pepsi cola",
      price: 25,
      category: "Drycker",
     image: "images/pepsi.webp",
      popular: false,
    },
    {
      id: 79,
      name: "Ananasjuice",
      description: "Färsk ananasjuice",
      price: 40,
      category: "Drycker",
        image: "images/pineapplejuice.jpg",
      popular: false,
    },
    {
      id: 80,
      name: "Mangojuice",
      description: "Färsk mangojuice",
      price: 40,
      category: "Drycker",
            image: "images/mangojuice.jpg",
      popular: false,
    },
    {
      id: 81,
      name: "Kokosnöt Dryck",
      description: "Uppfriskande kokosnöt vatten",
      price: 40,
      category: "Drycker",
      image: "images/coconutdrink.jpg",
      popular: false,
    },
    {
      id: 82,
      name: "Ingefärsöl",
      description: "Kryddig ingefärsöl",
      price: 150,
      category: "Drycker",
       image: "images/gingerbeer.jpg",
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
    {/* Menu Hero Section */}
<section className="relative min-h-[50vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
  
    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary to-primary/10" />
  </div>

  <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 animate-fade-in-up">
    <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 md:mb-6 text-balance">
      {content.title}
    </h1>
    <p className="text-base sm:text-xl md:text-2xl lg:text-4xl text-secondary-foreground mb-3 md:mb-4 font-light text-balance">
      {content.subtitle}
    </p>
    <p className="text-sm sm:text-lg md:text-xl text-secondary-foreground/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
