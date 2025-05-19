"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const About = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <section
      className={`relative flex flex-col min-h-min items-center text-white px-8 py-5 md:px-20 md:py-5 overflow-hidden ${resolvedTheme === "dark" ? "bg-[#0A0A1A]" : "bg-white"
        }`}
    >
      {/* Oval Gradient Background */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-[100%] w-[100%] h-[100%] md:w-[100%] md:h-[100%]"
        style={{
          background:
            resolvedTheme === "dark"
              ? "radial-gradient(ellipse at center, #A32929 30%, #0A0A1A 70%)"
              : "radial-gradient(ellipse at center, #A32929 35%, #FFFFFF 70%)",
          zIndex: 0,
          opacity: 0.4,
        }}
      ></div>

      {/* Content Wrapper with higher z-index */}
      <div className="relative z-10 flex flex-row gap-5 max-w-6xl w-full">
        {/* Left side */}
        <div className="flex flex-col justify-start md:w-[55%] w-full">
          <span className="text-8xl font-boldx  leading-tight text-white">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  resolvedTheme === "dark"
                    ? "linear-gradient(to right, #ffffff 0%, #FFFFFF 50%)"
                    : "linear-gradient(to right, #F46E6E 30%, #795A5A 70%)",
              }}
            >
              About </span><br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  resolvedTheme === "dark"
                    ? "linear-gradient(to right, #F46E6E 0%, #FFFFFF 50%)"
                    : "linear-gradient(to right, #F46E6E 30%, #795A5A 70%)",
              }}
            >
              XylonMark
            </span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  resolvedTheme === "dark"
                    ? "linear-gradient(to right, #F46E6E 0%, #FFFFFF 50%)"
                    : "linear-gradient(to right, #F46E6E 30%, #795A5A 70%)",
              }}
            >
              Labs
            </span>
          </span>
        </div>

        {/* Divider */}
        <div className={`mx-10 w-[2px] h-80 hidden md:block ${resolvedTheme === "dark" ? "bg-white/10" : "bg-black"}`} />

        {/* Right side */}
        <div className={`text-2xl leading-relaxed ${resolvedTheme === "dark" ? "text-gray-300" : "text-[#0A0A1A]"} text-justify md:w-[50%] w-full`}>
          At XylonMarksLabs, we believe great businesses are built on bold ideas
          and powered by smart, scalable technology. We're a team of
          strategists, developers, designers, and marketers dedicated to helping
          organizations like yours solve real problems, spark growth, and stay
          ahead of the curve.
        </div>
      </div>

      {/* Background text below content */}
      <div
        className="pointer-events-none select-none text-[10rem] font-extrabold text-transparent text-center w-full hidden md:block relative z-10"
        style={{
          WebkitTextStroke: resolvedTheme === 'dark' ? '1px #7C4E4E' : '1px #7C4E4E',
          WebkitTextFillColor: 'transparent',
        }}
      >
        XylonMarkLabs
      </div>

    </section>
  );
};

export default About;
