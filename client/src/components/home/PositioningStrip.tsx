import { motion } from "framer-motion";

export function PositioningStrip() {
  return (
    <section className="py-16 md:py-20 lg:py-24 border-y border-white/[0.06] bg-card/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-display text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-6"
        >
          Built for the way small businesses actually operate
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed space-y-4"
        >
          <p>
            Most small businesses do not need a complicated AI platform, a bloated software rollout, or another dashboard to babysit.
          </p>
          <p>
            They need specific workflow improvements that save time, reduce friction, and fit into the tools and habits they already use.
          </p>
          <p className="font-medium text-foreground/90">
            That is where we focus.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
