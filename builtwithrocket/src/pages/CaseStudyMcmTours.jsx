import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Plane,
    Hotel,
    Search,
    CalendarCheck,
    ShieldCheck,
} from "lucide-react";

import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "components/ui/Button";

const CaseStudyMcmTours = () => {
    const heroImage =
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1800&q=80";

    const images = {
        travel:
            "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1600&q=80",
        booking:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
        flight:
            "https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?auto=format&fit=crop&w=1600&q=80",
        hotel:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
        cta:
            "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80",
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const steps = [
        { title: "Search", icon: Search, desc: "Real-time flight + hotel availability" },
        { title: "Select", icon: Plane, desc: "Reliable options from third-party providers" },
        { title: "Confirm", icon: Hotel, desc: "Booking workflow designed for accuracy" },
        { title: "Ticket", icon: CalendarCheck, desc: "Stable operations even at peak load" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
            <Header />

            <main className="flex-grow pb-20">
                {/* ✅ HERO */}
                <section className="relative overflow-hidden bg-[#063453]">
                    <div className="absolute inset-0">
                        <img
                            src={heroImage}
                            alt="MCM Tours"
                            className="h-full w-full object-cover opacity-25"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#063453] via-[#063453]/90 to-[#063453]/60" />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                Case Study
                            </div>

                            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                                MCM Tours
                            </h1>

                            <p className="mt-3 text-base md:text-lg text-white/80">
                                Built an online reservation system integrating real-time airline and hotel bookings.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {["Travel Tech", "Real-time Integrations", "Booking Workflows"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs md:text-sm font-semibold text-white"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ✅ BODY: Booking stepper */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/16 blur-[120px]" />
                        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/10 blur-[120px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
                        {/* Overview + Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    Overview
                                </h2>
                                <div className="mt-3 space-y-3 text-base text-[#4A5568] leading-relaxed">
                                    <p>
                                        MCM Tours operates in a market where speed, accuracy, and availability directly affect revenue and trust.
                                    </p>
                                    <p>
                                        They needed a reservation platform that could aggregate third-party data, show real-time availability,
                                        and support seamless booking — without creating operational complexity.
                                    </p>
                                    <p>
                                        Collabrah Tech partnered with MCM Tours to design and build a reliable booking system for daily use and future growth.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                                <img
                                    src={images.travel}
                                    alt="Travel"
                                    className="h-full w-full object-cover min-h-[260px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Stepper */}
                        <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                                <div>
                                    <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                        Booking Flow
                                    </h2>
                                    <p className="mt-2 text-base text-[#4A5568]">
                                        A predictable workflow built to survive real-time dependencies.
                                    </p>
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20 px-4 py-2">
                                    <ShieldCheck className="h-4 w-4 text-[#2FA4A9]" />
                                    <p className="text-sm font-semibold text-[#0D2A4A]">Stable under peak load</p>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                                {steps.map((s, idx) => {
                                    const Icon = s.icon;
                                    return (
                                        <div
                                            key={s.title}
                                            className="rounded-3xl border border-gray-100 bg-[#FAFBFC] p-5"
                                        >
                                            <p className="text-xs font-semibold text-[#2FA4A9]">Step {idx + 1}</p>
                                            <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                                <Icon className="h-5 w-5 text-[#2FA4A9]" />
                                            </div>
                                            <p className="mt-3 font-extrabold text-[#0D2A4A]">{s.title}</p>
                                            <p className="mt-2 text-sm text-[#4A5568]">{s.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <img
                                    src={images.flight}
                                    alt="Flights"
                                    className="h-[200px] w-full object-cover rounded-3xl border border-gray-100"
                                    loading="lazy"
                                />
                                <img
                                    src={images.hotel}
                                    alt="Hotels"
                                    className="h-[200px] w-full object-cover rounded-3xl border border-gray-100"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Challenge / Approach / Outcome */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                            <div className="rounded-3xl bg-[#0D2A4A] p-6 md:p-8 text-white shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#2FA4A9]/25 blur-[70px]" />
                                <h2 className="text-xl md:text-2xl font-extrabold">The Challenge</h2>
                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Real-time data flowing from external airline systems",
                                        "Dependency on third-party availability and response times",
                                        "Search and booking flows needing speed + accuracy",
                                        "Stability required during peak usage",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                            <span className="text-white/85">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">Our Approach</h2>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Safe integrations with third-party providers",
                                        "Booking logic built for real-time data changes",
                                        "Failure handling so dependencies don't break workflows",
                                        "Extensibility for future partners and services",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                            <span className="text-[#4A5568]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-3xl border border-[#2FA4A9]/20 bg-white p-6 md:p-8 shadow-md">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">The Outcome</h2>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Reliable real-time booking for customers",
                                        "Reduced operational friction from integrations",
                                        "Consistent performance during peak usage",
                                        "Expanded capabilities without rework",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                            <span className="text-[#4A5568]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-10 rounded-3xl border border-[#2FA4A9]/20 bg-white shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-6 md:p-10">
                                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#0D2A4A]">
                                        Have a Similar Challenge?
                                    </h2>
                                    <p className="mt-3 text-base md:text-lg text-[#4A5568] max-w-2xl">
                                        If you’re building a platform that relies on real-time data and third-party integrations,
                                        we’d be happy to talk.
                                    </p>

                                    <div className="mt-6">
                                        <Button
                                            size="lg"
                                            onClick={() =>
                                                window.open(
                                                    "https://calendly.com/williammwakaa",
                                                    "_blank",
                                                    "noopener,noreferrer"
                                                )
                                            }
                                            className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
                                        >
                                            Schedule a Discovery Call <ArrowRight className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="relative min-h-[240px]">
                                    <img
                                        src={images.cta}
                                        alt="Travel booking"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D2A4A]/65 to-transparent" />
                                </div>
                            </div>
                        </div>

                        <div className="h-14" />
                    </div>
                </section>
            </main>

            <FooterSection />
        </div>
    );
};

export default CaseStudyMcmTours;
