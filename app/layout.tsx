import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ScrollNavbar } from "./components/ScrollNavbar";

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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollNavbar />
          <main className="min-h-screen px-4 sm:px-8 lg:px-16 pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}