import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { UiShowcaseSection } from "@/components/UiShowcaseSection";
import { DesignHighlightsSection } from "@/components/DesignHighlightsSection";
import { ExploreSection } from "@/components/ExploreSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <UiShowcaseSection />
        <DesignHighlightsSection />
        <ExploreSection />
      </main>
      <Footer />
    </div>
  );
}
