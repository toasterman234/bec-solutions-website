import { motion } from "framer-motion";

export function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center"
        >
          What good automation should actually do
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="space-y-4 mb-8"
        >
          {[
            "Solve one real problem at a time",
            "Fit into existing workflows where possible",
            "Save meaningful time on repetitive work",
            "Keep human review where needed",
            "Make exceptions obvious instead of hiding errors",
          ].map((principle, i) => (
            <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card/30 border border-white/[0.04]">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              <span className="text-sm sm:text-base">{principle}</span>
            </li>
          ))}
        </motion.ul>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed"
        >
          We focus on practical systems that improve speed, consistency, and follow-through—not flashy tools that create more work than they remove.
        </motion.p>
      </div>
    </section>
  );
}
