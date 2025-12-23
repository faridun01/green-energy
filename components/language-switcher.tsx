"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-lg bg-muted p-1">
      <Button
        variant={language === "tj" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("tj")}
        className="h-7 px-3 text-xs font-medium"
      >
        TJ
      </Button>
      <Button
        variant={language === "ru" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("ru")}
        className="h-7 px-3 text-xs font-medium"
      >
        RU
      </Button>
    </div>
  )
}
