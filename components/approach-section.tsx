"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function ApproachSection() {
  const { t } = useLanguage()

  return (
    <section id="approach" className="py-16 lg:py-24 rounded-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("approachTitle")}</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-8">
          {[
            { number: "01", key: "approachStep1" as const },
            { number: "02", key: "approachStep2" as const },
            { number: "03", key: "approachStep3" as const },
            { number: "04", key: "approachStep4" as const },
            { number: "05", key: "approachStep5" as const },
          ].map((step, index) => (
            <Card
              key={index}
              className="border-border relative overflow-hidden rounded-sm w-full md:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)]"
            >
              <CardContent className="pt-6">
                <div className="text-6xl font-bold text-primary/10 absolute -top-2 -right-2">{step.number}</div>
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-base text-foreground leading-relaxed italic text-center">
                    {t(step.key)}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-base text-muted-foreground max-w-2xl mx-auto">{t("approachDescription")}</p>
      </div>
    </section>
  )
}
