import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blogData";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Blog() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeInUp}>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                Insights for Growing Businesses
              </h1>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Tips, strategies, and real-world stories about AI, automation, and scaling your local business in the modern economy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <motion.article key={post.id} variants={fadeInUp} className="group cursor-pointer">
                <Link href={`/blog/${post.slug}`}>
                  <div className="overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 h-full flex flex-col hover-elevate">
                    {post.imageUrl && (
                      <div className="h-48 overflow-hidden bg-background/50">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center text-primary text-sm font-semibold">
                        Read More <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/50 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground text-lg mb-8">Let's discuss how AI and automation can help you reclaim time and scale without growing pains.</p>
            <Link href="/#contact">
              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
