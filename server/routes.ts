import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { db } from "./db";
import { blogPosts } from "@shared/schema";
import { eq } from "drizzle-orm";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedBlogPosts() {
  const existing = await storage.getBlogPosts();
  if (existing.length === 0) {
    const seedPosts = [
      {
        title: "Why AI Chatbots Are Transforming Customer Service",
        slug: "ai-chatbots-customer-service",
        excerpt: "Discover how intelligent chatbots can handle 80% of routine inquiries, freeing your team to focus on complex customer issues.",
        content: "In today's fast-paced business environment, customer service is more important than ever. AI-powered chatbots are revolutionizing how businesses interact with their customers. They can handle inquiries 24/7, provide instant responses, and learn from every interaction.\n\nOur clients have seen a 10x improvement in response times and significant cost savings by implementing intelligent chatbot systems. Whether you're running a law practice, logistics firm, or service business, a custom AI chatbot trained on your business data can transform your customer experience.",
        author: "BEC Solutions",
        imageUrl: "https://images.unsplash.com/photo-1677442d019cecf8115f3a7db08d5ffe?w=800&h=400&fit=crop",
      },
      {
        title: "The Hidden Costs of Manual Data Entry",
        slug: "hidden-costs-manual-data-entry",
        excerpt: "Learn how workflow automation can save your business 40+ hours per week while eliminating human error.",
        content: "Manual data entry is one of the most expensive wastes of human capital. On average, businesses lose 40-50 hours per week to repetitive data entry tasks. Beyond the time cost, manual processes are error-prone and difficult to audit.\n\nAutomation isn't just about speed—it's about accuracy and accountability. We've helped Memphis businesses automate their invoicing, customer intake, and reporting processes. The result? More time for high-value work, happier employees, and better business insights.",
        author: "BEC Solutions",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      },
      {
        title: "Data-Driven Decision Making for Local Businesses",
        slug: "data-driven-decisions",
        excerpt: "Transform your raw business data into actionable insights with automated analytics and dashboards.",
        content: "Most business owners have more data than they realize—it's just scattered across different systems and waiting to be analyzed. Our automated reporting dashboards bring all your key metrics into one place, updated in real-time.\n\nImagine knowing your top-performing services, customer trends, and bottlenecks at a glance. That's the power of business intelligence. We work with local Memphis companies to build custom dashboards that actually get used because they're tailored to what matters most for their business.",
        author: "BEC Solutions",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      },
    ];

    for (const post of seedPosts) {
      await storage.createBlogPost(post);
    }
  }
}

async function fixBrokenImageUrls() {
  const posts = await storage.getBlogPosts();
  for (const post of posts) {
    if (post.imageUrl && !post.imageUrl.startsWith("http")) {
      const fixed = "https://images.unsplash.com" + post.imageUrl;
      await db.update(blogPosts).set({ imageUrl: fixed }).where(eq(blogPosts.id, post.id));
    }
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed blog posts on startup
  await seedBlogPosts();
  // Fix any existing records with broken (relative) image URLs
  await fixBrokenImageUrls();

  // Lead routes
  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Blog routes
  app.get(api.blog.list.path, async (req, res) => {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  });

  app.get(api.blog.get.path, async (req, res) => {
    const post = await storage.getBlogPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(post);
  });

  app.post(api.blog.create.path, async (req, res) => {
    try {
      const input = api.blog.create.input.parse(req.body);
      const post = await storage.createBlogPost(input);
      res.status(201).json(post);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
