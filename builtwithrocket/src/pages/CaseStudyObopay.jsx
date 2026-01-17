import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Wallet,
    Activity,
    Layers,
} from "lucide-react";

import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "components/ui/Button";

const CaseStudyObopay = () => {
    const heroImage =
        "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&w=1800&q=80";

    const images = {
        payments:
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1600&q=80",
        mobile:
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1600&q=80",
        reliability:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
        financeOps:
            "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=80",
        cta:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const kpis = [
        {
            label: "Reliability",
            value: "Always-on",
            icon: ShieldCheck,
            desc: "Designed for predictable performance under real usage.",
        },
        {
            label: "Transactions",
            value: "High volume",
            icon: Activity,
            desc: "Built to stay consistent under load and peak usage.",
        },
        {
            label: "Payments",
            value: "Daily use",
            icon: Wallet,
            desc: "Trust-centric platform for everyday financial workflows.",
        },
        {
            label: "Extensible",
            value: "Future-ready",
            icon: Layers,
            desc: "Architecture supports growth without rework.",
        },
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
                            alt="Obopay"
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
                                Obopay
                            </h1>

                            <p className="mt-3 text-base md:text-lg text-white/80">
                                Delivered a reliable mobile payments system supporting everyday financial transactions.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {["Payments", "Transaction Integrity", "Resilient Systems"].map((tag) => (
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

                {/* ✅ BODY DESIGN (KPI style) */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/16 blur-[120px]" />
                        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/10 blur-[120px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
                        {/* KPI Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {kpis.map((k) => {
                                const Icon = k.icon;
                                return (
                                    <motion.div
                                        key={k.label}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.25 }}
                                        variants={fadeUp}
                                        transition={{ duration: 0.45 }}
                                        className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                                <Icon className="h-6 w-6 text-[#2FA4A9]" />
                                            </div>
                                            <span className="text-xs font-semibold text-[#2FA4A9] uppercase tracking-wide">
                                                {k.label}
                                            </span>
                                        </div>

                                        <p className="mt-4 text-2xl font-extrabold text-[#0D2A4A]">
                                            {k.value}
                                        </p>
                                        <p className="mt-2 text-sm text-[#4A5568]">{k.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Overview + Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    Overview
                                </h2>
                                <div className="mt-3 space-y-3 text-base text-[#4A5568] leading-relaxed">
                                    <p>
                                        In emerging markets, mobile money platforms aren’t a convenience —
                                        they’re core financial infrastructure.
                                    </p>
                                    <p>
                                        Obopay needed a mobile payments system that could support everyday transactions
                                        reliably across web and mobile channels, often under challenging network
                                        and operational conditions.
                                    </p>
                                    <p>
                                        Collabrah Tech partnered with Obopay to design and build a transaction platform
                                        where consistency and trust were non-negotiable.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                                <img
                                    src={images.payments}
                                    alt="Payments"
                                    className="h-full w-full object-cover min-h-[260px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Challenge + Image strip */}
                        <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                            <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                The Challenge
                            </h2>
                            <p className="mt-2 text-base text-[#4A5568]">
                                The platform needed to function reliably where users depended on it daily:
                            </p>

                            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Supporting multiple access channels across web and mobile",
                                    "Handling frequent, high-volume financial transactions",
                                    "Ensuring transaction consistency and fault tolerance",
                                    "Minimising operational risk in payment workflows",
                                    "Designing systems that can scale without disruption",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5 flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                        <p className="text-[#4A5568]">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <img
                                    src={images.mobile}
                                    alt="Mobile usage"
                                    className="h-[160px] w-full object-cover rounded-2xl border border-gray-100"
                                    loading="lazy"
                                />
                                <img
                                    src={images.reliability}
                                    alt="Reliability systems"
                                    className="h-[160px] w-full object-cover rounded-2xl border border-gray-100"
                                    loading="lazy"
                                />
                                <img
                                    src={images.financeOps}
                                    alt="Finance operations"
                                    className="h-[160px] w-full object-cover rounded-2xl border border-gray-100"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Approach + Build + Outcome */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                            <div className="rounded-3xl bg-[#0D2A4A] p-6 md:p-8 text-white shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#2FA4A9]/25 blur-[70px]" />
                                <h2 className="text-xl md:text-2xl font-extrabold">Our Approach</h2>
                                <p className="mt-3 text-white/80">
                                    We prioritized correctness and resilience to ensure predictable behavior under pressure.
                                </p>
                                <ul className="mt-5 space-y-3">
                                    {[
                                        "Designed a robust transaction management architecture",
                                        "Built safeguards to handle failures without data loss",
                                        "Ensured consistency across peer-to-peer and bulk payment flows",
                                        "Structured the system for future growth and extensions",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                            <span className="text-white/85">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    The Build
                                </h2>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Peer-to-peer and bulk payment processing",
                                        "Transaction lifecycle management and reconciliation",
                                        "Multi-channel support across web and mobile interfaces",
                                        "Backend designed for reliability, performance, and scalability",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                            <span className="text-[#4A5568]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-3xl border border-[#2FA4A9]/20 bg-white p-6 md:p-8 shadow-md">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    The Outcome
                                </h2>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Deliver consistent, reliable payment services",
                                        "Maintain transaction integrity under load",
                                        "Support growing user adoption without rework",
                                        "Build trust with users who rely on the system daily",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                            <span className="text-[#4A5568]">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-5 rounded-2xl bg-[#0D2A4A] p-5 text-white">
                                    <p className="text-sm font-semibold">Why This Matters</p>
                                    <p className="mt-1 text-sm text-white/85">
                                        Payment systems don’t get second chances. Trust is built through reliability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA with image */}
                        <div className="mt-10 rounded-3xl border border-[#2FA4A9]/20 bg-white shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-6 md:p-10">
                                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#0D2A4A]">
                                        Have a Similar Challenge?
                                    </h2>
                                    <p className="mt-3 text-base md:text-lg text-[#4A5568] max-w-2xl">
                                        If you’re building or operating a payments platform where reliability is critical,
                                        we’d be happy to talk.
                                    </p>

                                    <div className="mt-6">
                                        <Button
                                            size="lg"
                                            className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
                                        >
                                            Schedule a Discovery Call <ArrowRight className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="relative min-h-[240px]">
                                    <img
                                        src={images.cta}
                                        alt="Payments collaboration"
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

export default CaseStudyObopay;
