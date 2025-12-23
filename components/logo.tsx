"use client"

import { Zap } from "lucide-react"

export function Logo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button onClick={scrollToTop} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
      <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
        <Zap className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
      </div>
      <span className="font-bold text-xl text-foreground">Green Energy</span>
    </button>
  )
}
