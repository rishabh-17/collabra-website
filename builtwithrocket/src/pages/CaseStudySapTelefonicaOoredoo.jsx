import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Globe,
    Smartphone,
    Terminal,
    Shuffle,
    Layers,
    ShieldCheck,
} from "lucide-react";

import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "components/ui/Button";

const CaseStudySapTelefonicaOoredoo = () => {
    const heroImage =
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80";

    const images = {
        transactions:
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
        fintech:
            "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1600&q=80",
        network:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
        cta:
            "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&w=1600&q=80",
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const channels = [
        { label: "Web", icon: Globe, desc: "Operational dashboards and self-service flows" },
        { label: "Mobile", icon: Smartphone, desc: "Everyday transactions at scale" },
        { label: "USSD", icon: Terminal, desc: "Low-bandwidth access across markets" },
    ];

    const flow = [
        { title: "Initiate", desc: "User starts a transaction via any channel" },
        { title: "Validate", desc: "Rules, limits, and integrity checks are applied" },
        { title: "Execute", desc: "P2P and bulk payments processed safely" },
        { title: "Reconcile", desc: "Reconciliation and reporting ensure trust" },
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
                            alt="SAP · Telefónica · Ooredoo"
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
                                SAP · Telefónica · Ooredoo
                            </h1>

                            <p className="mt-3 text-base md:text-lg text-white/80">
                                Built a mobile money platform enabling secure, high-volume transactions across regions.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {["Mobile Money", "High Volume", "Multi-Channel"].map((tag) => (
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

                {/* ✅ BODY (Transaction Flow Design) */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/16 blur-[120px]" />
                        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/10 blur-[120px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
                        {/* Overview + Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                                className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm"
                            >
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    Overview
                                </h2>
                                <div className="mt-3 space-y-3 text-base text-[#4A5568] leading-relaxed">
                                    <p>
                                        Mobile money platforms operate under constant pressure — high transaction volumes,
                                        multiple user channels, and strict reliability requirements.
                                    </p>
                                    <p>
                                        SAP, working with telecom operators including Telefónica and Ooredoo, needed a platform
                                        that could support everyday financial transactions across diverse markets while remaining
                                        stable, extensible, and easy to operate.
                                    </p>
                                    <p>
                                        Collabrah Tech partnered with teams across regions to design and build the core platform
                                        architecture powering these services.
                                    </p>
                                </div>
                            </motion.div>

                            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                                <img
                                    src={images.fintech}
                                    alt="Fintech platform"
                                    className="h-full w-full object-cover min-h-[260px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Challenge + Channels */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                            <div className="lg:col-span-2 rounded-3xl bg-[#0D2A4A] text-white p-6 md:p-8 shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#2FA4A9]/25 blur-[70px]" />
                                <h2 className="text-xl md:text-2xl font-extrabold">The Challenge</h2>
                                <p className="mt-3 text-white/80">
                                    The platform needed to operate reliably in environments where failure wasn’t an option.
                                </p>

                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Supporting multiple access channels (web, mobile, USSD)",
                                        "Handling high transaction volumes consistently",
                                        "Managing complex transaction flows (peer-to-peer + bulk payments)",
                                        "Scaling across countries and operators",
                                        "Designing for long-term evolution, not one-off delivery",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                            <span className="text-white/85">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-5 text-white/75">
                                    Early architectural decisions would directly impact reliability, trust, and adoption.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                                <p className="text-xs font-semibold uppercase tracking-wide text-[#2FA4A9]">
                                    Access Channels
                                </p>
                                <div className="mt-4 space-y-3">
                                    {channels.map((c) => {
                                        const Icon = c.icon;
                                        return (
                                            <div
                                                key={c.label}
                                                className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-4"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                                        <Icon className="h-5 w-5 text-[#2FA4A9]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-[#0D2A4A]">{c.label}</p>
                                                        <p className="text-xs md:text-sm text-[#4A5568]">{c.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Transaction Flow */}
                        <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                        Transaction Flow
                                    </h2>
                                    <p className="mt-2 text-base text-[#4A5568]">
                                        A simple, predictable flow that stays reliable even under heavy load.
                                    </p>
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20 px-4 py-2">
                                    <Shuffle className="h-4 w-4 text-[#2FA4A9]" />
                                    <p className="text-sm font-semibold text-[#0D2A4A]">Built for consistency</p>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                                {flow.map((step, idx) => (
                                    <div
                                        key={step.title}
                                        className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5"
                                    >
                                        <p className="text-xs font-semibold text-[#2FA4A9]">
                                            Step {idx + 1}
                                        </p>
                                        <p className="mt-1 text-base font-extrabold text-[#0D2A4A]">
                                            {step.title}
                                        </p>
                                        <p className="mt-2 text-sm text-[#4A5568]">{step.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 rounded-3xl overflow-hidden border border-gray-100">
                                <img
                                    src={images.transactions}
                                    alt="Transaction systems"
                                    className="h-[240px] w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Approach + Build */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                        <Layers className="h-6 w-6 text-[#2FA4A9]" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                            Our Approach
                                        </h2>
                                        <p className="mt-2 text-base text-[#4A5568]">
                                            We focused on building a foundation that could support growth across markets without fragmentation.
                                        </p>
                                    </div>
                                </div>

                                <ul className="mt-5 space-y-2">
                                    {[
                                        "Designed a robust, modular system architecture for transaction management",
                                        "Defined clear boundaries between channels, services, and core financial logic",
                                        "Ensured consistency and fault tolerance across transaction flows",
                                        "Built extensibility into the platform to support new features and operators",
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
                                    src={images.network}
                                    alt="Scalable architecture"
                                    className="h-full w-full object-cover min-h-[280px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Outcome */}
                        <div className="rounded-3xl border border-[#2FA4A9]/20 bg-white p-6 md:p-8 shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                    <ShieldCheck className="h-6 w-6 text-[#2FA4A9]" />
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                        The Outcome
                                    </h2>
                                    <p className="mt-2 text-base text-[#4A5568]">
                                        The platform enabled telecom operators to:
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Deliver reliable mobile money services across regions",
                                    "Support high transaction volumes with consistency",
                                    "Expand features without reworking core systems",
                                    "Maintain user trust through stable, predictable performance",
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
                                    Financial platforms succeed or fail on reliability. By focusing on architecture,
                                    transaction integrity, and scalability from the start, this platform avoided fragility that limits growth.
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
                                        If you’re building or modernizing a transaction-heavy platform that must operate reliably across
                                        channels and regions, we’d be happy to talk.
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
                                        alt="Mobile money growth"
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

export default CaseStudySapTelefonicaOoredoo;
