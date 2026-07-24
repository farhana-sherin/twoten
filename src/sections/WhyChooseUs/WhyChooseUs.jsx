import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/images/hero/why_choose_us.png';
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
        description: 'Fresh ideas that make your brand stand out.',
        icon: Sparkles,
    },
    {
        id: '02',
        title: 'PROFESSIONAL PRODUCTION QUALITY',
        description: 'High-end equipment and expert creative team.',
        icon: Film,
    },
    {
        id: '03',
        title: 'TAILOR-MADE MARKETING SOLUTIONS',
        description: 'Customized strategies for your unique goals.',
        icon: Sliders,
    },
    {
        id: '04',
        title: 'EXPERIENCED CREATIVE TEAM',
        description: 'Skilled professionals with diverse expertise.',
        icon: Users,
    },
    {
        id: '05',
        title: 'TIMELY PROJECT DELIVERY',
        description: 'We value your time and deliver on schedule.',
        icon: Clock,
    },
    {
        id: '06',
        title: 'RESULTS-DRIVEN STRATEGIES',
        description: 'We focus on measurable growth and impact.',
        icon: TrendingUp,
    },
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="relative w-full min-h-screen lg:h-screen py-8 lg:py-12 px-6 md:px-12 lg:px-16 bg-[#050507] text-white flex flex-col justify-center items-center overflow-hidden select-none">

            {/* Background Ambient Glowing Lights */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#EBB305]/15 via-amber-500/5 to-transparent blur-[220px] pointer-events-none -z-10" />
            <div className="absolute bottom-5 right-5 w-[450px] h-[450px] bg-amber-400/5 blur-[170px] pointer-events-none -z-10" />

            <div className="max-w-[1380px] mx-auto w-full flex-1 flex flex-col justify-center relative z-10 my-auto">

                {/* 2-Column Split Layout matching Reference Image Concept */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                    {/* LEFT COLUMN: Styled Image Frame with Floating Experience Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="lg:col-span-5 relative w-full flex justify-center lg:justify-start"
                    >
                        {/* Main Organic Shaped Image Wrapper */}
                        <div className="relative w-full max-w-[420px] h-[340px] sm:h-[390px] lg:h-[420px] rounded-t-full rounded-bl-[100px] rounded-br-[40px] overflow-hidden bg-[#0c0c12] shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-10 group">

                            {/* Studio / Team Image */}
                            <img
                                src={aboutImage}
                                alt="Twoten Media Studio Creative Team"
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                            />

                            {/* Yellow Ambient Glow Overlay ON TOP of Image */}
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#EBB305]/25 via-[#EBB305]/5 to-transparent pointer-events-none z-10" />

                            {/* Bottom Dark Gradient Fade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Top-Left "6+ Years Experience" Circle Badge (Overlapping Image) */}

                    </motion.div>

                    {/* RIGHT COLUMN: Header, Dashed Arrow, & 6 Feature Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col justify-center"
                    >
                        {/* Subtitle Tag + Curved Dashed Arrow Row */}
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-bold tracking-[0.25em] text-[#EBB305] uppercase font-['Plus_Jakarta_Sans']">
                                WHY TWOTEN MEDIA
                            </span>

                            {/* SVG Curved Dashed Arrow pointing to headline */}
                            <svg className="w-12 h-6 text-[#EBB305] opacity-80" viewBox="0 0 60 30" fill="none">
                                <path
                                    d="M 5 25 Q 30 5 50 20"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeDasharray="3 3"
                                />
                                <polygon points="52,20 45,15 47,23" fill="currentColor" />
                            </svg>
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-normal uppercase tracking-tight text-white leading-[0.94] font-['Bebas_Neue'] mb-3">
                            REAL PEOPLE DELIVERING <br />
                            <span className="bg-gradient-to-r from-[#EBB305] via-amber-300 to-amber-500 bg-clip-text text-transparent">
                                REAL RESULTS.
                            </span>
                        </h2>

                        {/* Paragraph Description */}
                        <p className="text-gray-300 text-xs sm:text-sm font-['Plus_Jakarta_Sans'] leading-relaxed mb-6 max-w-xl">
                            We combine international media standards built in Abu Dhabi with passion, cutting-edge cinema equipment, and data-backed digital strategies to elevate your brand.
                        </p>

                        {/* 6 Feature Grid (2 Columns x 3 Rows) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            {reasons.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <div
                                        key={item.id}
                                        className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0c0c12]/80 border border-white/10 hover:border-[#EBB305]/70 transition-all duration-300 group hover:bg-[#12121c]"
                                    >
                                        {/* Icon Container */}
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#1a1914] to-[#08080a] border border-[#EBB305]/40 flex-shrink-0 flex items-center justify-center text-[#EBB305] group-hover:border-[#EBB305] group-hover:bg-[#EBB305] group-hover:text-black transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] mt-0.5">
                                            <IconComponent className="w-4 h-4 stroke-[1.8] group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
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
