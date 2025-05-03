"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="p-4 bg-[var(--foreground)] text-[var(--background)] glassmorphic sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <ul className="flex gap-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/books" className="hover:underline">Books</Link></li>
          <li><Link href="/recommend" className="hover:underline">Recommend</Link></li>
          <li><Link href="/wishlist" className="hover:underline">Wishlist</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-[var(--background)] text-[var(--foreground)] glassmorphic"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}