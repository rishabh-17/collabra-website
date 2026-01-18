import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesOverviewSection = () => {

    const services = [
        {
            id: 1,
            icon: "Code2",
            title: "Custom Software Development",
            description: "Tailored solutions that align with your business processes and scale with your growth.",
            features: ["Web Applications", "Mobile Apps", "Enterprise Systems"],
            color: "#0D2A4A"
        },
        {
            id: 2,
            icon: "Workflow",
            title: "System Integration",
            description: "Seamless connectivity across platforms, eliminating data silos and manual workflows.",
            features: ["API Development", "Legacy Modernization", "Cloud Migration"],
            color: "#2FA4A9"
        },
        {
            id: 3,
            icon: "Brain",
            title: "AI & Machine Learning",
            description: "Practical AI implementation that delivers measurable business value and ROI.",
            features: ["Process Automation", "Predictive Analytics", "Natural Language Processing"],
            color: "#0D2A4A"
        },
        {
            id: 4,
            icon: "Shield",
            title: "Security & Compliance",
            description: "Enterprise-grade security measures and regulatory compliance built into every solution.",
            features: ["Security Audits", "Compliance Management", "Data Protection"],
            color: "#2FA4A9"
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <div className="inline-flex items-center space-x-2 bg-[#2FA4A9]/10 px-4 py-2 rounded-full mb-4">
                        <Icon name="Zap" size={20} color="#2FA4A9" />
                        <span className="text-sm md:text-base font-semibold text-[#0D2A4A]">Our Services</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2A4A] mb-3 md:mb-4">
                        Comprehensive Technology Solutions
                    </h2>
                    <p className="text-base md:text-lg text-[#4A5568] max-w-3xl mx-auto">
                        From custom development to AI integration, we deliver solutions that solve real business problems
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                    {services?.map((service, index) => (
                        <div
                            key={service?.id}
                            className="group bg-[#FAFBFC] rounded-xl p-6 md:p-8 hover:bg-white hover:shadow-elevated transition-all duration-300 border-2 border-transparent hover:border-[#2FA4A9]"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start space-x-4 mb-4 md:mb-6">
                                <div
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: service?.color }}
                                >
                                    <Icon name={service?.icon} size={24} color="#FFFFFF" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A] mb-2">{service?.title}</h3>
                                    <p className="text-sm md:text-base text-[#4A5568] leading-relaxed">{service?.description}</p>
                                </div>
                            </div>

                            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                                {service?.features?.map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#2FA4A9] flex-shrink-0"></div>
                                        <span className="text-sm md:text-base text-[#4A5568]">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                iconName="ArrowRight"
                                iconPosition="right"
                                className="text-[#2FA4A9] hover:text-[#0D2A4A] p-0"
                            >
                                Learn More
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 text-center">
                    <Button
                        variant="default"
                        size="lg"
                        onClick={() =>
                            window.open(
                                "https://calendly.com/williammwakaa",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                        iconName="MessageSquare"
                        iconPosition="left"
                        className="bg-[#0D2A4A] hover:bg-[#0D2A4A]/90 text-white"
                    >
                        Discuss Your Project
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverviewSection;
