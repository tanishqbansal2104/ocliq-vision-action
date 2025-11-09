import { MessageCircle, Phone, Mail, MessageSquare } from "lucide-react";

const integrations = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    description: "Instant alerts via WhatsApp Business API",
  },
  {
    name: "Phone Calls",
    icon: Phone,
    description: "Automated voice calls with Twilio",
  },
  {
    name: "Email",
    icon: Mail,
    description: "Detailed email notifications with screenshots",
  },
  {
    name: "Slack",
    icon: MessageSquare,
    description: "Team notifications in your workspace",
  },
];

const Integrations = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-muted/10 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-ocliq-violet/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Seamlessly Fits Into Your{" "}
            <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with your favorite communication tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={integration.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass rounded-2xl p-8 h-full shadow-soft hover:shadow-glow transition-smooth hover:scale-105 group border border-ocliq-blue/20">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-ocliq-blue to-ocliq-violet p-5 group-hover:scale-110 transition-transform shadow-glow">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Works with any NVR or IP camera system
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
