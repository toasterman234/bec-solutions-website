import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { getTheme, applyTheme } from "@/lib/themes";

// Always use white & black — ignore any stored theme so everyone sees it
const theme = getTheme("white-black");
if (theme) applyTheme(theme);

createRoot(document.getElementById("root")!).render(<App />);
