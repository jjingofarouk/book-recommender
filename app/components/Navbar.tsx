"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaBook, FaStar, FaHeart, FaBars, FaTimes, FaTwitter, FaGithub } from "react-icons/fa";

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
      <nav className="p-3 bg-foreground text-white sticky top-0 z-10 shadow-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="font-semibold text-base">LitShelf</div>
          <div className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full bg-white text-foreground hover:bg-white/90 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <button
              className="md:hidden p-1.5 rounded-full bg-white text-foreground hover:bg-white/90 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle main menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-foreground text-white shadow-lg md:hidden z-30">
          <ul className="flex flex-col p-3 gap-1">
            {menuItems.map((item) => (
              <li key={item.href} className="py-1.5">
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 text-sm font-medium ${
                    pathname === item.href ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-3 text-center text-xs border-t border-white/30">
            <p>© 2025 LitShelf. All rights reserved.</p>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-black text-white py-1.5 px-2 z-20 shadow-lg border-t border-white/30">
        <ul className="flex justify-around items-center">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-0.5 p-1.5 rounded-md transition-colors ${
                  pathname === item.href ? "bg-white/10 text-white" : "text-white/80 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <footer className="hidden md:block p-6 bg-foreground text-white mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">Explore</h3>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm hover:text-white text-white/80"
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
                className="p-2 rounded-full bg-white text-foreground hover:bg-white/90 transition-colors"
                aria-label="Follow us on X"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white text-foreground hover:bg-white/90 transition-colors"
                aria-label="Follow us on GitHub"
              >
                <FaGithub className="w-4 h-4" />
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