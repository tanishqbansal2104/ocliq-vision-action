import step1 from "@/assets/step-1.png";
import step2 from "@/assets/step-2.png";
import step3 from "@/assets/step-3.png";

const steps = [
  {
    number: "01",
    title: "Connect Your Cameras",
    description: "Link your existing security cameras or NVR system. Works with any IP camera.",
    image: step1,
  },
  {
    number: "02",
    title: "Define Workflows",
    description: 'Set smart rules like "If no one at counter for 2 mins → Alert manager on WhatsApp"',
    image: step2,
  },
  {
    number: "03",
    title: "Get Instant Alerts",
    description: "Receive real-time notifications via WhatsApp or calls — automatically.",
    image: step3,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-ocliq-blue/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            From Vision to Action, <span className="gradient-text">in Seconds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your cameras into intelligent assistants
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-12 h-0.5 bg-gradient-to-r from-ocliq-blue to-ocliq-violet opacity-30 -ml-6"></div>
              )}

              <div className="glass rounded-3xl p-8 shadow-soft hover:shadow-glow transition-smooth hover:scale-105 h-full border border-ocliq-blue/20">
                {/* Step Number */}
                <div className="text-6xl font-bold gradient-text mb-6 opacity-50">
                  {step.number}
                </div>

                {/* Image */}
                <div className="mb-6 flex justify-center">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-32 h-32 object-contain animate-float"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
