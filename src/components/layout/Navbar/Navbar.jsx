import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Logo from '../../../assets/images/hero/TWOTEN_LOGO.png';

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between px-6 md:px-16 py-6 absolute top-0 left-0 right-0 z-50 max-w-[1400px] mx-auto">
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-3">
                <img src={Logo} alt="Twoten Logo" className="h-7 w-auto object-contain brightness-200" />

            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-9 text-xs font-bold tracking-wider text-gray-300">
                <a href="#home" className="text-white border-b-2 border-amber-400 pb-1">HOME</a>
                <a href="#expertise" className="hover:text-white transition-colors">SERVICES</a>
                <a href="#about" className="hover:text-white transition-colors">ABOUT US</a>
                <a href="#why-choose-us" className="hover:text-white transition-colors">WORK</a>
                <a href="#process" className="hover:text-white transition-colors">PROCESS</a>
                <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-get-in-touch'))}
                    className="hover:text-white transition-colors cursor-pointer"
                >
                    CONTACT
                </button>
            </div>

            {/* Action Button */}
            <div>
                <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-get-in-touch'))}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-500/60 hover:border-amber-400 transition-all text-xs font-bold tracking-wider text-amber-400 group bg-amber-500/5 hover:bg-amber-500/10 cursor-pointer"
                >
                    LET'S TALK
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-amber-400" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
