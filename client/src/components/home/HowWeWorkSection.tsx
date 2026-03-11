import { motion } from "framer-motion";

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-16 md:py-24 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center"
        >
          We do not sell "AI for everything." We solve specific workflow problems.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed space-y-6"
        >
          <p>
            The best solutions are usually not the flashiest ones.
          </p>
          <ul className="space-y-3 list-none pl-0">
            {[
              "They solve one real bottleneck.",
              "They fit into the workflow your team already uses.",
              "They save meaningful time on repetitive work.",
              "They keep people involved where judgment matters.",
              "They fail clearly when something needs human review.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary mt-1.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            Our goal is simple: make work move better without adding unnecessary complexity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
