import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroWorkflowVisual } from "./HeroWorkflowVisual";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export function HeroSection() {
  return (
    <section className="relative hero-dark pt-24 pb-20 md:pt-32 md:pb-28 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-5"
            >
              Workflow Automation for Small Businesses
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl font-bold tracking-tight leading-[1.1] mb-5 md:mb-6"
            >
              Practical workflow automation for small businesses
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed"
            >
              Reduce manual work, respond faster, and improve operations without forcing your team into a whole new system.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-muted-foreground/90 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed"
            >
              We help small businesses streamline the workflows that slow them down most—lead follow-up, missed calls, document handling, support triage, onboarding, and repetitive admin work.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link href="/#contact">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/#what-we-help-improve">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 border-white/20 hover:bg-white/5">
                  See What We Automate
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <HeroWorkflowVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
