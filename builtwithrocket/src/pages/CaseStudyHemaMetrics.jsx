import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    HeartPulse,
    ClipboardCheck,
    Layers,
} from "lucide-react";

import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "components/ui/Button";

const fallbackImg = "https://picsum.photos/seed/hema-fallback/1600/900";

const Img = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading="lazy"
            onError={(e) => {
                e.currentTarget.src = fallbackImg;
            }}
        />
    );
};

const CaseStudyHemaMetrics = () => {
    // ✅ More stable sources (picsum)
    const heroImage = "https://picsum.photos/seed/hema-hero/1900/900";

    const images = {
        healthcare: "https://picsum.photos/seed/hema-healthcare/1600/900",
        devices: "https://picsum.photos/seed/hema-devices/1600/900",
        compliance: "https://picsum.photos/seed/hema-compliance/1600/900",
        systems: "https://picsum.photos/seed/hema-systems/1600/900",
        cta: "https://picsum.photos/seed/hema-cta/1600/900",
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const pillars = [
        {
            title: "Accuracy First",
            desc: "Healthcare software must behave predictably under real-world constraints.",
            icon: ClipboardCheck,
        },
        {
            title: "Reliability",
            desc: "Stability matters more when systems impact patient care.",
            icon: ShieldCheck,
        },
        {
            title: "Maintainability",
            desc: "Systems must evolve without disrupting core operations.",
            icon: Layers,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
            <Header />

            <main className="flex-grow pb-20">
                {/* ✅ HERO */}
                <section className="relative overflow-hidden bg-[#063453]">
                    <div className="absolute inset-0">
                        <Img
                            src={heroImage}
                            alt="Hema Metrics"
                            className="h-full w-full object-cover opacity-25"
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
                                Hema Metrics
                            </h1>

                            <p className="mt-3 text-base md:text-lg text-white/80">
                                Supported healthcare software systems powering patient-focused medical device innovation.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {["Healthcare", "Compliance", "Reliability"].map((tag) => (
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

                {/* ✅ BODY */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/16 blur-[120px]" />
                        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/10 blur-[120px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
                        {/* Overview */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                        <HeartPulse className="h-6 w-6 text-[#2FA4A9]" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                            Overview
                                        </h2>
                                        <p className="mt-2 text-base text-[#4A5568] leading-relaxed">
                                            Hema Metrics develops healthcare software supporting medical devices used in patient care,
                                            with a strong focus on accuracy, reliability, and compliance.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 space-y-3 text-base text-[#4A5568] leading-relaxed">
                                    <p>
                                        As the company expanded its digital presence and supporting systems, it needed software components
                                        that could handle sensitive data, integrate cleanly, and remain dependable over time.
                                    </p>
                                    <p>
                                        Collabrah Tech partnered with Hema Metrics to support healthcare-focused software systems aligned
                                        with these requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                                <Img
                                    src={images.healthcare}
                                    alt="Healthcare systems"
                                    className="h-full w-full object-cover min-h-[260px]"
                                />
                            </div>
                        </div>

                        {/* Pillars */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {pillars.map((p) => {
                                const Icon = p.icon;
                                return (
                                    <div
                                        key={p.title}
                                        className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                            <Icon className="h-6 w-6 text-[#2FA4A9]" />
                                        </div>
                                        <h3 className="mt-4 text-lg font-extrabold text-[#0D2A4A]">
                                            {p.title}
                                        </h3>
                                        <p className="mt-2 text-sm md:text-base text-[#4A5568]">
                                            {p.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Challenge */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                            <div className="lg:col-span-2 rounded-3xl bg-[#0D2A4A] p-6 md:p-8 text-white shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#2FA4A9]/25 blur-[70px]" />
                                <h2 className="text-xl md:text-2xl font-extrabold">The Challenge</h2>

                                <p className="mt-3 text-white/80">
                                    Healthcare systems operate under stricter expectations than most software environments.
                                </p>

                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Supporting software tied to patient-focused medical devices",
                                        "Ensuring accuracy and consistency across systems",
                                        "Handling structured and unstructured data reliably",
                                        "Maintaining stability in environments where errors carry real-world consequences",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                            <span className="text-white/85">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-5 text-white/75">
                                    Any instability or inconsistency could directly impact trust in the platform.
                                </p>
                            </div>

                            <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                                <Img
                                    src={images.devices}
                                    alt="Medical device workflow"
                                    className="h-full w-full object-cover min-h-[260px]"
                                />
                            </div>
                        </div>

                        {/* Approach + Outcome */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    Our Approach
                                </h2>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Worked within existing healthcare constraints and standards",
                                        "Built components designed for accuracy and predictable behaviour",
                                        "Ensured integrations and data handling remained consistent over time",
                                        "Prioritised maintainability to support long-term product evolution",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                            <span className="text-[#4A5568]">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 rounded-3xl overflow-hidden border border-gray-100">
                                    <Img
                                        src={images.compliance}
                                        alt="Compliance and governance"
                                        className="h-[220px] w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#2FA4A9]/20 bg-white p-6 md:p-8 shadow-md">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    The Outcome
                                </h2>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Supported patient-focused innovation with reliable software",
                                        "Maintained confidence in system accuracy and performance",
                                        "Evolved components without disrupting operations",
                                        "Operated systems aligned with healthcare quality expectations",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                            <span className="text-[#4A5568]">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 rounded-3xl overflow-hidden border border-gray-100">
                                    <Img
                                        src={images.systems}
                                        alt="Stable infrastructure"
                                        className="h-[220px] w-full object-cover"
                                    />
                                </div>

                                <div className="mt-5 rounded-2xl bg-[#0D2A4A] p-5 text-white">
                                    <p className="text-sm font-semibold">Why This Matters</p>
                                    <p className="mt-1 text-sm text-white/85">
                                        In healthcare, reliability isn’t optional. Trust is earned through consistent execution.
                                    </p>
                                </div>
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
                                        If you’re operating in a healthcare or regulated environment where software reliability is critical,
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
                                    <Img
                                        src={images.cta}
                                        alt="Healthcare team collaboration"
                                        className="absolute inset-0 h-full w-full object-cover"
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

export default CaseStudyHemaMetrics;
