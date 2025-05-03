"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    {
      question: "What types of books are available on LitShelf?",
      answer:
        "LitShelf offers a diverse collection, including fiction, non-fiction, classics, contemporary releases, young adult, sci-fi, fantasy, memoirs, and more, sourced from global publishers and independent authors.",
    },
    {
      question: "How often is the book collection updated?",
      answer:
        "Our collection is updated weekly with new releases, trending titles, and community-suggested books to keep your reading options fresh and exciting.",
    },
    {
      question: "Can I access LitShelf on mobile devices?",
      answer:
        "Absolutely! LitShelf is fully responsive and works seamlessly on desktops, tablets, and smartphones. We’re also working on a dedicated mobile app—stay tuned!",
    },
    {
      question: "Does LitShelf support audiobooks or eBooks?",
      answer:
        "Currently, LitShelf focuses on physical books and eBooks. We’re exploring audiobook integration and hope to add this feature in the future.",
    },
    {
      question: "How can I track my reading progress?",
      answer:
        "LitShelf’s wishlist feature allows you to save books and mark them as 'currently reading,' 'read,' or 'want to read.' We’re developing more robust tracking tools for release soon.",
    },
    {
      question: "Is LitShelf available in multiple languages?",
      answer:
        "Yes, our platform supports English, Spanish, and French, with plans to expand to more languages to make book discovery accessible worldwide.",
    },
    {
      question: "How does LitShelf ensure book quality?",
      answer:
        "Our content curators carefully vet each book for quality, relevance, and reader appeal, combining user reviews, expert insights, and editorial standards.",
    },
  ];

  const team = [
    {
      name: "Shadrah Flower",
      role: "Founder & CEO",
      bio: "A passionate reader and tech enthusiast. Shadrah founded LitShelf to make book discovery simple and delightful.",
      image: "/images/flower.JPG",
    },
    {
      name: "Farouk Jjingo",
      role: "Lead Developer",
      bio: "Jjingo crafts the seamless user experience at LitShelf to ensure every feature is intuitive and robust.",
      image: "/images/farouk.JPG",
    },
    {
      name: "Jonathan Ssemakula",
      role: "Content Curator",
      bio: "Jonathan scours the literary world to bring you the best book recommendations tailored to your interests.",
      image: "/images/jonathan.JPG",
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

      {/* Our Story Section */}
      <section className="glassmorphic p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Our Story</h2>
        <p className="text-lg text-[var(--foreground)] max-w-3xl">
          LitShelf was born in a cozy Kampala bookstore, where Shadrah Flower, a lifelong book lover, found herself overwhelmed by endless shelves yet unable to find her next great read. Frustrated by algorithm-driven platforms that felt impersonal, she envisioned a platform that combined the warmth of a librarian’s recommendation with the ease of modern technology. In 2022, with a notebook full of ideas and a dream to make book discovery joyful, she founded LitShelf.
        </p>
        <p className="text-lg text-[var(--foreground)] max-w-3xl mt-4">
          Joined by Farouk Jjingo, a developer with a knack for intuitive design, and Jonathan Ssemakula, a literary scholar with an eye for hidden gems, the trio built LitShelf from the ground up. They spent countless nights curating books, testing features, and listening to readers worldwide. What started as a small passion project grew into a global community of readers who value stories, connection, and the simple joy of a good book.
        </p>
        <p className="text-lg text-[var(--foreground)] max-w-3xl mt-4">
          Today, LitShelf is more than a platform—it’s a movement to celebrate the human side of reading. From our curated collections to our community-driven suggestions, we’re here to help every reader find a story that sparks joy, challenges thoughts, or simply offers an escape. Join us on this literary journey, and let’s write the next chapter together.
        </p>
        <Link
          href="/join"
          className="inline-block mt-6 rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-2 font-medium glassmorphic"
          aria-label="Join the LitShelf community"
        >
          Join Our Community
        </Link>
      </section>

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
              <div className="relative w-24 h-24 mb-4 mx-auto">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 640px) 100vw, 200px"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] text-center">{member.name}</h3>
              <p className="text-lg text-[var(--foreground)] text-center">{member.role}</p>
              <p className="text-[var(--foreground)] mt-2 text-center">{member.bio}</p>
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