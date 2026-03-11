import { motion } from "framer-motion";

export function WhyThisMatters() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-card/10 border-y border-white/[0.04]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center"
        >
          The biggest wins usually come from fixing boring, repetitive work
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed space-y-6"
        >
          <p>
            A lot of businesses get pitched flashy tools that sound impressive but do not solve the day-to-day friction that actually slows the team down.
          </p>
          <p>
            In reality, the best return often comes from improving the tasks people repeat constantly:
          </p>
          <ul className="space-y-2 list-none pl-0 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["follow-ups", "document handling", "inbox management", "support routing", "onboarding steps", "recurring admin work"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-primary text-sm">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            These are not always glamorous problems.
          </p>
          <p>
            They are just expensive when left messy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
