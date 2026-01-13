import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const BusinessChallenges = () => {
    const navigate = useNavigate();

    const challenges = [
        {
            title: "Manual workflows limiting team efficiency",
            description: "Repetitive tasks slowing down operations"
        },
        {
            title: "Systems that don't integrate or share data reliably",
            description: "Fragmented data across multiple platforms"
        },
        {
            title: "Platforms that struggle under real usage or growth",
            description: "Performance issues at scale"
        },
        {
            title: "AI initiatives without clear ownership or value",
            description: "Unclear ROI and implementation strategy"
        },
        {
            title: "High-risk systems requiring stability, security, and compliance",
            description: "Regulated environments demanding reliability"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2A4A] mb-6">
                        Business Challenges We've Solved
                    </h2>
                    <p className="text-lg text-[#4A5568] max-w-3xl mx-auto">
                        Real problems we've helped teams overcome across fintech, healthcare, telecom, and enterprise platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column - Challenges List */}
                    <div className="space-y-8">
                        <div className="bg-[#FAFBFC] rounded-2xl p-6 md:p-8">
                            <h3 className="text-lg font-bold text-[#0D2A4A] mb-6">
                                Key Challenges
                            </h3>
                            <div className="space-y-6">
                                {challenges.map((challenge, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1.5">
                                            <div className="w-3 h-3 rounded-full bg-[#2FA4A9]"></div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-sm md:text-base font-semibold text-[#0D2A4A] mb-1">
                                                {challenge.title}
                                            </h4>
                                            <p className="text-[#4A5568] text-xs md:text-sm leading-relaxed">
                                                {challenge.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Button
                                onClick={() => navigate('/case-studies')}
                                className="bg-[#0D2A4A] hover:bg-[#1a3a5f] text-white px-8 py-3 rounded-md font-medium text-lg transition-colors duration-300"
                            >
                                View Case Studies
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Images Grid */}
                    <div className="space-y-4">
                        {/* Top Large Image */}
                        <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Team collaboration"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Bottom Two Images */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-32 md:h-40 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Office meeting"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="h-32 md:h-40 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Strategic planning"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessChallenges;
