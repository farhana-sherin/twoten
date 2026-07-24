import React from 'react';
import { motion } from 'framer-motion';
import clientImage from '../../assets/images/clients/client.png';
import mapImage from '../../assets/images/clients/map.png';

const Expansion = () => {
    return (
        <section id="expansion" className="relative w-full py-10 md:py-14 px-6 md:px-12 lg:px-16 bg-[#060608] text-white overflow-hidden select-none">

            {/* Background Skyscraper Building Image - Left Aligned & Vivid */}
            <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[45%] pointer-events-none z-0 overflow-hidden">
                <img
                    src={clientImage}
                    alt="Abu Dhabi Building Skyline"
                    className="w-full h-full object-cover object-left grayscale contrast-130 brightness-110 opacity-90 lg:opacity-100"
                />
                {/* Smooth Gradient Fade into Dark Background on the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#060608]/40 to-[#060608]" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#060608]/60 via-transparent to-[#060608]/80" />
            </div>

            {/* Top-Left Ambient Gold Glow */}
            <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-amber-500/10 blur-[170px] pointer-events-none -z-10" />

            {/* Giant Background Watermark - TWOTEN (Top Right) */}
            <div className="absolute right-[-2%] top-[2%] pointer-events-none select-none z-0 opacity-[0.035] hidden md:flex items-center justify-end">
                <span className="font-extrabold text-[24vw] leading-none tracking-tighter text-white font-['Bebas_Neue'] whitespace-nowrap">
                    TWOTEN
                </span>
            </div>

            <div className="max-w-[1360px] mx-auto w-full relative z-10">

                {/* Upper 2-Column Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">

                    {/* Left Column: Overlays Left Building Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 relative pl-6 lg:pl-10"
                    >
                        {/* Header Tag with glowing dot on left */}
                        <div className="relative flex items-center gap-2.5 text-[12px] font-bold tracking-[0.2em] text-[#EBB305] uppercase font-['Plus_Jakarta_Sans'] mb-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EBB305] shadow-[0_0_10px_#EBB305] inline-block -ml-6 lg:-ml-10 mr-1" />
                            ABOUT TWOTEN MEDIA
                        </div>

                        {/* Vertical Accent Line alongside headline */}
                        <div className="absolute left-0 top-6 bottom-1 w-[1.5px] bg-[#EBB305]/90" />

                        {/* Main Headline overlaying skyscraper */}
                        <h2 className="text-5xl sm:text-6xl lg:text-[62px] font-normal uppercase tracking-wide text-white leading-[0.93] font-['Bebas_Neue'] drop-shadow-md">
                            6 YEARS OF<br />
                            CREATIVE<br />
                            EXCELLENCE<br />
                            IN ABU DHABI
                        </h2>
                    </motion.div>

                    {/* Right Column: Paragraph Descriptions & Divider */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-4 pt-1 font-['Plus_Jakarta_Sans']"
                    >
                        {/* Paragraph 1 */}
                        <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed font-normal">
                            For the past <strong className="text-[#EBB305] font-bold">6 years</strong>, we have been delivering creative media, advertising, and digital marketing solutions through our established branch in <strong className="text-[#EBB305] font-bold">Abu Dhabi, United Arab Emirates.</strong> Our experience in the UAE market has enabled us to work with leading organizations, producing high-quality content and impactful brand campaigns.
                        </p>

                        {/* Subtle Horizontal Line Divider */}
                        <div className="w-full h-[1px] bg-white/10 my-4" />

                        {/* Paragraph 2 */}
                        <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed font-normal">
                            Now, we are excited to bring the same expertise, creativity, and international standards to <strong className="text-[#EBB305] font-bold">Kerala, India</strong>, helping businesses build stronger brands and meaningful digital presence.
                        </p>
                    </motion.div>

                </div>

                {/* Lower Section: NOW EXPANDING TO KERALA + Location Map */}
                <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end relative">

                    {/* NOW EXPANDING TO KERALA Banner - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-7 relative pt-2 flex flex-col items-center justify-center text-center w-full"
                    >
                        <h3 className="text-5xl sm:text-6xl lg:text-[92px] font-normal uppercase tracking-tight text-[#EBB305] leading-[0.84] font-['Bebas_Neue'] text-center">
                            NOW EXPANDING<br />TO KERALA
                        </h3>

                        {/* Glowing Lens Flare Beam centered under "TO KERALA" */}
                        <div className="relative w-full max-w-lg h-3 mt-2 flex items-center justify-center">
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-80 h-[3px] bg-gradient-to-r from-transparent via-[#EBB305] to-transparent rounded-full shadow-[0_0_24px_10px_rgba(235,179,5,0.85)]" />
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-44 h-[4px] bg-white rounded-full blur-[1px]" />
                        </div>
                    </motion.div>

                    {/* Right / Bottom Integrated World Map Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-5 relative h-56 sm:h-64 w-full flex items-center justify-end"
                    >
                        {/* Map Container */}
                        <div className="relative w-full h-full flex items-center justify-center">

                            {/* Background Map Image from client folder */}
                            <img
                                src={mapImage}
                                alt="World Map Background"
                                className="absolute inset-0 w-full h-full object-contain opacity-70 mix-blend-lighten pointer-events-none"
                            />

                            {/* 4-Side Gradient Fade Overlays to eliminate sharp rectangular box edges */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-transparent via-70% to-[#060608] pointer-events-none z-10" />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-transparent via-70% to-[#060608] pointer-events-none z-10" />

                            {/* SVG Curved Flight Arc between Abu Dhabi and Kerala */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 500 300">
                                <path
                                    d="M 160 100 Q 240 80 320 200"
                                    fill="none"
                                    stroke="#EBB305"
                                    strokeWidth="2"
                                    strokeDasharray="4 4"
                                    className="animate-pulse"
                                />
                            </svg>

                            {/* Location Pin 1: ABU DHABI */}
                            <div className="absolute top-[28%] left-[26%] flex items-center gap-2 z-20">
                                {/* Yellow Pin Icon */}
                                <div className="relative flex items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#EBB305] opacity-60"></span>
                                    <svg className="w-5 h-5 text-[#EBB305] drop-shadow-[0_0_8px_#EBB305]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                {/* Tag Box */}
                                <div className="bg-[#0b0b0e]/90 border border-[#EBB305]/60 px-2.5 py-0.5 rounded text-[10px] font-bold text-white tracking-wider font-['Plus_Jakarta_Sans'] shadow-[0_0_12px_rgba(235,179,5,0.25)] uppercase">
                                    ABU DHABI
                                </div>
                            </div>

                            {/* Location Pin 2: KERALA */}
                            <div className="absolute bottom-[24%] right-[22%] flex items-center gap-2 z-20">
                                {/* Yellow Pin Icon */}
                                <div className="relative flex items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#EBB305] opacity-60"></span>
                                    <svg className="w-5 h-5 text-[#EBB305] drop-shadow-[0_0_8px_#EBB305]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                {/* Tag Box */}
                                <div className="bg-[#0b0b0e]/90 border border-[#EBB305]/60 px-2.5 py-0.5 rounded text-[10px] font-bold text-white tracking-wider font-['Plus_Jakarta_Sans'] shadow-[0_0_12px_rgba(235,179,5,0.25)] uppercase">
                                    KERALA
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Expansion;



