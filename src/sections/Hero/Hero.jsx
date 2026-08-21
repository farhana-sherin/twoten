import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar/Navbar';
import Hero3DBlocks from './Hero3DBlocks';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative w-full min-h-screen pt-28 pb-14 px-6 md:px-12 lg:px-16 flex flex-col justify-between overflow-hidden text-white font-['Plus_Jakarta_Sans'] bg-[#050507]"
        >
            <Navbar />

            {/* Main Hero Grid */}
            <div className="max-w-[1360px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pt-6 z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="lg:col-span-6 flex flex-col items-start text-left z-10"
                >

                    {/* SEO / Service Context */}
                    <motion.h2
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-2.5 mb-4 text-xs font-bold tracking-[0.22em] text-amber-400 uppercase font-['Plus_Jakarta_Sans']"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-[0_0_12px_#f59e0b]"></span>

                        Digital Marketing & Creative Agency in Kerala
                    </motion.h2>

                    {/* Main H1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl lg:text-[72px] xl:text-[80px] font-normal uppercase tracking-wider text-white leading-[0.95] mb-5 font-['Bebas_Neue']"
                    >
                        Strategic Thinking.
                        <br />

                        Creative Execution.
                        <br />

                        <span className="text-amber-400 tracking-wider">
                            Real Impact.
                        </span>
                    </motion.h1>

                    {/* Accent Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-12 h-[2.5px] bg-amber-400/50 mb-5 origin-left"
                    />

                    {/* SEO-Friendly Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-gray-400 text-sm md:text-[15px] leading-relaxed mb-8 max-w-lg font-normal font-['Plus_Jakarta_Sans']"
                    >
                        We combine strategy, creativity and data to help brands
                        grow through digital marketing, social media, branding
                        and creative content.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="flex items-center gap-4 mb-8"
                    >

                        {/* Services Button */}
                        <button
                            className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black px-7.5 py-3.5 rounded-lg text-xs font-black tracking-wider flex items-center gap-3 transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-95 group cursor-pointer font-['Plus_Jakarta_Sans']"
                        >
                            OUR SERVICES

                            <ArrowRight
                                size={15}
                                className="group-hover:translate-x-1 transition-transform stroke-[2.5]"
                            />
                        </button>

                        {/* Showreel Button */}
                        <button
                            className="flex items-center gap-3 text-xs font-bold tracking-wider text-white hover:text-amber-300 border border-white/20 hover:border-amber-400/50 transition-all px-5 py-3.5 rounded-lg bg-white/5 backdrop-blur-md cursor-pointer group font-['Plus_Jakarta_Sans']"
                        >
                            <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                                <Play
                                    size={9}
                                    className="ml-0.5 fill-white text-white group-hover:fill-amber-400 group-hover:text-amber-400"
                                />
                            </div>

                            WATCH SHOWREEL
                        </button>

                    </motion.div>

                </motion.div>

                {/* Right Content */}
                <div className="lg:col-span-6 flex items-center justify-center relative">
                    <Hero3DBlocks />
                </div>

            </div>
        </section>
    );
};

export default Hero;