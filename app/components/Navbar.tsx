"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaBook, FaStar, FaHeart, FaUser, FaEnvelope, FaLink, FaNewspaper, FaBars, FaTimes } from "react-icons/fa";

interface MenuItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  action?: () => void;
}

export function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

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
    if (!isOpen) {
      setShowMoreMenu(false);
      setShowNewsletter(false);
    }
  };

  const toggleMoreMenu = () => {
    setShowMoreMenu(!showMoreMenu);
    if (!showMoreMenu) {
      setIsOpen(false);
      setShowNewsletter(false);
    }
  };

  const toggleNewsletter = () => {
    setShowNewsletter(!showNewsletter);
    if (!showNewsletter) {
      setIsOpen(false);
      setShowMoreMenu(false);
    }
  };

  const mainMenuItems: MenuItem[] = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/books", label: "Books", icon: <FaBook /> },
    { href: "/recommend", label: "Recommend", icon: <FaStar /> },
    { href: "/wishlist", label: "Wishlist", icon: <FaHeart /> },
  ];

  const moreMenuItems: MenuItem[] = [
    { href: "/about", label: "About", icon: <FaUser /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
    { href: "#", label: "Social", icon: <FaLink />, action: toggleMoreMenu },
    { href: "#", label: "Newsletter", icon: <FaNewspaper />, action: toggleNewsletter },
  ];

  return (
    <>
      <nav className="p-4 bg-[var(--foreground)] text-[var(--background)] glassmorphic sticky top-0 z-10 shadow-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="font-semibold text-lg">LitShelf</div>
          <div className="hidden md:flex gap-8">
            {[...mainMenuItems, ...moreMenuItems.slice(0, 2)].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href ? "text-[var(--foreground)]" : "text-[var(--background)]/70 hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--background)]/10 text-[var(--foreground)] hover:bg-[var(--background)]/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <button
              className="md:hidden p-2 rounded-full bg-[var(--background)]/10 hover:bg-[var(--background)]/20 transition-colors"
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
            {[...mainMenuItems, ...moreMenuItems].map((item) => (
              <li key={item.href + item.label} className="py-2">
                {item.action ? (
                  <button
                    className="flex items-center gap-3 w-full text-left text-sm font-medium text-[var(--background)]/70 hover:text-[var(--foreground)]"
                    onClick={item.action}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 text-sm font-medium ${
                      pathname === item.href ? "text-[var(--foreground)]" : "text-[var(--background)]/70 hover:text-[var(--foreground)]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="p-4 text-center text-xs border-t border-[var(--gray-light)]/20">
            <p>© 2025 LitShelf. All rights reserved.</p>
          </div>
        </div>
      )}

      {showMoreMenu && (
        <div className="absolute bottom-20 left-0 right-0 bg-[var(--foreground)] text-[var(--background)] shadow-lg md:top-16 md:right-4 md:left-auto md:w-64 rounded-lg z-30 glassmorphic">
          <div className="p-4">
            <h3 className="text-base font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-3 justify-center">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--background)]/10 hover:bg-[var(--background)]/20 transition-colors"
                aria-label="Follow us on X"
              >
                <FaLink className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--background)]/10 hover:bg-[var(--background)]/20 transition-colors"
                aria-label="Follow us on GitHub"
              >
                <FaLink className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}

      {showNewsletter && (
        <div className="absolute bottom-20 left-0 right-0 bg-[var(--foreground)] text-[var(--background)] shadow-lg md:top-16 md:right-4 md:left-auto md:w-80 rounded-lg z-30 glassmorphic">
          <div className="p-4">
            <h3 className="text-base font-semibold mb-2">Stay Updated</h3>
            <p className="text-xs mb-3">Subscribe for book recommendations.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-[var(--gray-light)]/50 rounded-lg bg-transparent text-[var(--background)] placeholder-[var(--gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--background)]/50 text-sm"
                aria-label="Email for newsletter"
              />
              <button
                className="rounded-full bg-[var(--background)]/10 text-[var(--foreground)] px-4 py-2 text-sm font-medium hover:bg-[var(--background)]/20 transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-[var(--foreground)] text-[var(--background)] glassmorphic py-3 px-4 z-20 shadow-lg border-t border-[var(--gray-light)]/20">
        <ul className="flex justify-around items-center">
          {mainMenuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? "bg-[var(--background)]/10 text-[var(--foreground)]"
                    : "text-[var(--background)]/70 hover:text-[var(--foreground)]"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
          <li>
            <button
              className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-colors ${
                showMoreMenu
                  ? "bg-[var(--background)]/10 text-[var(--foreground)]"
                  : "text-[var(--background)]/70 hover:text-[var(--foreground)]"
              }`}
              onClick={toggleMoreMenu}
            >
              <span className="text-2xl">⋯</span>
              <span className="text-xs font-medium">More</span>
            </button>
          </li>
        </ul>
      </div>

      <footer className="hidden md:block p-6 bg-[var(--foreground)] text-[var(--background)] glassmorphic mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">Explore</h3>
            {[...mainMenuItems, ...moreMenuItems.slice(0, 2)].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm hover:text-[var(--foreground)] text-[var(--background)]/70"
                aria-label={`Go to ${item.label} page`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">Stay Updated</h3>
            <p className="text-xs">Subscribe for book recommendations.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-[var(--gray-light)]/50 rounded-lg bg-transparent text-[var(--background)] placeholder-[var(--gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--background)]/50 text-sm"
                aria-label="Email for newsletter"
              />
              <button
                className="rounded-full bg-[var(--background)]/10 text-[var(--foreground)] px-4 py-2 text-sm font-medium hover:bg-[var(--background)]/20 transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--background)]/10 hover:bg-[var(--background)]/20 transition-colors"
                aria-label="Follow us on X"
              >
                <FaLink className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--background)]/10 hover:bg-[var(--background)]/20 transition-colors"
                aria-label="Follow us on GitHub"
              >
                <FaLink className="w-5 h-5" />
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