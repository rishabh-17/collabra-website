import React from "react";
import Header from "../../../../components/Header";
import HeroSection from "../HeroSection";
import ClientLogoSection from "../ClientLogoSection";
import CompanyOverview from "../CompanyOverview";
import BusinessChallenges from "../BusinessChallenges";
import ValuePropositionSection from "../ValueProposition";
import ServicesOverviewSection from "../ServicesOverview";
import TestimonialSection from "../TestimonialSection";
import CTASection from "../CTASection";
import FooterSection from "../FooterSection";

const Homepage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <ClientLogoSection />
                <CompanyOverview />
                <BusinessChallenges />
                <ValuePropositionSection />
                <ServicesOverviewSection />
                <TestimonialSection />
                <CTASection />
            </main>
            <FooterSection />
        </div>
    );
};

export default Homepage;
