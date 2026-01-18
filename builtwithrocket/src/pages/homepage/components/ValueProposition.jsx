import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ValuePropositionSection = () => {
    const navigate = useNavigate();

    const approachSteps = [
        {
            id: 1,
            icon: "Search",
            title: "Diagnose the Real Constraints",
            description: "We identify where systems, data, or processes are slowing teams down or introducing risk.",
            points: [
                "Deep discovery focused on real-world usage",
                "Clear understanding of where things break",
                "Alignment with business priorities"
            ]
        },
        {
            id: 2,
            icon: "Route",
            title: "Define a Right-Sized Path Forward",
            description: "We focus on what actually needs to be built now and what doesn’t, to avoid overengineering.",
            points: [
                "Right-sized scopes instead of big-bang rewrites",
                "Prioritised roadmap tied to outcomes",
                "Options with trade-offs explained plainly"
            ]
        },
        {
            id: 3,
            icon: "ShieldCheck",
            title: "Build for Reliability First",
            description: "Architecture, data integrity, and system behaviour under load are prioritised before features.",
            points: [
                "Foundations designed for real-world load",
                "Data flows that stay trustworthy over time",
                "Operational concerns built in, not bolted on"
            ]
        },
        {
            id: 4,
            icon: "MessageSquare",
            title: "Deliver with Transparency",
            description: "Clear timelines, clear communication, and no surprises throughout the engagement.",
            points: [
                "Plain-language updates, not technical fog",
                "Visible progress and honest status reports",
                "Decisions explained with context"
            ]
        },
        {
            id: 5,
            icon: "Users",
            title: "Stay Accountable Long-Term",
            description: "We don’t disappear after delivery. We support systems as they evolve in production.",
            points: [
                "Ongoing partnership instead of one-off delivery",
                "Support as systems and teams grow",
                "Fewer surprises as needs change"
            ]
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-[#FAFBFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2A4A] mb-3 md:mb-4">
                        Our Approach: How We Work (And Why It Reduces Risk)
                    </h2>
                    <p className="text-base md:text-lg text-[#4A5568] max-w-3xl mx-auto">
                        We don’t start with tools or trends. We start by understanding where things break under real-world conditions, then move carefully from diagnosis to delivery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">
                    {approachSteps?.map((step, index) => (
                        <div
                            key={step?.id}
                            className="group bg-white rounded-xl p-6 md:p-8 shadow-subtle hover:shadow-elevated transition-all duration-300 border-2 border-transparent hover:border-[#2FA4A9]"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start space-x-4 mb-4 md:mb-6">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0D2A4A] to-[#2FA4A9] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Icon name={step?.icon} size={24} color="#FFFFFF" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg md:text-xl font-bold text-[#0D2A4A] mb-2">{step?.title}</h3>
                                    <p className="text-sm md:text-base text-[#4A5568] leading-relaxed">{step?.description}</p>
                                </div>
                            </div>

                            <div className="space-y-2 md:space-y-3 pl-16 md:pl-[72px]">
                                {step?.points?.map((point, idx) => (
                                    <div key={idx} className="flex items-center space-x-2">
                                        <Icon name="CheckCircle2" size={16} color="#2FA4A9" className="flex-shrink-0" />
                                        <span className="text-sm md:text-base text-[#4A5568]">{point}</span>
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
                            onClick={() =>
                                window.open(
                                    "https://calendly.com/williammwakaa",
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                            iconName="Calendar"
                            iconPosition="left"
                            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white shadow-elevated"
                        >
                            Request a Free System Stability &amp; Automation Audit
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => navigate('/about')}
                            iconName="ArrowRight"
                            iconPosition="right"
                            className="border-white/30 text-white hover:bg-white/10"
                        >
                            Learn About Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuePropositionSection;
