import { LanguageProvider } from "@/components/language-provider"
import AboutPage from "@/src/pages/about-page"

export default function About() {
  return (
    <LanguageProvider>
      <AboutPage />
    </LanguageProvider>
  )
}
