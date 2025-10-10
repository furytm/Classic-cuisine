"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  language: "en" | "sv"
  onLanguageChange: (lang: "en" | "sv") => void
}

const navigationItems = {
  en: [
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About Us" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  sv: [
    { href: "/menu", label: "Meny" },
    { href: "/about", label: "Om Oss" },
    { href: "/events", label: "Evenemang" },
    { href: "/gallery", label: "Galleri" },
    { href: "/contact", label: "Kontakt" },
  ],
}

const ctaLabels = {
  en: "Order Now",
  sv: "Beställ Nu",
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/crystal-class-logo2.png"
              alt="Crystal Class Cuisine"
              width={48}
              height={48}
              className="w-20 h-12"
            />
<span className="text-primary dancing-script text-xl md:text-lg lg:text-2xl">
  Soul In Every Bite
</span>


          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems[language].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - Language toggle and CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => onLanguageChange(language === "en" ? "sv" : "en")}
              className="flex items-center space-x-1 text-secondary-foreground hover:text-primary transition-colors duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            <Button
              asChild
              className="bg-primary text-secondary hover:bg-primary/90 font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 animate-gold-glow hidden sm:inline-flex"
            >
              <Link href="/booking">{ctaLabels[language]}</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-secondary-foreground hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-secondary border-t border-primary/20 animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems[language].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-primary text-secondary hover:bg-primary/90 font-medium py-2 rounded-full transition-all duration-300"
                >
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
                    {ctaLabels[language]}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
