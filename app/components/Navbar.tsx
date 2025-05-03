"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaBook, FaStar, FaHeart, FaBars, FaTimes } from "react-icons/fa";

interface MenuItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function Navbar() {
  const pathname = usePathname();
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

  const menuItems: MenuItem[] = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/books", label: "Books", icon: <FaBook /> },
    { href: "/recommend", label: "Recommend", icon: <FaStar /> },
    { href: "/wishlist", label: "Wishlist", icon: <FaHeart /> },
  ];

  return (
    <>
      <nav className="p-4 bg-[var(--foreground)] text-[var(--background)] sticky top-0 z-10 shadow-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="font-semibold text-lg">LitShelf</div>
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-[var(--foreground)]"
                    : "text-[var(--background)]/80 hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--background)]/90 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <button
              className="md:hidden p-2 rounded-full bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--background)]/90 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle main menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[var(--foreground)] text-[var(--background)] shadow-lg md:hidden z-30">
          <ul className="flex flex-col p-4 gap-2">
            {menuItems.map((item) => (
              <li key={item.href} className="py-2">
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 text-sm font-medium ${
                    pathname === item.href
                      ? "text-[var(--foreground)]"
                      : "text-[var(--background)]/80 hover:text-[var(--foreground)]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-4 text-center text-xs border-t border-[var(--gray-light)]/30">
            <p>© 2025 LitShelf. All rights reserved.</p>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-[var(--foreground)] text-[var(--background)] py-3 px-4 z-20 shadow-lg border-t border-[var(--gray-light)]/30">
        <ul className="flex justify-around items-center">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? "bg-[var(--background)]/10 text-[var(--foreground)]"
                    : "text-[var(--background)]/80 hover:text-[var(--foreground)]"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <footer className="hidden md:block p-6 bg-[var(--foreground)] text-[var(--background)] mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">Explore</h3>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm hover:text-[var(--foreground)] text-[var(--background)]/80"
                aria-label={`Go to ${item.label} page`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--background)]/90 transition-colors"
                aria-label="Follow us on X"
              >
                <FaHome className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--background)]/90 transition-colors"
                aria-label="Follow us on GitHub"
              >
                <FaHome className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-xs">
          <p>© 2025 LitShelf. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}