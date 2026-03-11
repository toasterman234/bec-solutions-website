import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

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

export function ContactSection() {
  const { mutate: createLead, isPending } = useCreateLead();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  function onSubmit(data: InsertLead) {
    createLead(data, { onSuccess: () => form.reset() });
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Book a Consultation
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Tell us what's eating your team's time. We'll tell you what we can fix—no pitch, no pressure.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="bento-card p-6 sm:p-8"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
              aria-label="Book a consultation"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Smith" className="h-11" {...field} />
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
                        <Input type="email" placeholder="jane@yourbusiness.com" className="h-11" {...field} />
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
                      <Input placeholder="Your Business LLC" className="h-11" {...field} value={field.value || ""} />
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
                        placeholder="We spend hours every week on follow-ups and nobody actually does them..."
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} className="w-full h-12 rounded-xl">
                {isPending ? "Sending..." : "Book a Consultation"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <p id="contact-response-note" className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Phone className="w-4 h-4 shrink-0" aria-hidden />
                We respond to every submission within 24 hours.
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
