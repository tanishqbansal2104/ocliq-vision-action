import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocliq-blue/10 via-transparent to-ocliq-violet/10 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>

      {/* Radial Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-ocliq-violet/5 rounded-full blur-3xl animate-glow"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            When Cameras Start{" "}
            <span className="gradient-text">Understanding</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ocliq turns your ordinary CCTV feeds into an intelligent system that alerts you instantly — via WhatsApp or phone — when something important happens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="gradient-primary text-white hover:opacity-90 transition-smooth text-lg px-8 py-6 shadow-glow group border-0"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-ocliq-blue/30 hover:bg-ocliq-blue/10 transition-smooth"
            >
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            No new hardware. Just smarter software.
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
