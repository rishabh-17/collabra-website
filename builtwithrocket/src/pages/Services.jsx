import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Layers,
    Bot,
    Wrench,
    ShieldCheck,
    PlugZap,
    CheckCircle2,
    Building2,
    Scale,
    Workflow,
} from "lucide-react";

import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "components/ui/Button";

const Services = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    const images = {
        hero: "https://picsum.photos/seed/services-hero/1900/900",
        software: "https://picsum.photos/seed/services-software/1600/900",
        ai: "https://picsum.photos/seed/services-ai/1600/900",
        architecture: "https://picsum.photos/seed/services-architecture/1600/900",
        automation: "https://picsum.photos/seed/services-automation/1600/900",
        support: "https://picsum.photos/seed/services-support/1600/900",
        cta: "https://picsum.photos/seed/services-cta/1600/900",
    };

    const services = [
        {
            title: "Custom Software Development",
            link: "/services/software-modernization",
            icon: Layers,
            image: images.software,
            intro:
                "We design and build custom software tailored to your business operations — from internal tools to customer-facing platforms.",
            bullets: [
                "Clear requirements and right-sized scope",
                "Maintainable, scalable architecture",
                "Systems teams can operate and evolve confidently",
            ],
            footer:
                "Whether you're modernising legacy systems or building something new, we prioritise reliability over shortcuts.",
        },
        {
            title: "AI and Intelligent Systems",
            link: "/services/practical-ai",
            icon: Bot,
            image: images.ai,
            intro:
                "We apply AI where it delivers practical, measurable value — not where it adds risk and confusion.",
            bullets: [
                "Intelligent recommendations and matching",
                "Automation of manual or repetitive workflows",
                "Decision-support systems built on real data",
            ],
            footer:
                "Our approach emphasises explainability, maintainability, and integration into existing operations.",
        },
        {
            title: "System Architecture & Foundations",
            link: "/services/system-architecture",
            icon: ShieldCheck,
            image: images.architecture,
            intro: "Many software problems start with weak foundations. We help you build systems that last.",
            bullets: [
                "Scalable, modular architecture decisions",
                "Reduced rework through strong early design",
                "Support growth across users, data, and integrations",
            ],
            footer:
                "Ideal for platforms expected to scale, and teams operating in high-risk or high-volume environments.",
        },
        {
            title: "Integration and Automation",
            link: "/services/integration-automation",
            icon: PlugZap,
            image: images.automation,
            intro:
                "Disconnected tools and manual workflows create hidden costs. We connect systems and remove friction.",
            bullets: [
                "Integrating third-party platforms and services",
                "Designing reliable data flows across systems",
                "Reducing operational friction and manual effort",
            ],
            footer: "The result is smoother operations, fewer breakpoints, and faster execution.",
        },
        {
            title: "Ongoing Support and Evolution",
            link: "/services/ongoing-support",
            icon: Wrench,
            image: images.support,
            intro: "Software doesn’t stand still — and neither do we. We help your systems stay stable as they evolve.",
            bullets: [
                "Maintain and improve existing systems",
                "Address performance, stability, and security needs",
                "Support ongoing product and platform evolution",
            ],
            footer: "This is where our partnership model delivers the most long-term value.",
        },
    ];

    const lifecycle = [
        {
            title: "Assess & clarify",
            desc: "We review your current system, constraints, and risks — in plain language.",
            icon: Scale,
        },
        {
            title: "Design foundations",
            desc: "We align architecture, data flow, and ownership before heavy building starts.",
            icon: Workflow,
        },
        {
            title: "Build & modernize",
            desc: "We deliver features with reliability and maintainability baked in.",
            icon: Layers,
        },
        {
            title: "Automate & optimize",
            desc: "We remove manual work and bottlenecks without creating fragile systems.",
            icon: PlugZap,
        },
        {
            title: "Support & evolve",
            desc: "We stay involved after launch to ensure stability and long-term improvement.",
            icon: ShieldCheck,
        },
    ];

    const fitTags = [
        "Depend on software daily",
        "Need systems that scale reliably",
        "Value clarity & accountability",
        "Prefer stability over hype",
        "Want a long-term partner",
        "Operate complex workflows",
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
            <Header />

            <main className="flex-grow pb-20">
                {/* ✅ HERO (same style) */}
                <section className="relative overflow-hidden bg-[#063453]">
                    <div className="absolute inset-0">
                        <img
                            src={images.hero}
                            alt="Services hero"
                            className="h-full w-full object-cover opacity-25"
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://picsum.photos/seed/services-hero-fallback/1900/900";
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
                                Services
                            </div>

                            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                                Software and AI services built for{" "}
                                <span className="text-[#2FA4A9]">reliability</span>,{" "}
                                <span className="text-[#2FA4A9]">clarity</span>, and{" "}
                                <span className="text-[#2FA4A9]">long-term use</span>.
                            </h1>

                            <p className="mt-4 max-w-3xl text-base md:text-lg text-white/80">
                                We help businesses design, build, and support software systems that hold up under
                                real-world use — not just at launch, but as teams, data, and complexity grow.
                            </p>

                            <p className="mt-3 max-w-3xl text-base md:text-lg text-white/80">
                                Our services reduce risk, remove friction, and give you confidence in the systems your
                                business relies on.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {["Custom Software", "AI", "Architecture", "Automation", "Support"].map((tag) => (
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

                {/* ✅ BACKDROP */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute -top-36 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/18 blur-[120px]" />
                        <div className="absolute -top-16 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/10 blur-[120px]" />
                        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[#2FA4A9]/12 blur-[140px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
                        {/* ✅ SERVICES GRID */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                                <div>
                                    <p className="text-sm font-semibold tracking-wide uppercase text-[#2FA4A9]">
                                        What we offer
                                    </p>
                                    <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                        Services designed for production reality
                                    </h2>
                                    <p className="mt-2 text-base text-[#4A5568] max-w-2xl">
                                        Everything we do is built around reliability, maintainability, and long-term ownership.
                                    </p>
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-2xl bg-white border border-gray-100 px-4 py-2 shadow-sm">
                                    <CheckCircle2 className="h-4 w-4 text-[#2FA4A9]" />
                                    <span className="text-sm font-semibold text-[#0D2A4A]">
                                        Clear scope. Clean delivery.
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {services.map((s) => {
                                    const Icon = s.icon;
                                    return (
                                        <div
                                            key={s.title}
                                            className="group rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
                                        >
                                            <div className="relative h-44">
                                                <img
                                                    src={s.image}
                                                    alt={s.title}
                                                    className="h-full w-full object-cover"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.currentTarget.src =
                                                            "https://picsum.photos/seed/services-card-fallback/1600/900";
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2A4A]/70 via-[#0D2A4A]/10 to-transparent" />

                                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold text-white">
                                                        <span className="h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                        Service
                                                    </div>

                                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 border border-white/15">
                                                        <Icon className="h-5 w-5 text-[#2FA4A9]" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6 md:p-7 flex flex-col h-full">
                                                <h3 className="text-lg md:text-xl font-extrabold text-[#0D2A4A]">
                                                    <Link to={s.link} className="hover:text-[#2FA4A9] transition-colors">
                                                        {s.title}
                                                    </Link>
                                                </h3>

                                                <p className="mt-2 text-sm md:text-base text-[#4A5568]">
                                                    {s.intro}
                                                </p>

                                                <div className="mt-4 grid grid-cols-1 gap-2">
                                                    {s.bullets.map((b) => (
                                                        <div
                                                            key={b}
                                                            className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-4"
                                                        >
                                                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                                            <p className="text-sm md:text-base text-[#4A5568]">
                                                                {b}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>

                                                <p className="mt-4 text-sm md:text-base text-[#4A5568] flex-grow">
                                                    {s.footer}
                                                </p>

                                                <div className="mt-6 pt-4 border-t border-gray-100">
                                                    <Link 
                                                        to={s.link} 
                                                        className="inline-flex items-center gap-2 text-[#2FA4A9] font-bold hover:gap-3 transition-all"
                                                    >
                                                        Learn more <ArrowRight className="h-4 w-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.section>

                        {/* ✅ HOW SERVICES WORK TOGETHER (Timeline) */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl border border-[#2FA4A9]/20 bg-white p-6 md:p-10 shadow-md"
                        >
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                How our services work together
                            </h2>

                            <p className="mt-2 text-base text-[#4A5568] max-w-3xl">
                                Our services aren’t standalone offerings — they are designed to work as a system.
                                We often follow a clear lifecycle, from clarity to long-term stability.
                            </p>

                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {lifecycle.map((step, idx) => {
                                    const Icon = step.icon;
                                    return (
                                        <div
                                            key={step.title}
                                            className="rounded-3xl border border-gray-100 bg-[#FAFBFC] p-5 relative"
                                        >
                                            <p className="text-xs font-semibold text-[#2FA4A9] uppercase tracking-wide">
                                                Step {idx + 1}
                                            </p>

                                            <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                                <Icon className="h-5 w-5 text-[#2FA4A9]" />
                                            </div>

                                            <p className="mt-3 font-extrabold text-[#0D2A4A]">
                                                {step.title}
                                            </p>
                                            <p className="mt-2 text-sm text-[#4A5568]">
                                                {step.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.section>

                        {/* ✅ WHO WE WORK WITH */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
                        >
                            <div className="lg:col-span-2 rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20">
                                        <Building2 className="h-6 w-6 text-[#2FA4A9]" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D2A4A]">
                                            Who we work with
                                        </h2>
                                        <p className="mt-2 text-base text-[#4A5568]">
                                            We work best with businesses that value stability, clarity, and long-term execution.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {fitTags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-gray-100 bg-[#FAFBFC] px-4 py-2 text-sm font-semibold text-[#0D2A4A]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-2xl bg-[#0D2A4A] p-5 text-white">
                                    <p className="text-sm font-semibold">Typical engagement</p>
                                    <p className="mt-1 text-sm text-white/80">
                                        Our clients range from growing businesses to enterprise teams operating complex, high-impact systems.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
                                <h3 className="text-lg md:text-xl font-extrabold text-[#0D2A4A]">
                                    What you can expect
                                </h3>
                                <div className="mt-5 space-y-3">
                                    {[
                                        "Clear communication and realistic expectations",
                                        "Technical decisions explained in business terms",
                                        "Early visibility into risks and trade-offs",
                                        "Continued involvement after launch",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-4"
                                        >
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2FA4A9]" />
                                            <p className="text-sm md:text-base text-[#4A5568]">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>

                        {/* ✅ FINAL CTA (Split + image) */}
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
                                        Let’s talk about your needs
                                    </h2>

                                    <p className="mt-3 text-base md:text-lg text-[#4A5568] max-w-2xl">
                                        If you’re evaluating software or AI services and want a partner who prioritises
                                        clarity, reliability, and long-term success — we’d be happy to talk.
                                    </p>

                                    <div className="mt-6 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                        <p className="text-sm font-semibold text-[#0D2A4A] mb-2">
                                            What happens next:
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "We review your current systems and challenges",
                                                "We identify where friction or risk exists",
                                                "You receive a clear recommendation — even if the answer is to simplify",
                                            ].map((item) => (
                                                <li key={item} className="flex items-start gap-3">
                                                    <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                    <span className="text-sm md:text-base text-[#4A5568]">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
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
                                        alt="Services CTA"
                                        className="absolute inset-0 h-full w-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://picsum.photos/seed/services-cta-fallback/1600/900";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D2A4A]/70 to-transparent" />
                                </div>
                            </div>
                        </motion.section>

                        <div className="h-8" />
                    </div>
                </div>
            </main>

            <FooterSection />
        </div>
    );
};

export default Services;
