import { motion } from "framer-motion";

export function FitSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-card/10 border-y border-white/[0.04]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center"
        >
          Who we work best with
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed space-y-6"
        >
          <p>
            A strong fit for small businesses that are feeling operational friction.
          </p>
          <p className="mb-4">
            We are best suited for businesses that:
          </p>
          <ul className="space-y-3">
            {[
              "rely on email, calls, forms, spreadsheets, CRMs, or docs",
              "have repetitive operational tasks",
              "want faster response and better follow-through",
              "need practical improvements without extra complexity",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary mt-1 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
