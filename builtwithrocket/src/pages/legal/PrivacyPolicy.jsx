import React from "react";
import Header from "../../components/Header";
import FooterSection from "../homepage/components/FooterSection";

const PrivacyPolicy = () => {
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
                            Privacy Policy
                        </h1>

                        <p className="mt-3 max-w-3xl text-base md:text-lg text-white/80">
                            This policy explains how Collabrah Tech collects, uses, and protects information when you
                            visit our website or contact us.
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
                                                Privacy Policy
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
                                                Collabrah Tech (“Company”, “we”, “our”, or “us”) operates the website{" "}
                                                <span className="font-semibold text-[#0D2A4A]">
                                                    https://collabrahtech.com
                                                </span>{" "}
                                                (the “Website”) and provides software development and technology services,
                                                including SaaS products, custom software development, mobile applications,
                                                internal tools, APIs, and AI-powered solutions (collectively, the “Services”).
                                            </p>

                                            <p className="text-sm md:text-base">
                                                This Privacy Policy explains how we collect, use, disclose, and safeguard
                                                your information when you visit our Website or interact with our Services.
                                            </p>

                                            {/* ✅ Sections */}
                                            <div className="space-y-7">
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        1. Information We Collect
                                                    </h3>

                                                    <h4 className="mt-4 text-base font-semibold text-[#0D2A4A]">
                                                        1.1 Personal Information
                                                    </h4>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        We may collect limited personal information that you voluntarily provide to us, including:
                                                    </p>
                                                    <ul className="mt-3 space-y-2">
                                                        {["Name", "Email address"].map((item) => (
                                                            <li key={item} className="flex items-start gap-3">
                                                                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                                <span className="text-sm md:text-base">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <p className="mt-4 text-sm md:text-base">
                                                        This information is collected when you:
                                                    </p>
                                                    <ul className="mt-3 space-y-2">
                                                        {[
                                                            "Subscribe to our newsletter",
                                                            "Contact us via forms or email",
                                                            "Interact with our Website for informational purposes",
                                                        ].map((item) => (
                                                            <li key={item} className="flex items-start gap-3">
                                                                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                                <span className="text-sm md:text-base">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <p className="mt-4 text-sm md:text-base">
                                                        We do not require users to create accounts on our Website.
                                                    </p>

                                                    <h4 className="mt-6 text-base font-semibold text-[#0D2A4A]">
                                                        1.2 Automatically Collected Information
                                                    </h4>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        When you access the Website, we may automatically collect certain technical information, including:
                                                    </p>

                                                    <ul className="mt-3 space-y-2">
                                                        {[
                                                            "IP address",
                                                            "Browser type and version",
                                                            "Device type and operating system",
                                                            "Pages visited and time spent on pages",
                                                        ].map((item) => (
                                                            <li key={item} className="flex items-start gap-3">
                                                                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                                <span className="text-sm md:text-base">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <p className="mt-4 text-sm md:text-base">
                                                        This data is collected through Google Analytics to help us understand website usage and improve content quality.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        2. How We Use Your Information
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        We use collected information for the following purposes:
                                                    </p>

                                                    <ul className="mt-3 space-y-2">
                                                        {[
                                                            "To operate and maintain our Website",
                                                            "To improve website performance, content, and user experience",
                                                            "To send newsletters or informational updates (where consent has been provided)",
                                                            "To respond to inquiries and provide customer support",
                                                            "To comply with legal obligations",
                                                        ].map((item) => (
                                                            <li key={item} className="flex items-start gap-3">
                                                                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                                <span className="text-sm md:text-base">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="mt-4 rounded-2xl border border-[#2FA4A9]/25 bg-[#2FA4A9]/10 p-4">
                                                        <p className="text-sm md:text-base text-[#0D2A4A] font-semibold">
                                                            We do not sell, rent, or trade your personal information.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        3. Legal Basis for Processing (GDPR)
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        Where applicable, we process personal data under the following legal bases:
                                                    </p>
                                                    <ul className="mt-3 space-y-2">
                                                        {[
                                                            "Consent – when you voluntarily provide your information",
                                                            "Legitimate interests – to operate, maintain, and improve our Website and Services",
                                                            "Legal obligations – where required by law",
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
                                                        4. Data Sharing and Third Parties
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        We may share your information with trusted third-party service providers solely for operational purposes, including:
                                                    </p>
                                                    <ul className="mt-3 space-y-2">
                                                        {[
                                                            "Analytics providers (e.g., Google Analytics)",
                                                            "Email delivery and infrastructure providers",
                                                        ].map((item) => (
                                                            <li key={item} className="flex items-start gap-3">
                                                                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                                <span className="text-sm md:text-base">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <p className="mt-4 text-sm md:text-base">
                                                        These third parties are contractually obligated to protect your data and use it only for the services they provide to us.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        5. Data Retention
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        6. International Data Transfers
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        As a global business, your information may be transferred to and processed in countries outside your country of residence, including India. We take reasonable measures to ensure appropriate safeguards are in place.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        7. Your Rights
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        Depending on your jurisdiction, you may have the right to:
                                                    </p>
                                                    <ul className="mt-3 space-y-2">
                                                        {[
                                                            "Access your personal data",
                                                            "Request correction or deletion",
                                                            "Withdraw consent at any time",
                                                            "Object to or restrict processing",
                                                        ].map((item) => (
                                                            <li key={item} className="flex items-start gap-3">
                                                                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FA4A9]" />
                                                                <span className="text-sm md:text-base">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <p className="mt-4 text-sm md:text-base">
                                                        Requests may be submitted to{" "}
                                                        <a
                                                            href="mailto:support@collabrahtech.com"
                                                            className="text-[#2FA4A9] font-semibold hover:underline"
                                                        >
                                                            support@collabrahtech.com
                                                        </a>
                                                        .
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        8. Data Security
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        We implement reasonable administrative, technical, and organizational measures to protect your information. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        9. Children’s Privacy
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        Our Website and Services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A]">
                                                        10. Changes to This Privacy Policy
                                                    </h3>
                                                    <p className="mt-2 text-sm md:text-base">
                                                        We reserve the right to update this Privacy Policy at any time. Changes will be effective upon posting to the Website.
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
                                                            <br />
                                                            Website:{" "}
                                                            <a
                                                                href="https://collabrahtech.com"
                                                                className="text-[#2FA4A9] font-semibold hover:underline"
                                                            >
                                                                https://collabrahtech.com
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ✅ Sidebar (Quick Summary / Helpful) */}
                            <div className="lg:col-span-4">
                                <div className="sticky top-28 space-y-6">
                                    <div className="rounded-3xl border border-[#2FA4A9]/25 bg-white shadow-sm p-6">
                                        <h3 className="text-lg font-bold text-[#0D2A4A]">
                                            Quick Summary
                                        </h3>

                                        <div className="mt-4 space-y-3">
                                            {[
                                                {
                                                    title: "We only collect what’s needed",
                                                    desc: "Name, email, and basic analytics data.",
                                                },
                                                {
                                                    title: "No selling of your data",
                                                    desc: "We don’t trade or rent personal information.",
                                                },
                                                {
                                                    title: "You stay in control",
                                                    desc: "You can request access or deletion anytime.",
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
                                            Questions about privacy?
                                        </h3>
                                        <p className="mt-2 text-sm text-white/80">
                                            If you need help understanding this policy, email us and we’ll explain it clearly.
                                        </p>
                                        <a
                                            href="mailto:support@collabrahtech.com"
                                            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#2FA4A9] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2FA4A9]/90"
                                        >
                                            Contact Support
                                        </a>
                                    </div>

                                    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                                        <p className="text-sm font-semibold text-[#0D2A4A]">
                                            Note
                                        </p>
                                        <p className="mt-2 text-sm text-[#4A5568]">
                                            This page is designed for clarity and transparency. For legal interpretation,
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

export default PrivacyPolicy;
