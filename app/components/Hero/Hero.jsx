"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
        resolvedTheme === "dark" ? "bg-[#0A0A1A]" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className={`text-5xl font-bold ${
            resolvedTheme === "dark" ? "text-white" : "text-black"
          }`}
        >
          From Strategy to Software <br />
          We Build What Your Business Needs.
        </h1>
        <p
          className={`mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ${
            resolvedTheme === "dark" ? "text-white" : "text-black"
          }`}
        >
          At XylonMarksLabs, we blend technology, creativity, and strategy to
          power your growth - through custom software, digital marketing,
          branding, and ERP systems.
        </p>
        <div className="mt-5 max-w-lg mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="w-md">
            <a
              href="/contact"
              className="flex items-center justify-center px-2.5 py-3 border border-transparent text-base font-medium rounded-4xl bg-gradient-to-r from-red-800 to-red-900 hover:brightness-110 text-white md:py-4 md:text-lg md:px-10"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3 w-md">
            <div
              style={{
                background: "linear-gradient(to right, #606060, #000000)",
                padding: "2px",
                borderRadius: "2rem",
                display: "inline-block",
                filter: "drop-shadow(0px 16px 33px rgba(0, 0, 0, 0.3))",
              }}
            >
              <a
                href="/about"
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium text-primary-600 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-primary-400 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10 rounded-4xl"
                style={{
                  borderRadius: "2rem",
                  display: "inline-block",
                }}
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
