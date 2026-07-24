import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Briefcase,
    ShieldCheck,
    HeartPulse,
    Flame,
    Building2,
    Compass,
    GraduationCap,
    Zap,
    Waves,
    Megaphone,
    Clapperboard,
    MessageSquare,
    Mic,
    ArrowUpRight,
    Sparkles
} from 'lucide-react';

const clientCards = [
    {
        id: '01',
        name: 'Pure Health Medical Supplies LLC',
        tag: 'HEALTHCARE & SUPPLIES',
        icon: HeartPulse,
        color: 'text-sky-500',
        bgColor: 'bg-sky-50',
    },
    {
        id: '02',
        name: 'Al Fanar Gas and General Contracting LLC',
        tag: 'ENERGY & INFRASTRUCTURE',
        icon: Flame,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        id: '03',
        name: 'EHC Investment LLC',
        tag: 'CORPORATE HOLDINGS',
        icon: Building2,
        color: 'text-amber-500',
        bgColor: 'bg-amber-50',
    },
    {
        id: '04',
        name: 'KBR Engineering Consultancy',
        tag: 'ENGINEERING & CONSTRUCTION',
        icon: Compass,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
    },
    {
        id: '05',
        name: 'Higher Colleges of Technology',
        tag: 'EDUCATION & TECH',
        icon: GraduationCap,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
    },
    {
        id: '06',
        name: 'Euro Mechanical & Electrical Contracting Co. LLC',
        tag: 'MEP CONTRACTING',
        icon: Zap,
        color: 'text-orange-500',
        bgColor: 'bg-orange-50',
    },
    {
        id: '07',
        name: 'Oceanic Facilities Management LLC',
        tag: 'FACILITY MANAGEMENT',
        icon: Waves,
        color: 'text-teal-500',
        bgColor: 'bg-teal-50',
    },
    {
        id: '08',
        name: 'Creative Impact Advertising LLC',
        tag: 'ADVERTISING & BRANDING',
        icon: Megaphone,
        color: 'text-rose-500',
        bgColor: 'bg-rose-50',
    },
    {
        id: '09',
        name: 'Vision Frame Productions',
        tag: 'MEDIA PRODUCTION',
        icon: Clapperboard,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
    },
    {
        id: '10',
        name: 'Media Say Communications',
        tag: 'SOCIAL MEDIA MARKETING',
        icon: MessageSquare,
        color: 'text-green-500',
        bgColor: 'bg-green-50',
    },
    {
        id: '11',
        name: 'Podcast People Studios',
        tag: 'PODCAST PRODUCTION',
        icon: Mic,
        color: 'text-fuchsia-600',
        bgColor: 'bg-fuchsia-50',
    },
];

