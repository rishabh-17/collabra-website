import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyOverview = () => {
    const challenges = [
        {
            id: 1,
            icon: "AlertCircle",
            text: "Processes become manual."
        },
        {
            id: 2,
            icon: "Link2Off",
            text: "Tools don't integrate."
        },
        {
            id: 3,
            icon: "Database",
            text: "Data is hard to trust."
        },
        {
            id: 4,
            icon: "Cpu", // Represents AI/Chip
            text: "AI feels promising, but unclear."
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2A4A] leading-tight mb-4">
                        When Systems Stop Supporting Growth, <span className="text-[#2FA4A9]">Everything<br className="hidden md:block" /> Slows Down</span>
                    </h2>
                    <p className="text-base md:text-lg text-[#4A5568] max-w-3xl mx-auto leading-relaxed">
                        Many businesses reach a point where progress stalls; not because of a lack of ambition, but because their systems can't keep up.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 max-w-5xl mx-auto">
                    {challenges.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-[#E0F2F1] rounded-lg flex items-center justify-center mr-4">
                                <Icon name={item.icon} size={24} className="text-[#2FA4A9]" />
                            </div>
                            <span className="text-base md:text-lg font-semibold text-[#0D2A4A]">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <div className="text-center">
                    <p className="text-base md:text-lg text-[#4A5568] max-w-3xl mx-auto leading-relaxed">
                        We help teams regain momentum by designing software and AI systems that bring clarity, reliability, and structure back into day-to-day operations — without introducing unnecessary complexity.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CompanyOverview;
