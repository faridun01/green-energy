import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ApproachSection } from "@/components/approach-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ApproachSection />
        <GuaranteeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
