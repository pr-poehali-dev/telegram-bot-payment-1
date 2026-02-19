import { useCallback } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DonateSection from "@/components/DonateSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProfileSection from "@/components/ProfileSection";
import SettingsSection from "@/components/SettingsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const handleNavigate = useCallback((section: string) => {
    if (section === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onNavigate={handleNavigate} />
      <HeroSection onNavigate={handleNavigate} />
      <FeaturesSection />
      <ProfileSection />
      <DonateSection />
      <SettingsSection />
      <Footer />
    </div>
  );
};

export default Index;
