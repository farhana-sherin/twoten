import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Logo from '../../assets/images/hero/TWOTEN_LOGO.png';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Process', href: '#process' },
];

const openGetInTouch = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-get-in-touch'));
};

const serviceLinks = [
    { label: 'Advertising & Branding', href: '#expertise' },
    { label: 'Photography & Videography', href: '#expertise' },
    { label: 'Digital Marketing', href: '#expertise' },
    { label: 'Content Creation', href: '#expertise' },
    { label: 'Social Media Management', href: '#expertise' },
];

const InstagramIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
);

const LinkedinIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const YoutubeIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
    </svg>
);

const socialLinks = [
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { icon: YoutubeIcon, href: '#', label: 'YouTube' },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative w-full bg-[#050507] text-white overflow-hidden select-none border-t border-white/5">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#EBB305]/8 blur-[180px] pointer-events-none" />

            <div className="max-w-[1380px] mx-auto w-full relative z-10 px-6 md:px-12 lg:px-16 pt-16 lg:pt-20 pb-8">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 lg:pb-16"
                >
                    {/* Brand */}
                    <div className="lg:col-span-4 space-y-5">
                        <a href="#home" className="inline-flex items-center">
                            <img
                                src={Logo}
                                alt="Twoten Media"
                                className="h-8 w-auto object-contain brightness-200"
                            />
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] max-w-xs">
                            Creative media agency specializing in visual storytelling, brand communication, and digital marketing. The Kerala chapter of Snapads Media.
                        </p>
                        <div className="flex items-center gap-3 pt-1">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-[#EBB305]/50 hover:bg-[#EBB305]/10 text-gray-400 hover:text-[#EBB305] flex items-center justify-center transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigate */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold tracking-[0.2em] text-[#EBB305] uppercase font-['Plus_Jakarta_Sans']">
                            Navigate
                        </h4>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors font-['Plus_Jakarta_Sans']"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold tracking-[0.2em] text-[#EBB305] uppercase font-['Plus_Jakarta_Sans']">
                            Services
                        </h4>
                        <ul className="space-y-2.5">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors font-['Plus_Jakarta_Sans']"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold tracking-[0.2em] text-[#EBB305] uppercase font-['Plus_Jakarta_Sans']">
                            Get In Touch
                        </h4>
                        <ul className="space-y-3.5 font-['Plus_Jakarta_Sans']">
                            <li>
                                <a
                                    href="mailto:hello@twotenmedia.com"
                                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                                >
                                    <Mail className="w-4 h-4 mt-0.5 text-[#EBB305] shrink-0" />
                                    <span>hello@twotenmedia.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+919876543210"
                                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Phone className="w-4 h-4 mt-0.5 text-[#EBB305] shrink-0" />
                                    <span>+91 98765 43210</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 mt-0.5 text-[#EBB305] shrink-0" />
                                <span>Kerala, India</span>
                            </li>
                        </ul>
                        <button
                            type="button"
                            onClick={openGetInTouch}
                            className="inline-flex items-center gap-2 mt-2 text-xs font-bold tracking-wider text-[#EBB305] hover:text-amber-300 transition-colors font-['Plus_Jakarta_Sans'] group cursor-pointer"
                        >
                            LET&apos;S TALK
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans']">
                        © {year} Twoten Media. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600 font-['Plus_Jakarta_Sans']">
                        Kerala Chapter of Snapads Media &amp; Advertising LLC
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
