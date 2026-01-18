import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useContactDrawer } from '../../../components/ContactDrawerProvider';

const ServicesOverviewSection = () => {
    const { openDrawer } = useContactDrawer();

    const services = [
        {
            id: 1,
            icon: "Code2",
            title: "Stabilize & Modernize Core Software",
            description: "We design, rebuild, and modernize internal and customer-facing systems that teams rely on daily — with an emphasis on reliability, clarity, and long-term maintainability.",
            features: [
                "Internal and customer-facing systems",
                "Modernization without unnecessary rewrites",
                "Reliability as a core requirement"
            ],
            color: "#0D2A4A"
        },
        {
            id: 2,
            icon: "Shield",
            title: "Architecture & System Foundations",
            description: "We address weak architecture early so platforms scale cleanly, perform predictably, and don’t require constant rewrites as usage grows.",
            features: [
                "Scale-ready foundations",
                "Performance under real-world load",
                "Reduced rework over time"
            ],
            color: "#2FA4A9"
        },
        {
            id: 3,
            icon: "Workflow",
            title: "Integration & Automation",
            description: "We connect fragmented tools, streamline data flows, and remove manual handoffs that slow operations and introduce risk.",
            features: [
                "Connected tools and data",
                "Reduced manual handoffs",
                "More reliable operations"
            ],
            color: "#0D2A4A"
        },
        {
            id: 4,
            icon: "Brain",
            title: "Practical AI (When It Earns Its Place)",
            description: "We apply AI for intelligent recommendations and matching, automation of repetitive or error-prone workflows, and decision support built on trustworthy data. No hype. No black boxes.",
            features: [
                "Intelligent recommendations and matching",
                "Automation of repetitive or error-prone work",
                "Decision support built on reliable data"
            ],
            color: "#2FA4A9"
        },
        {
            id: 5,
            icon: "Users",
            title: "Ongoing Support & Evolution",
            description: "We stay involved after launch, supporting, improving, and evolving systems as the business grows.",
            features: [
                "Post-launch support",
                "Continuous improvements",
                "Systems that grow with the business"
            ],
            color: "#0D2A4A"
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <div className="inline-flex items-center space-x-2 bg-[#2FA4A9]/10 px-4 py-2 rounded-full mb-4">
                        <Icon name="Zap" size={20} color="#2FA4A9" />
                        <span className="text-sm md:text-base font-semibold text-[#0D2A4A]">What We Do</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2A4A] mb-3 md:mb-4">
                        What We Help Teams Fix
                    </h2>
                    <p className="text-base md:text-lg text-[#4A5568] max-w-3xl mx-auto">
                        We stabilize and modernize core systems, strengthen architecture, connect tools, and apply AI only where it earns its place.
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

                            <div className="space-y-2 md:space-y-3">
                                {service?.features?.map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#2FA4A9] flex-shrink-0"></div>
                                        <span className="text-sm md:text-base text-[#4A5568]">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 text-center">
                    <Button
                        variant="default"
                        size="lg"
                        onClick={openDrawer}
                        iconName="CheckCircle2"
                        iconPosition="left"
                        className="bg-[#0D2A4A] hover:bg-[#0D2A4A]/90 text-white"
                    >
                        Get a Free System Stability &amp; Automation Audit
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverviewSection;
