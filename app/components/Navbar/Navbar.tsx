"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@headlessui/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
];

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <nav
      className={`sticky top-0 w-full z-50 shadow-sm ${
        resolvedTheme === "dark" ? "bg-[#0A0A1A]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo aligned left */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" width={100} height={100} alt="logo" />
          </Link>

          {/* Desktop Navigation aligned right */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium ${
                  resolvedTheme === "dark" ? "text-white" : "text-[#272727]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                filter: "drop-shadow(0px 16px 33px rgba(0, 0, 0, 0.3))",
              }}
              className="hover:bg-red-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 bg-gradient-to-r from-red-800 to-red-900 hover:brightness-110"
            >
              Contact Us
            </Link>

            {/* Theme Toggle */}
            <Switch
              checked={resolvedTheme === "dark"}
              onChange={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className={`${
                resolvedTheme === "dark" ? "bg-gray-700" : "bg-gray-800"
              } relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none ml-4`}
            >
              <span className="sr-only">Toggle theme</span>
              <span className="absolute left-2">
                <Sun size={14} className="text-white" />
              </span>
              <span className="absolute right-2">
                <Moon size={14} className="text-white" />
              </span>
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                  resolvedTheme === "dark" ? "translate-x-9" : "translate-x-1"
                }`}
              />
            </Switch>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle for Mobile */}
            <Switch
              checked={resolvedTheme === "dark"}
              onChange={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className={`${
                resolvedTheme === "dark" ? "bg-gray-700" : "bg-gray-800"
              } relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none ml-4`}
            >
              <span className="sr-only">Toggle theme</span>
              <span className="absolute left-2">
                <Sun size={14} className="text-white" />
              </span>
              <span className="absolute right-2">
                <Moon size={14} className="text-white" />
              </span>
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                  resolvedTheme === "dark" ? "translate-x-9" : "translate-x-1"
                }`}
              />
            </Switch>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium bg-red-600 hover:bg-red-700 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
