import React from "react";
import { motion } from "framer-motion";
import {
    Wrench,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
    ShieldCheck,
    Quote,
    Layers,
    Timer,
    ScanEye,
    Building2,
} from "lucide-react";

import Header from "../../components/Header";
import FooterSection from "../homepage/components/FooterSection";
import Button from "../../components/ui/Button";
import { useContactDrawer } from "../../components/ContactDrawerProvider";

const OngoingSupport = () => {
    const { openDrawer } = useContactDrawer();

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const images = {
        hero: "https://picsum.photos/seed/service-support-hero/1900/900",
        problem: "https://images.pexels.com/photos/14000467/pexels-photo-14000467.jpeg",
        method: "https://images.pexels.com/photos/12899162/pexels-photo-12899162.jpeg",
        scope: "https://images.pexels.com/photos/34212963/pexels-photo-34212963.jpeg",
        case: "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg",
        testimonials: "https://picsum.photos/seed/service-support-testimonials/1600/900",
        cta: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    };

    const logos = ["Microsoft", "Nike", "AT&T", "Thomson Reuters"];

    const includes = [
        "Stability & performance improvements (ongoing hardening)",
        "Production monitoring + incident response support",
        "Security fixes and operational safeguards",
        "Safe evolution planning (so changes don’t create chaos)",
        "Technical decision support for long-term ownership",
    ];

    const testimonials = [
        {
            quote:
                "The difference wasn’t just fixes — it was long-term ownership and clarity around what mattered.",
            meta: "— Head of Engineering, Enterprise Platform",
        },
        {
            quote:
                "They kept the system reliable while we kept moving fast — without breaking production.",
            meta: "— Product Owner, Customer Operations",
        },
        {
            quote:
                "Instead of patching symptoms, they stabilized the foundation so we stopped firefighting.",
            meta: "— Engineering Manager, Systems Team",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
            <Header />

            <main className="flex-grow pb-20">
                {/* ✅ 1) HERO SECTION (Promise + Filter + Logo Strip) */}
                <section className="relative overflow-hidden bg-[#063453]">
                    <div className="absolute inset-0">
                        <img
                            src={images.hero}
                            alt="Ongoing Support & Evolution"
                            className="h-full w-full object-cover opacity-25"
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://picsum.photos/seed/service-support-hero-fallback/1900/900";
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
                                Ongoing Support & Evolution
                            </div>

                            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                                Long-term support for software{" "}
                                <span className="text-[#2FA4A9]">that can’t be abandoned</span>
                            </h1>

                            <p className="mt-4 max-w-3xl text-base md:text-lg text-white/80">
                                Dependable systems need dependable partners. We stay involved after launch to keep your
                                platform stable, secure, and easy to evolve.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {[
                                    "Good fit: production systems",
                                    "Good fit: long-term operations",
                                    "Not for: delivery-only vendors",
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
                                    Discuss Long-Term Support <ArrowRight className="h-5 w-5" />
                                </Button>

                                <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/85">
                                    Stability • Continuity • Operational ownership
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
                                            Most systems don’t collapse instantly — they decay when ownership disappears.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                    <p className="text-sm font-semibold text-[#0D2A4A]">Common failure patterns</p>
                                    <ul className="mt-3 space-y-2">
                                        {[
                                            "Knowledge degrades and context is lost",
                                            "Small issues compound into outages",
                                            "Changes become risky and unpredictable",
                                            "Accountability disappears after delivery",
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
                                        Why “ship and leave” backfires
                                    </p>
                                    <p className="mt-2 text-sm md:text-base text-[#4A5568]">
                                        Production systems require continuity. Without support and evolution, even small
                                        changes turn into operational risk and slowdowns.
                                    </p>
                                </div>

                                {/* ✅ Pull quote */}
                                <div className="mt-5 rounded-2xl bg-[#0D2A4A] p-5 text-white shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <Quote className="h-5 w-5 text-[#2FA4A9] mt-1" />
                                        <p className="text-sm md:text-base text-white/85">
                                            “The real cost wasn’t building software — it was keeping it stable as the
                                            business evolved.”
                                        </p>
                                    </div>
                                    <p className="mt-2 text-xs text-white/60">— Engineering Leader (Anonymous)</p>
                                </div>
                            </div>

                            <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                                <img
                                    src={images.problem}
                                    alt="Production support and stability"
                                    className="h-full w-full object-cover min-h-[320px]"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://picsum.photos/seed/service-support-problem-fallback/1600/1000";
                                    }}
                                />
                            </div>
                        </motion.section>

                        {/* ✅ 3) METHOD + mini case reference */}
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
                                        How we support differently
                                    </p>

                                    <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                        Support is ownership — not tickets
                                    </h2>

                                    <p className="mt-3 text-base text-[#4A5568] max-w-3xl">
                                        This isn’t reactive support. It’s ongoing technical judgment to keep systems dependable in production.
                                    </p>

                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            {
                                                title: "Operational clarity",
                                                desc: "We surface risks early, not after incidents happen.",
                                                icon: ScanEye,
                                            },
                                            {
                                                title: "Stability first",
                                                desc: "Performance + uptime are treated like core product features.",
                                                icon: ShieldCheck,
                                            },
                                            {
                                                title: "Foundations stay clean",
                                                desc: "We reduce tech debt while still moving forward.",
                                                icon: Layers,
                                            },
                                            {
                                                title: "Predictable evolution",
                                                desc: "Changes are guided, reviewed, and executed safely.",
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
                                                            <p className="font-extrabold text-[#0D2A4A]">{card.title}</p>
                                                            <p className="mt-1 text-sm text-[#4A5568]">{card.desc}</p>
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
                                            In transaction-heavy mobile money systems, consistent monitoring and safe deployment practices
                                            prevented outages as usage scaled across regions.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                                    <img
                                        src={images.method}
                                        alt="Support & Evolution method"
                                        className="h-full w-full object-cover min-h-[320px]"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://picsum.photos/seed/service-support-method-fallback/1600/1000";
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
                                    alt="Scope of support"
                                    className="h-full w-full object-cover min-h-[320px]"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://picsum.photos/seed/service-support-scope-fallback/1600/1000";
                                    }}
                                />
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                        <Wrench className="h-6 w-6 text-[#2FA4A9]" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                            What this service includes
                                        </h2>
                                        <p className="mt-2 text-base text-[#4A5568]">
                                            Support that keeps systems stable, usable, and safe to change.
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
                                        Fewer production incidents, safer changes, and systems that improve over time instead of degrading.
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
                                            Long-term stability under real operational load
                                        </p>
                                        <h3 className="mt-2 text-lg md:text-xl font-extrabold text-[#0D2A4A]">
                                            Mobile Money Platform (SAP · Telefónica · Ooredoo)
                                        </h3>

                                        <div className="mt-4 space-y-3 text-sm md:text-base text-[#4A5568]">
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Client type:</span> Telecom operators
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Problem:</span> High-volume transactions across channels
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">What we built:</span> Core platform architecture + transaction workflows
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Constraints:</span> Reliability, fault tolerance, regional scale
                                            </p>
                                            <p>
                                                <span className="font-semibold text-[#0D2A4A]">Outcome:</span> Stable performance under load + trusted operation
                                            </p>
                                        </div>

                                        <div className="mt-5">
                                            <Button
                                                size="sm"
                                                onClick={() =>
                                                    window.location.assign("/case-studies/sap-telefonica-ooredoo")
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
                                                "https://picsum.photos/seed/service-support-case-fallback/1600/1000";
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
                                        "You operate production-critical systems",
                                        "Reliability matters more than speed",
                                        "You want continuity and accountability",
                                        "You need systems that evolve without accumulating risk",
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
                                        "You want delivery-only and no long-term responsibility",
                                        "You expect quick patches instead of real ownership",
                                        "You prioritize short-term speed over stability",
                                        "You don’t want to invest in reliability",
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
                                        What clients say
                                    </h2>
                                    <p className="mt-2 text-base text-[#4A5568] max-w-2xl">
                                        Support that reduces risk and keeps systems trustworthy under production usage.
                                    </p>
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-2xl bg-white border border-gray-100 px-4 py-2 shadow-sm">
                                    <Building2 className="h-4 w-4 text-[#2FA4A9]" />
                                    <span className="text-sm font-semibold text-[#0D2A4A]">
                                        Trusted operational delivery
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
                                    alt="Support collaboration"
                                    className="h-[220px] w-full object-cover"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://picsum.photos/seed/service-support-testimonials-fallback/1600/900";
                                    }}
                                />
                            </div>

                            {/* ✅ Logo strip repeat */}
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
                                        Want a support partner that stays accountable?
                                    </h2>
                                    <p className="mt-3 text-base md:text-lg text-[#4A5568] max-w-2xl">
                                        We’ll help your systems evolve without accumulating risk — stability first, always.
                                    </p>

                                    <div className="mt-6 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                        <p className="text-sm font-semibold text-[#0D2A4A] mb-2">
                                            What happens next:
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "We review your current system health and risks",
                                                "We identify stability, performance, and security gaps",
                                                "You get a clear support plan and priorities (not guesswork)",
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
                                            Get in Touch <ArrowRight className="h-5 w-5" />
                                        </Button>
                                    </div>

                                    <p className="mt-4 text-xs text-[#4A5568]">
                                        Trusted by teams building business-critical systems at Microsoft, Nike, AT&T, and Thomson Reuters.
                                    </p>
                                </div>

                                <div className="relative min-h-[260px]">
                                    <img
                                        src={images.cta}
                                        alt="Support CTA"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://picsum.photos/seed/service-support-cta-fallback/1600/900";
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

export default OngoingSupport;
