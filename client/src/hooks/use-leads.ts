import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const mutate = async (
    data: { name: string; email: string; company?: string; message: string },
    callbacks?: { onSuccess?: () => void }
  ) => {
    setIsPending(true);
    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        name: data.name,
        email: data.email,
        company: data.company || "",
        message: data.message,
      }).toString();

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error("Failed to submit");

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll be in touch soon.",
      });
      callbacks?.onSuccess?.();
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  return { mutate, isPending };
}
