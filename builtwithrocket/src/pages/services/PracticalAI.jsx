import React from "react";
import { motion } from "framer-motion";
import {
    Bot,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
    ShieldCheck,
    Quote,
    ScanEye,
    Layers,
    Lock,
    Building2,
} from "lucide-react";

import Header from "../../components/Header";
import FooterSection from "../homepage/components/FooterSection";
import Button from "../../components/ui/Button";
import { useContactDrawer } from "../../components/ContactDrawerProvider";

const PracticalAI = () => {
    const { openDrawer } = useContactDrawer();

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    // ✅ stable dummy images (AI themed)
    const images = {
        hero: "https://picsum.photos/seed/service-ai-hero/1900/900",
        problem: "https://picsum.photos/seed/service-ai-problem/1600/1000",
        method: "https://picsum.photos/seed/service-ai-method/1600/1000",
        scope: "https://picsum.photos/seed/service-ai-scope/1600/1000",
        case: "https://picsum.photos/seed/service-ai-case/1600/1000",
        testimonials: "https://picsum.photos/seed/service-ai-testimonials/1600/900",
        cta: "https://picsum.photos/seed/service-ai-cta/1600/900",
    };

    const logos = ["Microsoft", "Nike", "AT&T", "Thomson Reuters"];

    const includes = [
        "AI use-case evaluation (value, risk, and feasibility)",
        "Guardrails + governance design (what AI can and cannot do)",
        "Human-in-the-loop workflows for critical decisions",
        "Monitoring, auditability, and safe failure modes",
        "Integration into your existing product & operations (not side tools)",
    ];

    const testimonials = [
        {
            quote:
                "They treated AI like a production system — not a demo. That changed everything.",
            meta: "— Engineering Leader, Regulated Environment",
        },
        {
            quote:
                "We finally had a clear answer on where AI helps and where it creates risk.",
            meta: "— Product Owner, Operations Platform",
        },
        {
            quote:
                "Explainable, governed automation reduced manual load without creating compliance problems.",
            meta: "— Head of Engineering, Enterprise Platform",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
            <Header />

            <main className="flex-grow pb-20">
                {/* ✅ 1) HERO SECTION (Promise + Filter + Proof + Logos) */}
                <section className="relative overflow-hidden bg-[#063453]">
                    <div className="absolute inset-0">
                        <img
                            src={images.hero}
                            alt="AI & Intelligent Systems"
                            className="h-full w-full object-cover opacity-25"
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://picsum.photos/seed/service-ai-hero-fallback/1900/900";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#063453] via-[#063453]/90 to-[#063453]/60" />
                    </div>

                    <div
                        className="absolute inset-0 opacity-15"
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
                                AI & Intelligent Systems (Governed AI)
                            </div>

                            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                                AI systems built with{" "}
                                <span className="text-[#2FA4A9]">restraint, guardrails, and accountability</span>
                            </h1>

                            <p className="mt-4 max-w-3xl text-base md:text-lg text-white/80">
                                Practical AI for teams that value correctness, explainability, and operational safety —
                                not hype, not black boxes, and not fragile automation.
                            </p>

                            {/* ✅ Filter tags */}
                            <div className="mt-7 flex flex-wrap gap-3">
                                {[
                                    "Good fit: governed AI",
                                    "Good fit: real ops usage",
                                    "Not for: AI experiments",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs md:text-sm font-semibold text-white"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                <Button
                                    onClick={openDrawer}
                                    className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white px-7 py-3 rounded-xl text-base md:text-lg font-semibold shadow-md flex items-center justify-center gap-2"
                                >
                                    Talk Through Your AI Use Case <ArrowRight className="h-5 w-5" />
                                </Button>

                                <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/85">
                                    Explainable • auditable • safe-to-operate
                                </div>
                            </div>

                            {/* ✅ Logo Strip */}
                            <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                                    Trusted by teams building business-critical systems
                                </p>
                                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                                    {logos.map((l) => (
                                        <span key={l} className="text-sm font-semibold text-white/65 grayscale">
                                            {l}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ✅ BACKDROP */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/16 blur-[120px]" />
                        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/10 blur-[120px]" />
                        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[#2FA4A9]/10 blur-[140px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
                        {/* ✅ 2) WHY THIS FAILS WITHOUT RIGHT APPROACH */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
                        >
                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                        <AlertTriangle className="h-6 w-6 text-[#2FA4A9]" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                            Why AI fails without the right approach
                                        </h2>
                                        <p className="mt-2 text-base text-[#4A5568]">
                                            Most AI projects don’t fail technically — they fail operationally.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                    <p className="text-sm font-semibold text-[#0D2A4A]">Common failure patterns</p>
                                    <ul className="mt-3 space-y-2">
                                        {[
                                            "No clear ownership or governance",
                                            "Outputs can’t be explained or trusted",
                                            "No guardrails or policy constraints",
                                            "Production accountability disappears",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                <span className="text-sm md:text-base text-[#4A5568]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-5 rounded-2xl border border-[#2FA4A9]/20 bg-[#2FA4A9]/10 p-5">
                                    <p className="text-sm font-semibold text-[#0D2A4A]">
                                        Why “fast AI” backfires
                                    </p>
                                    <p className="mt-2 text-sm md:text-base text-[#4A5568]">
                                        Fast AI often skips accountability, monitoring, validation, and failure modes —
                                        leading to risk exposure and distrust.
                                    </p>
                                </div>

                                {/* ✅ Pull quote */}
                                <div className="mt-5 rounded-2xl bg-[#0D2A4A] p-5 text-white shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <Quote className="h-5 w-5 text-[#2FA4A9] mt-1" />
                                        <p className="text-sm md:text-base text-white/85">
                                            “The risk wasn’t building AI — it was operating it safely in production.”
                                        </p>
                                    </div>
                                    <p className="mt-2 text-xs text-white/60">— Head of Engineering (Anonymous)</p>
                                </div>
                            </div>

                            <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                                <img
                                    src={images.problem}
                                    alt="AI risk in production"
                                    className="h-full w-full object-cover min-h-[320px]"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://picsum.photos/seed/service-ai-problem-fallback/1600/1000";
                                    }}
                                />
                            </div>
                        </motion.section>

                        {/* ✅ 3) HOW WE APPROACH DIFFERENTLY (Method + mini case reference) */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                                <div className="lg:col-span-2">
                                    <p className="text-sm font-semibold tracking-wide uppercase text-[#2FA4A9]">
                                        How we approach AI differently
                                    </p>

                                    <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                        Governed AI — designed to be trusted
                                    </h2>

                                    <p className="mt-3 text-base text-[#4A5568] max-w-3xl">
                                        We focus on restraint, guardrails, and clarity so AI becomes a reliable operational asset.
                                    </p>

                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            {
                                                title: "Guardrails + constraints",
                                                desc: "AI operates within defined rules and allowed actions.",
                                                icon: Lock,
                                            },
                                            {
                                                title: "Explainable logic",
                                                desc: "Decisions should be auditable, not mysterious.",
                                                icon: ScanEye,
                                            },
                                            {
                                                title: "Stable foundations",
                                                desc: "AI is a layer on top of strong system architecture.",
                                                icon: Layers,
                                            },
                                            {
                                                title: "Accountability in production",
                                                desc: "Monitoring, quality signals, and ownership built-in.",
                                                icon: ShieldCheck,
                                            },
                                        ].map((card) => {
                                            const Icon = card.icon;
                                            return (
                                                <div
                                                    key={card.title}
                                                    className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                                            <Icon className="h-5 w-5 text-[#2FA4A9]" />
                                                        </div>
                                                        <div>
                                                            <p className="font-extrabold text-[#0D2A4A]">{card.title}</p>
                                                            <p className="mt-1 text-sm text-[#4A5568]">{card.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* ✅ mini case reference */}
                                    <div className="mt-6 rounded-2xl border border-[#2FA4A9]/25 bg-[#2FA4A9]/10 p-5">
                                        <p className="text-sm font-semibold text-[#0D2A4A]">Mini case reference</p>
                                        <p className="mt-2 text-sm md:text-base text-[#4A5568]">
                                            In a multi-channel hiring platform, governed recommendations improved matching
                                            quality without introducing unreliable automation or unclear decisions.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                                    <img
                                        src={images.method}
                                        alt="Governed AI workflow"
                                        className="h-full w-full object-cover min-h-[320px]"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://picsum.photos/seed/service-ai-method-fallback/1600/1000";
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.section>

                        {/* ✅ 4) WHAT THIS SERVICE INCLUDES */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
                        >
                            <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                                <img
                                    src={images.scope}
                                    alt="AI delivery scope"
                                    className="h-full w-full object-cover min-h-[320px]"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://picsum.photos/seed/service-ai-scope-fallback/1600/1000";
                                    }}
                                />
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                        <Bot className="h-6 w-6 text-[#2FA4A9]" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                            What this service includes
                                        </h2>
                                        <p className="mt-2 text-base text-[#4A5568]">
                                            Practical work focused on measurable value and safe operation.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-3">
                                    {includes.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-4"
                                        >
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                            <p className="text-sm md:text-base text-[#4A5568]">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-2xl bg-[#0D2A4A] p-5 text-white">
                                    <p className="text-sm font-semibold">Outcome you should expect</p>
                                    <p className="mt-1 text-sm text-white/85">
                                        AI that delivers value without introducing operational risk or distrust.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* ✅ 5) CASE STUDY HIGHLIGHT (Mandatory) */}
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
                                    <p className="text-sm font-semibold tracking-wide uppercase text-[#2FA4A9]">
                                        Proof
                                    </p>
                                    <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                        Case Study Highlight
                                    </h2>

                                    <div className="mt-5 rounded-3xl border border-gray-100 bg-[#FAFBFC] p-6">
                                        <p className="text-xs font-semibold text-[#2FA4A9] uppercase">
                                            Intelligence with safe operational constraints
                                        </p>
                                        <h3 className="mt-2 text-lg md:text-xl font-extrabold text-[#0D2A4A]">
                                            Hiring Platform Recommendations (Qualifyde)
                                        </h3>

                                        <div className="mt-4 space-y-3 text-sm md:text-base text-[#4A5568]">
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Client type:</span> Hiring platform
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Problem:</span> Improve matching quality without confusion
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">What we built:</span> Recommendations + structured onboarding flows
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Constraints:</span> Multi-channel usage + non-technical users
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Outcome:</span> Better discovery + less manual screening
                                            </p>
                                        </div>

                                        <div className="mt-5">
                                            <Button
                                                size="sm"
                                                onClick={() => window.location.assign("/case-studies/qualifyde")}
                                                className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-semibold px-4 py-2 rounded-xl inline-flex items-center gap-2"
                                            >
                                                View full case study <ArrowRight className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative min-h-[280px]">
                                    <img
                                        src={images.case}
                                        alt="AI proof case"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://picsum.photos/seed/service-ai-case-fallback/1600/1000";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D2A4A]/75 to-transparent" />
                                </div>
                            </div>
                        </motion.section>

                        {/* ✅ 6) WHO THIS IS / ISN’T FOR */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                        >
                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                    This is a good fit if…
                                </h2>
                                <div className="mt-5 space-y-3">
                                    {[
                                        "You need AI with clear governance and ownership",
                                        "Correctness and explainability matter",
                                        "AI must integrate into real workflows",
                                        "You want AI that remains stable after launch",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 rounded-2xl bg-[#FAFBFC] border border-gray-100 p-4"
                                        >
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                            <span className="text-sm md:text-base text-[#4A5568]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#0D2A4A]/10 bg-[#0D2A4A] p-6 md:p-10 shadow-sm text-white relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#2FA4A9]/25 blur-[70px]" />
                                <h2 className="text-2xl md:text-3xl font-extrabold">
                                    This is NOT a fit if…
                                </h2>
                                <div className="mt-5 space-y-3">
                                    {[
                                        "You want AI only because it’s trending",
                                        "You want a fast demo with no ownership plan",
                                        "You don’t care about auditability or traceability",
                                        "You prioritize novelty over reliability",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                                        >
                                            <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                            <span className="text-sm md:text-base text-white/85">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>

                        {/* ✅ 7) TESTIMONIALS / CLIENT SIGNALS */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm"
                        >
                            <div className="flex items-end justify-between gap-4 flex-wrap">
                                <div>
                                    <p className="text-sm font-semibold tracking-wide uppercase text-[#2FA4A9]">
                                        Reassurance
                                    </p>
                                    <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                        What teams say about governed AI
                                    </h2>
                                    <p className="mt-2 text-base text-[#4A5568] max-w-2xl">
                                        Operational trust matters more than clever outputs.
                                    </p>
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-2xl bg-white border border-gray-100 px-4 py-2 shadow-sm">
                                    <Building2 className="h-4 w-4 text-[#2FA4A9]" />
                                    <span className="text-sm font-semibold text-[#0D2A4A]">
                                        Enterprise-safe delivery
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
                                {testimonials.map((t) => (
                                    <div
                                        key={t.quote}
                                        className="rounded-3xl border border-gray-100 bg-[#FAFBFC] p-6"
                                    >
                                        <Quote className="h-5 w-5 text-[#2FA4A9]" />
                                        <p className="mt-3 text-sm md:text-base text-[#4A5568]">{t.quote}</p>
                                        <p className="mt-3 text-xs font-semibold text-[#0D2A4A]">{t.meta}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 rounded-3xl overflow-hidden border border-gray-100">
                                <img
                                    src={images.testimonials}
                                    alt="AI team delivery"
                                    className="h-[220px] w-full object-cover"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://picsum.photos/seed/service-ai-testimonials-fallback/1600/900";
                                    }}
                                />
                            </div>

                            {/* ✅ logo strip repeat */}
                            <div className="mt-6 rounded-2xl border border-gray-100 bg-white px-5 py-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-[#4A5568]">
                                    Proof from enterprise delivery
                                </p>
                                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                                    {logos.map((l) => (
                                        <span key={l} className="text-sm font-semibold text-[#0D2A4A]/70">
                                            {l}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.section>

                        {/* ✅ 8) CTA + WHAT HAPPENS NEXT */}
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
                                        Want AI that actually holds up in production?
                                    </h2>
                                    <p className="mt-3 text-base md:text-lg text-[#4A5568] max-w-2xl">
                                        We’ll tell you honestly whether AI helps — or if it shouldn’t be used at all.
                                    </p>

                                    <div className="mt-6 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                        <p className="text-sm font-semibold text-[#0D2A4A] mb-2">
                                            What happens next:
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "We review your workflows and decision points",
                                                "We identify safe AI use cases with clear governance",
                                                "You get a clear build plan with guardrails and monitoring",
                                            ].map((item) => (
                                                <li key={item} className="flex items-start gap-3">
                                                    <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                    <span className="text-sm md:text-base text-[#4A5568]">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <Button
                                            onClick={openDrawer}
                                            className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
                                        >
                                            Start the Conversation <ArrowRight className="h-5 w-5" />
                                        </Button>
                                    </div>

                                    <p className="mt-4 text-xs text-[#4A5568]">
                                        Trusted by teams building business-critical systems at Microsoft, Nike, AT&T, and Thomson Reuters.
                                    </p>
                                </div>

                                <div className="relative min-h-[260px]">
                                    <img
                                        src={images.cta}
                                        alt="AI CTA"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://picsum.photos/seed/service-ai-cta-fallback/1600/900";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D2A4A]/70 to-transparent" />
                                </div>
                            </div>
                        </motion.section>

                        <div className="h-10" />
                    </div>
                </section>
            </main>

            <FooterSection />
        </div>
    );
};

export default PracticalAI;
