import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {

    const benefits = [
        {
            id: 1,
            icon: "CheckCircle2",
            text: "Free discovery call with no obligations"
        },
        {
            id: 2,
            icon: "CheckCircle2",
            text: "Detailed project scoping and estimation"
        },
        {
            id: 3,
            icon: "CheckCircle2",
            text: "Expert recommendations tailored to your needs"
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-[#0D2A4A] via-[#1a3a5f] to-[#2FA4A9] rounded-2xl overflow-hidden shadow-elevated">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6 w-fit">
                                <Icon name="Sparkles" size={20} color="#2FA4A9" />
                                <span className="text-sm md:text-base font-semibold text-white">Start Your Journey</span>
                            </div>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                                Ready to Overcome Your Technology Challenges?
                            </h2>

                            <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">
                                Let's discuss how we can help you transform system constraints into growth opportunities. Schedule a free discovery call to explore solutions tailored to your business needs.
                            </p>

                            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                                {benefits?.map((benefit) => (
                                    <div key={benefit?.id} className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-[#2FA4A9] rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icon name={benefit?.icon} size={16} color="#FFFFFF" />
                                        </div>
                                        <span className="text-sm md:text-base text-white">{benefit?.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
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
                                    Schedule Discovery Call
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => navigate('/case-studies')}
                                    iconName="FileText"
                                    iconPosition="left"
                                    className="border-white/30 text-white hover:bg-white/10"
                                >
                                    View Case Studies
                                </Button>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2FA4A9]/20 to-transparent"></div>
                            <div className="h-full flex items-center justify-center p-8 md:p-12">
                                <div className="space-y-4 md:space-y-6 w-full">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2FA4A9] rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Icon name="Zap" size={24} color="#FFFFFF" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm md:text-base font-semibold text-white">Fast Response Time</p>
                                                <p className="text-xs md:text-sm text-white/70">We'll get back to you within 24 hours</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2FA4A9] rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Icon name="Shield" size={24} color="#FFFFFF" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm md:text-base font-semibold text-white">Confidential & Secure</p>
                                                <p className="text-xs md:text-sm text-white/70">Your information is protected with us</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2FA4A9] rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Icon name="Users" size={24} color="#FFFFFF" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm md:text-base font-semibold text-white">Expert Consultation</p>
                                                <p className="text-xs md:text-sm text-white/70">Talk directly with our technical experts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
