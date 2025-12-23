"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t, language } = useLanguage()

  const handleConsultationClick = () => {
    const phoneNumber = "992 - 077 - 899 - 998"
    const greetingMessage =
      language === "ru"
        ? "Здравствуйте! Я хочу получить консультацию по инженерным системам."
        : "Салом! Ман мехоҳам дар бораи системаҳои муҳандисӣ маслиҳат гирам."
    const encodedMessage = encodeURIComponent(greetingMessage)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <>
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 text-balance leading-tight">
              {t("heroTitle")}
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4 text-balance">
              {t("heroSubtitle")}
            </p>

            <p className="text-lg text-primary font-medium mb-6">{t("heroServices")}</p>

            <p className="text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              {t("heroDescription")}
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">{t("heroFeature1")}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">{t("heroFeature2")}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">{t("heroFeature3")}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto" onClick={handleConsultationClick}>
                {t("getConsultation")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                <a href="tel:+992987090605">
                  <Phone className="mr-2 w-4 h-4" />
                  {t("callNow")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Removed ConsultationModal as it's no longer needed */}
    </>
  )
}
