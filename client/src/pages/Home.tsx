import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  MapPin,
  Phone,
  PhoneCall,
  Calendar,
  Star,
  MessageSquare,
  CreditCard,
  UserCheck,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "50+", label: "local businesses\nautomated" },
  { value: "20+", label: "hours saved\nper week" },
  { value: "Memphis", label: "based & serving\nlocal first" },
];

const expertise = [
  {
    icon: <PhoneCall className="w-6 h-6" />,
    title: "Missed Call & Lead Capture",
    desc: "Instant text-back on missed calls. New inquiries responded to in under 2 minutes, automatically.",
    href: "/services",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Booking & Appointments",
    desc: "After-hours booking, confirmations, reminders, and rescheduling prompts—without front desk involvement.",
    href: "/services",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Review & Reputation",
    desc: "Post-service review requests sent automatically. Unhappy customers routed privately before they go public.",
    href: "/services",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Estimate & Quote Follow-Up",
    desc: "Automated sequences that check in with prospects until they say yes or no. Owner notified when someone re-engages.",
    href: "/services",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Invoice & Payment",
    desc: "Invoices sent automatically on job completion. Payment reminders and late-payer follow-up without the awkward call.",
    href: "/services",
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Client Onboarding",
    desc: "Accounts, folders, and permissions provisioned automatically when a new client or team member is added.",
    href: "/services",
  },
];

const solutions = [
  {
    title: "Automate your front desk",
    desc: "We integrate booking, intake, and reminder flows into your existing tools. No rip-and-replace—just workflows that actually run.",
  },
  {
    title: "Automate your follow-ups",
    desc: "Stop chasing estimates, reactivations, and overdue invoices. Sequences run in the background so you and your team can focus on customers.",
  },
  {
    title: "Automate your reputation",
    desc: "Consistent review requests after every job. Unhappy customers reach you first—not Google. Build trust on autopilot.",
  },
  {
    title: "Scale with automation experts",
    desc: "Tap into our team to supercharge your operations. Whether you're training in-house or need external firepower, we help you move faster.",
  },
];

const projects = [
  {
    type: "case-study",
    title: "From Manual Follow-Ups to Automated Lead Capture in 4 Weeks",
    desc: "A Memphis HVAC contractor cut response time from hours to under 2 minutes. We built missed-call text-back and estimate follow-up sequences.",
    href: "/services",
  },
  {
    type: "project",
    title: "Booking Automation for a Multi-Location Plumbing Business",
    desc: "After-hours booking, confirmations, and rescheduling prompts across 3 locations. Front desk load dropped 40%.",
    href: "/services",
  },
  {
    type: "project",
    title: "Review & Reputation Automation for a Local Roofing Company",
    desc: "Post-job review requests and private escalation for unhappy customers. Google rating improved from 3.8 to 4.6 in 6 months.",
    href: "/services",
  },
];

const testimonials = [
  {
    quote: "BEC Solutions helped us stop losing leads to missed calls. Response time went from hours to under 2 minutes. Game-changer for our business.",
    author: "Local HVAC Contractor",
    role: "Memphis, TN",
  },
  {
    quote: "We went from chasing estimates manually to automated sequences. The team focused on customers instead of follow-up emails. Highly recommend.",
    author: "General Contractor",
    role: "Greater Memphis area",
  },
  {
    quote: "Ben understood exactly what our front desk needed. The booking and reminder system he built saved us 15+ hours a week.",
    author: "Multi-Location Plumbing Company",
    role: "Memphis metro",
  },
];

