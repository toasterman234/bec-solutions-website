import { db } from "./db";
import { leads, blogPosts, type CreateLeadRequest, type LeadResponse, type CreateBlogPostRequest, type BlogPostResponse } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createLead(lead: CreateLeadRequest): Promise<LeadResponse>;
  getBlogPosts(): Promise<BlogPostResponse[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPostResponse | undefined>;
  createBlogPost(post: CreateBlogPostRequest): Promise<BlogPostResponse>;
}

export class DatabaseStorage implements IStorage {
  async createLead(lead: CreateLeadRequest): Promise<LeadResponse> {
    const [created] = await db.insert(leads).values(lead).returning();
    return created;
  }

  async getBlogPosts(): Promise<BlogPostResponse[]> {
    return await db.select().from(blogPosts).orderBy((table) => table.createdAt);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPostResponse | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }

  async createBlogPost(post: CreateBlogPostRequest): Promise<BlogPostResponse> {
    const [created] = await db.insert(blogPosts).values(post).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
