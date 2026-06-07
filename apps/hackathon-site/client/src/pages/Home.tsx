import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import FeaturesSection from "@/components/FeaturesSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import PreviewSection from "@/components/PreviewSection";
import QuickStartSection from "@/components/QuickStartSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";

function SectionDivider() {
  return (
    <div className="flex justify-center">
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <WhySection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <ArchitectureSection />
      <SectionDivider />
      <PreviewSection />
      <SectionDivider />
      <QuickStartSection />
      <SectionDivider />
      <RoadmapSection />
      <Footer />
    </div>
  );
}
