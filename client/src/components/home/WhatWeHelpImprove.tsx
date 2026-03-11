import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Phone, PhoneCall, FileText, MessageSquare, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MessageSquare,
    title: "Lead Response & Follow-Up",
    desc: "When a new lead comes in, speed matters. We help businesses put faster, more consistent first-touch and follow-up workflows in place so opportunities do not sit untouched.",
  },
  {
    icon: PhoneCall,
    title: "Missed Calls & Inquiry Capture",
    desc: "Missed calls, delayed callbacks, and overlooked messages can quietly cost business. We help create workflows that capture and respond to inbound interest more reliably.",
  },
  {
    icon: FileText,
    title: "Document & Admin Workflows",
    desc: "Invoices, forms, approvals, contracts, and recurring back-office tasks often eat up more time than they should. We help simplify and standardize those workflows.",
  },
  {
    icon: Phone,
    title: "Support & Inbox Triage",
    desc: "Not every request needs a human starting from scratch. We help businesses route requests faster, prepare draft responses, and reduce the time spent on repetitive communication.",
  },
  {
    icon: UserCheck,
    title: "Client Onboarding & Internal Coordination",
    desc: "A new client or new request should not trigger chaos behind the scenes. We help create cleaner handoffs, onboarding steps, and repeatable internal workflows.",
  },
];

export function WhatWeHelpImprove() {
  return (
    <section id="what-we-help-improve" className="py-16 md:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            What we help improve
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Operational bottlenecks that waste time, slow response, and create missed opportunities.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bento-card p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <service.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base sm:text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-12"
        >
          <Link href="/#contact">
            <Button size="lg" className="rounded-full px-8">
              Book a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
