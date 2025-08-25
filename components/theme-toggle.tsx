"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      // If system, toggle to light first
      setTheme("light");
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 w-9 px-0 transition-all duration-300 hover:bg-accent"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">切换主题</span>
    </Button>
  );
}

export function ThemeToggleDropdown() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col space-y-1">
      <button
        onClick={() => setTheme("light")}
        className="flex items-center px-2 py-1.5 text-sm hover:bg-accent rounded-md transition-colors"
      >
        <Sun className="mr-2 h-4 w-4" />
        浅色模式
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="flex items-center px-2 py-1.5 text-sm hover:bg-accent rounded-md transition-colors"
      >
        <Moon className="mr-2 h-4 w-4" />
        深色模式
      </button>
      <button
        onClick={() => setTheme("system")}
        className="flex items-center px-2 py-1.5 text-sm hover:bg-accent rounded-md transition-colors"
      >
        <div className="mr-2 h-4 w-4 rounded-sm border border-current" />
        跟随系统
      </button>
    </div>
  );
}