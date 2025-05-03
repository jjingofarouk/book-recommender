
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Home, BookOpen, Star, Heart, User, Mail, Menu, X } from "lucide-react";

export function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "/books", label: "Books", icon: <BookOpen size={20} /> },
    { href: "/recommend", label: "Recommend", icon: <Star size={20} /> },
    { href: "/wishlist", label: "Wishlist", icon: <Heart size={20} /> },
    { href: "/about", label: "About", icon: <User size={20} /> },
    { href: "/contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  return (
    <nav className="p-4 bg-[var(--foreground)] text-[var(--background)] glassmorphic sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[var(--foreground)] text-[var(--background)] shadow-lg md:hidden">
            <ul className="flex flex-col p-4">
              {menuItems.map((item) => (
                <li key={item.href} className="py-3 border-b border-opacity-20 border-[var(--background)]">
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop bottom tab bar */}
        <div className="fixed bottom-0 left-0 right-0 md:relative md:bottom-auto bg-[var(--foreground)] text-[var(--background)] glassmorphic md:bg-transparent md:shadow-none py-2 px-4 z-20">
          <ul className="flex justify-around md:gap-6">
            {menuItems.map((item, index) => (
              <li key={item.href} className={`${index > 3 ? 'hidden md:block' : ''}`}>
                <Link 
                  href={item.href} 
                  className="flex flex-col items-center md:flex-row md:gap-2"
                >
                  <span className="md:hidden">{item.icon}</span>
                  <span className="text-xs md:text-base">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme toggle button - always visible */}
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
