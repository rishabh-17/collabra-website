import React from "react";
import Header from "../../components/Header";
import FooterSection from "../homepage/components/FooterSection";

const TermsConditions = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAFBFC]">
            <Header />

            <main className="flex-grow pb-16">
                {/* ✅ Hero (same theme as your site) */}
                <section className="relative overflow-hidden pt-10 bg-[#063453]">
                    <div
                        className="absolute inset-0 opacity-15"
                        style={{
                            backgroundImage:
                                "linear-gradient(hsla(176, 59%, 52%, 0.45) 1px, transparent 1px), linear-gradient(90deg, hsla(176, 59%, 52%, 0.45) 1px, transparent 1px)",
                            backgroundSize: "50px 50px",
                        }}
                    />
                    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-[#2FA4A9]" />
                            Legal
                        </div>

                        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                            Terms &amp; Conditions
                        </h1>

                        <p className="mt-3 max-w-3xl text-base md:text-lg text-white/80">
                            These terms explain how you may use our website and what to expect when interacting with
                            Collabrah Tech.
                        </p>
                    </div>
                </section>

                {/* ✅ Content */}
                <section className="mt-10">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* ✅ Main Content */}
                            <div className="lg:col-span-8">
                                <div className="rounded-3xl border border-gray-100 bg-white shadow-sm">
                                    <div className="p-6 md:p-10">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                            <h2 className="text-xl md:text-2xl font-bold text-[#0D2A4A]">
                                                Terms &amp; Conditions
                                            </h2>
                                            <div className="inline-flex items-center gap-2 rounded-xl border border-gray-100 bg-[#FAFBFC] px-4 py-2">
                                                <span className="text-xs font-semibold text-[#0D2A4A]">
                                                    Last updated:
                                                </span>
                                                <span className="text-xs font-semibold text-[#2FA4A9]">
                                                    23-01-2026
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-6 space-y-6 text-[#4A5568] leading-relaxed">
                                            <p className="text-sm md:text-base">
                                                These Terms and Conditions (“Terms”) govern your use of{" "}
                                                <span className="font-semibold text-[#0D2A4A]">
                                                    https://collabrahtech.com
                                                </span>{" "}
                                                and any related services provided by Collabrah Tech.
                                            </p>

                                            <p className="text-sm md:text-base">
                                                By accessing or using the Website, you agree to be bound by these Terms.
                                            </p>

                                            <div className="space-y-7">
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        1. Use of the Website
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        You agree to use the Website only for lawful purposes and in accordance with these Terms. You may not:
                                                    </p>

                                                    <ul className="mt-3 space-y-2">
                                                        {[
                                                            "Use the Website in any way that violates applicable laws or regulations",
                                                            "Attempt to gain unauthorized access to systems or data",
                                                            "Disrupt or interfere with the Website’s functionality",
                                                        ].map((item) => (
                                                            <li key={item} className="flex items-start gap-3">
                                                                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                                <span className="text-sm md:text-base">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        2. Intellectual Property
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        All content on the Website, including text, graphics, logos, code, and design elements, is the intellectual property of Collabrah Tech or its licensors and is protected by applicable intellectual property laws.
                                                    </p>
                                                    <p className="mt-3 text-sm md:text-base">
                                                        You may not reproduce, distribute, or create derivative works without prior written consent.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        3. Services
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        Descriptions of Services on the Website are for informational purposes only and do not constitute binding offers. Specific terms for Services will be governed by separate written agreements where applicable.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        4. Third-Party Services
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        The Website may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of any third party.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        5. Disclaimer of Warranties
                                                    </h3>
                                                    <div className="mt-3 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                                        <p className="text-sm md:text-base">
                                                            The Website and Services are provided on an{" "}
                                                            <span className="font-semibold text-[#0D2A4A]">
                                                                “AS IS” and “AS AVAILABLE”
                                                            </span>{" "}
                                                            basis. We make no warranties, express or implied, regarding accuracy,
                                                            reliability, or availability.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        6. Limitation of Liability
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        To the fullest extent permitted by law, Collabrah Tech shall not be liable
                                                        for any indirect, incidental, special, or consequential damages arising
                                                        from your use of the Website or Services.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        7. Indemnification
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        You agree to indemnify and hold harmless Collabrah Tech from any claims,
                                                        losses, or damages arising out of your use of the Website or violation
                                                        of these Terms.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        8. Governing Law
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        These Terms shall be governed by and construed in accordance with the laws
                                                        of India, without regard to conflict of law principles.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        9. Termination
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        We reserve the right to suspend or terminate access to the Website at our discretion,
                                                        without notice, for conduct that violates these Terms.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        10. Changes to Terms
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        We may update these Terms at any time. Continued use of the Website constitutes acceptance of the revised Terms.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        11. Contact Information
                                                    </h3>
                                                    <div className="mt-3 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                                        <p className="text-sm md:text-base text-[#4A5568]">
                                                            <span className="font-bold text-[#0D2A4A]">Collabrah Tech</span>
                                                            <br />
                                                            Email:{" "}
                                                            <a
                                                                href="mailto:support@collabrahtech.com"
                                                                className="text-[#2FA4A9] font-semibold hover:underline"
                                                            >
                                                                support@collabrahtech.com
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 rounded-2xl border border-[#2FA4A9]/25 bg-[#2FA4A9]/10 p-5">
                                                <p className="text-sm md:text-base text-[#0D2A4A] font-semibold">
                                                    By using this website, you acknowledge that you’ve read and agreed to these Terms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ✅ Sidebar */}
                            <div className="lg:col-span-4">
                                <div className="sticky top-28 space-y-6">
                                    <div className="rounded-3xl border border-[#2FA4A9]/25 bg-white shadow-sm p-6">
                                        <h3 className="text-lg font-bold text-[#0D2A4A]">
                                            Quick Summary
                                        </h3>

                                        <div className="mt-4 space-y-3">
                                            {[
                                                {
                                                    title: "Use the site responsibly",
                                                    desc: "No misuse, disruption, or unauthorized access attempts.",
                                                },
                                                {
                                                    title: "Content is protected",
                                                    desc: "Our content and design can’t be copied without permission.",
                                                },
                                                {
                                                    title: "Terms can change",
                                                    desc: "Updates apply once published here.",
                                                },
                                            ].map((item) => (
                                                <div
                                                    key={item.title}
                                                    className="rounded-2xl border border-gray-100 bg-[#FAFBFC] p-4"
                                                >
                                                    <p className="text-sm font-semibold text-[#0D2A4A]">
                                                        {item.title}
                                                    </p>
                                                    <p className="mt-1 text-sm text-[#4A5568]">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="rounded-3xl border border-gray-100 bg-[#0D2A4A] p-6 text-white shadow-sm">
                                        <h3 className="text-lg font-bold">
                                            Need clarification?
                                        </h3>
                                        <p className="mt-2 text-sm text-white/80">
                                            If anything here is unclear, reach out — we’ll explain it in plain language.
                                        </p>
                                        <a
                                            href="mailto:support@collabrahtech.com"
                                            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#2FA4A9] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2FA4A9]/90"
                                        >
                                            Contact Support
                                        </a>
                                    </div>

                                    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                                        <p className="text-sm font-semibold text-[#0D2A4A]">Note</p>
                                        <p className="mt-2 text-sm text-[#4A5568]">
                                            This page is provided for transparency and clarity. For legal interpretation,
                                            consult a qualified professional.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-8" />
                    </div>
                </section>
            </main>

            <FooterSection />
        </div>
    );
};

export default TermsConditions;
