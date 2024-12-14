import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import GallerySection from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { ServiceAreaSection } from "@/components/service-area-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <ServiceAreaSection />
        <TestimonialsSection />
        <TeamSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
