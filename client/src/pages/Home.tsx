import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, Phone, CheckCircle } from "lucide-react";
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const niches = [
  {
    label: "Office & Brick-and-Mortar Businesses",
    question: "Missed calls = missed money?",
    pains: [
      "Phones go unanswered after 5pm — and those patients book somewhere else",
      "Patients no-show and nobody ever follows up to rebook them",
      "Your reactivation list has hundreds of names no one has touched in months",
      "Your front desk is buried in the same tasks and still falling behind",
    ],
    fixes: [
      "After-hours booking — patients book any time, no staff needed",
      "Automated appointment reminders that actually cut no-shows",
      "Patient reactivation sequences that run without anyone managing them",
      "Front desk automation for routine calls and intake",
    ],
    accent: "from-primary/20 to-primary/5",
    border: "border-primary/20",
    tag: "bg-primary/10 text-primary",
  },
  {
    label: "Local Service Businesses",
    question: "Are bad reviews — or not enough good ones — costing you customers?",
    pains: [
      "You rely on referrals and reputation, but review requests are hit-or-miss",
      "Jobs get finished and nobody remembers to ask — so reviews never come",
      "One bad public review does more damage than five good ones do help",
      "Unhappy customers go straight to Google before you even know there's a problem",
    ],
    fixes: [
      "Post-service review requests sent automatically — every job, every time",
      "Unhappy customers routed to a private resolution path before they go public",
      "Consistent review volume that builds credibility on autopilot",
      "More trust with future prospects without any extra work after the job",
    ],
    accent: "from-accent/20 to-accent/5",
    border: "border-accent/20",
    tag: "bg-accent/10 text-accent",
  },
  {
    label: "Contractors & Trade Businesses",
    question: "Sending estimates that just... disappear?",
    pains: [
      "You send a quote and never hear back — and nobody has time to chase it",
      "Good jobs are slipping through because follow-up is inconsistent",
      "You're busy enough that letting a lead go cold feels unavoidable",
      "There's no system — it all depends on whoever remembers to follow up",
    ],
    fixes: [
      "Automated estimate follow-up sequences that check in without you lifting a finger",
      "Reminder cadences that keep you in front of the prospect until they decide",
      "Owner notifications the moment a prospect re-engages or replies",
      "A reliable sales process that doesn't depend on someone remembering",
    ],
    accent: "from-primary/10 to-accent/10",
    border: "border-white/10",
    tag: "bg-white/10 text-white/80",
  },
  {
    label: "Contractors & Trade Businesses",
    question: "Sending estimates that just... disappear?",
    pains: [
      "You send a quote and never hear back — and nobody has time to chase it",
      "Good jobs are slipping away because follow-up is inconsistent",
      "You're too busy to manually track every estimate you've sent out",
      "There's no system — it depends on whoever remembers to follow up",
    ],
    fixes: [
      "Automated estimate follow-up sequences that check in without you lifting a finger",
      "Reminder cadences that keep you in front of the prospect until they decide",
      "Owner notifications the moment a prospect re-engages or replies",
      "A reliable sales process that doesn't depend on someone remembering",
    ],
    accent: "from-accent/10 to-primary/10",
    border: "border-primary/10",
    tag: "bg-primary/10 text-primary",
  },
  {
    label: "Growing Teams & Service Businesses",
    question: "Still setting up every new client or hire by hand?",
    pains: [
      "Onboarding a new client means a dozen manual steps — accounts, folders, permissions, logins",
      "Steps get missed, things fall through the cracks, and you only find out when someone complains",
      "New hires sit idle on day one waiting for access that nobody set up yet",
      "Every onboard feels like reinventing the wheel",
    ],
    fixes: [
      "Accounts, folders, and permissions created automatically the moment someone is added",
      "Consistent onboarding every time — nothing skipped, nothing forgotten",
      "New clients and team members get access before they even ask",
      "You get notified when it's done — without having done anything",
    ],
    accent: "from-primary/15 to-accent/5",
    border: "border-accent/15",
    tag: "bg-accent/10 text-accent",
  },
  {
    label: "Service & Project-Based Businesses",
    question: "Still chasing late invoices and manual payments?",
    pains: [
      "Invoices go out and nothing happens — following up feels awkward and takes time",
      "Late payments pile up because there's no system sending reminders",
      "You're manually creating and sending invoices one by one after every job",
      "Cash flow suffers because billing is inconsistent and easy to forget",
    ],
    fixes: [
      "Invoices created and sent automatically when a job is marked complete",
      "Payment reminder sequences that follow up without you having to ask",
      "Late payer escalation that keeps cash flow moving without the awkward call",
      "A billing process that runs itself — no manual steps, no dropped balls",
    ],
    accent: "from-accent/15 to-accent/5",
    border: "border-accent/20",
    tag: "bg-accent/10 text-accent",
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

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-28 md:pt-52 md:pb-40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground mb-10">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Memphis-Based & Proud
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-7">
              Your team is doing work<br className="hidden md:block" />{" "}
              <span className="text-gradient">a computer should handle.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Every hour your staff spends on repetitive tasks is an hour not spent on your customers.
              We find those tasks and make them stop.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/#contact">
                <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all duration-300">
                  Book a Free Workflow Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">No pitch. No pressure. Just an honest conversation about where you're losing time.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BRIDGE ── */}
      <section className="py-20 border-y border-white/5 bg-card/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-display font-semibold leading-snug text-white/90">
              We map out the repetitive, manual work eating your team's time —{" "}
              <span className="text-gradient">then we automate it.</span>
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-6 text-muted-foreground text-lg">
              Most clients get back 20+ hours a week in the first month. Not because we built something
              flashy — because we fixed the boring stuff that was quietly costing them every day.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── NICHE SECTIONS ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">Sound familiar?</motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold">We've seen this before.</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {niches.map((niche, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`glass-card rounded-3xl p-8 border ${niche.border} relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${niche.accent} pointer-events-none`} />
                <div className="relative z-10">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${niche.tag} mb-5`}>{niche.label}</span>
                  <h3 className="font-display text-2xl font-bold mb-6">{niche.question}</h3>
                  <div className="mb-8">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">What you're living with</p>
                    <ul className="space-y-3">
                      {niche.pains.map((pain, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-white/80">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">What we fix</p>
                    <ul className="space-y-3">
                      {niche.fixes.map((fix, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-white/90">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {fix}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground italic">Case study coming soon.</p>
                    <Link href="/#contact">
                      <Button variant="outline" size="sm" className="rounded-full border-white/20 hover:bg-white/5 text-xs">
                        Let's talk <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMPHIS CALLOUT ── */}
      <section className="py-16 border-y border-white/5 bg-card/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium mb-4">Rooted in Memphis</p>
            <p className="font-display text-2xl md:text-3xl font-semibold text-white/90 leading-snug">
              We're not a national agency guessing at your market.<br className="hidden md:block" />
              We're local — and we know what Memphis businesses actually need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold mb-4">
              Sound familiar?<br />Let's talk.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              Tell us what's eating your team's time. We'll tell you what we can fix —
              no pitch, no pressure. Ben responds personally within 24 hours.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80">Name</FormLabel>
                      <FormControl><Input placeholder="Jane Smith" className="bg-background/50 border-white/10 focus-visible:ring-primary rounded-xl h-12" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80">Email</FormLabel>
                      <FormControl><Input type="email" placeholder="jane@yourbusiness.com" className="bg-background/50 border-white/10 focus-visible:ring-primary rounded-xl h-12" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="company" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80">Business Name <span className="text-muted-foreground">(optional)</span></FormLabel>
                    <FormControl><Input placeholder="Your Business LLC" className="bg-background/50 border-white/10 focus-visible:ring-primary rounded-xl h-12" {...field} value={field.value || ""} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80">What's eating your team's time?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="We spend hours every week on scheduling follow-ups and nobody actually does them..." className="min-h-[120px] bg-background/50 border-white/10 focus-visible:ring-primary rounded-xl resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" disabled={isPending} className="w-full h-12 rounded-xl text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300">
                  {isPending ? "Sending..." : "Book My Free Audit"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-center text-xs text-muted-foreground pt-1">
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
