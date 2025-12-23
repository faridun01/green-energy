"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function GuaranteeSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-card shadow-lg">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    {t("guaranteeTitle")}
                  </h2>
                  <p className="text-base text-muted-foreground mb-4 leading-relaxed">{t("guaranteeText")}</p>
                  <p className="text-base text-foreground font-semibold">{t("guaranteeSubtext")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
