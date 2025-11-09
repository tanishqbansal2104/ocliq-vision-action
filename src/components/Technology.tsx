import { Brain, Cloud, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced Computer Vision",
    description: "AI trained to understand context, not just detect motion",
  },
  {
    icon: Cloud,
    title: "Flexible Deployment",
    description: "Run on your NVR, edge device, or in the cloud",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your video data stays secure and private",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Sub-second response times for critical alerts",
  },
];

const Technology = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            AI That Sees, Thinks, and{" "}
            <span className="gradient-text">Reacts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ocliq runs on advanced computer vision — trained to understand context, not just motion.
            Whether on your NVR, edge device, or cloud, Ocliq ensures privacy and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-4 group">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-ocliq-blue to-ocliq-violet p-5 group-hover:scale-110 transition-transform shadow-glow">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Diagram */}
        <div className="glass rounded-3xl p-12 max-w-4xl mx-auto shadow-soft">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-ocliq-blue to-ocliq-violet/50 flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium">Edge / NVR</p>
            </div>

            <div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-ocliq-blue via-ocliq-violet to-ocliq-blue animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-ocliq-violet/50 to-ocliq-violet flex items-center justify-center">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium">Ocliq Cloud</p>
            </div>

            <div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-ocliq-blue via-ocliq-violet to-ocliq-blue animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-ocliq-violet to-ocliq-blue flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium">Your Phone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export default Technology;
