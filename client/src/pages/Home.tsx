import { HeroSection } from "@/components/home/HeroSection";
import { PositioningStrip } from "@/components/home/PositioningStrip";
import { WhatWeHelpImprove } from "@/components/home/WhatWeHelpImprove";
import { CommonProblems } from "@/components/home/CommonProblems";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { UseCaseShowcase } from "@/components/home/UseCaseShowcase";
import { WhyThisMatters } from "@/components/home/WhyThisMatters";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { FitSection } from "@/components/home/FitSection";
import { StartSmallCTA } from "@/components/home/StartSmallCTA";
import { AboutSection } from "@/components/home/AboutSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PositioningStrip />
      <WhatWeHelpImprove />
      <CommonProblems />
      <HowWeWorkSection />
      <HowItWorks />
      <UseCaseShowcase />
      <WhyThisMatters />
      <PhilosophySection />
      <FitSection />
      <StartSmallCTA />
      <AboutSection />
      <FinalCTA />
      <ContactSection />
    </div>
  );
}
