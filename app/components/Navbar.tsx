"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaHome, FaBook, FaStar, FaHeart, FaUser, FaEnvelope, FaLink, FaNewspaper } from "react-icons/fa"; // Import icons

// Define the type for menu items
interface MenuItem {
  href: string;
  label: string;
  icon: string | React.ReactNode; // Allow string (for emojis) or React component (for icons)
  action?: () => void; // Optional action for buttons
}

export function Navbar() {
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
      <nav className="p-4 bg-[var(--foreground)] text-[var(--background)] glassmorphic sticky top-0 z-10">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle main menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
          <div className="hidden md:block font-semibold text-lg">LitShelf</div>
          <div className="hidden md:block">
            <ul className="flex gap-6">
              {[...mainMenuItems, ...moreMenuItems.slice(0, 2)].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[var(--background)] text-[var(--foreground)] glassmorphic"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[var(--foreground)] text-[var(--background)] shadow-lg md:hidden z-30">
          <ul className="flex flex-col p-4">
            {[...mainMenuItems, ...moreMenuItems].map((item) => (
              <li key={item.href + item.label} className="py-3 border-b border-opacity-20 border-[var(--background)]">
                {item.action ? (
                  <button 
                    className="flex items-center gap-3 w-full text-left"
                    onClick={item.action}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="p-4 text-center text-sm border-t border-opacity-20 border-[var(--background)]">
            <p>© 2025 LitShelf. All rights reserved.</p>
          </div>
        </div>
      )}
      
      {showMoreMenu && (
        <div className="absolute bottom-20 left-0 right-0 bg-[var(--foreground)] text-[var(--background)] shadow-lg md:bottom-auto md:top-16 md:right-4 md:left-auto md:w-64 rounded-lg z-30">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 justify-center">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline p-2"
                aria-label="Follow us on X"
              >
                <div className="bg-[var(--background)] text-[var(--foreground)] rounded-full w-10 h-10 flex items-center justify-center">X</div>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline p-2"
                aria-label="Follow us on GitHub"
              >
                <div className="bg-[var(--background)] text-[var(--foreground)] rounded-full w-10 h-10 flex items-center justify-center">GH</div>
              </a>
            </div>
          </div>
        </div>
      )}

      {showNewsletter && (
        <div className="absolute bottom-20 left-0 right-0 bg-[var(--foreground)] text-[var(--background)] shadow-lg md:bottom-auto md:top-16 md:right-4 md:left-auto md:w-80 rounded-lg z-30">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for book recommendations.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-[var(--gray-light)] rounded-lg bg-transparent text-[var(--background)] placeholder-[var(--gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--background)]"
                aria-label="Email for newsletter"
              />
              <button
                className="rounded-full bg-[var(--background)] text-[var(--foreground)] px-4 py-2 font-medium glassmorphic"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-[var(--foreground)] text-[var(--background)] glassmorphic py-2 px-4 z-20 shadow-lg">
        <ul className="flex justify-around">
          {mainMenuItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="flex flex-col items-center gap-1 p-2"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs">{item.label}</span>
              </Link>
            </li>
          ))}
          <li>
            <button 
              className="flex flex-col items-center gap-1 p-2"
              onClick={toggleMoreMenu}
            >
              <span className="text-xl">⋯</span>
              <span className="text-xs">More</span>
            </button>
          </li>
        </ul>
      </div>

      <footer className="hidden md:block p-6 bg-[var(--foreground)] text-[var(--background)] glassmorphic mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Explore</h3>
            {[...mainMenuItems, ...moreMenuItems.slice(0, 2)].map((item) => (
              <Link key={item.href} href={item.href} className="hover:underline" aria-label={`Go to ${item.label} page`}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm">Subscribe to our newsletter for book recommendations.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-[var(--gray-light)] rounded-lg bg-transparent text-[var(--background)] placeholder-[var(--gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--background)]"
                aria-label="Email for newsletter"
              />
              <button
                className="rounded-full bg-[var(--background)] text-[var(--foreground)] px-4 py-2 font-medium glassmorphic"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Follow us on X"
              >
                <div className="bg-[var(--background)] text-[var(--foreground)] rounded-full w-8 h-8 flex items-center justify-center">X</div>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Follow us on GitHub"
              >
                <div className="bg-[var(--background)] text-[var(--foreground)] rounded-full w-8 h-8 flex items-center justify-center">GH</div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© 2025 LitShelf. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}