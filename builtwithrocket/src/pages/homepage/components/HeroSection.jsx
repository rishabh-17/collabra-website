import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import useScrollAnimation from '../../../hooks/useScrollAnimation';

const HeroSection = () => {
    const navigate = useNavigate();
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#063453]">
            <div
                className="absolute inset-0 opacity-15"
                style={{
                    backgroundImage:
                        'linear-gradient(hsla(176, 59%, 52%, 0.45) 1px, transparent 1px), linear-gradient(90deg, hsla(176, 59%, 52%, 0.45) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />
            <div ref={ref} className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20 text-center">
                <h1
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'
                        }`}
                >
                    Dependable Software Development, Built for{' '}
                    <span className="text-[#2FA4A9]">Real Business Needs</span>
                </h1>
                <p
                    className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'
                        }`}
                >
                    Collabrah Tech partners with growing businesses to design, build, and support reliable software and
                    AI-powered systems, with clear communication, steady delivery, and long-term accountability.
                </p>
                <div className={isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'}>
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#2FA4A9] hover:bg-[#2FA4A9]/90 text-[#041B2E] text-lg px-8 py-6 rounded-lg group shadow-elevated"
                    >
                        <a href="#contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
                            Schedule a Discovery Call
                            <Icon
                                name="ArrowRight"
                                size={20}
                                color="#041B2E"
                                className="ml-2 group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
