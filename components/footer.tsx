"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Phone, Clock, Mail } from "lucide-react"

interface FooterProps {
  language: "en" | "sv"
}

const footerContent = {
  en: {
    quickLinks: "Quick Links",
    contact: "Contact Info",
    hours: "Opening Hours",
    followUs: "Follow Us",
    copyright: "© 2025 Crystal Class Cuisine. All rights reserved.",
    address: "Skärholmenstorget 1, 127 48 Skärholmen",
    phone: "+46764140284",
    email: "contact@crystalclasscuisine.com",
    weekdays: "Mon - Sun: 11am - 9pm",

    links: [
      { href: "/", label: "Home" },
      { href: "/menu", label: "Menu" },
      { href: "/about", label: "About Us" },
      { href: "/events", label: "Events" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
    ],
  },
  sv: {
    quickLinks: "Snabblänkar",
    contact: "Kontaktinfo",
    hours: "Öppettider",
    followUs: "Följ Oss",
    copyright: "© 2025 Crystal Class Cuisine. Alla rättigheter förbehållna.",
    address: "Stockholm, Sverige",
    phone: "+46 76 414 02 84",
    email: "info@crystalclasscuisine.se",
    weekdays: "Mån - Sön: 11f.m - 9 e.m",
    weekends: "Fre - Sön: 11:00 - 23:00",
    links: [
      { href: "/", label: "Hem" },
      { href: "/menu", label: "Meny" },
      { href: "/about", label: "Om Oss" },
      { href: "/events", label: "Evenemang" },
      { href: "/gallery", label: "Galleri" },
      { href: "/contact", label: "Kontakt" },
    ],
  },
}

export default function Footer({ language }: FooterProps) {
  const content = footerContent[language]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
   
{/* Google Map Preview */}
<div className="mb-12 border-primary/20">
  <div className="bg-muted rounded-lg overflow-hidden h-64">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038.3586701471097!2d17.90468237619346!3d59.276863115220316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f76a21e986279%3A0x208cbd3fbfbd8ae8!2sSk%C3%A4rholmsg%C3%A5ngen%2018%2C%20127%2048%20Sk%C3%A4rholmen%2C%20Sweden!5e0!3m2!1sen!2sng!4v1759927101054!5m2!1sen!2sng"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/crystal-class-logo2.png"
                alt="Crystal Class Cuisine"
                width={48}
                height={48}
                className="w-20 h-12"
              />
              <span className="text-primary font-serif text-sm sm:text-base lg:text-xl font-bold">Crystal Class Cuisine</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Authentic West African cuisine in the heart of Sweden. Experience the rich flavors and cultural heritage of Africa."
                : "Autentisk västafrikansk mat i hjärtat av Sverige. Upplev de rika smakerna och det kulturella arvet från Afrika."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-primary font-semibold text-lg">{content.quickLinks}</h3>
            <ul className="space-y-2">
              {content.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-primary font-semibold text-lg">{content.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Skärholmenstorget 1, 127 48 <br></br>Skärholmen"</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{content.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{content.email}</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h3 className="text-primary font-semibold text-lg">{content.hours}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-muted-foreground">
                  <div>{content.weekdays}</div>
              
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-primary font-semibold mb-3">{content.followUs}</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary/20 text-center">
          <p className="text-white">{content.copyright}</p>
          <p className="text-white">Developed and Designed by Suwebatu</p>
        </div>
      </div>
    </footer>
  )
}
