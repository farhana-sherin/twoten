import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/images/hero/why_choose_us.webp';
import {
    Sparkles,
    Film,
    Sliders,
    Users,
    Clock,
    TrendingUp
} from 'lucide-react';

const reasons = [
    {
        id: '01',
        title: 'CREATIVE & MODERN APPROACH',
        description: 'Fresh creative ideas and modern campaigns that help your brand stand out.',
        icon: Sparkles,
    },
    {
        id: '02',
        title: 'PROFESSIONAL PRODUCTION QUALITY',
        description: 'High-quality production supported by professional equipment and an experienced creative team.',
        icon: Film,
    },
    {
        id: '03',
        title: 'TAILOR-MADE MARKETING SOLUTIONS',
        description: 'Customized digital marketing and creative strategies built around your business goals.',
        icon: Sliders,
    },
    {
        id: '04',
        title: 'EXPERIENCED CREATIVE TEAM',
        description: 'Skilled professionals across branding, content, social media and media production.',
        icon: Users,
    },
    {
        id: '05',
        title: 'TIMELY PROJECT DELIVERY',
        description: 'Organized workflows that keep creative projects moving and delivered on schedule.',
        icon: Clock,
    },
    {
        id: '06',
        title: 'RESULTS-DRIVEN STRATEGIES',
        description: 'Data-informed marketing strategies focused on meaningful growth and measurable results.',
        icon: TrendingUp,
    },
];

const WhyChooseUs = () => {
    return (
        <section
            id="why-choose-us"
            aria-labelledby="why-choose-us-heading"
            className="relative w-full min-h-screen lg:h-screen py-8 lg:py-12 px-6 md:px-12 lg:px-16 bg-[#050507] text-white flex flex-col justify-center items-center overflow-hidden select-none"
        >

            {/* Background Ambient Glowing Lights */}
            <div
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#EBB305]/15 via-amber-500/5 to-transparent blur-[220px] pointer-events-none -z-10"
                aria-hidden="true"
            />

            <div
                className="absolute bottom-5 right-5 w-[450px] h-[450px] bg-amber-400/5 blur-[170px] pointer-events-none -z-10"
                aria-hidden="true"
            />

            <div className="max-w-[1380px] mx-auto w-full flex-1 flex flex-col justify-center relative z-10 my-auto">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                    {/* LEFT COLUMN: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:col-span-5 relative w-full flex justify-center lg:justify-start"
                    >
                        <div className="relative w-full max-w-[420px] h-[340px] sm:h-[390px] lg:h-[420px] rounded-t-full rounded-bl-[100px] rounded-br-[40px] overflow-hidden bg-[#0c0c12] shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-10 group">

                            <img
                                src={aboutImage}
                                alt="TWOTEN MEDIA creative team working on digital marketing and media production"
                                width="420"
                                height="420"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                            />

                            {/* Yellow Ambient Glow */}
                            <div
                                className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#EBB305]/25 via-[#EBB305]/5 to-transparent pointer-events-none z-10"
                                aria-hidden="true"
                            />

                            {/* Bottom Dark Gradient */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent pointer-events-none"
                                aria-hidden="true"
                            />

                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                        className="lg:col-span-7 flex flex-col justify-center"
                    >

                        {/* Section Label */}
                        <div className="flex items-center gap-3 mb-2">

                            <p className="text-xs font-bold tracking-[0.25em] text-[#EBB305] uppercase font-['Plus_Jakarta_Sans']">
                                WHY TWOTEN MEDIA
                            </p>

                            {/* Decorative Arrow */}
                            <svg
                                className="w-12 h-6 text-[#EBB305] opacity-80"
                                viewBox="0 0 60 30"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M 5 25 Q 30 5 50 20"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeDasharray="3 3"
                                />

                                <polygon
                                    points="52,20 45,15 47,23"
                                    fill="currentColor"
                                />
                            </svg>

                        </div>

                        {/* Main Heading */}
                        <h2
                            id="why-choose-us-heading"
                            className="text-4xl sm:text-5xl lg:text-[56px] font-normal uppercase tracking-tight text-white leading-[0.94] font-['Bebas_Neue'] mb-3"
                        >
                            REAL PEOPLE DELIVERING
                            <br />

                            <span className="bg-gradient-to-r from-[#EBB305] via-amber-300 to-amber-500 bg-clip-text text-transparent">
                                REAL RESULTS.
                            </span>
                        </h2>

                        {/* Supporting Description */}
                        <p className="text-gray-300 text-xs sm:text-sm font-['Plus_Jakarta_Sans'] leading-relaxed mb-6 max-w-xl">
                            We combine professional creative production, strategic digital marketing,
                            modern media technology, and data-backed strategies to help brands build
                            stronger connections, reach the right audiences, and achieve measurable growth.
                        </p>

                        {/* Reasons Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                            {reasons.map((item) => {
                                const IconComponent = item.icon;

                                return (
                                    <div
                                        key={item.id}
                                        className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0c0c12]/80 border border-white/10 hover:border-[#EBB305]/70 transition-all duration-300 group hover:bg-[#12121c]"
                                    >

                                        {/* Icon */}
                                        <div
                                            className="w-10 h-10 rounded-full bg-gradient-to-b from-[#1a1914] to-[#08080a] border border-[#EBB305]/40 flex-shrink-0 flex items-center justify-center text-[#EBB305] group-hover:border-[#EBB305] group-hover:bg-[#EBB305] group-hover:text-black transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] mt-0.5"
                                            aria-hidden="true"
                                        >
                                            <IconComponent
                                                className="w-4 h-4 stroke-[1.8] group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col min-w-0">

                                            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-white group-hover:text-[#EBB305] font-['Plus_Jakarta_Sans'] transition-colors leading-tight mb-1">
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-400 text-[11px] font-['Plus_Jakarta_Sans'] leading-relaxed">
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;