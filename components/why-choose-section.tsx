"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Clock, Award, Headphones, CheckCircle, Wrench, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhyChooseSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance italic overline">
            {t("whyChooseTitle")}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          <Card className="border-border w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-foreground italic text-center">{t("whyFeature1")}</h3>
            </CardContent>
          </Card>

          <Card className="border-border w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-foreground text-center italic">{t("whyFeature2")}</h3>
            </CardContent>
          </Card>

          <Card className="border-border w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-foreground text-center italic">{t("whyFeature3")}</h3>
            </CardContent>
          </Card>

          <Card className="border-border w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-foreground text-center italic">{t("whyFeature4")}</h3>
            </CardContent>
          </Card>

          <Card className="border-border w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-foreground italic text-center">{t("whyFeature5")}</h3>
            </CardContent>
          </Card>

          <Card className="border-border w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-foreground italic text-center">{t("whyFeature6")}</h3>
            </CardContent>
          </Card>

          <Card className="border-border w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-foreground italic text-center">{t("whyFeature7")}</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
