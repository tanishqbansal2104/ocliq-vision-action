import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocliq-violet/20 rounded-full blur-3xl animate-glow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Turn Your Cameras Into Your{" "}
            <span className="gradient-text">Smartest Employee</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Ocliq doesn't just see — it understands. Start your journey towards intelligent surveillance today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="gradient-primary text-white hover:opacity-90 transition-smooth text-lg px-10 py-7 shadow-glow group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 glass hover:bg-white/80 transition-smooth"
            >
              Join the Beta
            </Button>
          </div>

          <div className="pt-8 space-y-2">
            <p className="text-sm text-muted-foreground">
              ✓ No new hardware required
            </p>
            <p className="text-sm text-muted-foreground">
              ✓ Works with any NVR or IP camera
            </p>
            <p className="text-sm text-muted-foreground">
              ✓ Setup in under 10 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
