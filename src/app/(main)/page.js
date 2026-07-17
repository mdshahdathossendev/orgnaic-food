import HeroSection from "@/Componet/Hero";
import ServicesSection from "@/Componet/ServicesSection";
import StatisticsSection from "@/Componet/StatisticsSection";
import TestimonialsSection from "@/Componet/TestimonialsSection";
import NewsletterSection from "@/Componet/NewsletterSection";
import HorizontalProductsSection from "@/Componet/HorizontalProductsSection";
import CallToActionSection from "@/Componet/CallToActionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HorizontalProductsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <NewsletterSection />
    </>
  );
}
