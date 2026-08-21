import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/images/hero/about.webp';

const About = () => {
    return (
        <section
            id="about"
            className="relative w-full py-20 lg:py-28 min-h-[80vh] px-6 md:px-12 lg:px-20 bg-[#050507] text-white flex items-center overflow-hidden select-none"
        >
            <div className="max-w-[1360px] mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* LEFT COLUMN: Creative Studio Image */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="lg:col-span-6 relative w-full flex justify-center lg:justify-start"
                >
                    <div className="relative w-full max-w-[640px] h-[420px] sm:h-[500px] lg:h-[580px] overflow-hidden group">

                        {/* About Image */}
                        <img
                            src={aboutImage}
                            alt="TWOTEN MEDIA creative agency team working on digital marketing and content production"
                            width="800"
                            height="800"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
                        />

                        {/* Multi-Directional Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent via-50% to-[#050507]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-transparent via-50% to-[#050507]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/40 via-transparent to-[#050507]" />
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: About Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="lg:col-span-6 relative pl-8 md:pl-10"
                >
                    {/* Accent Dot */}
                    <div className="absolute -top-1 left-[-5px] w-3 h-3 rounded-full bg-[#EBB305] shadow-[0_0_14px_#EBB305]" />

                    {/* Vertical Accent Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#EBB305] via-[#EBB305]/30 to-transparent" />

                    {/* Section Label */}
                    <p className="text-xs font-bold tracking-[0.22em] text-[#EBB305] uppercase font-['Plus_Jakarta_Sans'] mb-3">
                        ABOUT TWOTEN MEDIA
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-[68px] font-normal uppercase tracking-wider text-white leading-[0.94] mb-5 font-['Bebas_Neue'] max-w-xl">
                        WE CRAFT DIGITAL
                        <br />
                        EXPERIENCES THAT
                        <br />
                        DRIVE{' '}
                        <span className="bg-gradient-to-r from-[#EBB305] via-amber-300 to-amber-500 bg-clip-text text-transparent">
                            REAL IMPACT.
                        </span>
                    </h2>

                    {/* Divider */}
                    <div className="w-14 h-[2px] bg-[#EBB305] mb-5 rounded-full" />

                    {/* SEO-Friendly About Content */}
                    <div className="max-w-xl text-gray-300 text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans'] space-y-3.5">

                        <p>
                            TWOTEN MEDIA is a digital marketing and creative media agency in Kerala
                            specializing in visual storytelling, brand communication, social media,
                            and strategic digital marketing.
                        </p>

                        <p>
                            We help businesses build stronger digital brands through creative content,
                            social media marketing, impactful branding, and strategic advertising.
                        </p>

                        <p>
                            From concept to execution, we create engaging campaigns and digital
                            experiences that connect brands with their audiences and drive measurable growth.
                        </p>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default About;