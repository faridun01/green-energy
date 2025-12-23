"use client"

import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">{t("aboutTitle")}</h2>
          <p className="text-base text-muted-foreground mb-4 leading-relaxed">{t("aboutText1")}</p>
          <p className="text-base text-muted-foreground mb-4 leading-relaxed">{t("aboutText2")}</p>
          <p className="text-base text-foreground font-semibold">{t("aboutPrinciples")}</p>
        </div>
      </div>
    </section>
  )
}
