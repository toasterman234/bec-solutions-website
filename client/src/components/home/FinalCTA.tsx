import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card/20 border-y border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
            Make your business easier to run
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-4 leading-relaxed">
            If your team is losing time to repetitive tasks, slow follow-up, inbox clutter, or messy internal workflows, there is usually a better way to handle it.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg mb-8">
            Start with one bottleneck and build from there.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="rounded-full px-8">
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
