import React from "react";
import Header from "../../components/Header";
import FooterSection from "../homepage/components/FooterSection";

const CookiePolicy = () => {
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
                            Cookie Policy
                        </h1>

                        <p className="mt-3 max-w-3xl text-base md:text-lg text-white/80">
                            This policy explains how cookies are used on Collabrah Tech, what they do, and how you can
                            control them.
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
                                                Cookie Policy
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
                                                This Cookie Policy explains how Collabrah Tech uses cookies and similar
                                                technologies on{" "}
                                                <span className="font-semibold text-[#0D2A4A]">
                                                    https://collabrahtech.com
                                                </span>
                                                .
                                            </p>

                                            {/* ✅ Sections */}
                                            <div className="space-y-7">
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        1. What Are Cookies
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        Cookies are small text files stored on your device when you visit a
                                                        website. They help websites function efficiently and can provide
                                                        analytical insights.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        2. Cookies We Use
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        We use the following types of cookies:
                                                    </p>

                                                    {/* ✅ Analytics Cookies block */}
                                                    <div className="mt-4 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                                        <p className="text-sm font-semibold text-[#0D2A4A]">
                                                            2.1 Analytics Cookies
                                                        </p>
                                                        <p className="mt-2 text-sm md:text-base">
                                                            We use Google Analytics to collect information about how visitors
                                                            use the Website. This includes page visits, session duration, and
                                                            interaction patterns. This data helps us improve our Website.
                                                        </p>
                                                        <p className="mt-3 text-sm md:text-base">
                                                            Google Analytics may collect IP addresses and other usage data in
                                                            accordance with Google’s privacy policies.
                                                        </p>

                                                        <div className="mt-4 rounded-xl border border-[#2FA4A9]/25 bg-[#2FA4A9]/10 p-4">
                                                            <p className="text-sm font-semibold text-[#0D2A4A]">
                                                                Why we use this:
                                                            </p>
                                                            <ul className="mt-2 space-y-2">
                                                                {[
                                                                    "To understand which pages are most useful",
                                                                    "To improve navigation and site structure",
                                                                    "To reduce friction for visitors",
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
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        3. How to Control Cookies
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        You can control or disable cookies through your browser settings.
                                                        Disabling cookies may affect Website functionality.
                                                    </p>

                                                    <div className="mt-4 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                                        <p className="text-sm font-semibold text-[#0D2A4A]">
                                                            Common options include:
                                                        </p>
                                                        <ul className="mt-3 space-y-2">
                                                            {[
                                                                "Blocking cookies completely",
                                                                "Deleting existing cookies from your browser",
                                                                "Allowing cookies only for specific sites",
                                                            ].map((item) => (
                                                                <li key={item} className="flex items-start gap-3">
                                                                    <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                                    <span className="text-sm md:text-base">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        4. Third-Party Cookies
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        We may allow third-party service providers to place cookies for
                                                        analytics purposes. We do not control these cookies.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        5. Changes to This Cookie Policy
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        We may update this Cookie Policy from time to time. Changes will be
                                                        posted on the Website.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        6. Contact Information
                                                    </h3>
                                                    <div className="mt-3 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-5">
                                                        <p className="text-sm md:text-base text-[#4A5568]">
                                                            For questions about this Cookie Policy, contact:
                                                            <br />
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
                                                    By continuing to browse the site, you consent to the use of cookies
                                                    where applicable.
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
                                                    title: "We use analytics cookies",
                                                    desc: "To improve the website experience and performance.",
                                                },
                                                {
                                                    title: "You can disable cookies",
                                                    desc: "Manage cookies via browser settings anytime.",
                                                },
                                                {
                                                    title: "Third-party tools may set cookies",
                                                    desc: "Example: Google Analytics.",
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
                                            Questions about cookies?
                                        </h3>
                                        <p className="mt-2 text-sm text-white/80">
                                            If you need help understanding what cookies are being used and why, contact us.
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
                                            This page is provided for transparency. For legal interpretation, consult a
                                            qualified professional.
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

export default CookiePolicy;
