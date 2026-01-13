import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
    const navigate = useNavigate();
    const currentYear = new Date()?.getFullYear();

    const footerLinks = {
        company: [
            { label: "About Us", path: "/about" },
            { label: "Our Approach", path: "/approach" },
            { label: "Case Studies", path: "/case-studies" },
            { label: "Contact", path: "/contact" }
        ],
        services: [
            { label: "Custom Development", path: "/services" },
            { label: "System Integration", path: "/services" },
            { label: "AI Solutions", path: "/services" },
            { label: "Security & Compliance", path: "/services" }
        ],
        resources: [
            { label: "Blog", path: "/resources" },
            { label: "Insights", path: "/resources" },
            { label: "Guides", path: "/resources" },
            { label: "FAQ", path: "/resources" }
        ]
    };

    const socialLinks = [
        { icon: "Linkedin", url: "https://linkedin.com", label: "LinkedIn" },
        { icon: "Twitter", url: "https://twitter.com", label: "Twitter" },
        { icon: "Github", url: "https://github.com", label: "GitHub" },
        { icon: "Mail", url: "mailto:contact@collabrahtech.com", label: "Email" }
    ];

    return (
        <footer className="bg-[#0D2A4A] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4 md:mb-6">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#0D2A4A] to-[#2FA4A9]">
                                <Icon name="Code2" size={24} color="#FFFFFF" />
                            </div>
                            <span className="text-xl font-bold">Collabrah Tech</span>
                        </div>
                        <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6 leading-relaxed">
                            Your trusted technology partner for dependable innovation. We transform system constraints into growth opportunities through problem-first thinking and practical AI solutions.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks?.map((social) => (
                                <a
                                    key={social?.label}
                                    href={social?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#2FA4A9] rounded-lg flex items-center justify-center transition-all duration-300"
                                    aria-label={social?.label}
                                >
                                    <Icon name={social?.icon} size={20} color="#FFFFFF" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Company</h3>
                        <ul className="space-y-2 md:space-y-3">
                            {footerLinks?.company?.map((link) => (
                                <li key={link?.label}>
                                    <button
                                        onClick={() => navigate(link?.path)}
                                        className="text-sm md:text-base text-white/70 hover:text-[#2FA4A9] transition-colors duration-300"
                                    >
                                        {link?.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Services</h3>
                        <ul className="space-y-2 md:space-y-3">
                            {footerLinks?.services?.map((link) => (
                                <li key={link?.label}>
                                    <button
                                        onClick={() => navigate(link?.path)}
                                        className="text-sm md:text-base text-white/70 hover:text-[#2FA4A9] transition-colors duration-300"
                                    >
                                        {link?.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Resources</h3>
                        <ul className="space-y-2 md:space-y-3">
                            {footerLinks?.resources?.map((link) => (
                                <li key={link?.label}>
                                    <button
                                        onClick={() => navigate(link?.path)}
                                        className="text-sm md:text-base text-white/70 hover:text-[#2FA4A9] transition-colors duration-300"
                                    >
                                        {link?.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 md:pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-xs md:text-sm text-white/60 text-center md:text-left">
                            &copy; {currentYear} Collabrah Tech. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
                            <button className="text-xs md:text-sm text-white/60 hover:text-[#2FA4A9] transition-colors duration-300">
                                Privacy Policy
                            </button>
                            <button className="text-xs md:text-sm text-white/60 hover:text-[#2FA4A9] transition-colors duration-300">
                                Terms of Service
                            </button>
                            <button className="text-xs md:text-sm text-white/60 hover:text-[#2FA4A9] transition-colors duration-300">
                                Cookie Policy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;