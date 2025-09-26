import { LanguageProvider } from "@/components/language-provider"
import HomePage from "@/src/pages/home-page"

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  )
}
