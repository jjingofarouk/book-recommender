"use client";

import * as React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        onClick={toggleDropdown}
        aria-label="Toggle theme"
      >
        <FiSun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[var(--foreground)]" />
        <FiMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[var(--foreground)]" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-[var(--background)] ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={() => {
                setTheme("light");
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-[var(--foreground)] hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Light
            </button>
            <button
              onClick={() => {
                setTheme("dark");
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-[var(--foreground)] hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Dark
            </button>
            <button
              onClick={() => {
                setTheme("system");
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-[var(--foreground)] hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              System
            </button>
          </div>
        </div>
      )}
    </div>
  );
}