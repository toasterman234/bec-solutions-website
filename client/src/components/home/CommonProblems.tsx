import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  "Leads sit too long before anyone responds",
  "Missed calls turn into missed opportunities",
  "Repetitive admin work eats up hours every week",
  "Invoices, documents, and approvals move too slowly",
  "Support requests get routed inconsistently",
  "Staff answer the same internal questions over and over",
  "Processes that used to work start breaking as the business grows",
  "Important follow-ups fall through the cracks",
];

export function CommonProblems() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-card/10 border-y border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Common problems we help solve
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8">
            Where small businesses usually feel the friction.
          </p>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10"
        >
          {painPoints.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-muted-foreground text-base py-3 px-4 rounded-lg bg-card/30 border border-white/[0.04]"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
              {point}
            </li>
          ))}
        </motion.ul>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-base sm:text-lg mb-8"
        >
          If any of that sounds familiar, there is usually a workflow behind it that can be improved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
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
