import React from 'react';
import AnimatedContent from '../../components/AnimatedContent';
import TiltedCard from '../../components/TiltedCard/TiltedCard';
import {
    Megaphone,
    Camera,
    Lightbulb,
    PenTool,
    Users,
    Video,
    Tv,
    TrendingUp,
    Clapperboard,
    Sparkles,
    Film,
    MessageSquare,
    PlayCircle,
    Mic
} from 'lucide-react';

const expertiseItems = [
    { id: '01', title: 'ADVERTISING &\nBRANDING', icon: Megaphone },
    { id: '02', title: 'PHOTOGRAPHY &\nVIDEOGRAPHY', icon: Camera },
    { id: '03', title: 'CONCEPT\nADS', icon: Lightbulb },
    { id: '04', title: 'CONTENT\nCREATION', icon: PenTool },
    { id: '05', title: 'SOCIAL MEDIA\nMANAGEMENT', icon: Users },
    { id: '06', title: 'CORPORATE\nFILMS', icon: Video },
    { id: '07', title: 'TVC\nADS', icon: Tv },
    { id: '08', title: 'DIGITAL\nMARKETING', icon: TrendingUp },
    { id: '09', title: 'THEATRICAL\nADS', icon: Clapperboard },
    { id: '10', title: 'CREATIVE\nSTORYTELLING', icon: Sparkles },
    { id: '11', title: 'MEDIA\nPRODUCTION', icon: Film },
    { id: '12', title: 'SOCIAL MEDIA\nADS', icon: MessageSquare },
    { id: '13', title: 'REELS & WEB SERIES\nPRODUCTION', icon: PlayCircle },
    { id: '14', title: 'PODCAST\nPRODUCTION', icon: Mic },
];

const Expertise = () => {
    return (
        <section
            id="expertise"
            aria-labelledby="expertise-heading"
            className="relative w-full min-h-screen lg:h-screen py-6 lg:py-10 px-6 md:px-12 lg:px-16 bg-[#050507] text-white flex flex-col justify-center items-center overflow-hidden select-none"
        >

            {/* Ambient Multi-Layered Glow System */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#EBB305]/15 via-amber-500/5 to-transparent blur-[190px] pointer-events-none -z-10"
                aria-hidden="true"
            />

            <div
                className="absolute bottom-5 right-5 w-[450px] h-[450px] bg-amber-400/5 blur-[160px] pointer-events-none -z-10"
                aria-hidden="true"
            />

            <div className="max-w-[1380px] mx-auto w-full flex-1 flex flex-col justify-center relative z-10 my-auto">

                {/* Section Header */}
                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    duration={0.6}
                    threshold={0.1}
                    className="mb-6 lg:mb-8 max-w-3xl text-center mx-auto"
                >

                    {/* Section Label */}
                    <p className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-[#EBB305]/10 border border-[#EBB305]/30 text-[#EBB305] text-[10px] font-bold tracking-[0.25em] uppercase font-['Plus_Jakarta_Sans'] mb-3 shadow-[0_0_15px_rgba(235,179,5,0.15)]">
                        <span
                            className="w-2 h-2 rounded-full bg-[#EBB305] shadow-[0_0_8px_#EBB305] animate-pulse"
                            aria-hidden="true"
                        />

                        <span>OUR EXPERTISE</span>
                    </p>

                    {/* Main SEO Heading */}
                    <h2
                        id="expertise-heading"
                        className="text-4xl sm:text-5xl lg:text-[64px] font-normal uppercase tracking-wide text-white leading-none font-['Bebas_Neue'] mb-2.5"
                    >
                        OUR{' '}
                        <span className="bg-gradient-to-r from-[#EBB305] via-amber-300 to-amber-500 bg-clip-text text-transparent">
                            EXPERTISE
                        </span>
                    </h2>

                    {/* Accent Bar */}
                    <div
                        className="w-16 h-[3px] bg-gradient-to-r from-transparent via-[#EBB305] to-transparent mx-auto mb-3 rounded-full"
                        aria-hidden="true"
                    />

                    {/* SEO-Friendly Supporting Content */}
                    <p className="text-gray-400 text-xs sm:text-sm font-['Plus_Jakarta_Sans'] leading-relaxed max-w-xl mx-auto">
                        We provide digital marketing, social media, branding,
                        advertising, content creation, photography, videography,
                        and media production solutions that help brands connect,
                        engage, and grow.
                    </p>

                </AnimatedContent>

                {/* Expertise Services Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4 relative z-10"
                    aria-label="TWOTEN MEDIA services"
                >
                    {expertiseItems.map((item, index) => {
                        const IconComponent = item.icon;

                        return (
                            <AnimatedContent
                                key={item.id}
                                distance={20}
                                direction="vertical"
                                duration={0.4}
                                delay={index * 0.015}
                                threshold={0.05}
                                className="h-full relative z-10 hover:z-50 transition-all duration-200"
                            >
                                <TiltedCard
                                    containerHeight="82px"
                                    containerWidth="100%"
                                    imageHeight="82px"
                                    imageWidth="100%"
                                    rotateAmplitude={10}
                                    scaleOnHover={1.04}
                                    showMobileWarning={false}
                                    showTooltip={false}
                                    displayOverlayContent={true}
                                    overlayContent={
                                        <div className="w-full h-full bg-[#0c0c12]/90 backdrop-blur-md border border-white/10 hover:border-[#EBB305] rounded-[16px] px-4 py-3 flex items-center gap-3.5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(235,179,5,0.25)] group overflow-hidden relative">

                                            {/* Hover Shimmer */}
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"
                                                aria-hidden="true"
                                            />

                                            {/* Service Icon */}
                                            <div
                                                className="w-11 h-11 rounded-full bg-gradient-to-b from-[#1a1914] to-[#08080a] border border-[#EBB305]/40 flex-shrink-0 flex items-center justify-center text-[#EBB305] group-hover:border-[#EBB305] group-hover:bg-[#EBB305] group-hover:text-black group-hover:shadow-[0_0_18px_#EBB305] transition-all duration-500 shadow-[inset_0_2px_6px_rgba(0,0,0,0.9)] z-10"
                                                aria-hidden="true"
                                            >
                                                <IconComponent
                                                    className="w-5 h-5 stroke-[1.8] group-hover:rotate-[360deg] group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                                />
                                            </div>

                                            {/* Service Name */}
                                            <div className="flex-1 z-10 group-hover:translate-x-1.5 transition-transform duration-300 ease-out">
                                                <h3 className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-wider text-gray-200 group-hover:text-white font-['Plus_Jakarta_Sans'] leading-tight whitespace-pre-line group-hover:drop-shadow-[0_2px_10px_rgba(235,179,5,0.4)] transition-colors duration-300">
                                                    {item.title}
                                                </h3>
                                            </div>

                                        </div>
                                    }
                                />
                            </AnimatedContent>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Expertise;