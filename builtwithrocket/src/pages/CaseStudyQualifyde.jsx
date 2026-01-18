import React from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    Target,
    Layers,
    ShieldCheck,
    Sparkles,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";
import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "components/ui/Button";

const CaseStudyQualifyde = () => {
    // ✅ Dummy images (premium Unsplash)
    const images = {
        hero: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1600&q=80",
        card: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const blocks = [
        {
            title: "Overview",
            icon: Briefcase,
            content: (
                <>
                    <p>
                        Qualifyde set out to make job discovery more accessible for blue-collar
                        and non-IT workers — a segment often underserved by traditional hiring
                        platforms.
                    </p>
                    <p>
                        As usage grew, the challenge became clear: support large volumes of
                        non-technical users across multiple channels while improving the
                        quality and relevance of candidate-job matching.
                    </p>
                    <p>
                        Collabrah Tech partnered with Qualifyde to define, design, and build a
                        scalable hiring platform that could support growth without sacrificing
                        reliability or usability.
                    </p>
                </>
            ),
        },
        {
            title: "The Challenge",
            icon: Target,
            content: (
                <>
                    <p>Qualifyde needed to solve several interconnected problems:</p>
                    <ul className="mt-3 space-y-2">
                        {[
                            "Job seekers accessing the platform through multiple entry points (web, mobile, messaging)",
                            "Low tolerance for complexity among first-time and non-technical users",
                            "Manual hiring processes limiting placement speed",
                            "Early architectural decisions needing to support long-term scale",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                <span className="text-[#4A5568]">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4">
                        The risk was not just technical — it was operational. If the system
                        could not scale cleanly, growth would stall.
                    </p>
                </>
            ),
        },
        {
            title: "Our Approach",
            icon: Layers,
            content: (
                <>
                    <p>We focused on creating clarity early, before building anything.</p>
                    <ul className="mt-3 space-y-2">
                        {[
                            "Defined the minimum viable product that balanced speed with long-term scalability",
                            "Designed end-to-end system architecture to support multiple user channels from day one",
                            "Structured the platform for future intelligence and automation without rework",
                            "Prioritised reliability and consistency across all user touchpoints",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                <span className="text-[#4A5568]">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4">
                        Every decision was guided by how real users would interact with the
                        system under everyday conditions.
                    </p>
                </>
            ),
        },
        {
            title: "The Build",
            icon: ShieldCheck,
            content: (
                <>
                    <p>Collabrah Tech designed and delivered a unified hiring platform that included:</p>
                    <ul className="mt-3 space-y-2">
                        {[
                            "Multi-channel onboarding across web, mobile, and messaging interfaces",
                            "Centralised job and candidate management for employers",
                            "Video-based candidate profiles to improve screening quality",
                            "Intelligent candidate recommendations to reduce manual effort",
                            "Backend architecture designed for scale, performance, and maintainability",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                <span className="text-[#4A5568]">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4">
                        The system was built to handle growth without introducing fragility
                        or operational overhead.
                    </p>
                </>
            ),
        },
        {
            title: "The Outcome",
            icon: Sparkles,
            content: (
                <>
                    <p>The platform enabled Qualifyde to:</p>
                    <ul className="mt-3 space-y-2">
                        {[
                            "Improve candidate discovery and job matching relevance",
                            "Reduce manual screening effort for employers",
                            "Support a growing user base without performance issues",
                            "Move faster on new features without revisiting core architecture",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                <span className="text-[#4A5568]">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4">
                        The platform became a dependable foundation for continued expansion,
                        not a bottleneck.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
            {/* ✅ Header same as About */}
            <Header />

            <main className="flex-grow pb-20">
                {/* ✅ HERO */}
                <section className="relative overflow-hidden bg-[#063453]">
                    <div className="absolute inset-0">
                        <img
                            src={images.hero}
                            alt="Case study hero"
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
                                Qualifyde
                            </h1>

                            <p className="mt-3 text-base md:text-lg text-white/80">
                                Built a multi-channel hiring platform improving candidate discovery
                                and placement speed.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {["Hiring Platform", "Multi-Channel", "Scalable Architecture"].map(
                                    (tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs md:text-sm font-semibold text-white"
                                        >
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ✅ CONTENT */}
                <section className="relative overflow-hidden">
                    {/* background glows */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/18 blur-[120px]" />
                        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/10 blur-[120px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            {/* LEFT: Main Blocks */}
                            <div className="lg:col-span-2 space-y-6">
                                {blocks.map((block, idx) => {
                                    const Icon = block.icon;
                                    return (
                                        <motion.div
                                            key={block.title}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.25 }}
                                            variants={fadeUp}
                                            transition={{ duration: 0.5, delay: idx * 0.03 }}
                                            className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                                    <Icon className="h-6 w-6 text-[#2FA4A9]" />
                                                </div>

                                                <div className="w-full">
                                                    <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                                        {block.title}
                                                    </h2>
                                                    <div className="mt-3 space-y-3 text-base text-[#4A5568] leading-relaxed">
                                                        {block.content}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}

                                {/* ✅ Why This Matters */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    variants={fadeUp}
                                    transition={{ duration: 0.6 }}
                                    className="rounded-3xl border border-[#2FA4A9]/20 bg-white p-6 md:p-8 shadow-md"
                                >
                                    <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                        Why This Matters
                                    </h2>
                                    <p className="mt-3 text-base text-[#4A5568] leading-relaxed">
                                        Hiring platforms often fail not because of poor ideas, but
                                        because early systems do not hold up under real-world usage.
                                        By focusing on clear scope, sound architecture, and
                                        reliability from the start, Qualifyde gained a system that
                                        supports both immediate needs and long-term growth.
                                    </p>
                                </motion.div>
                            </div>

                            {/* RIGHT: Sticky Summary Card */}
                            <div className="lg:sticky lg:top-28 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="rounded-3xl border border-gray-100 bg-white shadow-md overflow-hidden"
                                >
                                    <img
                                        src={images.card}
                                        alt="Case study preview"
                                        className="h-[160px] w-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="p-6">
                                        <p className="text-xs font-semibold uppercase tracking-wide text-[#2FA4A9]">
                                            Snapshot
                                        </p>

                                        <h3 className="mt-2 text-lg font-extrabold text-[#0D2A4A]">
                                            Qualifyde Hiring Platform
                                        </h3>

                                        <div className="mt-4 space-y-3">
                                            {[
                                                { label: "Focus", value: "Multi-channel hiring" },
                                                { label: "Core Outcome", value: "Faster placement speed" },
                                                { label: "Built For", value: "Scale + reliability" },
                                            ].map((item) => (
                                                <div
                                                    key={item.label}
                                                    className="flex items-center justify-between gap-4 rounded-2xl bg-[#FAFBFC] border border-gray-100 px-4 py-3"
                                                >
                                                    <span className="text-sm font-semibold text-[#0D2A4A]">
                                                        {item.label}
                                                    </span>
                                                    <span className="text-sm text-[#4A5568]">
                                                        {item.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

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
                                                className="w-full bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
                                            >
                                                Schedule a Discovery Call <ArrowRight className="h-5 w-5" />
                                            </Button>

                                            <p className="text-xs text-[#4A5568] text-center mt-2">
                                                We typically respond within 24 hours.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Secondary CTA */}
                                <div className="rounded-3xl border border-[#0D2A4A]/10 bg-[#0D2A4A] p-6 text-white shadow-md">
                                    <h4 className="text-base font-bold">Have a similar challenge?</h4>
                                    <p className="mt-2 text-sm text-white/80">
                                        If your platform needs scalability, reliability, or multi-channel user support —
                                        we can help you design it right from day one.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ✅ Final CTA Big */}
                        <section className="mt-10">
                            <div className="rounded-3xl border border-[#2FA4A9]/20 bg-white p-6 md:p-10 shadow-lg relative overflow-hidden">
                                <div className="absolute -top-12 -right-12 h-[240px] w-[240px] rounded-full bg-[#2FA4A9]/15 blur-[90px]" />

                                <div className="relative z-10">
                                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#0D2A4A]">
                                        Have a Similar Challenge?
                                    </h2>
                                    <p className="mt-3 text-base md:text-lg text-[#4A5568] max-w-3xl">
                                        If you are building a platform that needs to support growth,
                                        multiple user channels, or operational reliability from day one,
                                        we would be happy to talk.
                                    </p>

                                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                        <Button
                                            size="lg"
                                            onClick={() =>
                                                window.open(
                                                    "https://calendly.com/williammwakaa",
                                                    "_blank",
                                                    "noopener,noreferrer"
                                                )
                                            }
                                            className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
                                        >
                                            Schedule a Discovery Call
                                        </Button>

                                        <Button
                                            size="lg"
                                            className="bg-[#0D2A4A] hover:bg-[#0D2A4A]/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
                                        >
                                            View More Case Studies
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>

            {/* ✅ Footer same as About */}
            <FooterSection />
        </div>
    );
};

export default CaseStudyQualifyde;