export default function Home() {
  const { mutate: createLead, isPending } = useCreateLead();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  function onSubmit(data: InsertLead) {
    createLead(data, { onSuccess: () => form.reset() });
  }

  return (
    <div className="min-h-screen">
      {/* ── HERO ── (deepsense.ai style: blue bg, white text, black CTA when Deepsense theme) */}
      <section className="hero-section relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Unlock the Full Potential
              <br className="hidden md:block" /> of Workflow Automation
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="hero-subtext text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              We are automation experts. Through guidance, strategy, and implementation,
              we support you every step of the way to unlock the full potential of
              automation for your business.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="hero-cta rounded-full px-8 py-5 text-base transition-all duration-300"
                >
                  Book a Free Workflow Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS + TRUST ── */}
      <section className="py-16 md:py-24 bg-card/50 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-4xl font-bold mb-3"
            >
              Your Trusted Automation Partner
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Providing guidance and delivering tailored automation solutions that give
              you a competitive advantage.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-muted-foreground max-w-3xl mx-auto"
          >
            Join our list of local Memphis businesses that have reclaimed 20+ hours a
            week. Whether you're scaling operations or making automation the core of
            how you work, partner with us to achieve exceptional results.
          </motion.p>
        </div>
      </section>

      {/* ── EXPERTISE GRID ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-4xl font-bold mb-3"
            >
              Explore Our Automation Expertise
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Harness our expertise in workflow automation—missed calls, booking,
              reviews, estimates, invoicing, and onboarding. We deliver production-ready
              solutions to optimize operations and drive real results.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={item.href}>
                  <div className="group glass-card rounded-2xl p-6 h-full border border-border hover:border-accent/40 transition-all duration-300 flex flex-col">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-3">
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS TAILORED ── */}
      <section className="py-20 md:py-28 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-4xl font-bold mb-3"
            >
              Solutions Tailored To Your Needs
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Whether you're responsible for front desk operations or sales follow-up,
              seeking improvements in billing or reputation management, we are here to help.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-8 border border-border"
              >
                <h3 className="font-display text-xl font-bold mb-3">{sol.title}</h3>
                <p className="text-muted-foreground">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOCKERS CTA ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Still doing manual follow-ups?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Not sure where to start or which processes bring the best ROI? Need quick
              answers from automation experts?
            </p>
            <Link href="/#contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Explore Free Audit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES / PROJECTS ── */}
      <section className="py-20 md:py-28 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-4xl font-bold mb-3"
            >
              Showcasing Our State-of-the-Practice
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
            >
              Real results for local Memphis businesses. From booking automation to
              invoice follow-up, we deliver workflows that stick.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/services">
                <Button variant="outline" className="rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href="/services">
                  <div className="glass-card rounded-2xl p-6 h-full border border-border hover:border-accent/40 transition-all duration-300 flex flex-col group">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                      {proj.type === "case-study" ? "Case Study" : "Project"}
                    </span>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1">{proj.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-4xl font-bold mb-3"
            >
              What Our Clients Say About Us
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Join our list of local Memphis businesses that have transformed their
              operations with tailored automation.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-border"
              >
                <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <div>
                  <p className="font-display font-bold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMPHIS CALLOUT ── */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <MapPin className="w-5 h-5 text-accent shrink-0" />
            <p className="font-display text-lg md:text-xl font-semibold text-foreground">
              Memphis-Based & Proud — We know what local businesses actually need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA + CONTACT ── */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-5xl font-bold mb-4"
            >
              Unlock a Competitive Edge With Tailored Automation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              Tell us what's eating your team's time. We'll tell you what we can fix—no
              pitch, no pressure. Ben responds personally within 24 hours.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-10"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jane Smith"
                            className="bg-background/50 border-border rounded-xl h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="jane@yourbusiness.com"
                            className="bg-background/50 border-border rounded-xl h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Business Name <span className="text-muted-foreground">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Business LLC"
                          className="bg-background/50 border-border rounded-xl h-12"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's eating your team's time?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="We spend hours every week on scheduling follow-ups..."
                          className="min-h-[120px] bg-background/50 border-border rounded-xl resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-12 rounded-xl text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isPending ? "Sending..." : "Get in Touch"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  <Phone className="inline w-3 h-3 mr-1" />
                  Ben personally reviews every submission and responds within 24 hours.
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
