import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Bot, Zap, BarChart, ChevronRight, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const { mutate: createLead, isPending } = useCreateLead();
  
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(data: InsertLead) {
    createLead(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract glowing background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8">
              <MapPin className="w-4 h-4" />
              <span>Memphis-Based & Proud</span>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Automate Your Future. <br className="hidden md:block"/>
                <span className="text-gradient">Empower Your Business.</span>
              </h1>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                We bring enterprise-grade AI and intelligent workflow automation to local businesses. 
                Reduce manual tasks, delight your customers, and scale without the growing pains.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#contact">
                <Button size="lg" className="rounded-full w-full sm:w-auto px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto px-8 py-6 text-lg border-white/20 hover:bg-white/5 transition-all">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition / Services Summary */}
      <section className="py-24 bg-card border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">How We Drive Growth</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tailored technological solutions designed to give local businesses an unfair advantage.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Bot className="w-8 h-8 text-primary" />,
                title: "Custom AI Chatbots",
                desc: "24/7 customer support, lead qualification, and appointment booking trained specifically on your business data."
              },
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "Workflow Automation",
                desc: "Connect your disjointed software stack. We automate invoicing, emails, and data entry so your team can focus on real work."
              },
              {
                icon: <BarChart className="w-8 h-8 text-primary" />,
                title: "Data Intelligence",
                desc: "Turn your raw data into actionable insights with automated reporting dashboards and predictive analytics."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-8 hover-glow group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
              View all capabilities <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        {/* office environment subtle background overlay */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          {/* Unsplash: modern dark office space */}
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&h=1080&fit=crop" 
            alt="Office background" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Rooted in Memphis.<br/>
                <span className="text-gradient">Built for the Future.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                BEC Solutions was founded to bridge the gap between cutting-edge Silicon Valley tech and hardworking local businesses right here in the Mid-South.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that artificial intelligence shouldn't just be for the Fortune 500. Whether you run a logistics firm, a law practice, or a local service business, we implement pragmatic automation that saves time and generates revenue.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <h4 className="font-display text-3xl font-bold text-primary mb-2">10x</h4>
                  <p className="text-sm text-muted-foreground">Faster response times with AI handling initial inquiries.</p>
                </div>
                <div>
                  <h4 className="font-display text-3xl font-bold text-accent mb-2">40hrs</h4>
                  <p className="text-sm text-muted-foreground">Average weekly admin time saved per client.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                {/* Unsplash: Abstract technology/circuit visualization */}
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop" 
                  alt="Abstract Technology" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="font-medium text-sm">System Status: Optimal</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl font-bold mb-4">Let's Talk Automation</h2>
              <p className="text-muted-foreground text-lg">
                Ready to reclaim your time? Drop us a message to schedule your free workflow audit.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="bg-background/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary transition-all rounded-xl h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jane@company.com" className="bg-background/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary transition-all rounded-xl h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Company Name (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Business LLC" className="bg-background/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary transition-all rounded-xl h-12" {...field} value={field.value || ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">How can we help?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="I'm interested in automating my customer intake process..." 
                            className="min-h-[120px] bg-background/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary transition-all rounded-xl resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full h-14 rounded-xl text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 relative overflow-hidden group"
                  >
                    {isPending ? "Sending Request..." : "Send Message"}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
