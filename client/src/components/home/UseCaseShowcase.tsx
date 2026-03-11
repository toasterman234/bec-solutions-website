import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Phone, FileText, MessageCircle, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  { icon: MessageSquare, title: "Faster lead follow-up", desc: "A new inquiry comes in and triggers a fast, relevant first response so leads do not sit untouched for hours." },
  { icon: Phone, title: "Missed-call response", desc: "A missed call triggers a follow-up action so opportunities are less likely to disappear." },
  { icon: FileText, title: "Document and invoice handling", desc: "Business documents get categorized, routed, prepared, or surfaced more efficiently instead of sitting in inboxes or requiring manual sorting." },
  { icon: MessageCircle, title: "Support request triage", desc: "Incoming support requests are organized and routed to the right person faster, with suggested responses where useful." },
  { icon: BookOpen, title: "Internal knowledge support", desc: "Teams get quicker access to SOPs, pricing, policies, and common internal answers without constant interruptions." },
  { icon: Users, title: "Client onboarding coordination", desc: "A new customer triggers the right follow-up steps, communications, and internal tasks so onboarding feels smoother and more consistent." },
];

export function UseCaseShowcase() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center max-w-2xl mx-auto"
        >
          Examples of the kinds of workflows we help improve
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {useCases.map((uc, i) => (
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
                  <uc.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base sm:text-lg mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {uc.desc}
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
