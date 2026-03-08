import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Bot, Zap, MessageSquareCode, LineChart, Code2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const services = [
  {
    id: "ai-agents",
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "Custom AI Agents & Chatbots",
    description: "Deploy intelligent assistants that understand your business context. They don't just answer FAQs—they qualify leads, book meetings, and resolve issues autonomously.",
    features: ["Trained on your PDFs, website & docs", "Multi-channel (Web, SMS, WhatsApp)", "Human-handoff capabilities", "24/7 autonomous operation"]
  },
  {
    id: "workflow-automation",
    icon: <Zap className="w-10 h-10 text-accent" />,
    title: "Workflow & Process Automation",
    description: "Eliminate repetitive copy-pasting. We connect your CRM, accounting software, email, and databases so data flows seamlessly without human intervention.",
    features: ["Zapier/Make integration & management", "Custom API bridging", "Automated invoice generation", "Employee onboarding automation"]
  },
  {
    id: "crm-setup",
    icon: <MessageSquareCode className="w-10 h-10 text-primary" />,
    title: "Smart CRM Implementations",
    description: "Stop losing leads in spreadsheets. We design and deploy intelligent CRM systems that automatically track, nurture, and close prospects.",
    features: ["HubSpot, Salesforce, GoHighLevel", "Automated follow-up sequences", "Pipeline stage triggers", "Lead scoring systems"]
  },
  {
    id: "data-analytics",
    icon: <LineChart className="w-10 h-10 text-accent" />,
    title: "Predictive Analytics & Dashboards",
    description: "Make decisions based on facts, not gut feelings. We build real-time executive dashboards that consolidate your data into clear, actionable visual metrics.",
    features: ["Custom KPI dashboards", "Sales forecasting models", "Automated weekly reporting", "Data warehouse setup"]
  },
  {
    id: "custom-dev",
    icon: <Code2 className="w-10 h-10 text-primary" />,
    title: "Custom Internal Tooling",
    description: "When off-the-shelf software doesn't fit, we build lightweight, secure internal web apps tailored exactly to your unique operational processes.",
    features: ["React/Node.js custom development", "Client portals", "Inventory management tools", "Legacy system modernization"]
  },
  {
    id: "security",
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
    title: "AI Security & Compliance",
    description: "Implement AI safely. We ensure your data remains private and your automated systems comply with industry regulations like HIPAA and SOC2.",
    features: ["Private LLM deployment", "Data obfuscation", "Access control management", "Regular security auditing"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      
      {/* Header */}
      <section className="py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Our <span className="text-gradient">Capabilities</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive technological solutions designed specifically to reduce overhead and accelerate growth for local Memphis enterprises.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
                }}
                className="glass-card rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 relative group"
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
                  <div className="shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10">
                    {service.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 opacity-80" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card border border-primary/20 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl pointer-events-none" />
            
            <h2 className="font-display text-4xl font-bold mb-6 relative z-10">Not sure where to start?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
              Every business is unique. We offer a complimentary workflow audit to identify your biggest bottlenecks and calculate the exact ROI of automating them.
            </p>
            
            <div className="relative z-10">
              <Link href="/#contact">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all shadow-xl">
                  Book Your Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
