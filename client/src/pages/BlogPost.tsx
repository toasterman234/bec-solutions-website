import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blogData";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button variant="outline" className="rounded-full">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>
          </Link>

          {post.imageUrl && (
            <div className="h-64 md:h-80 overflow-hidden rounded-2xl mb-8">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />
              {new Date(post.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold mb-8">{post.title}</h1>

          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <h3 className="font-display text-2xl font-bold mb-4">Ready to get started?</h3>
            <Link href="/#contact">
              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule a Free Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
