import Link from "next/link";

export function Navbar() {
  return (
    <nav className="p-4 bg-foreground text-background">
      <ul className="flex gap-6 justify-center">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/books" className="hover:underline">Books</Link></li>
        <li><Link href="/recommend" className="hover:underline">Recommend</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}