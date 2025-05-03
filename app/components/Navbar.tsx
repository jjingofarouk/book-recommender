"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";
import { useState } from "react";

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/recommend", label: "Recommend" },
    { href: "/wishlist", label: "Wishlist" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="p-4 sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Brand Name */}
          <div className="text-xl font-bold">
            <Link href="/" className="text-[var(--text-color)]">
              LitShelf
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:underline text-sm font-medium text-[var(--text-color)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-2xl text-[var(--text-color)]"
              onClick={toggleSidebar}
              aria-label={isSidebarOpen ? "Close sidebar menu" : "Open sidebar menu"}
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`sidebar fixed top-0 right-0 h-full w-64 z-50 bg-white dark:bg-gray-900 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-xl font-bold text-[var(--text-color)]">
            LitShelf
          </span>
          <button
            onClick={toggleSidebar}
            className="text-2xl text-[var(--text-color)]"
            aria-label="Close sidebar"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-2 hover:underline text-base font-medium text-[var(--text-color)]"
                onClick={toggleSidebar}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}