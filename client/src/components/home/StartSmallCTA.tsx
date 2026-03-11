import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StartSmallCTA() {
  return (
    <section className="py-16 md:py-20 lg:py-24 border-y border-white/[0.06] bg-card/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
            Start with one bottleneck
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
            You do not need to automate everything at once. Start with the workflow that wastes the most time, causes the most friction, or creates the most missed opportunity.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="rounded-full px-8">
              Let's Identify Your Highest-ROI Workflow
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
