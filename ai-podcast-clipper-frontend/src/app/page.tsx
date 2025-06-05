import { Navbar } from "../components/ui/Navbar";
import { Hero } from "../components/ui/Hero";
import { HowItWorks } from "../components/ui/HowItWorks";
import { TechStack } from "../components/ui/TechStack";
import { UseCases } from "../components/ui/UseCases";
import { DashboardPreview } from "../components/ui/DashboardPreview";
import { Pricing } from "../components/ui/Pricing";
import { Footer } from "../components/ui/Footer";

export default function LandingPage () {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <TechStack />
      <UseCases />
      <DashboardPreview />
      <Pricing />
      <Footer />
    </div>
  );
};

