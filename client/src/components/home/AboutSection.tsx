import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center"
        >
          About BEC Solutions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed space-y-4"
        >
          <p>
            BEC Solutions helps small businesses improve the way work gets done.
          </p>
          <p>
            We focus on practical workflow automation and process improvement—reducing repetitive work, improving response times, and helping key business processes run more smoothly.
          </p>
          <p>
            Our approach is grounded in real operational needs, not buzzwords. That means solving specific problems, fitting solutions into existing workflows where possible, and building systems that support the people doing the work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
