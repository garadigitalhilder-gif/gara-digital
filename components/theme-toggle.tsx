"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("gara-theme", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("gara-theme", callback);
    window.removeEventListener("storage", callback);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme ?? "light",
    () => "light",
  );

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("gara-theme", next);
    } catch {
      /* Theme still works without storage. */
    }
    window.dispatchEvent(new Event("gara-theme"));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle border-line text-foreground hover:border-accent hover:text-accent flex size-10 shrink-0 items-center justify-center rounded-full border transition"
      aria-label={
        theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
      }
      title={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
    >
      <Sun size={18} className="theme-sun" />
      <Moon size={18} className="theme-moon" />
    </button>
  );
}
