import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Wrench,
    Sparkles,
    Layers,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import Header from "../components/Header";
import FooterSection from "./homepage/components/FooterSection";
import Button from "../components/ui/Button";

const About = () => {
    // ✅ Dummy images (Unsplash)
    const images = {
        hero: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1200&q=80",
        stability:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        partnership:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    };

    const sections = {
        problems: [
            "Software built quickly, then left hard to maintain",
            "AI introduced without clear ownership, purpose, or accountability",
            "Systems that worked in theory, but failed under real usage",
            "Vendors who disappeared once delivery was “complete”",
        ],
        pov: [
            {
                title: "Clarity Before Tools",
                description:
                    "We focus on understanding the business context, users, and constraints before choosing technology. Tools are a means, not the goal.",
                icon: Sparkles,
            },
            {
                title: "Strong Foundations Matter",
                description:
                    "Early architecture decisions shape everything that comes after. We design systems to scale, adapt, and remain understandable over time.",
                icon: Layers,
            },
            {
                title: "AI Should Earn Its Place",
                description:
                    "We use AI where it creates measurable value: automation, recommendations, and decision support. Not where it adds unnecessary risk or confusion.",
                icon: Wrench,
            },
            {
                title: "Reliability Beats Novelty",
                description:
                    "Technology should make work easier and more predictable, not more fragile. Stability matters more than trend adoption.",
                icon: ShieldCheck,
            },
        ],
        workIncludes: [
            "Designing and building custom software for internal and customer-facing platforms",
            "Applying AI for automation, recommendations, and data-driven decision support",
            "Defining and strengthening system architecture for scalable, data-heavy applications",
            "Integrating tools and services to reduce manual work and operational friction",
            "Providing ongoing support, improvement, and technical guidance",
        ],
        bestWith: [
            "Depend on software for day-to-day operations",
            "Need a reliable long-term partner, not a short-term vendor",
            "Care about maintainability, scalability, and operational stability",
            "Value honest advice and clear trade-offs",
            "Want systems that support growth without adding chaos",
        ],
        wayOfWorking: [
            "Clear communication and realistic expectations",
            "Technical decisions explained in business terms",
            "Early visibility into risks and trade-offs",
            "Continued involvement after launch",
        ],
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
            <Header />
            <main className="flex-grow pb-20">
                {/* ✅ HERO SECTION */}
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            {/* Left Content */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                                    <span className="h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                    About Collabrah Tech
                                </div>

                                <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                                    A Software Partner for{" "}
                                    <span className="text-[#2FA4A9]">
                                        Systems That Actually Matter
                                    </span>
                                </h1>

                                <p className="mt-5 max-w-3xl text-base md:text-lg text-white/80">
                                    Collabrah Tech exists to help businesses fix, stabilize, and
                                    operate software systems they rely on every day — not just at
                                    launch, but as usage, data, and complexity grow.
                                </p>

                                <p className="mt-3 max-w-3xl text-base md:text-lg text-white/80">
                                    We work with teams who need more than code. They need sound
                                    technical judgment, clear communication, and a partner who
                                    stays accountable as systems evolve in production.
                                </p>

                                <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { label: "Production-first mindset", value: "Reliability" },
                                        {
                                            label: "Architecture & scalability",
                                            value: "Foundations",
                                        },
                                        { label: "AI with measurable outcomes", value: "Real Value" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-sm hover:shadow-lg transition"
                                        >
                                            <p className="text-sm text-white/80">{item.label}</p>
                                            <p className="mt-1 text-lg font-bold text-white">
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* ✅ Right Dummy Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7 }}
                                className="relative"
                            >
                                <div className="absolute -inset-6 rounded-3xl bg-[#2FA4A9]/20 blur-2xl" />

                                <div className="relative rounded-3xl border border-white/15 bg-white/5 p-3 shadow-xl">
                                    <img
                                        src={images.hero}
                                        alt="Collabrah Tech Hero"
                                        className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ✅ MAIN CONTENT */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute -top-36 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2FA4A9]/20 blur-[120px]" />
                        <div className="absolute -top-16 right-0 h-[420px] w-[420px] rounded-full bg-[#0D2A4A]/15 blur-[120px]" />
                        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[#2FA4A9]/10 blur-[140px]" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
                        {/* ✅ WHY WE STARTED + IMAGE */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="mb-16"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                                <div className="lg:col-span-2 rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-md">
                                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-[#0D2A4A]">
                                                Why We Started Collabrah Tech
                                            </h2>
                                            <p className="mt-2 text-base text-[#4A5568] max-w-2xl">
                                                We started after seeing the same operational failures
                                                repeat across industries — where teams inherit complexity
                                                they never signed up for.
                                            </p>
                                        </div>

                                        <div className="inline-flex items-center gap-2 rounded-xl bg-[#0D2A4A] px-4 py-2 text-white text-sm font-semibold shadow-sm">
                                            <ShieldCheck className="h-4 w-4" />
                                            Built for long-term ownership
                                        </div>
                                    </div>

                                    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-6">
                                            <p className="text-sm font-semibold text-[#0D2A4A] mb-3">
                                                The common failures:
                                            </p>
                                            <ul className="space-y-3">
                                                {sections.problems.map((item) => (
                                                    <li key={item} className="flex items-start gap-3">
                                                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                        <span className="text-sm md:text-base text-[#4A5568]">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="rounded-2xl border border-[#2FA4A9]/20 bg-white p-6 shadow-sm">
                                            <p className="text-sm font-semibold text-[#0D2A4A] mb-2">
                                                What we do differently:
                                            </p>
                                            <p className="text-base text-[#4A5568]">
                                                We exist to be a long-term technology partner — not just
                                                a delivery vendor.
                                            </p>

                                            <div className="mt-5 rounded-xl bg-[#2FA4A9]/10 p-4 border border-[#2FA4A9]/20">
                                                <p className="text-sm font-semibold text-[#0D2A4A]">
                                                    The outcome:
                                                </p>
                                                <p className="mt-1 text-sm md:text-base text-[#4A5568]">
                                                    Systems that remain stable, maintainable, and trusted
                                                    under real production usage.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ✅ Side Dummy Image */}
                                <div className="rounded-3xl border border-gray-100 bg-white p-3 shadow-md">
                                    <img
                                        src={images.stability}
                                        alt="System stability"
                                        className="w-full h-full min-h-[260px] object-cover rounded-2xl"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </motion.section>

                        {/* ✅ CTA + Dummy Image */}
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            className="mb-6"
                        >
                            <div className="rounded-3xl border border-[#2FA4A9]/20 bg-white p-6 md:p-10 shadow-lg">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#0D2A4A]">
                                            Looking for a Partner Who Takes Ownership Seriously?
                                        </h2>
                                        <p className="mt-2 text-base text-[#4A5568]">
                                            If you’re evaluating software or AI work and want clarity
                                            before committing, we’re happy to talk.
                                        </p>

                                        <div className="mt-6 rounded-2xl bg-[#2FA4A9]/10 border border-[#2FA4A9]/20 px-5 py-4">
                                            <p className="text-sm font-semibold text-[#0D2A4A]">
                                                Primary CTA
                                            </p>
                                            <p className="text-sm text-[#4A5568]">
                                                Request a System Stability &amp; Automation Audit
                                            </p>
                                        </div>

                                        <div className="mt-6">
                                            <Button
                                                type="button"
                                                className="w-full md:w-fit bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-white font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
                                            >
                                                Request Audit <ArrowRight className="h-5 w-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="rounded-3xl border border-gray-100 bg-[#FAFBFC] p-3 shadow-md">
                                        <img
                                            src={images.partnership}
                                            alt="Partnership"
                                            className="w-full h-[320px] object-cover rounded-2xl"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
};

export default About;
