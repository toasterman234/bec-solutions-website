import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { getStoredTheme, getTheme, applyTheme } from "@/lib/themes";

// Apply stored theme before first paint (default: Porcelain Light)
const stored = getStoredTheme();
if (stored) {
  const theme = getTheme(stored);
  if (theme) applyTheme(theme);
} else {
  const defaultTheme = getTheme("porcelain-light");
  if (defaultTheme) applyTheme(defaultTheme);
}

createRoot(document.getElementById("root")!).render(<App />);
