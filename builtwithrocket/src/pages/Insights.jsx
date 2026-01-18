import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Wrench,
    Bot,
    Layers,
    BookOpen,
} from "lucide-react";

import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "components/ui/Button";
import { useContactDrawer } from "../components/ContactDrawerProvider";

const Insights = () => {
    const { openDrawer } = useContactDrawer();
    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const images = {
        hero: "https://picsum.photos/seed/insights-hero/1900/900",
        reliability: "https://picsum.photos/seed/insights-reliability/1200/800",
        automation: "https://picsum.photos/seed/insights-automation/1200/800",
        ai: "https://picsum.photos/seed/insights-ai/1200/800",
        architecture: "https://picsum.photos/seed/insights-architecture/1200/800",
        cta: "https://picsum.photos/seed/insights-cta/1600/900",
    };

    const featuredTopics = [
        {
            title: "Reliability & Stability",
            description:
                "How to build systems that don’t fall apart when traffic, usage, and expectations grow.",
            icon: ShieldCheck,
            image: images.reliability,
            tag: "Production-first",
        },
        {
            title: "Automation That Saves Time",
            description:
                "Remove manual work safely and predictably — without creating fragile processes.",
            icon: Wrench,
            image: images.automation,
            tag: "Operations",
        },
        {
            title: "AI With Real Outcomes",
            description:
                "Where AI helps (and where it harms). Practical use-cases that create measurable value.",
            icon: Bot,
            image: images.ai,
            tag: "AI & Decision Support",
        },
        {
            title: "Scalable Architecture",
            description:
                "Foundations that stay understandable, maintainable, and fast as the product evolves.",
            icon: Layers,
            image: images.architecture,
            tag: "System Design",
        },
    ];

    const quickGuides = [
        {
            title: "How to reduce tech debt without slowing down delivery",
            icon: Sparkles,
        },
        {
            title: "What to monitor in production (before users complain)",
            icon: ShieldCheck,
        },
        {
            title: "Automation checklists for busy teams",
            icon: Wrench,
        },
        {
            title: "AI guardrails: ownership, accuracy, and accountability",
            icon: Bot,
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
                            src={images.hero}
                            alt="Insights hero"
                            className="h-full w-full object-cover opacity-25"
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://picsum.photos/seed/insights-fallback/1900/900";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#063453] via-[#063453]/90 to-[#063453]/60" />
                    </div>

                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage:
                                "linear-gradient(hsla(176, 59%, 52%, 0.45) 1px, transparent 1px), linear-gradient(90deg, hsla(176, 59%, 52%, 0.45) 1px, transparent 1px)",
                            backgroundSize: "50px 50px",
                        }}
                    />

                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                Insights
                            </div>

                            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                                Practical guidance for building, running, and improving{" "}
                                <span className="text-[#2FA4A9]">dependable technology</span>.
                            </h1>

                            <p className="mt-4 max-w-3xl text-base md:text-lg text-white/80">
                                Explore clear, real-world insights on software development, automation, AI,
                                and IT — written to help businesses make confident, informed decisions
                                without the jargon.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {["Reliability", "Automation", "AI", "Architecture"].map((tag) => (
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

                {/* ✅ PAGE BACKDROP */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute -top-36 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/18 blur-[120px]" />
                        <div className="absolute -top-16 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/10 blur-[120px]" />
                        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[#2FA4A9]/12 blur-[140px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
                        {/* ✅ FEATURED TOPICS */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <div className="flex items-end justify-between gap-4 flex-wrap">
                                <div>
                                    <p className="text-sm font-semibold tracking-wide uppercase text-[#2FA4A9]">
                                        What You’ll Find Here
                                    </p>
                                    <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                        Featured Topics
                                    </h2>
                                    <p className="mt-2 text-base text-[#4A5568] max-w-2xl">
                                        We focus on outcomes: stability, clarity, and systems your team can
                                        maintain without chaos.
                                    </p>
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-2xl bg-white border border-gray-100 px-4 py-2 shadow-sm">
                                    <BookOpen className="h-4 w-4 text-[#2FA4A9]" />
                                    <span className="text-sm font-semibold text-[#0D2A4A]">
                                        Articles coming soon
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {featuredTopics.map((topic) => {
                                    const Icon = topic.icon;
                                    return (
                                        <div
                                            key={topic.title}
                                            className="group rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
                                        >
                                            <div className="relative h-44">
                                                <img
                                                    src={topic.image}
                                                    alt={topic.title}
                                                    className="h-full w-full object-cover"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.currentTarget.src =
                                                            "https://picsum.photos/seed/insights-topic-fallback/1200/800";
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2A4A]/70 via-[#0D2A4A]/10 to-transparent" />

                                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                                    <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold text-white">
                                                        {topic.tag}
                                                    </span>

                                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 border border-white/15">
                                                        <Icon className="h-5 w-5 text-[#2FA4A9]" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <h3 className="text-lg md:text-xl font-extrabold text-[#0D2A4A]">
                                                    {topic.title}
                                                </h3>
                                                <p className="mt-2 text-sm md:text-base text-[#4A5568]">
                                                    {topic.description}
                                                </p>

                                                <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-[#2FA4A9]/0 via-[#2FA4A9]/35 to-[#2FA4A9]/0 opacity-0 group-hover:opacity-100 transition" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.section>

                        {/* ✅ INSIGHTS COMING SOON + QUICK GUIDES */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                        >
                            <div className="lg:col-span-2 rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A] mb-3">
                                    Insights coming soon
                                </h2>
                                <p className="text-base text-[#4A5568] leading-relaxed">
                                    We are preparing a series of clear, practical articles on reliability,
                                    automation, AI, and long-term system thinking. In the meantime, if there
                                    is a specific topic you would like us to cover, reach out using the CTA
                                    below.
                                </p>

                                <div className="mt-6 rounded-2xl border border-[#2FA4A9]/20 bg-[#2FA4A9]/10 p-5">
                                    <p className="text-sm font-semibold text-[#0D2A4A]">
                                        What to expect from our writing:
                                    </p>
                                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            "Clear explanations (no buzzwords)",
                                            "Trade-offs explained honestly",
                                            "Production reality over theory",
                                            "Actionable takeaways",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-start gap-3 rounded-2xl bg-white border border-gray-100 p-4"
                                            >
                                                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                <p className="text-sm text-[#4A5568]">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <p className="text-sm font-semibold tracking-wide uppercase text-[#2FA4A9] mb-2">
                                    Quick Guides
                                </p>
                                <h3 className="text-lg md:text-xl font-extrabold text-[#0D2A4A]">
                                    Topics we’ll cover
                                </h3>

                                <div className="mt-5 space-y-3">
                                    {quickGuides.map((g) => {
                                        const Icon = g.icon;
                                        return (
                                            <div
                                                key={g.title}
                                                className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-4"
                                            >
                                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                                    <Icon className="h-5 w-5 text-[#2FA4A9]" />
                                                </div>
                                                <p className="text-sm md:text-base text-[#4A5568]">
                                                    {g.title}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-6 rounded-2xl bg-[#0D2A4A] p-5 text-white">
                                    <p className="text-sm font-semibold">Want early access?</p>
                                    <p className="mt-1 text-sm text-white/80">
                                        We can share upcoming drafts or summaries on request.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* ✅ FINAL CTA WITH IMAGE */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl border border-[#2FA4A9]/20 bg-white shadow-lg overflow-hidden"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-6 md:p-10">
                                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#0D2A4A]">
                                        Have a question you want us to cover?
                                    </h2>
                                    <p className="mt-3 text-base md:text-lg text-[#4A5568] max-w-2xl">
                                        If there is a system, process, or decision you’re unsure about,
                                        let us know — we’ll explain it clearly with real examples.
                                    </p>

                                    <div className="mt-6">
                                        <Button
                                            size="lg"
                                            onClick={openDrawer}
                                            className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
                                        >
                                            Schedule a Discovery Call <ArrowRight className="h-5 w-5" />
                                        </Button>
                                    </div>

                                    <p className="mt-4 text-xs text-[#4A5568]">
                                        We usually respond within 24 hours.
                                    </p>
                                </div>

                                <div className="relative min-h-[260px]">
                                    <img
                                        src={images.cta}
                                        alt="Insights CTA"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://picsum.photos/seed/insights-cta-fallback/1600/900";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D2A4A]/70 to-transparent" />
                                </div>
                            </div>
                        </motion.section>

                        <div className="h-6" />
                    </div>
                </div>
            </main>

            <FooterSection />
        </div>
    );
};

export default Insights;
