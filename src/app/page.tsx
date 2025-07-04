import { Header } from "@/components/commons/header";
import { Hero } from "@/components/home/HomeBanner";
import { ClientHandlingSection } from "@/components/home/ClientHandlingSection";
// import { FeaturesSection } from "@/components/home/FeaturesSection";
import { Footer } from "@/components/commons/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        <Hero />
        <ClientHandlingSection />
        {/* <FeaturesSection /> */}
      </main>
      <Footer />
    </div>
  );
}
