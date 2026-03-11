import { MessageSquare, FileText, Headphones, Users } from "lucide-react";

const items = [
  { icon: MessageSquare, label: "Leads" },
  { icon: FileText, label: "Documents" },
  { icon: Headphones, label: "Support" },
  { icon: Users, label: "Onboarding" },
];

export function HeroWorkflowVisual() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto lg:mx-0 lg:max-w-none">
      {items.map((item, i) => (
        <div
          key={i}
          className="bento-card p-4 sm:p-5 flex flex-col items-center justify-center min-h-[88px] sm:min-h-[100px] text-center"
        >
          <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary/80 mb-2" aria-hidden />
          <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
