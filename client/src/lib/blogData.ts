export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  imageUrl: string;
  createdAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "ai-chatbots-customer-service",
    title: "Why AI Chatbots Are Transforming Customer Service",
    excerpt: "Discover how intelligent chatbots can handle 80% of routine inquiries, freeing your team to focus on complex customer issues.",
    content: "In today's fast-paced business environment, customer service is more important than ever. AI-powered chatbots are revolutionizing how businesses interact with their customers. They can handle inquiries 24/7, provide instant responses, and learn from every interaction.\n\nOur clients have seen a 10x improvement in response times and significant cost savings by implementing intelligent chatbot systems. Whether you're running a law practice, logistics firm, or service business, a custom AI chatbot trained on your business data can transform your customer experience.",
    author: "BEC Solutions",
    imageUrl: "https://images.unsplash.com/photo-1677442d019cecf8115f3a7db08d5ffe?w=800&h=400&fit=crop",
    createdAt: "2025-01-15T00:00:00Z",
  },
  {
    id: 2,
    slug: "hidden-costs-manual-data-entry",
    title: "The Hidden Costs of Manual Data Entry",
    excerpt: "Learn how workflow automation can save your business 40+ hours per week while eliminating human error.",
    content: "Manual data entry is one of the most expensive wastes of human capital. On average, businesses lose 40-50 hours per week to repetitive data entry tasks. Beyond the time cost, manual processes are error-prone and difficult to audit.\n\nAutomation isn't just about speed—it's about accuracy and accountability. We've helped Memphis businesses automate their invoicing, customer intake, and reporting processes. The result? More time for high-value work, happier employees, and better business insights.",
    author: "BEC Solutions",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    createdAt: "2025-02-01T00:00:00Z",
  },
  {
    id: 3,
    slug: "data-driven-decisions",
    title: "Data-Driven Decision Making for Local Businesses",
    excerpt: "Transform your raw business data into actionable insights with automated analytics and dashboards.",
    content: "Most business owners have more data than they realize—it's just scattered across different systems and waiting to be analyzed. Our automated reporting dashboards bring all your key metrics into one place, updated in real-time.\n\nImagine knowing your top-performing services, customer trends, and bottlenecks at a glance. That's the power of business intelligence. We work with local Memphis companies to build custom dashboards that actually get used because they're tailored to what matters most for their business.",
    author: "BEC Solutions",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    createdAt: "2025-02-20T00:00:00Z",
  },
];
