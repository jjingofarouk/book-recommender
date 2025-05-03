import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="p-6 bg-[var(--foreground)] text-[var(--background)] glassmorphic">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Explore</h3>
          <Link href="/" className="hover:underline" aria-label="Go to Home page">
            Home
          </Link>
          <Link href="/books" className="hover:underline" aria-label="Go to Books page">
            Books
          </Link>
          <Link href="/recommend" className="hover:underline" aria-label="Go to Recommend page">
            Recommend
          </Link>
          <Link href="/wishlist" className="hover:underline" aria-label="Go to Wishlist page">
            Wishlist
          </Link>
          <Link href="/about" className="hover:underline" aria-label="Go to About page">
            About
          </Link>
          <Link href="/contact" className="hover:underline" aria-label="Go to Contact page">
            Contact
          </Link>
        </div>

        {/* Newsletter Signup */}
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

        {/* Social Media */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              aria-label="Follow us on Twitter"
            >
              <Image
                src="/twitter.svg"
                alt="Twitter icon"
                width={24}
                height={24}
                className="invert"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              aria-label="Follow us on GitHub"
            >
              <Image
                src="/github.svg"
                alt="GitHub icon"
                width={24}
                height={24}
                className="invert"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>© 2025 LitShelf. All rights reserved.</p>
      </div>
    </footer>
  );
}