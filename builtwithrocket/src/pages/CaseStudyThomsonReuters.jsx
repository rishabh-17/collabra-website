import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Database,
    Layers,
    Activity,
    LineChart,
} from "lucide-react";

import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "components/ui/Button";

const CaseStudyThomsonReuters = () => {
    const heroImage =
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=80";

    const images = {
        dataLab:
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
        pipeline:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
        pharma:
            "https://images.unsplash.com/photo-1583912268180-93a3f8f3b8fe?auto=format&fit=crop&w=1600&q=80",
        dashboard:
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80",
        cta:
            "https://images.unsplash.com/photo-1582719478185-2c3a6b5d0b47?auto=format&fit=crop&w=1600&q=80",
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const pipelineSteps = [
        { title: "Ingest", desc: "High-volume loaders pull data from multiple feeds", icon: Database },
        { title: "Structure", desc: "Pipelines normalize relationships across entities", icon: Layers },
        { title: "Analyze", desc: "Reporting is consistent under constant growth", icon: Activity },
        { title: "Deliver", desc: "Professionals rely on predictable performance", icon: LineChart },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
            <Header />

            <main className="flex-grow pb-20">
                {/* ✅ HERO (same style) */}
                <section className="relative overflow-hidden bg-[#063453]">
                    <div className="absolute inset-0">
                        <img
                            src={heroImage}
                            alt="Thomson Reuters"
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
                                Thomson Reuters
                            </h1>

                            <p className="mt-3 text-base md:text-lg text-white/80">
                                Built data-intensive platforms supporting pharmaceutical research and decision-making.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {["Pharma Intelligence", "Data Pipelines", "Reporting"].map((tag) => (
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

                {/* ✅ BODY (Data pipeline design) */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/16 blur-[120px]" />
                        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/10 blur-[120px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
                        {/* Overview + Image collage */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                            <div className="lg:col-span-2 rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    Overview
                                </h2>
                                <div className="mt-3 space-y-3 text-base text-[#4A5568] leading-relaxed">
                                    <p>
                                        Thomson Reuters operates complex pharmaceutical intelligence platforms used across
                                        the drug discovery and development lifecycle.
                                    </p>
                                    <p>
                                        As data volumes grew and sources multiplied, teams needed systems that could reliably
                                        ingest, structure, and present information professionals could trust.
                                    </p>
                                    <p>
                                        Collabrah Tech partnered with Thomson Reuters to build and extend data-heavy platforms
                                        designed for accuracy, scale, and long-term use.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                                <img
                                    src={images.pharma}
                                    alt="Pharma research"
                                    className="h-full w-full object-cover min-h-[260px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Challenge + Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-3xl bg-[#0D2A4A] p-6 md:p-8 text-white shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#2FA4A9]/25 blur-[70px]" />
                                <h2 className="text-xl md:text-2xl font-extrabold">The Challenge</h2>
                                <p className="mt-3 text-white/80">
                                    The challenge was not collecting data — it was making it usable.
                                </p>

                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Large volumes of data arriving from internal and external sources",
                                        "Complex relationships across molecules, trials, and stages",
                                        "Reporting that must remain accurate under constant growth",
                                        "Performance expectations for professional users",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                            <span className="text-white/85">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-5 text-white/75">
                                    Any weakness in data handling would directly affect confidence in the platform.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                                <img
                                    src={images.dataLab}
                                    alt="Data systems"
                                    className="h-full w-full object-cover min-h-[280px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Pipeline steps */}
                        <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                            <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                Our Approach (Data Pipeline)
                            </h2>
                            <p className="mt-2 text-base text-[#4A5568] max-w-3xl">
                                We built systems that absorb complexity without exposing it to users.
                            </p>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                                {pipelineSteps.map((step) => {
                                    const Icon = step.icon;
                                    return (
                                        <div
                                            key={step.title}
                                            className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5"
                                        >
                                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                                <Icon className="h-5 w-5 text-[#2FA4A9]" />
                                            </div>
                                            <p className="mt-3 font-extrabold text-[#0D2A4A]">
                                                {step.title}
                                            </p>
                                            <p className="mt-2 text-sm text-[#4A5568]">{step.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 rounded-3xl overflow-hidden border border-gray-100">
                                <img
                                    src={images.pipeline}
                                    alt="Pipeline"
                                    className="h-[240px] w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Build + Dashboard */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    The Build
                                </h2>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "High-volume data loaders integrating external feeds",
                                        "Reporting apps for structured pharmaceutical data",
                                        "Visual representations of discovery lifecycles",
                                        "Interfaces for exploring complex molecule relationships",
                                        "Backends designed to scale alongside growing datasets",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                            <span className="text-[#4A5568]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                                <img
                                    src={images.dashboard}
                                    alt="Analytics dashboard"
                                    className="h-full w-full object-cover min-h-[260px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Outcome */}
                        <div className="rounded-3xl border border-[#2FA4A9]/20 bg-white p-6 md:p-8 shadow-md">
                            <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                The Outcome
                            </h2>

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Access large, complex datasets with confidence",
                                    "Rely on consistent, accurate reporting across applications",
                                    "Scale ingestion without degrading performance",
                                    "Support professionals across drug development stages",
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

                            <div className="mt-6 rounded-2xl bg-[#0D2A4A] p-5 text-white">
                                <p className="text-sm font-semibold">Why This Matters</p>
                                <p className="mt-1 text-sm text-white/85">
                                    In data-driven environments, trust is everything.
                                    By designing for accuracy, performance, and clarity, teams can grow without losing reliability.
                                </p>
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
                                        If your organization relies on large, complex datasets and needs systems that remain reliable
                                        as data grows, we’d be happy to talk.
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
                                        alt="Healthcare data"
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

export default CaseStudyThomsonReuters;
