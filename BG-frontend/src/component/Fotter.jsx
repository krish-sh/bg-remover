import React, { useState } from "react";

export default function Fotter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // lightweight client-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email." });
      return;
    }

    // placeholder action - replace with real API call
    setStatus({ type: "success", message: "Thanks — you’re on the list!" });
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-r from-rose-800 to-rose-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                {/* simple camera / magic wand icon (svg) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  aria-hidden
                >
                  <path
                    fill="currentColor"
                    d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">bg-remover</h3>
                <p className="text-sm text-gray-300">
                  Fast, accurate background removal for images — built for
                  creators.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-sm hover:underline">
                Pricing
              </a>
              <span className="text-sm text-gray-500">•</span>
              <a href="#" className="text-sm hover:underline">
                Docs
              </a>
              <span className="text-sm text-gray-500">•</span>
              <a href="#" className="text-sm hover:underline">
                Support
              </a>
            </div>
            <div className="flex items-center gap-3">
              {/* Social icons */}
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 bg-white/5 rounded-md hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M19.633 7.997c.013.18.013.36.013.54 0 5.487-4.177 11.803-11.803 11.803-2.347 0-4.528-.688-6.36-1.872.33.038.66.05.998.05 1.946 0 3.737-.66 5.165-1.772-1.82-.038-3.356-1.234-3.887-2.88.255.038.51.063.78.063.378 0 .756-.05 1.108-.147-1.907-.385-3.342-2.064-3.342-4.083v-.05c.563.312 1.205.5 1.898.525-1.124-.75-1.86-2.02-1.86-3.463 0-.758.203-1.47.558-2.082 2.037 2.5 5.087 4.14 8.52 4.303-.063-.3-.1-.613-.1-.935 0-2.272 1.84-4.112 4.112-4.112 1.18 0 2.247.5 2.997 1.302.935-.18 1.81-.525 2.595-.998-.305.955-.955 1.756-1.807 2.25.83-.1 1.615-.32 2.347-.648-.555.82-1.25 1.54-2.06 2.115z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Github"
                className="p-2 bg-white/5 rounded-md hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.02c0 4.427 2.865 8.184 6.839 9.504.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.093.39-1.988 1.03-2.688-.103-.254-.446-1.277.098-2.66 0 0 .84-.27 2.75 1.026A9.555 9.555 0 0112 6.844c.85.003 1.705.115 2.504.338 1.909-1.296 2.748-1.026 2.748-1.026.546 1.383.203 2.406.1 2.66.64.7 1.028 1.595 1.028 2.688 0 3.85-2.339 4.697-4.566 4.945.359.31.678.92.678 1.855 0 1.337-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0022 12.02C22 6.484 17.523 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-white/5 rounded-md hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6a4 4 0 100 8 4 4 0 000-8zm6.5-.5a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold">Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Remove Background
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-sm font-semibold">Get updates</h4>
            <p className="mt-3 text-sm text-gray-300">
              Get tips, monthly freebies, and product updates — no spam.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex items-center gap-2"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full bg-white/5 placeholder:text-gray-400 text-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Enter your email"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-sm"
              >
                Subscribe
              </button>
            </form>

            {status && (
              <p
                className={`mt-3 text-sm ${
                  status.type === "error" ? "text-rose-400" : "text-emerald-300"
                }`}
                role="status"
              >
                {status.message}
              </p>
            )}

            <div className="mt-6 text-sm text-gray-400">
              <div>
                Contact:{" "}
                <a
                  href="mailto:hello@bg-remover.example"
                  className="underline hover:text-gray-200"
                >
                  hello@bg-remover.example
                </a>
              </div>
              <div className="mt-2">
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="underline hover:text-gray-200"
                >
                  +1 234 567 890
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} bg-remover — All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-gray-300 hover:underline">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-300 hover:underline">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-300 hover:underline">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
