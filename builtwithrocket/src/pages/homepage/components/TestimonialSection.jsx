import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Mitchell",
            role: "CTO, FinTech Solutions Inc.",
            company: "FinTech Solutions",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffde516e-1763293580273.png",
            imageAlt: "Professional headshot of Sarah Mitchell, a confident woman with shoulder-length brown hair wearing a navy blue blazer in modern office setting",
            quote: "Collabrah Tech transformed our legacy systems into a modern, scalable platform. Their problem-first approach identified issues we didn't even know we had. The team's expertise in AI integration helped us automate 60% of our manual processes.",
            rating: 5,
            project: "Legacy System Modernization"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "VP of Engineering, HealthCare Dynamics",
            company: "HealthCare Dynamics",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_15be4265d-1763301291596.png",
            imageAlt: "Professional portrait of Michael Chen, an Asian man with short black hair and glasses wearing a white dress shirt in corporate environment",
            quote: "What sets Collabrah apart is their transparent communication and long-term partnership mindset. They didn't just deliver a solution; they trained our team and continue to support our growth. Our patient management system now handles 3x the load with zero downtime.",
            rating: 5,
            project: "Healthcare Platform Development"
        },
        {
            id: 3,
            name: "Jennifer Rodriguez",
            role: "Director of Operations, TeleConnect Global",
            company: "TeleConnect Global",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_13f5907c7-1763298966546.png",
            imageAlt: "Professional photograph of Jennifer Rodriguez, a Hispanic woman with long dark hair wearing a gray business suit with warm smile in office setting",
            quote: "After struggling with unreliable vendors, Collabrah Tech was a breath of fresh air. Their practical AI solutions helped us reduce customer service response times by 75%. They truly understand business needs, not just technology trends.",
            rating: 5,
            project: "AI-Powered Customer Service"
        }];


    const handlePrevious = () => {
        setActiveIndex((prev) => prev === 0 ? testimonials?.length - 1 : prev - 1);
    };

    const handleNext = () => {
        setActiveIndex((prev) => prev === testimonials?.length - 1 ? 0 : prev + 1);
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#0D2A4A] to-[#1a3a5f] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#2FA4A9] rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-[#2FA4A9] rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                        <Icon name="Star" size={20} color="#2FA4A9" />
                        <span className="text-sm md:text-base font-semibold text-white">Client Success Stories</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
                        See how we've helped businesses overcome technology challenges and achieve measurable results
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 lg:p-12 border border-white/20">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#2FA4A9] shadow-elevated">
                                    <Image
                                        src={testimonials?.[activeIndex]?.image}
                                        alt={testimonials?.[activeIndex]?.imageAlt}
                                        className="w-full h-full object-cover" />

                                </div>
                            </div>

                            <div className="flex-1 text-center lg:text-left min-w-0">
                                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-3 md:mb-4">
                                    {[...Array(testimonials?.[activeIndex]?.rating)]?.map((_, idx) =>
                                        <Icon key={idx} name="Star" size={20} color="#2FA4A9" className="fill-[#2FA4A9]" />
                                    )}
                                </div>

                                <blockquote className="text-base md:text-lg lg:text-xl text-white/90 mb-4 md:mb-6 leading-relaxed">
                                    "{testimonials?.[activeIndex]?.quote}"
                                </blockquote>

                                <div className="space-y-1">
                                    <p className="text-base md:text-lg font-bold text-white">{testimonials?.[activeIndex]?.name}</p>
                                    <p className="text-sm md:text-base text-white/70">{testimonials?.[activeIndex]?.role}</p>
                                    <p className="text-sm md:text-base text-[#2FA4A9] font-semibold">{testimonials?.[activeIndex]?.company}</p>
                                </div>

                                <div className="mt-4 inline-flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full">
                                    <Icon name="Briefcase" size={16} color="#2FA4A9" />
                                    <span className="text-xs md:text-sm text-white/80">{testimonials?.[activeIndex]?.project}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center space-x-4 mt-6 md:mt-8">
                        <button
                            onClick={handlePrevious}
                            className="w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
                            aria-label="Previous testimonial">

                            <Icon name="ChevronLeft" size={24} color="#FFFFFF" />
                        </button>

                        <div className="flex space-x-2">
                            {testimonials?.map((_, idx) =>
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#2FA4A9] w-6 md:w-8' : 'bg-white/30'}`
                                    }
                                    aria-label={`Go to testimonial ${idx + 1}`} />

                            )}
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
                            aria-label="Next testimonial">

                            <Icon name="ChevronRight" size={24} color="#FFFFFF" />
                        </button>
                    </div>
                </div>
            </div>
        </section>);

};

export default TestimonialSection;