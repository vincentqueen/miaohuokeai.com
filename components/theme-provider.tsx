"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "miaohuoke-ui-theme",
  ...props
}: ThemeProviderProps) {
  const theme = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") return () => null;
      const handleStorage = (event: StorageEvent) => {
        if (event.key === storageKey) onStoreChange();
      };
      const handleThemeChange = () => onStoreChange();
      window.addEventListener("storage", handleStorage);
      window.addEventListener("theme-change", handleThemeChange);
      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener("theme-change", handleThemeChange);
      };
    },
    () => (localStorage?.getItem(storageKey) as Theme) ?? defaultTheme,
    () => defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage?.setItem(storageKey, theme);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("theme-change"));
      }
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
