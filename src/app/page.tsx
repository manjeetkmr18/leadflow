import { Header } from "@/components/commons/header";
import { Hero } from "@/components/home/HomeBanner";
import { ClientHandlingSection } from "@/components/home/ClientHandlingSection";
import { AutomationSection } from "@/components/home/AutomationSection";
import { DashboardSection } from "@/components/home/DashboardSection";
import { AIExperienceSection } from "@/components/home/AIExperienceSection";
import { AIModelSection } from "@/components/home/AIModelSection";
import { IntegrationSection } from "@/components/home/IntegrationSection";
// import { FeaturesSection } from "@/components/home/FeaturesSection";
import { Footer } from "@/components/commons/footer";
import TeamStaysSection from "@/components/home/TeamStaysSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        <Hero />
        <ClientHandlingSection />
        <AutomationSection />
        <DashboardSection />
        <AIModelSection />
        {/* <AIExperienceSection /> */}
        <IntegrationSection />
        <TeamStaysSection />
        {/* <FeaturesSection /> */}
      </main>
      <Footer />
    </div>
  );
}
