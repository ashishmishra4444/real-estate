"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const NAV_LINKS = [
  { label: "About Us" },
  { label: "Contact Us" },
  { label: "FAQ" },
  { label: "Terms" },
  { label: "Privacy" },
];

const SOCIAL_LINKS = [
  { icon: faFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: faInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: faTwitter, label: "Twitter", href: "https://twitter.com" },
  { icon: faLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: faYoutube, label: "YouTube", href: "https://youtube.com" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy" },
  { label: "Terms of Service" },
  { label: "Cookie Policy" },
];

const CURRENT_YEAR = new Date().getFullYear();

const FooterSection = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleComingSoon = (pageName: string) => {
    setToastMessage(`"${pageName}" page will be live soon!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <footer className="relative border-t border-gray-200 py-20">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-gray-700">
          <span className="text-secondary-400 font-bold">●</span>
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <Link
            href="/"
            className="text-xl font-bold transition-all hover:opacity-70"
            scroll={false}
          >
            RENT<span className="font-medium text-secondary-500">ORA</span>
          </Link>
          <nav className="mb-1">
            <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleComingSoon(link.label)}
                    className="hover:text-primary-900 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5 text-gray-500">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 hover:text-primary-600"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="h-6 w-6"
                  style={{ width: "22px", height: "22px" }}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 text-center sm:text-left">
          <p>© {CURRENT_YEAR} RENTORA. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {LEGAL_LINKS.map((legal) => (
              <button
                key={legal.label}
                type="button"
                onClick={() => handleComingSoon(legal.label)}
                className="hover:text-gray-900 transition-colors cursor-pointer"
              >
                {legal.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
