import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Integrations from "@/components/Integrations";
import Technology from "@/components/Technology";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <UseCases />
      <Integrations />
      <Technology />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
