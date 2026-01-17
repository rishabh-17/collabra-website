import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Radar,
    BellRing,
    Database,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "components/ui/Button";

const CaseStudyMicrosoftAttNike = () => {
    const heroImage =
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80";

    // ✅ Relevant body images
    const images = {
        monitoring:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
        security:
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
        dashboard:
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80",
        cta:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const timeline = [
        {
            title: "Visibility Gap",
            desc: "Activity was distributed across thousands of workstations with limited real-time insight.",
            icon: Radar,
        },
        {
            title: "Rules & Detection",
            desc: "Configurable rules were needed to detect fraud and policy violations reliably.",
            icon: ShieldCheck,
        },
        {
            title: "Real-Time Alerts",
            desc: "Security & managers needed alerts without disrupting frontline operations.",
            icon: BellRing,
        },
        {
            title: "Audit & Reporting",
            desc: "Centralised monitoring and defensible reporting were essential for compliance.",
            icon: Database,
        },
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
                            alt="Microsoft · AT&T · Nike"
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
                                Microsoft · AT&amp;T · Nike
                            </h1>

                            <p className="mt-3 text-base md:text-lg text-white/80">
                                Delivered a fraud detection system improving compliance and reducing operational risk.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {["Compliance", "Risk Monitoring", "Real-time Alerts"].map((tag) => (
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
                        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/14 blur-[120px]" />
                        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/10 blur-[120px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
                        {/* ✅ Overview + Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.25 }}
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                                className="rounded-3xl bg-white border border-gray-100 p-6 md:p-8 shadow-sm"
                            >
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    Overview
                                </h2>
                                <div className="mt-3 space-y-3 text-base text-[#4A5568] leading-relaxed">
                                    <p>
                                        Large enterprises operating contact centers face constant risk — fraud, policy violations,
                                        and compliance breaches that can be difficult to detect in real time.
                                    </p>
                                    <p>
                                        Microsoft, AT&amp;T, and Nike needed a system that could monitor agent activity across distributed
                                        environments, identify violations as they occurred, and alert the right teams without disrupting
                                        daily operations.
                                    </p>
                                    <p>
                                        Collabrah Tech partnered with internal stakeholders to design and build a fraud management system
                                        that could operate reliably at scale.
                                    </p>
                                </div>
                            </motion.div>

                            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                                <img
                                    src={images.monitoring}
                                    alt="Enterprise monitoring"
                                    className="h-full w-full object-cover min-h-[260px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* ✅ Challenge + Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                            <div className="lg:col-span-2 rounded-3xl bg-[#0D2A4A] text-white p-6 md:p-8 shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 h-52 w-52 rounded-full bg-[#2FA4A9]/25 blur-[70px]" />
                                <h2 className="text-xl md:text-2xl font-extrabold">
                                    The Challenge
                                </h2>
                                <p className="mt-3 text-white/80">
                                    The core challenge wasn’t a lack of data — it was visibility and speed.
                                </p>

                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Agent activity occurred across thousands of workstations",
                                        "Manual audits were slow, reactive, and inconsistent",
                                        "Compliance teams lacked real-time insight into violations",
                                        "Existing processes created risk exposure and delayed response",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                            <span className="text-white/85">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-5 text-white/75">
                                    Any solution needed to be accurate, scalable, and unobtrusive — especially in high-volume environments.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                                <img
                                    src={images.security}
                                    alt="Security and compliance"
                                    className="h-full w-full object-cover min-h-[240px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* ✅ Our Approach Timeline */}
                        <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                            <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                Our Approach
                            </h2>
                            <p className="mt-2 text-base text-[#4A5568] max-w-3xl">
                                We designed a system that operates quietly in the background — and becomes visible only when action is required.
                            </p>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                                {timeline.map((step) => {
                                    const Icon = step.icon;
                                    return (
                                        <div
                                            key={step.title}
                                            className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                                    <Icon className="h-6 w-6 text-[#2FA4A9]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-[#0D2A4A]">
                                                        {step.title}
                                                    </h3>
                                                    <p className="mt-1 text-sm md:text-base text-[#4A5568]">
                                                        {step.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ✅ Build + Dashboard Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                    The Build
                                </h2>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Activity capture across agent workstations",
                                        "Rules-driven detection engine for violations",
                                        "Real-time alerts for managers and security teams",
                                        "Centralised monitoring and compliance reporting",
                                        "Scalable backend designed for enterprise workloads",
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
                                    alt="Dashboard view"
                                    className="h-full w-full object-cover min-h-[260px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* ✅ Outcome */}
                        <div className="rounded-3xl border border-[#2FA4A9]/20 bg-white p-6 md:p-8 shadow-md">
                            <h2 className="text-xl md:text-2xl font-extrabold text-[#0D2A4A]">
                                The Outcome
                            </h2>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Detect fraud and policy violations faster",
                                    "Reduce operational and compliance risk",
                                    "Improve oversight across distributed contact centers",
                                    "Move from reactive audits to proactive monitoring",
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
                                    In large organizations, compliance failures don’t come from lack of intent —
                                    they come from lack of visibility.
                                </p>
                            </div>
                        </div>

                        {/* ✅ CTA with image */}
                        <div className="mt-10 rounded-3xl border border-[#2FA4A9]/20 bg-white shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-6 md:p-10">
                                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#0D2A4A]">
                                        Have a Similar Challenge?
                                    </h2>
                                    <p className="mt-3 text-base md:text-lg text-[#4A5568] max-w-2xl">
                                        If your organization needs better visibility into operational risk,
                                        compliance, or large-scale activity monitoring, we’d be happy to talk.
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
                                        alt="Team collaboration"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D2A4A]/60 to-transparent" />
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

export default CaseStudyMicrosoftAttNike;
