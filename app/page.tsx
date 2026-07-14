import { HeroSection } from "@/sections/HeroSection";
import { CredibilityMatrix } from "@/sections/CredibilityMatrix";
import { EstimateBuilder } from "@/sections/EstimateBuilder";
import { ServicesGrid } from "@/sections/ServicesGrid";
import { GuaranteeSection } from "@/sections/GuaranteeSection";
import { TechTrackerSection } from "@/sections/TechTrackerSection";
import { ReviewsSection } from "@/sections/ReviewsSection";
import { FaqSection } from "@/sections/FaqSection";
import { CtaBand } from "@/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityMatrix />
      <EstimateBuilder />
      <ServicesGrid />
      <GuaranteeSection />
      <TechTrackerSection />
      <ReviewsSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
