import React, { useEffect } from 'react';
import Header from '../../components/Header';
import HeroSection from './components/HeroSection';
import ClientLogoSection from './components/ClientLogoSection';
import ValuePropositionSection from './components/ValuePropositionSection';
import ServicesOverviewSection from './components/ServicesOverviewSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import DownloadCodeButton from './components/DownloadCodeButton';

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#FAFBFC]">
            <Header />
            <main>
                <HeroSection />
                <ClientLogoSection />
                <ValuePropositionSection />
                <ServicesOverviewSection />
                <TestimonialSection />
                <CTASection />
            </main>
            <FooterSection />
            <DownloadCodeButton />
        </div>
    );
};

export default Homepage;