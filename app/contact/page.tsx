"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name,
      email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
      phone: !formData.phone,
      subject: !formData.subject,
      message: !formData.message,
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      alert("Form submitted! (Non-functional demo)");
    }
  };

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto bg-[var(--background)]">
      <h1 className="text-4xl font-bold mb-8 text-[var(--foreground)]">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="glassmorphic p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-transparent text-[var(--foreground)] placeholder-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] ${
                  errors.name ? "border-red-500" : "border-[var(--foreground)]"
                }`}
                aria-label="Your name"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">Name is required</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-transparent text-[var(--foreground)] placeholder-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] ${
                  errors.email ? "border-red-500" : "border-[var(--foreground)]"
                }`}
                aria-label="Your email"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  Valid email is required
                </p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-transparent text-[var(--foreground)] placeholder-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] ${
                  errors.phone ? "border-red-500" : "border-[var(--foreground)]"
                }`}
                aria-label="Your phone number"
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">
                  Phone number is required
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-transparent text-[var(--foreground)] placeholder-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] ${
                  errors.subject ? "border-red-500" : "border-[var(--foreground)]"
                }`}
                aria-label="Subject of your message"
              />
              {errors.subject && (
                <p className="text-sm text-red-500 mt-1">Subject is required</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-transparent text-[var(--foreground)] placeholder-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] ${
                  errors.message ? "border-red-500" : "border-[var(--foreground)]"
                }`}
                rows={5}
                aria-label="Your message"
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">Message is required</p>
              )}
            </div>
            <button
              type="submit"
              className="rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-2 font-medium glassmorphic"
              aria-label="Submit contact form"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Social Media */}
        <div className="glassmorphic p-8 rounded-lg flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <p className="text-[var(--foreground)]">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@litshelf.com"
                className="hover:underline text-[var(--text-color)]"
                aria-label="Email support"
              >
                support@litshelf.com
              </a>
            </p>
            <p className="text-[var(--foreground)]">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+1234567890"
                className="hover:underline text-[var(--text-color)]"
                aria-label="Call support"
              >
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-[var(--foreground)]">
              <strong>Address:</strong> 123 Book Street, Reading City, RC 45678
            </p>
          </div>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[var(--text-color)]"
              aria-label="Follow us on Twitter"
            >
              <Image
                src="/twitter.svg"
                alt="Twitter icon"
                width={24}
                height={24}
                className="dark:invert"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[var(--text-color)]"
              aria-label="Follow us on GitHub"
            >
              <Image
                src="/github.svg"
                alt="GitHub icon"
                width={24}
                height={24}
                className="dark:invert"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}