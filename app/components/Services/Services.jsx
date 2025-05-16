"use client";

import { Card, CardContent } from "../ui/card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Services = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevent hydration mismatch

    const isDark = resolvedTheme === "dark";

    const serviceCards = [
        {
            title: "Web Development",
            image: "/group-3446.png",
            alt: "Web Development illustration",
        },
        {
            title: "Mobile Development",
            image: "/undraw-mobile-development-tjxm-1.svg",
            alt: "Mobile Development illustration",
        },
        {
            title: "ERP Implementation",
            image: "/undraw-building-websites-k2zp-1.svg",
            alt: "ERP Implementation illustration",
        },
        {
            title: "Branding & Visual Identity",
            image: "/group.png",
            alt: "Branding illustration",
            isBackgroundImage: true,
        },
        {
            title: "Digital Marketing",
            image: "/group-3445.png",
            alt: "Digital Marketing illustration",
        },
    ];

    return (
        <section
            className={`relative w-full h-[1113px] overflow-hidden ${
                isDark ? "bg-[#0A0A1A]" : "bg-white"
            }`}
        >
            {/* Background gradient */}
            <div
                className={`absolute w-[1113px] h-[1701px] top-[-294px] left-[295px] rounded-[556.5px/850.5px] -rotate-90 blur-[122.7px] ${
                    isDark
                        ? "[background:radial-gradient(50%_50%_at_46%_58%,rgba(255,0,0,0.2)_0%,rgba(97,5,5,0.3)_51%,rgba(56,0,0,0.4)_100%)]"
                        : "[background:radial-gradient(50%_50%_at_46%_58%,rgba(255,0,0,0.2)_0%,rgba(255,224,224,0.3)_51%,rgba(255,240,240,0.4)_100%)]"
                }`}
            />

            {/*<div className="absolute w-[901px] h-[1699px] top-[-212px] left-[399px] -rotate-90">*/}
            {/*    <img*/}
            {/*        className="absolute w-[1700px] h-[903px] top-[398px] left-[-400px] rotate-90"*/}
            {/*        alt="Background small circle"*/}
            {/*        src="/bg-small-circle.png"*/}
            {/*    />*/}
            {/*</div>*/}

            <div className="relative z-10 px-11 pt-[252px]">
                <div className="flex items-center justify-center mb-5">
                    <h1 className={`text-[50px] font-bold text-transparent bg-clip-text    ${
                        isDark
                            ? "bg-gradient-to-r from-red-800 to-red-50"
                            : "bg-gradient-to-r from-red-500 to-red-600"
                    }`}>
                        Our Main Services
                    </h1>
                </div>


                <h2
                    className={`max-w-[855px] mx-auto mb-[186px] [font-family:'Poppins',Helvetica] font-semibold text-[40px] text-justify leading-[52px] ${
                        isDark ? "text-white" : "text-black"
                    }`}
                >
                    Smart. Scalable. Which Made Just for You.
                </h2>

                <ScrollArea className="w-full">
                    <div className="flex items-center gap-[66px] pb-4">
                        {serviceCards.map((service, index) => (
                            <Card
                                key={index}
                                className="relative w-[497px] h-[440px] bg-transparent border-none"
                            >
                                <CardContent className="p-0 h-full">
                                    <div className="relative h-full">
                                        {service.isBackgroundImage ? (
                                            <div className="absolute w-[492px] h-[355px] top-0 left-[3px]">
                                                <div className="relative h-[328px] top-[27px] bg-[url(/group.png)] bg-[100%_100%]" />
                                            </div>
                                        ) : (
                                            <img
                                                className={`${
                                                    index === 1
                                                        ? "w-[435px] h-[361px] top-0 left-[31px]"
                                                        : index === 4
                                                            ? "w-[417px] h-[362px] top-0 left-10"
                                                            : "w-[492px] h-[355px] top-0 left-[3px]"
                                                } absolute`}
                                                alt={service.alt}
                                                src={service.image}
                                            />
                                        )}

                                        {/* Card footer */}
                                        <div className="absolute w-[497px] h-[78px] bottom-0 left-0">
                                            <div
                                                className={`relative h-[78px] rounded-[20.81px] overflow-hidden ${
                                                    isDark
                                                        ? "[background:radial-gradient(50%_50%_at_50%_50%,rgba(0,0,0,0.3)_0%,rgba(102,102,102,0.3)_100%)]"
                                                        : "[background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.5)_0%,rgba(220,220,220,0.5)_100%)]"
                                                }`}
                                            >
                                                <div
                                                    className={`absolute top-[18px] ${
                                                        service.title === "Branding & Visual Identity"
                                                            ? "left-[38px]"
                                                            : service.title === "Digital Marketing"
                                                                ? "left-[109px]"
                                                                : service.title === "ERP Implementation"
                                                                    ? "left-[85px]"
                                                                    : service.title === "Mobile Development"
                                                                        ? "left-[82px]"
                                                                        : "left-[82px]"
                                                    } [font-family:'Poppins',Helvetica] font-bold text-[31.4px] leading-[40.8px] whitespace-nowrap ${
                                                        isDark ? "text-white" : "text-black"
                                                    }`}
                                                >
                                                    {service.title}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>

            {/* Hire me button */}
            <img
                className="absolute w-[183px] h-[183px] top-[82px] right-[23px]"
                alt="Hire me button"
                src="/hire-me-button.svg"
            />
        </section>
    );
};

export default Services;
