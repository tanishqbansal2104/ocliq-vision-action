import { Store, UtensilsCrossed, School, Home } from "lucide-react";

const useCases = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Detect empty counters, kitchen delays, or staff inactivity instantly.",
    color: "from-ocliq-blue to-ocliq-blue-dark",
  },
  {
    icon: Store,
    title: "Retail",
    description: "Prevent thefts, identify idle billing counters, and monitor customer flow.",
    color: "from-ocliq-violet to-ocliq-violet-dark",
  },
  {
    icon: School,
    title: "Schools",
    description: "Spot unusual movements or student crowding for enhanced safety.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Home,
    title: "Homes",
    description: "Get alerts for intrusions, deliveries, or any unusual activity.",
    color: "from-purple-500 to-purple-700",
  },
];

const UseCases = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ocliq-violet/5 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-ocliq-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Built for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Whatever your world watches — Ocliq helps it understand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass rounded-3xl p-8 h-full shadow-soft hover:shadow-glow transition-smooth hover:scale-105 border border-ocliq-violet/20">
                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
