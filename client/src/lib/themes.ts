export type ThemeId =
  | "white-black"
  | "deepsense" /* black & blue — inspired by deepsense.ai */
  | "porcelain-light"
  | "navy-coral-cream"
  | "forest-gold-ivory"
  | "indigo-amber-white"
  | "teal-terracotta-sand"
  | "burgundy-sage-cream"
  | "charcoal-mint-white"
  | "plum-peach-linen"
  | "slate-rose-snow";

export interface Theme {
  id: ThemeId;
  name: string;
  bodyBg: string;
  variables: Record<string, string>;
}

/** 3-color palettes for site theme picker — HSL values for Tailwind CSS variables */
export const themes: Theme[] = [
  {
    id: "white-black",
    name: "White & Black",
    bodyBg: "#ffffff",
    variables: {
      "--background": "0 0% 100%",
      "--foreground": "0 0% 0%",
      "--card": "0 0% 100%",
      "--card-foreground": "0 0% 0%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "0 0% 0%",
      "--primary": "0 0% 0%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "0 0% 15%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "0 0% 96%",
      "--muted-foreground": "0 0% 10%",
      "--accent": "214 100% 45%",
      "--accent-foreground": "0 0% 100%",
      "--border": "0 0% 90%",
      "--input": "0 0% 90%",
      "--ring": "0 0% 0%",
      "--hero-bg": "0 0% 100%",
      "--hero-foreground": "0 0% 0%",
      "--hero-cta-bg": "214 100% 45%",
      "--hero-cta-foreground": "0 0% 100%",
      "--nav-over-hero-fg": "0 0% 0%",
      "--nav-over-hero-accent": "0 0% 0%",
    },
  },
  {
    id: "deepsense",
    name: "Deepsense",
    bodyBg: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    variables: {
      "--background": "0 0% 100%",
      "--foreground": "220 20% 10%",
      "--card": "0 0% 100%",
      "--card-foreground": "220 20% 10%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "220 20% 10%",
      "--primary": "214 100% 45%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "220 20% 15%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "220 14% 96%",
      "--muted-foreground": "220 15% 40%",
      "--accent": "214 100% 45%",
      "--accent-foreground": "0 0% 100%",
      "--border": "220 13% 91%",
      "--input": "220 13% 91%",
      "--ring": "214 100% 45%",
      /* Hero section — royal blue bg, white text, black CTA */
      "--hero-bg": "214 100% 45%",
      "--hero-foreground": "0 0% 100%",
      "--hero-cta-bg": "0 0% 0%",
      "--hero-cta-foreground": "0 0% 100%",
      /* Nav over blue hero */
      "--nav-over-hero-fg": "0 0% 100%",
      "--nav-over-hero-accent": "0 0% 100%",
    },
  },
  {
    id: "porcelain-light",
    name: "Porcelain Light",
    bodyBg: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
    variables: {
      "--background": "204 100% 97%",
      "--foreground": "199 80% 24%",
      "--card": "0 0% 100%",
      "--card-foreground": "199 80% 24%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "199 80% 24%",
      "--primary": "199 98% 40%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "199 89% 48%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "204 94% 94%",
      "--muted-foreground": "199 80% 40%",
      "--accent": "199 89% 48%",
      "--accent-foreground": "0 0% 100%",
      "--border": "204 94% 90%",
      "--input": "204 94% 90%",
      "--ring": "199 98% 40%",
      "--hero-bg": "204 100% 97%",
      "--hero-foreground": "199 80% 24%",
      "--hero-cta-bg": "199 98% 40%",
      "--hero-cta-foreground": "0 0% 100%",
    },
  },
  {
    id: "navy-coral-cream",
    name: "Navy + Coral + Cream",
    bodyBg: "linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)",
    variables: {
      "--background": "55 91% 96%",
      "--foreground": "221 65% 18%",
      "--card": "0 0% 100%",
      "--card-foreground": "221 65% 18%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "221 65% 18%",
      "--primary": "221 65% 24%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "25 95% 53%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "48 96% 91%",
      "--muted-foreground": "221 65% 35%",
      "--accent": "25 95% 53%",
      "--accent-foreground": "0 0% 100%",
      "--border": "48 96% 88%",
      "--input": "48 96% 88%",
      "--ring": "221 65% 24%",
    },
  },
  {
    id: "forest-gold-ivory",
    name: "Forest + Gold + Ivory",
    bodyBg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
    variables: {
      "--background": "48 100% 97%",
      "--foreground": "146 76% 18%",
      "--card": "0 0% 100%",
      "--card-foreground": "146 76% 18%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "146 76% 18%",
      "--primary": "146 76% 22%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "46 96% 41%",
      "--secondary-foreground": "48 100% 10%",
      "--muted": "48 96% 94%",
      "--muted-foreground": "146 76% 35%",
      "--accent": "46 96% 41%",
      "--accent-foreground": "0 0% 100%",
      "--border": "48 96% 90%",
      "--input": "48 96% 90%",
      "--ring": "146 76% 22%",
    },
  },
  {
    id: "indigo-amber-white",
    name: "Indigo + Amber + White",
    bodyBg: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
    variables: {
      "--background": "0 0% 100%",
      "--foreground": "244 58% 30%",
      "--card": "0 0% 100%",
      "--card-foreground": "244 58% 30%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "244 58% 30%",
      "--primary": "244 58% 51%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "38 92% 50%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "220 14% 96%",
      "--muted-foreground": "244 58% 45%",
      "--accent": "38 92% 50%",
      "--accent-foreground": "0 0% 100%",
      "--border": "220 13% 91%",
      "--input": "220 13% 91%",
      "--ring": "244 58% 51%",
    },
  },
  {
    id: "teal-terracotta-sand",
    name: "Teal + Terracotta + Sand",
    bodyBg: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    variables: {
      "--background": "48 96% 93%",
      "--foreground": "175 84% 18%",
      "--card": "0 0% 100%",
      "--card-foreground": "175 84% 18%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "175 84% 18%",
      "--primary": "175 84% 26%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "25 90% 41%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "48 96% 90%",
      "--muted-foreground": "175 84% 35%",
      "--accent": "25 90% 41%",
      "--accent-foreground": "0 0% 100%",
      "--border": "48 96% 86%",
      "--input": "48 96% 86%",
      "--ring": "175 84% 26%",
    },
  },
  {
    id: "burgundy-sage-cream",
    name: "Burgundy + Sage + Cream",
    bodyBg: "linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)",
    variables: {
      "--background": "55 91% 96%",
      "--foreground": "346 77% 22%",
      "--card": "0 0% 100%",
      "--card-foreground": "346 77% 22%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "346 77% 22%",
      "--primary": "346 77% 30%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "146 76% 27%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "48 96% 92%",
      "--muted-foreground": "346 77% 40%",
      "--accent": "146 76% 27%",
      "--accent-foreground": "0 0% 100%",
      "--border": "55 91% 90%",
      "--input": "55 91% 90%",
      "--ring": "346 77% 30%",
    },
  },
  {
    id: "charcoal-mint-white",
    name: "Charcoal + Mint + White",
    bodyBg: "linear-gradient(135deg, #ffffff 0%, #f0fdf5 100%)",
    variables: {
      "--background": "0 0% 100%",
      "--foreground": "240 6% 10%",
      "--card": "0 0% 100%",
      "--card-foreground": "240 6% 10%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "240 6% 10%",
      "--primary": "240 6% 10%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "160 84% 39%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "160 84% 96%",
      "--muted-foreground": "240 6% 35%",
      "--accent": "160 84% 39%",
      "--accent-foreground": "0 0% 100%",
      "--border": "240 5% 92%",
      "--input": "240 5% 92%",
      "--ring": "240 6% 10%",
    },
  },
  {
    id: "plum-peach-linen",
    name: "Plum + Peach + Linen",
    bodyBg: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",
    variables: {
      "--background": "270 100% 98%",
      "--foreground": "273 75% 25%",
      "--card": "0 0% 100%",
      "--card-foreground": "273 75% 25%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "273 75% 25%",
      "--primary": "273 75% 39%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "25 95% 61%",
      "--secondary-foreground": "273 75% 15%",
      "--muted": "270 100% 95%",
      "--muted-foreground": "273 75% 45%",
      "--accent": "25 95% 61%",
      "--accent-foreground": "0 0% 100%",
      "--border": "270 100% 92%",
      "--input": "270 100% 92%",
      "--ring": "273 75% 39%",
    },
  },
  {
    id: "slate-rose-snow",
    name: "Slate + Rose + Snow",
    bodyBg: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
    variables: {
      "--background": "210 40% 98%",
      "--foreground": "215 28% 20%",
      "--card": "0 0% 100%",
      "--card-foreground": "215 28% 20%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "215 28% 20%",
      "--primary": "215 28% 27%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "346 77% 50%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "210 40% 95%",
      "--muted-foreground": "215 28% 40%",
      "--accent": "346 77% 50%",
      "--accent-foreground": "0 0% 100%",
      "--border": "214 32% 90%",
      "--input": "214 32% 90%",
      "--ring": "215 28% 27%",
    },
  },
];

const STORAGE_KEY = "bec-theme";

export function getStoredTheme(): ThemeId | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && themes.some((t) => t.id === stored)) return stored as ThemeId;
  return null;
}

export function storeTheme(id: ThemeId): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, id);
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  Object.entries(theme.variables).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  root.style.setProperty("--body-bg", theme.bodyBg);
  storeTheme(theme.id);
}

export function getTheme(id: ThemeId): Theme | undefined {
  return themes.find((t) => t.id === id);
}
