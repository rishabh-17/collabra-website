import React from "react";
import { motion } from "framer-motion";
import {
    Workflow,
    PlugZap,
    AlertTriangle,
    CheckCircle2,
    ArrowRight,
    Quote,
    ShieldCheck,
    Layers,
    ScanEye,
    Timer,
    Building2,
} from "lucide-react";

import Header from "../../components/Header";
import FooterSection from "../homepage/components/FooterSection";
import Button from "../../components/ui/Button";
import { useContactDrawer } from "../../components/ContactDrawerProvider";

const IntegrationAutomation = () => {
    const { openDrawer } = useContactDrawer();

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const images = {
        hero: "https://picsum.photos/seed/service-integration-hero/1900/900",
        problem: "https://picsum.photos/seed/service-integration-problem/1600/1000",
        method: "https://picsum.photos/seed/service-integration-method/1600/1000",
        scope: "https://picsum.photos/seed/service-integration-scope/1600/1000",
        case: "https://picsum.photos/seed/service-integration-case/1600/1000",
        testimonials: "https://picsum.photos/seed/service-integration-testimonials/1600/900",
        cta: "https://picsum.photos/seed/service-integration-cta/1600/900",
    };

    const logos = ["Microsoft", "Nike", "AT&T", "Thomson Reuters"];

    const includes = [
        "Third-party platform integrations (HRMS, CRM, ERP, payments, analytics)",
        "Workflow automation with approvals + escalation paths",
        "Reliable data syncs with retries + idempotency patterns",
        "Observability: logs, alerting, and failure visibility",
        "Operational safeguards (rate-limits, validations, safe rollbacks)",
    ];

    const testimonials = [
        {
            quote:
                "They didn’t automate blindly — they fixed the system boundaries first. That’s what made it stable.",
            meta: "— Engineering Lead, Operations Platform",
        },
        {
            quote:
                "We finally had reliable flows that didn’t silently fail. The team stopped firefighting.",
            meta: "— Product Owner, Internal Systems",
        },
        {
            quote:
                "Automation reduced manual work without becoming another fragile system to babysit.",
            meta: "— Head of Engineering, Enterprise Team",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
            <Header />

            <main className="flex-grow pb-20">
                {/* ✅ 1) HERO SECTION (Promise + Filter + Logos) */}
                <section className="relative overflow-hidden bg-[#063453]">
                    <div className="absolute inset-0">
                        <img
                            src={images.hero}
                            alt="Integration & Automation"
                            className="h-full w-full object-cover opacity-25"
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://picsum.photos/seed/service-integration-hero-fallback/1900/900";
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
                                Integration & Automation
                            </div>

                            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                                Reduce manual work by{" "}
                                <span className="text-[#2FA4A9]">fixing the systems behind it</span>
                            </h1>

                            <p className="mt-4 max-w-3xl text-base md:text-lg text-white/80">
                                We design integrations and automation that remove friction without creating fragile
                                glue-code, silent failures, or operational chaos.
                            </p>

                            {/* ✅ Filter tags (who it's for / not for) */}
                            <div className="mt-7 flex flex-wrap gap-3">
                                {[
                                    "Good fit: operational systems",
                                    "Good fit: repeat workflows",
                                    "Not for: one-off scripts",
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
                                    Identify Where Automation Helps <ArrowRight className="h-5 w-5" />
                                </Button>

                                <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/85">
                                    Reliable flows • Observable results • Safe failures
                                </div>
                            </div>

                            {/* ✅ Logo strip */}
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
                        {/* ✅ 2) WHY THIS FAILS (Problem framing + risks + pull quote) */}
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
                                            Why this fails without the right approach
                                        </h2>
                                        <p className="mt-2 text-base text-[#4A5568]">
                                            Manual work isn’t the real issue — it’s a symptom of broken handoffs.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                    <p className="text-sm font-semibold text-[#0D2A4A]">Common failure patterns</p>
                                    <ul className="mt-3 space-y-2">
                                        {[
                                            "Automation runs but no one knows when it failed",
                                            "Data sync creates duplicates and confusion",
                                            "One fragile script becomes a system dependency",
                                            "Teams build workarounds instead of fixing root causes",
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
                                        Why “fast automation” backfires
                                    </p>
                                    <p className="mt-2 text-sm md:text-base text-[#4A5568]">
                                        Fast integrations often ignore governance, retries, validation, and monitoring —
                                        so they fail silently and create risk instead of speed.
                                    </p>
                                </div>

                                {/* ✅ Pull quote */}
                                <div className="mt-5 rounded-2xl bg-[#0D2A4A] p-5 text-white shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <Quote className="h-5 w-5 text-[#2FA4A9] mt-1" />
                                        <p className="text-sm md:text-base text-white/85">
                                            “Automation didn’t fail because it was hard — it failed because it wasn’t
                                            observable or safe under real operations.”
                                        </p>
                                    </div>
                                    <p className="mt-2 text-xs text-white/60">
                                        — Head of Operations Systems (Anonymous)
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                                <img
                                    src={images.problem}
                                    alt="Disconnected systems"
                                    className="h-full w-full object-cover min-h-[320px]"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://picsum.photos/seed/service-integration-problem-fallback/1600/1000";
                                    }}
                                />
                            </div>
                        </motion.section>

                        {/* ✅ 3) METHOD (Differentiation + mini case reference) */}
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
                                        How we approach it differently
                                    </p>

                                    <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                        Integration is a system — not a script
                                    </h2>

                                    <p className="mt-3 text-base text-[#4A5568] max-w-3xl">
                                        We treat automation like real software: observable, safe, testable, and maintainable.
                                    </p>

                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            {
                                                title: "Reliable + observable",
                                                desc: "If it runs, we can track it. If it fails, we know why.",
                                                icon: ScanEye,
                                            },
                                            {
                                                title: "Fails safely",
                                                desc: "Graceful error handling over silent corruption.",
                                                icon: ShieldCheck,
                                            },
                                            {
                                                title: "Built for change",
                                                desc: "Workflows evolve. Our integration layer adapts cleanly.",
                                                icon: Layers,
                                            },
                                            {
                                                title: "Reduces operational load",
                                                desc: "Automation should remove effort — not create new maintenance.",
                                                icon: Timer,
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
                                                            <p className="font-extrabold text-[#0D2A4A]">
                                                                {card.title}
                                                            </p>
                                                            <p className="mt-1 text-sm text-[#4A5568]">
                                                                {card.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* ✅ Mini case reference */}
                                    <div className="mt-6 rounded-2xl border border-[#2FA4A9]/25 bg-[#2FA4A9]/10 p-5">
                                        <p className="text-sm font-semibold text-[#0D2A4A]">Mini case reference</p>
                                        <p className="mt-2 text-sm md:text-base text-[#4A5568]">
                                            In a multi-tenant enterprise fraud platform, auditability and reliable event
                                            workflows made real-time monitoring possible without disrupting operations.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                                    <img
                                        src={images.method}
                                        alt="Automation workflow"
                                        className="h-full w-full object-cover min-h-[320px]"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://picsum.photos/seed/service-integration-method-fallback/1600/1000";
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
                                    alt="Scope of integration"
                                    className="h-full w-full object-cover min-h-[320px]"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://picsum.photos/seed/service-integration-scope-fallback/1600/1000";
                                    }}
                                />
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                        <PlugZap className="h-6 w-6 text-[#2FA4A9]" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                            What this service includes
                                        </h2>
                                        <p className="mt-2 text-base text-[#4A5568]">
                                            Concrete work, built for operational outcomes.
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
                                        Fewer manual handoffs, fewer production surprises, and workflows teams can trust.
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
                                            Governance-heavy monitoring & automation
                                        </p>
                                        <h3 className="mt-2 text-lg md:text-xl font-extrabold text-[#0D2A4A]">
                                            Enterprise Fraud Management SaaS
                                        </h3>

                                        <div className="mt-4 space-y-3 text-sm md:text-base text-[#4A5568]">
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Client type:</span>{" "}
                                                Enterprise contact centers
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Problem:</span>{" "}
                                                Limited visibility into compliance + risk
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">What we built:</span>{" "}
                                                Multi-tenant monitoring platform with approvals + audit trails
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Constraints:</span>{" "}
                                                Reliability, auditability, long-term operation
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Outcome:</span>{" "}
                                                Faster detection, reduced risk, improved oversight
                                            </p>
                                        </div>

                                        <div className="mt-5">
                                            <Button
                                                size="sm"
                                                onClick={() =>
                                                    window.location.assign("/case-studies/microsoft-att-nike")
                                                }
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
                                        alt="Case study proof"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://picsum.photos/seed/service-integration-case-fallback/1600/1000";
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
                                        "You run operational systems that must behave predictably",
                                        "You need automation with auditability and visibility",
                                        "Reliability matters more than speed",
                                        "You want integrations that support long-term operation",
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
                                        "You want quick scripts with no monitoring or ownership",
                                        "You’re experimenting without clear process governance",
                                        "You don’t want to handle failures responsibly",
                                        "You want speed at the cost of data correctness",
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
                                        Client signals
                                    </h2>
                                    <p className="mt-2 text-base text-[#4A5568] max-w-2xl">
                                        Short, operational feedback — built around real delivery outcomes.
                                    </p>
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-2xl bg-white border border-gray-100 px-4 py-2 shadow-sm">
                                    <Building2 className="h-4 w-4 text-[#2FA4A9]" />
                                    <span className="text-sm font-semibold text-[#0D2A4A]">
                                        Systems teams trust in production
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
                                    alt="Team automation workflow"
                                    className="h-[220px] w-full object-cover"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://picsum.photos/seed/service-integration-testimonials-fallback/1600/900";
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
                                        Want automation that doesn’t become a new system to babysit?
                                    </h2>
                                    <p className="mt-3 text-base md:text-lg text-[#4A5568] max-w-2xl">
                                        We’ll help you remove friction with workflows teams trust — safe, observable, and built for long-term operation.
                                    </p>

                                    <div className="mt-6 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                        <p className="text-sm font-semibold text-[#0D2A4A] mb-2">
                                            What happens next:
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "We map your systems and operational friction",
                                                "We identify where automation adds real value (and where it shouldn’t exist)",
                                                "You get a clear integration plan with safe execution paths",
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
                                        alt="Automation CTA"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://picsum.photos/seed/service-integration-cta-fallback/1600/900";
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

export default IntegrationAutomation;
