import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
    {
        id: '01',
        title: 'DISCOVER',
        description: 'We understand your brand goals, and audience.',
    },
    {
        id: '02',
        title: 'PLAN',
        description: 'We create a strategy and roadmap tailored to your needs.',
    },
    {
        id: '03',
        title: 'CREATE',
        description: 'Our team brings ideas to life with creativity and precision.',
    },
    {
        id: '04',
        title: 'EXECUTE',
        description: 'We produce, launch, and manage with perfection.',
    },
    {
        id: '05',
        title: 'DELIVER RESULTS',
        description: 'We analyse, optimize, and ensure measurable success.',
    },
    {
        id: '06',
        title: 'GROW',
        description: 'We continuously refine, scale, and innovate to keep your brand growing.',
    },
];

const Process = () => {
    return (
        <section id="process" className="relative w-full min-h-screen py-16 lg:py-24 px-6 md:px-12 lg:px-20 bg-[#050507] text-white flex flex-col justify-center overflow-hidden select-none">

            {/* Dark Diagonal Architecture Lines Background (matching slide texture) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#12121a_0%,#050507_70%)] pointer-events-none -z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

            <div className="max-w-[1380px] mx-auto w-full relative z-10">

                {/* Main Header matching Slide Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 sm:mb-18 lg:mb-20"
                >
                    <h2 className="text-5xl sm:text-7xl lg:text-[96px] font-normal tracking-wide text-white font-['Bebas_Neue'] leading-none">
                        OUR <span className="text-[#EBB305]">PROCESS</span>
                    </h2>
                </motion.div>

                {/* 6 Process Steps (3 Columns x 2 Rows) matching Slide Image layout exactly */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 lg:gap-x-16">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="flex items-start gap-5 sm:gap-6 group"
                        >
                            {/* Big Minimalist Number */}
                            <span className="text-5xl sm:text-6xl lg:text-[72px] font-extralight text-gray-400/70 group-hover:text-[#EBB305] font-['Plus_Jakarta_Sans'] leading-none min-w-[65px] transition-colors duration-300">
                                {step.id}
                            </span>

                            {/* Content Block */}
                            <div className="flex flex-col justify-start pt-1.5 min-w-0">
                                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white group-hover:text-[#EBB305] font-['Plus_Jakarta_Sans'] transition-colors duration-300 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm font-['Plus_Jakarta_Sans'] leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Process;
