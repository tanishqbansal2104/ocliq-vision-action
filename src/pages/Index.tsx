import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Integrations from "@/components/Integrations";
import Technology from "@/components/Technology";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingObjects from "@/components/FloatingObjects";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingObjects />
      <div className="relative z-10">
        <Hero />
        <HowItWorks />
        <UseCases />
        <Integrations />
        <Technology />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
