import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    title: "Identify the bottleneck",
    desc: "We start with the workflow that wastes the most time, causes the most friction, or creates the most missed opportunity.",
  },
  {
    number: "2",
    title: "Design the workflow",
    desc: "We map the process, look at the tools already in use, and identify where automation, routing, drafting, or better coordination can help.",
  },
  {
    number: "3",
    title: "Keep it usable",
    desc: "The solution should fit naturally into the way your business already operates whenever possible—not force your team into an entirely new system.",
  },
  {
    number: "4",
    title: "Improve over time",
    desc: "Good workflows get refined. We focus on making the process clearer, more reliable, and more useful over time.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-28 bg-card/10 border-y border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center"
        >
          A practical process built around real business needs
        </motion.h2>
        <div className="relative">
          <div className="absolute left-[11px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />
          <div className="space-y-8 sm:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative flex gap-6 sm:gap-8 pb-8 sm:pb-12 last:pb-0"
              >
                <div className="relative z-10 flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary font-display text-sm sm:text-base font-bold">
                  {step.number}
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="font-display text-lg sm:text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
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