const Clients = () => {
    return (
        <section id="clients" className="relative w-full py-20 lg:py-28 min-h-screen px-6 md:px-12 lg:px-16 bg-[#050507] text-white flex items-center justify-center overflow-hidden select-none font-['Plus_Jakarta_Sans']">

            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#EBB305]/6 blur-[220px] pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/5 blur-[180px] pointer-events-none -z-10" />

            <div className="max-w-[1400px] mx-auto w-full relative z-10">

                {/* 2-Column Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-[#050507]">

                    {/* LEFT COLUMN: Badge, Big Title, Copy & 3-Stat Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 flex flex-col justify-between"
                    >
                        <div>
                            {/* Top Badge Pill */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c0c12] border border-white/15 text-xs font-medium text-gray-300 mb-8 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-[#EBB305] shadow-[0_0_8px_#EBB305]" />
                                <span className="tracking-wide">TWOTEN MEDIA • THE KERALA CHAPTER OF SNAPADS MEDIA</span>
                            </div>

                            {/* Main Title Stack with Backdrop Outline Word */}
                            <div className="relative mb-6">
                                {/* Giant Watermark Text behind */}
                                <span className="absolute -top-8 -left-2 text-[80px] sm:text-[110px] lg:text-[130px] font-black uppercase text-white/[0.03] select-none pointer-events-none font-['Bebas_Neue'] tracking-wider leading-none">
                                    CLIENTS
                                </span>

                                <h2 className="text-5xl sm:text-6xl lg:text-[76px] font-bold uppercase tracking-tight leading-[0.92] font-['Bebas_Neue'] relative z-10">
                                    <span className="text-white block">OUR</span>
                                    <span className="text-white relative inline-block">
                                        VALUED
                                        {/* Sparkle Icon next to VALUED */}
                                        <Sparkles className="inline-block w-6 h-6 text-[#EBB305] ml-2 -mt-6 animate-pulse" />
                                    </span>
                                    <span className="text-[#EBB305] block">CLIENTS</span>
                                </h2>
                            </div>

                            {/* Yellow Dash */}
                            <div className="w-12 h-[2.5px] bg-[#EBB305] mb-6 rounded-full" />

                            {/* Copy Paragraph */}
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
                                Our UAE parent company, <strong className="text-[#EBB305] font-semibold">Snapads Media & Advertising LLC</strong>, has had the privilege of working with these esteemed organizations over the years. Twoten Media is proud to carry forward this legacy in Kerala.
                            </p>
                        </div>

                        {/* Bottom 3-Stat Dark Card */}
                        <div className="p-6 rounded-[24px] bg-[#0c0c12]/90 border border-white/10 backdrop-blur-xl grid grid-cols-3 gap-3 text-center shadow-xl">
                            {/* Stat 1 */}
                            <div className="flex flex-col items-center justify-center p-2 border-r border-white/10 last:border-0">
                                <div className="w-10 h-10 rounded-full bg-[#EBB305]/10 border border-[#EBB305]/30 flex items-center justify-center text-[#EBB305] mb-2">
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className="text-xl sm:text-2xl font-bold text-white font-['Bebas_Neue'] tracking-wider">11+</span>
                                <span className="text-[11px] text-gray-400 font-medium">Trusted Partners</span>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex flex-col items-center justify-center p-2 border-r border-white/10 last:border-0">
                                <div className="w-10 h-10 rounded-full bg-[#EBB305]/10 border border-[#EBB305]/30 flex items-center justify-center text-[#EBB305] mb-2">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <span className="text-xl sm:text-2xl font-bold text-[#EBB305] font-['Bebas_Neue'] tracking-wider">Various</span>
                                <span className="text-[11px] text-gray-400 font-medium">Industries</span>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex flex-col items-center justify-center p-2">
                                <div className="w-10 h-10 rounded-full bg-[#EBB305]/10 border border-[#EBB305]/30 flex items-center justify-center text-[#EBB305] mb-2">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <span className="text-xl sm:text-2xl font-bold text-white font-['Bebas_Neue'] tracking-wider">Years of</span>
                                <span className="text-[11px] text-gray-400 font-medium">Trust & Growth</span>
                            </div>
                        </div>

                    </motion.div>

                    {/* RIGHT COLUMN: Client List Cards Grid & Bottom Bar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col justify-between gap-6"
                    >
                        {/* Header Bar: Title & 11 Partners Pill */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase mb-1">
                                    CORPORATE CLIENT LIST
                                </h3>
                                <div className="w-10 h-[2px] bg-[#EBB305] rounded-full" />
                            </div>

                            <div className="px-4 py-1.5 rounded-full bg-[#0c0c12] border border-[#EBB305]/40 text-[#EBB305] text-[11px] font-bold tracking-widest uppercase">
                                11 PARTNERS
                            </div>
                        </div>

                        {/* Cards Grid: White cards with chamfered top-left & bottom-right corners + top-left yellow number badge */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">
                            {clientCards.map((client, idx) => {
                                const IconComponent = client.icon;
                                return (
                                    <div
                                        key={client.id}
                                        className="relative group rounded-2xl bg-white text-gray-900 p-4 pt-7 pb-5 flex flex-col items-center justify-between text-center min-h-[160px] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#EBB305]/30"
                                    >
                                        {/* Top-Left Number Pill Badge */}
                                        <div className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-[#EBB305] text-black font-extrabold text-[11px] font-mono flex items-center justify-center shadow-md z-10 border-2 border-[#050507]">
                                            {client.id}
                                        </div>

                                        {/* Brand Icon SVG */}
                                        <div className={`p-2.5 rounded-xl ${client.bgColor} ${client.color} mb-2.5 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-6 h-6 stroke-[2]" />
                                        </div>

                                        {/* Client Name */}
                                        <h4 className="text-xs font-bold text-gray-900 leading-tight mb-2 font-['Plus_Jakarta_Sans'] line-clamp-2 px-1">
                                            {client.name}
                                        </h4>

                                        {/* Industry Tag at Bottom */}
                                        <span className="text-[9px] font-mono font-bold tracking-wider text-gray-400 uppercase mt-auto block">
                                            {client.tag}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Bottom Dark Pill Ribbon */}
                        <div className="p-3.5 px-6 rounded-full bg-[#0c0c12]/95 border border-white/10 flex items-center justify-between gap-4 backdrop-blur-xl shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-[#EBB305] text-black flex items-center justify-center flex-shrink-0 shadow-md">
                                    <Users className="w-4 h-4 stroke-[2.5]" />
                                </div>
                                <div className="text-xs font-medium text-gray-300">
                                    <span className="block font-semibold text-white">Building Strong Relationships</span>
                                    <span className="text-gray-400">Delivering Shared Success</span>
                                </div>
                            </div>

                            <a
                                href="#contact"
                                className="px-5 py-2.5 rounded-full bg-[#EBB305] text-black text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-amber-400 transition-colors cursor-pointer font-['Plus_Jakarta_Sans'] shadow-md hover:shadow-[#EBB305]/20"
                            >
                                <span>View All Partners</span>
                                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                            </a>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Clients;
