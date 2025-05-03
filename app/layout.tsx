import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "LitShelf",
  description: "Find your next favorite book with our simple recommendation system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main className="min-h-screen px-4 sm:px-8 lg:px-16">{children}</main>
      </body>
    </html>
  );
}