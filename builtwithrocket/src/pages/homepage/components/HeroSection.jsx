import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
    const navigate = useNavigate();
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const rotatingMessages = [
        "We don't start with tools or trends. We start with understanding.",
        "Clear problem-first thinking, not tool-led delivery.",
        "Practical AI that teams can trust and maintain."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentMessageIndex((prev) => (prev + 1) % rotatingMessages?.length);
                setIsVisible(true);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden bg-gradient-to-br from-[#0D2A4A] via-[#1a3a5f] to-[#2FA4A9]">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-[#2FA4A9] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-[#0D2A4A] rounded-full blur-3xl animate-pulse animation-delay-300"></div>
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="text-center lg:text-left space-y-6 md:space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            <Icon name="Award" size={20} color="#2FA4A9" />
                            <span className="text-sm md:text-base text-white font-medium">Trusted by Industry Leaders</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                            Dependable Innovation for
                            <span className="block mt-2 text-[#2FA4A9]">Growing Businesses</span>
                        </h1>

                        <div className="min-h-[80px] md:min-h-[100px] flex items-center">
                            <p
                                className={`text-base md:text-lg lg:text-xl text-white/90 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                            >
                                {rotatingMessages?.[currentMessageIndex]}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                                onClick={() => navigate('/case-studies')}
                                iconName="FileText"
                                iconPosition="left"
                                className="border-white/30 text-white hover:bg-white/10"
                            >
                                View Case Studies
                            </Button>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
                            <div className="flex items-center space-x-2">
                                <Icon name="CheckCircle2" size={20} color="#2FA4A9" />
                                <span className="text-sm md:text-base text-white/80">No Upfront Costs</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Icon name="Shield" size={20} color="#2FA4A9" />
                                <span className="text-sm md:text-base text-white/80">Enterprise Security</span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block relative">
                        <div className="relative w-full h-[400px] lg:h-[500px]">
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 shadow-elevated">
                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex items-center space-x-3 p-3 md:p-4 bg-white/10 rounded-lg backdrop-blur-sm animate-slide-in-right">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2FA4A9] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon name="Zap" size={24} color="#FFFFFF" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm md:text-base font-semibold text-white">System Integration</p>
                                            <p className="text-xs md:text-sm text-white/70 truncate">Seamless connectivity across platforms</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 md:p-4 bg-white/10 rounded-lg backdrop-blur-sm animate-slide-in-right animation-delay-200">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2FA4A9] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon name="Brain" size={24} color="#FFFFFF" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm md:text-base font-semibold text-white">Practical AI Solutions</p>
                                            <p className="text-xs md:text-sm text-white/70 truncate">Intelligence that delivers measurable value</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 md:p-4 bg-white/10 rounded-lg backdrop-blur-sm animate-slide-in-right animation-delay-400">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2FA4A9] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon name="Users" size={24} color="#FFFFFF" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm md:text-base font-semibold text-white">Long-term Partnership</p>
                                            <p className="text-xs md:text-sm text-white/70 truncate">Relationships beyond project delivery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFBFC] to-transparent"></div>
        </section>
    );
};

export default HeroSection;