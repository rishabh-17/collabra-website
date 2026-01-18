import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';

const ClientLogoSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const clients = [
        {
            id: 1,
            name: "Microsoft",
            logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17ad68526-1766507675195.png",
            logoAlt: "Microsoft logo featuring blue square window design on white background representing global technology leadership"
        },
        {
            id: 2,
            name: "SAP",
            logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f19e902c-1766998435072.png",
            logoAlt: "SAP enterprise software company logo with distinctive blue and white branding representing business solutions"
        },
        {
            id: 3,
            name: "Thomson Reuters",
            logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13583094d-1767958496868.png",
            logoAlt: "Thomson Reuters professional information services logo with orange and black corporate branding"
        },
        {
            id: 4,
            name: "Nike",
            logo: "https://img.rocket.new/generatedImages/rocket_gen_img_152fa38ce-1767958497829.png",
            logoAlt: "Nike swoosh logo in black representing athletic footwear and sportswear innovation"
        },
        {
            id: 5,
            name: "AT&T",
            logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10b025d53-1767958497816.png",
            logoAlt: "AT&T telecommunications logo with blue globe symbol representing connectivity and communication services"
        },
        {
            id: 6,
            name: "Telefonica",
            logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1c31f65-1766817177978.png",
            logoAlt: "Telefonica telecommunications company logo with distinctive blue branding representing global network services"
        },
        {
            id: 7,
            name: "Volkswagen",
            logo: "https://img.rocket.new/generatedImages/rocket_gen_img_100856c01-1765201822186.png",
            logoAlt: "Volkswagen automotive logo featuring iconic VW emblem in blue and white representing German engineering"
        },
        {
            id: 8,
            name: "Obopay",
            logo: "https://img.rocket.new/generatedImages/rocket_gen_img_15a4f2c62-1767958499042.png",
            logoAlt: "Obopay mobile payment solutions logo with modern fintech branding representing digital financial services"
        }];


    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <div className="inline-flex items-center space-x-2 bg-[#2FA4A9]/10 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm md:text-base font-semibold text-[#0D2A4A]">Trusted by teams worldwide</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2A4A] mb-3 md:mb-4">
                        Trusted by teams building and operating business-critical systems
                    </h2>
                    <p className="text-base md:text-lg text-[#4A5568] max-w-2xl mx-auto">
                        Microsoft · SAP · Thomson Reuters · Nike · AT&amp;T · Telefónica · Volkswagen · Obopay
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                    {clients?.map((client, index) =>
                        <div
                            key={client?.id}
                            className={`group relative bg-white rounded-xl border-2 border-[#E2E8F0] p-6 md:p-8 flex items-center justify-center transition-all duration-300 hover:border-[#2FA4A9] hover:shadow-elevated cursor-pointer ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`
                            }
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}>

                            <div className="w-full h-16 md:h-20 flex items-center justify-center">
                                <Image
                                    src={client?.logo}
                                    alt={client?.logoAlt}
                                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />

                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2FA4A9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        </div>
                    )}
                </div>

                <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="text-center p-6 md:p-8 bg-[#F5F7FA] rounded-xl">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2A4A] mb-2">500+</div>
                        <p className="text-sm md:text-base text-[#4A5568]">Projects Delivered Successfully</p>
                    </div>
                    <div className="text-center p-6 md:p-8 bg-[#F5F7FA] rounded-xl">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2A4A] mb-2">98%</div>
                        <p className="text-sm md:text-base text-[#4A5568]">Client Satisfaction Rate</p>
                    </div>
                    <div className="text-center p-6 md:p-8 bg-[#F5F7FA] rounded-xl">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2A4A] mb-2">15+</div>
                        <p className="text-sm md:text-base text-[#4A5568]">Years of Industry Experience</p>
                    </div>
                </div>
            </div>
        </section>);

};

export default ClientLogoSection;
