"use client";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does LitShelf recommend books?",
      answer:
        "LitShelf uses a curated approach, combining user preferences like genres, authors, and reading habits with expert recommendations to suggest books tailored to your tastes, without relying on complex algorithms.",
    },
    {
      question: "Is LitShelf free to use?",
      answer:
        "Yes, LitShelf is completely free! You can browse our collection, get recommendations, and manage your wishlist at no cost.",
    },
    {
      question: "Can I contribute to LitShelf?",
      answer:
        "We love community input! Reach out via our contact page to suggest books, share feedback, or explore collaboration opportunities.",
    },
  ];

  const team = [
    {
      name: "Jane Doe",
      role: "Founder & CEO",
      bio: "A passionate reader and tech enthusiast, Jane founded LitShelf to make book discovery simple and delightful.",
    },
    {
      name: "John Smith",
      role: "Lead Developer",
      bio: "John crafts the seamless user experience at LitShelf, ensuring every feature is intuitive and robust.",
    },
    {
      name: "Emily Brown",
      role: "Content Curator",
      bio: "Emily scours the literary world to bring you the best book recommendations tailored to your interests.",
    },
  ];

  const milestones = [
    { year: "2022", event: "LitShelf founded with a mission to simplify book discovery." },
    { year: "2023", event: "Launched our curated book collection and recommendation system." },
    { year: "2024", event: "Introduced wishlist and personalized filtering features." },
    { year: "2025", event: "Expanded to include community-driven book suggestions." },
  ];

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto bg-[var(--background)]">
      <h1 className="text-4xl font-bold mb-8 text-[var(--foreground)]">About LitShelf</h1>

      {/* Mission Section */}
      <section className="glassmorphic p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Our Mission</h2>
        <p className="text-lg text-[var(--foreground)] max-w-3xl">
          At LitShelf, we believe finding the perfect book should be as enjoyable as reading it. Our mission is to connect readers with stories they’ll love through a simple, curated platform that prioritizes human insight over complex algorithms. Whether you’re a casual reader or a literary enthusiast, we’re here to inspire your next great read.
        </p>
        <p className="text-lg text-[var(--foreground)] max-w-3xl mt-4">
          We curate a diverse collection of books from around the world, offering personalized recommendations based on your favorite genres, authors, and reading preferences. Our goal is to make book discovery accessible, inclusive, and delightful for everyone.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-2 font-medium glassmorphic"
          aria-label="Contact us to learn more"
        >
          Get in Touch
        </Link>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[var(--foreground)]">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="glassmorphic p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--foreground)]">{member.name}</h3>
              <p className="text-lg text-[var(--foreground)]">{member.role}</p>
              <p className="text-[var(--foreground)] mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones Section */}
      <section className="glassmorphic p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[var(--foreground)]">Our Journey</h2>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 text-[var(--foreground)] font-bold">{milestone.year}</div>
              <div className="text-[var(--foreground)]">{milestone.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[var(--foreground)]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glassmorphic p-4 rounded-lg">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left text-[var(--foreground)] font-medium"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                {openFaq === index ? (
                  <FaChevronUp className="text-[var(--foreground)]" />
                ) : (
                  <FaChevronDown className="text-[var(--foreground)]" />
                )}
              </button>
              {openFaq === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="mt-2 text-[var(--foreground)]"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}