import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ValuePropositionSection = () => {
    const navigate = useNavigate();

    const valueProps = [
        {
            id: 1,
            icon: "Target",
            title: "Problem-First Thinking",
            description: "We don't start with tools or trends. We start with understanding your unique challenges and business context.",
            benefits: [
                "Deep discovery process",
                "Custom solution architecture",
                "Business-aligned outcomes"
            ]
        },
        {
            id: 2,
            icon: "Brain",
            title: "Practical AI Implementation",
            description: "Intelligence applied where it creates measurable value, not AI for the sake of trends.",
            benefits: [
                "ROI-focused AI integration",
                "Maintainable solutions",
                "Team training included"
            ]
        },
        {
            id: 3,
            icon: "Users",
            title: "Long-term Partnership",
            description: "Relationships that extend beyond project delivery with ongoing support and evolution.",
            benefits: [
                "Dedicated account management",
                "Continuous optimization",
                "Scalable architecture"
            ]
        },
        {
            id: 4,
            icon: "MessageSquare",
            title: "Transparent Communication",
            description: "Plain language throughout complex processes, keeping you informed at every stage.",
            benefits: [
                "Regular progress updates",
                "Clear documentation",
                "Honest recommendations"
            ]
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-[#FAFBFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2A4A] mb-3 md:mb-4">
                        Why Growing Businesses Choose Us
                    </h2>
                    <p className="text-base md:text-lg text-[#4A5568] max-w-3xl mx-auto">
                        We're not just another agency. We're the technology partner that helps you regain momentum when systems become constraints.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">
                    {valueProps?.map((prop, index) => (
                        <div
                            key={prop?.id}
                            className="group bg-white rounded-xl p-6 md:p-8 shadow-subtle hover:shadow-elevated transition-all duration-300 border-2 border-transparent hover:border-[#2FA4A9]"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start space-x-4 mb-4 md:mb-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0D2A4A] to-[#2FA4A9] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Icon name={prop?.icon} size={24} color="#FFFFFF" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A] mb-2">{prop?.title}</h3>
                                    <p className="text-sm md:text-base text-[#4A5568] leading-relaxed">{prop?.description}</p>
                                </div>
                            </div>

                            <div className="space-y-2 md:space-y-3 pl-16 md:pl-[72px]">
                                {prop?.benefits?.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center space-x-2">
                                        <Icon name="CheckCircle2" size={16} color="#2FA4A9" className="flex-shrink-0" />
                                        <span className="text-sm md:text-base text-[#4A5568]">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-[#0D2A4A] to-[#2FA4A9] rounded-2xl p-8 md:p-12 lg:p-16 text-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                        Ready to Transform Your Technology Challenges?
                    </h3>
                    <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help you overcome system constraints and unlock growth potential.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="default"
                            size="lg"
                            onClick={() => navigate('/contact')}
                            iconName="Calendar"
                            iconPosition="left"
                            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white shadow-elevated"
                        >
                            Schedule Discovery Call
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => navigate('/approach')}
                            iconName="ArrowRight"
                            iconPosition="right"
                            className="border-white/30 text-white hover:bg-white/10"
                        >
                            Learn Our Approach
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuePropositionSection;