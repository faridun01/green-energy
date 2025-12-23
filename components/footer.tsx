export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">GE</span>
            </div>
            <span className="font-semibold text-sm text-foreground">Green Energy</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Green Energy. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
