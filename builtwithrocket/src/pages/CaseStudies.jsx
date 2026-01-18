import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ShieldCheck,
    LineChart,
    Sparkles,
    Building2,
} from "lucide-react";
import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "components/ui/Button";
import { useContactDrawer } from "../components/ContactDrawerProvider";

const CaseStudies = () => {
    const navigate = useNavigate();
    const { openDrawer } = useContactDrawer();

    // ✅ Dummy images (Unsplash) - premium looking
    const images = [
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
    ];

    const studies = [
        {
            title: "Qualifyde",
            description:
                "Built a multi-channel hiring platform improving candidate discovery and placement speed.",
            path: "/case-studies/qualifyde",
            badge: "Hiring Platform",
            icon: Building2,
        },
        {
            title: "Microsoft · AT&T · Nike",
            description:
                "Delivered a fraud detection system improving compliance and reducing operational risk.",
            path: "/case-studies/microsoft-att-nike",
            badge: "Fraud Detection",
            icon: ShieldCheck,
        },
        {
            title: "SAP · Telefónica · Ooredoo",
            description:
                "Built a mobile money platform enabling secure, high-volume transactions across regions.",
            path: "/case-studies/sap-telefonica-ooredoo",
            badge: "FinTech & Payments",
            icon: LineChart,
        },
        {
            title: "Obopay",
            description:
                "Delivered a reliable mobile payments system supporting everyday financial transactions.",
            path: "/case-studies/obopay",
            badge: "Payments System",
            icon: LineChart,
        },
        {
            title: "Thomson Reuters (JPharm / Thomson Pharma)",
            description:
                "Built data-intensive reporting systems supporting pharmaceutical research and decisions.",
            path: "/case-studies/thomson-reuters",
            badge: "Data & Reporting",
            icon: Sparkles,
        },
        {
            title: "NetEnforcers",
            description:
                "Built a brand protection system detecting online copyright and trademark violations.",
            path: "/case-studies/netenforcers",
            badge: "Brand Protection",
            icon: ShieldCheck,
        },
        {
            title: "MCM Tours",
            description:
                "Built an online reservation system integrating real-time airline and hotel bookings.",
            path: "/case-studies/mcm-tours",
            badge: "Travel Booking",
            icon: Building2,
        },
        {
            title: "Hema Metrics",
            description:
                "Supported healthcare software systems powering patient-focused medical device innovation.",
            path: "/case-studies/hema-metrics",
            badge: "Healthcare",
            icon: Sparkles,
        },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
            <Header />
            <main className="flex-grow pb-20">
                {/* ✅ HERO */}
                <section className="relative overflow-hidden bg-[#063453]">
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
                            className="rounded-3xl bg-[#0D2A4A] px-6 md:px-10 py-10 md:py-14 shadow-xl overflow-hidden relative"
                        >
                            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                                <div className="max-w-2xl">
                                    <p className="text-sm font-semibold tracking-wide uppercase text-[#2FA4A9] mb-2">
                                        Case Studies
                                    </p>

                                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                                        From Complexity to{" "}
                                        <span className="text-[#2FA4A9]">Impact</span>
                                    </h1>

                                    <p className="mt-4 text-base md:text-lg text-white/80">
                                        Explore how we help businesses simplify systems, restore
                                        momentum, and deliver dependable results.
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {["Reliability", "Scalability", "Automation", "Clarity"].map(
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
                                </div>

                                {/* ✅ HERO SIDE IMAGE */}
                                <div className="relative w-full lg:w-[420px]">
                                    <div className="absolute -inset-6 rounded-3xl bg-[#2FA4A9]/20 blur-2xl" />
                                    <div className="relative rounded-3xl border border-white/15 bg-white/10 p-3 shadow-xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
                                            alt="Case study dashboard preview"
                                            className="h-[240px] md:h-[280px] w-full rounded-2xl object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ✅ GRID */}
                <section className="mt-14">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {studies.map((study, idx) => {
                                const Icon = study.icon;
                                return (
                                    <motion.div
                                        key={study.title}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        variants={fadeUp}
                                        transition={{ duration: 0.45, delay: idx * 0.05 }}
                                        whileHover={{ y: -5 }}
                                        className="group rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
                                    >
                                        {/* Image Header */}
                                        <div className="relative">
                                            <img
                                                src={images[idx % images.length]}
                                                alt={study.title}
                                                className="h-[170px] w-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2A4A]/70 via-transparent to-transparent" />

                                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                                                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                                                    <span className="h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                    {study.badge}
                                                </span>

                                                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur border border-white/15">
                                                    <Icon className="h-5 w-5" />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="p-6 md:p-7">
                                            <h2 className="text-lg md:text-xl font-extrabold text-[#0D2A4A]">
                                                {study.title}
                                            </h2>

                                            <p className="mt-2 text-sm md:text-base text-[#4A5568]">
                                                {study.description}
                                            </p>

                                            <div className="mt-5 flex items-center justify-end gap-4">
                                                <Button
                                                    size="sm"
                                                    onClick={() => navigate(study.path)}
                                                    className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-semibold px-4 py-2 rounded-xl"
                                                >
                                                    View Case Study
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Hover underline */}
                                        <div className="h-[3px] w-full bg-gradient-to-r from-[#2FA4A9]/0 via-[#2FA4A9]/60 to-[#2FA4A9]/0 opacity-0 group-hover:opacity-100 transition" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ✅ CTA */}
                <section className="mt-14">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-3xl border border-[#2FA4A9]/20 bg-white p-6 md:p-10 shadow-lg relative overflow-hidden">
                            <div className="absolute -top-16 -right-16 h-[280px] w-[280px] rounded-full bg-[#2FA4A9]/15 blur-[90px]" />

                            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                                <div className="max-w-2xl">
                                    <p className="text-sm font-semibold tracking-wide uppercase text-[#2FA4A9] mb-2">
                                        Let’s Talk
                                    </p>
                                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#0D2A4A]">
                                        Want clarity on your system roadmap?
                                    </h2>
                                    <p className="mt-3 text-base md:text-lg text-[#4A5568]">
                                        If you’re dealing with complex systems that need structure,
                                        stability, and clean execution — we’d be happy to talk.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button
                                        size="lg"
                                        onClick={openDrawer}
                                        className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
                                    >
                                        Schedule a Discovery Call
                                    </Button>

                                    <Button
                                        size="lg"
                                        onClick={() => navigate("/about")}
                                        className="bg-[#0D2A4A] hover:bg-[#0D2A4A]/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
                                    >
                                        Learn About Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterSection />
        </div>
    );
};

export default CaseStudies;
