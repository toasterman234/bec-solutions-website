import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, Calendar, Star, FileText, CreditCard,
  UserCheck, MessageSquare, PhoneCall, Wrench, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const steps = [
  {
    number: "01",
    title: "We audit your workflow",
    desc: "We sit down and map out where your team is spending time on things that shouldn't require a human. No jargon, no templates — just an honest look at your operation."
  },
  {
    number: "02",
    title: "We identify what to fix first",
    desc: "Not every problem is worth solving on day one. We prioritize by impact — what's costing you the most time or money, and what can be fixed fastest."
  },
  {
    number: "03",
    title: "We build it and hand it off",
    desc: "We build the automation, test it against your real workflows, and hand it off running. You don't need to understand how it works — just that it does."
  }
];

const capabilities = [
  {
    icon: <PhoneCall className="w-5 h-5" />,
    title: "Missed Call & Lead Capture",
    desc: "Instant text-back on missed calls. New inquiries responded to in under 2 minutes, automatically."
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Booking & Appointment Automation",
    desc: "After-hours booking, confirmations, reminders, and rescheduling prompts — without front desk involvement."
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Review & Reputation Management",
    desc: "Post-service review requests sent automatically. Unhappy customers routed privately before they go public."
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Estimate & Quote Follow-Up",
    desc: "Automated sequences that check in with prospects until they say yes or no. Owner notified when someone re-engages."
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Invoice & Payment Automation",
    desc: "Invoices sent automatically on job completion. Payment reminders and late-payer follow-up without the awkward call."
  },
  {
    icon: <UserCheck className="w-5 h-5" />,
    title: "Client Onboarding & Access",
    desc: "Accounts, folders, and permissions provisioned automatically when a new client or team member is added."
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Document Collection",
    desc: "Automated intake requests, follow-up reminders, and automatic file organization when documents arrive."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Workflow & Systems Integration",
    desc: "Connect your disconnected tools — CRM, email, scheduling, billing — so data flows without manual copying."
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Custom Internal Tooling",
    desc: "When off-the-shelf doesn't fit, we build lightweight internal tools tailored exactly to how your business runs."
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-20">

      {/* ── HERO ── */}
      <section className="py-24 relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeInUp} className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-5">How we work</motion.p>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Every solution is<br /><span className="text-gradient">built for your business.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We don't sell packages. We learn how your operation works, find what's costing you time and money, and build something that actually fixes it.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/#contact">
                <Button size="lg" className="rounded-full px-8 py-5 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_4px_24px_-4px_hsl(var(--accent)/0.3)] transition-all duration-300">
                  Start with a free audit <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-bold mb-16 text-center">How it works</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {steps.map((step, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative">
                  <span className="font-display text-6xl font-bold text-foreground/5 absolute -top-4 -left-2 select-none">{step.number}</span>
                  <div className="relative z-10 pt-6">
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">{step.number}</p>
                    <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-5 text-foreground/10">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14">
            <motion.p variants={fadeInUp} className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3 text-center">What we've helped with</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Areas we work in</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-center max-w-xl mx-auto">
              These are the categories we've built solutions around. Your actual build will be scoped to your specific workflows — not a template pulled from this list.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="glass-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {cap.icon}
                  </div>
                  <h3 className="font-display font-semibold text-sm">{cap.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card border border-primary/20 rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-accent/8 pointer-events-none rounded-[2rem]" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl font-bold mb-4">Don't see your problem here?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Most of what we build is one-of-a-kind. Tell us what's eating your team's time — we'll tell you if and how we can fix it.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="rounded-full px-8 py-5 bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all shadow-xl">
                  Book a Free Workflow Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
