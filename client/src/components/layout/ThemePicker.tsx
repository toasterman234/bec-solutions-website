import { useState, useEffect } from "react";
import {
  themes,
  getStoredTheme,
  getTheme,
  applyTheme,
  type ThemeId,
} from "@/lib/themes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Palette } from "lucide-react";

export function ThemePicker() {
  const [selectedId, setSelectedId] = useState<ThemeId | null>(null);

  useEffect(() => {
    const stored = getStoredTheme();
    if (stored) {
      const theme = getTheme(stored);
      if (theme) {
        applyTheme(theme);
        setSelectedId(stored);
      }
    } else {
      setSelectedId("porcelain-light");
    }
  }, []);

  function handleSelect(id: ThemeId) {
    const theme = getTheme(id);
    if (theme) {
      applyTheme(theme);
      setSelectedId(id);
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Change color theme"
        >
          <Palette className="w-4 h-4" />
          <span className="hidden sm:inline">Theme</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4" align="end">
        <p className="text-sm font-medium mb-3">Pick a color theme</p>
        <div className="grid grid-cols-4 gap-2">
          {themes.map((theme) => {
            const primaryColor = `hsl(${theme.variables["--primary"]})`;
            const bgHex = theme.bodyBg.match(/#[a-f0-9]{6}/i)?.[0];
            const bgColor = theme.bodyBg.includes("#")
              ? theme.bodyBg.match(/#[a-f0-9]{6}/i)?.[0] ?? "#f1f5f9"
              : `hsl(${theme.variables["--background"]})`;
            return (
              <button
                key={theme.id}
                onClick={() => handleSelect(theme.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg border transition-all hover:scale-105 ${selectedId === theme.id
                  ? "border-primary ring-1 ring-primary/30 bg-primary/5"
                  : "border-border hover:border-primary/50"
                  }`}
                title={theme.name}
              >
                <div
                  className="w-8 h-8 rounded-full border-2 border-foreground/20 shadow-sm"
                  style={{ backgroundColor: bgColor }}
                />
                <div
                  className="w-4 h-1.5 rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />
                <span className="text-[10px] font-medium truncate w-full text-center">
                  {theme.name}
                </span>
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
