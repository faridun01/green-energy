"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, MessageCircle, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"

export function ContactSection() {
  const { t, language } = useLanguage()
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleLocationClick = () => {
    const address = "Улица Айни 48, Душанбе, Таджикистан"
    const encodedAddress = encodeURIComponent(address)

    const isRussianRegion = language === "ru"

    if (isRussianRegion) {
      window.open(`https://yandex.ru/maps/?text=${encodedAddress}`, "_blank")
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("sending")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus("success")
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => setFormStatus("idle"), 3000)
      } else {
        setFormStatus("error")
        setTimeout(() => setFormStatus("idle"), 3000)
      }
    } catch (error) {
      setFormStatus("error")
      setTimeout(() => setFormStatus("idle"), 3000)
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 bg-secondary-foreground">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">{t("contactTitle")}</h2>
          <p className="text-lg text-pretty leading-relaxed text-foreground">{t("contactDescription")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 lg:gap-6">
            <Card className="border-border flex-1">
              <CardContent className="pt-6 h-full flex flex-col justify-center">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("phone")}</h3>
                    <a
                      href="tel:+992077899998"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +992 077 899 998
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-border flex-1 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={handleLocationClick}
            >
              <CardContent className="pt-6 h-full flex flex-col justify-center">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("location")}</h3>
                    <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {t("locationAddress")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">{t("followUs")}</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/992077899998"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </a>
                  <a
                    href="https://t.me/faridun_rahim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0088cc]/10 hover:bg-[#0088cc]/20 text-[#0088cc] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span className="text-sm font-medium">Telegram</span>
                  </a>
                  <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#f58529]/10 via-[#dd2a7b]/10 to-[#8134af]/10 hover:from-[#f58529]/20 hover:via-[#dd2a7b]/20 hover:to-[#8134af]/20 text-[#dd2a7b] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                    </svg>
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-border h-full">
              <CardContent className="pt-6 h-full flex flex-col">
                <form className="space-y-4 flex-1 flex flex-col" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                        {t("nameLabel")} <span className="text-destructive">*</span>
                      </label>
                      <Input id="name" name="name" placeholder={t("namePlaceholder")} required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">
                        {t("phoneLabel")} <span className="text-destructive">*</span>
                      </label>
                      <Input id="phone" name="phone" type="tel" placeholder={t("phonePlaceholder")} required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="text-sm font-medium text-foreground mb-1.5 block">
                      {t("serviceLabel")}
                    </label>
                    <Input id="service" name="service" placeholder={t("servicePlaceholder")} />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                      {t("messageLabel")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={8}
                      className="flex-1 resize-none"
                      placeholder={t("messagePlaceholder")}
                    />
                  </div>

                  <Button type="submit" className="w-full mt-auto" disabled={formStatus === "sending"}>
                    {formStatus === "sending"
                      ? t("sending") || "Отправка..."
                      : formStatus === "success"
                        ? t("sent") || "Отправлено!"
                        : t("sendMessage")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
