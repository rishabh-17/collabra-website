import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ShieldCheck,
    Search,
    FileText,
    Layers,
    CheckCircle2,
} from "lucide-react";

import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "components/ui/Button";

const CaseStudyNetEnforcers = () => {
    const heroImage =
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=80";

    const images = {
        marketplaces:
            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
        monitoring:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        evidence:
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80",
        cta:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const evidenceCards = [
        {
            title: "Continuous Scanning",
            icon: Search,
            desc: "Automated monitoring across marketplaces without manual effort.",
        },
        {
            title: "Actionable Evidence",
            icon: FileText,
            desc: "Clear violation records designed to be reviewable and defensible.",
        },
        {
            title: "Multi-Client Scale",
            icon: Layers,
            desc: "Multi-tenant architecture supporting multiple brands at once.",
        },
        {
            title: "Trustworthy Detection",
            icon: ShieldCheck,
            desc: "Consistent results that increase confidence in enforcement workflows.",
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
                            alt="NetEnforcers"
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
                                NetEnforcers
                            </h1>

                            <p className="mt-3 text-base md:text-lg text-white/80">
                                Built a brand protection system detecting online copyright and trademark violations.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {["Brand Protection", "Marketplace Scanning", "Evidence Reporting"].map((tag) => (
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

                {/* ✅ BODY: Report style */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/16 blur-[120px]" />
                        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/10 blur-[120px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
                        {/* Overview (like report header) */}
                        <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-[#2FA4A9]">
                                        Executive Summary
                                    </p>
                                    <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                        Overview
                                    </h2>
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20 px-4 py-2">
                                    <ShieldCheck className="h-4 w-4 text-[#2FA4A9]" />
                                    <p className="text-sm font-semibold text-[#0D2A4A]">
                                        Continuous protection at scale
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                                <div className="space-y-3 text-base text-[#4A5568] leading-relaxed">
                                    <p>
                                        Brands operating online face constant risk from unauthorized sellers,
                                        counterfeit products, and misuse of copyrighted content across marketplaces.
                                    </p>
                                    <p>
                                        NetEnforcers needed a system that could continuously monitor large volumes
                                        of online listings, identify potential infringements, and surface actionable
                                        violations for review — without manual effort.
                                    </p>
                                    <p>
                                        Collabrah Tech partnered with NetEnforcers to build a scalable brand protection
                                        platform designed for accuracy and long-term operation.
                                    </p>
                                </div>

                                <div className="rounded-3xl overflow-hidden border border-gray-100">
                                    <img
                                        src={images.marketplaces}
                                        alt="Marketplaces"
                                        className="h-full w-full object-cover min-h-[260px]"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Challenge + Monitoring Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                            <div className="lg:col-span-2 rounded-3xl bg-[#0D2A4A] p-6 md:p-8 text-white shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#2FA4A9]/25 blur-[70px]" />
                                <h2 className="text-xl md:text-2xl font-extrabold">The Challenge</h2>
                                <p className="mt-3 text-white/80">
                                    The core challenge was scale and coverage.
                                </p>

                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Brand and product data spread across multiple marketplaces",
                                        "Infringements appearing across images, text, and listings",
                                        "Manual monitoring unable to keep pace with volume",
                                        "Reporting needed to be accurate and defensible",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                            <span className="text-white/85">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-5 text-white/75">
                                    Any gaps in detection would undermine trust in the system.
                                </p>
                            </div>

                            <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                                <img
                                    src={images.monitoring}
                                    alt="Monitoring"
                                    className="h-full w-full object-cover min-h-[260px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Evidence Cards */}
                        <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                            <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                Our Approach
                            </h2>
                            <p className="mt-2 text-base text-[#4A5568]">
                                We focused on automation, consistency, and reportable evidence.
                            </p>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                                {evidenceCards.map((card) => {
                                    const Icon = card.icon;
                                    return (
                                        <div
                                            key={card.title}
                                            className="rounded-3xl border border-gray-100 bg-[#FAFBFC] p-6"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                                    <Icon className="h-6 w-6 text-[#2FA4A9]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-extrabold text-[#0D2A4A]">
                                                        {card.title}
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base text-[#4A5568]">
                                                        {card.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 rounded-3xl overflow-hidden border border-gray-100">
                                <img
                                    src={images.evidence}
                                    alt="Evidence reporting"
                                    className="h-[240px] w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Build + Outcome */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    The Build
                                </h2>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Automated scanning of e-commerce and online marketplaces",
                                        "Detection of unauthorized use of brand assets and content",
                                        "Centralised reporting of identified violations",
                                        "Multi-tenant support for multiple clients and brands",
                                        "Backend architecture designed for scale and extensibility",
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
                                        "Identify infringements more quickly and consistently",
                                        "Reduce manual monitoring effort",
                                        "Provide clearer, actionable violation reports",
                                        "Scale brand protection across multiple clients",
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
                                        Online brand protection only works when detection is consistent and scalable.
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
                                        If your business needs better visibility into online risk, compliance, or brand misuse,
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
                                        alt="Collaboration"
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

export default CaseStudyNetEnforcers;
