"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"

export function Header() {
  const { t, language } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleGetQuote = () => {
    const phoneNumber = "992987090605"
    const greetingMessage =
      language === "ru" ? "Здравствуйте! Я хочу получить расчет проекта." : "Салом! Ман мехоҳам ҳисобкунии лоиҳа гирам."
    const encodedMessage = encodeURIComponent(greetingMessage)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
    setMobileMenuOpen(false)
  }

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("about")}
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("services")}
            </a>
            <a
              href="#approach"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("approach")}
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("contact")}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button onClick={handleGetQuote} className="hidden md:inline-flex" size="sm">
              {t("getQuote")}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col gap-3">
              <a
                href="#about"
                onClick={handleNavClick}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 hover:bg-accent rounded-lg"
              >
                {t("about")}
              </a>
              <a
                href="#services"
                onClick={handleNavClick}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 hover:bg-accent rounded-lg"
              >
                {t("services")}
              </a>
              <a
                href="#approach"
                onClick={handleNavClick}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 hover:bg-accent rounded-lg"
              >
                {t("approach")}
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 hover:bg-accent rounded-lg"
              >
                {t("contact")}
              </a>
              <Button onClick={handleGetQuote} className="mx-4 mt-2" size="sm">
                {t("getQuote")}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
