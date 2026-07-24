import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, CheckCircle2, MessageCircle } from 'lucide-react';

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { type: 'spring', stiffness: 380, damping: 28, mass: 0.8 },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: 24,
        filter: 'blur(6px)',
        transition: { duration: 0.22, ease: 'easeIn' },
    },
};

const fieldVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.12 + i * 0.06, duration: 0.35, ease: 'easeOut' },
    }),
};

const GetInTouch = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        const open = () => setIsFormOpen(true);
        window.addEventListener('open-get-in-touch', open);
        return () => window.removeEventListener('open-get-in-touch', open);
    }, []);

    const closeForm = () => {
        setIsFormOpen(false);
        setFormSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setIsFormOpen(false);
        }, 3000);
    };

    return (
        <>
            {/* Side tab */}
            <motion.button
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
                onClick={() => setIsFormOpen(true)}
                aria-label="Get in Touch"
                className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2 pl-3 pr-2.5 py-3.5 rounded-l-2xl bg-gradient-to-b from-amber-400 via-yellow-400 to-amber-500 text-black shadow-[-4px_0_24px_rgba(235,179,5,0.35)] hover:pl-4 transition-all cursor-pointer group"
            >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span
                    className="text-[11px] font-bold tracking-[0.18em] uppercase font-['Plus_Jakarta_Sans'] whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                    Get in Touch
                </span>
            </motion.button>

            <AnimatePresence>
                {isFormOpen && (
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.28 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-md"
                        onClick={closeForm}
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-xl p-8 sm:p-10 rounded-[32px] bg-white/[0.06] border border-white/15 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] text-white overflow-hidden"
                        >
                            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#EBB305]/10 blur-[80px] pointer-events-none" />

                            <motion.button
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                                onClick={closeForm}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer z-10"
                            >
                                <X className="w-5 h-5" />
                            </motion.button>

                            <AnimatePresence mode="wait">
                                {formSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                                        className="relative z-10 text-center py-10 space-y-4"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 }}
                                            className="w-16 h-16 rounded-full bg-[#EBB305]/15 border border-[#EBB305]/40 text-[#EBB305] flex items-center justify-center mx-auto"
                                        >
                                            <CheckCircle2 className="w-8 h-8" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans']">Thank You!</h3>
                                        <p className="text-gray-300 text-sm max-w-xs mx-auto">
                                            Your message has been received. Our team will contact you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="relative z-10"
                                    >
                                        <motion.div
                                            custom={0}
                                            variants={fieldVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="mb-6"
                                        >
                                            <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans'] mb-1">Get in Touch</h3>
                                            <p className="text-xs text-gray-400">Fill in your details and we&apos;ll get back to you within 24 hours.</p>
                                        </motion.div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
                                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1.5 font-['Plus_Jakarta_Sans']">Your Name</label>
                                                <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EBB305]/70 transition-colors" />
                                            </motion.div>
                                            <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible">
                                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1.5 font-['Plus_Jakarta_Sans']">Email Address</label>
                                                <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EBB305]/70 transition-colors" />
                                            </motion.div>
                                            <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="visible">
                                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1.5 font-['Plus_Jakarta_Sans']">Project Details</label>
                                                <textarea required rows="4" placeholder="Tell us about your project requirements..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EBB305]/70 transition-colors resize-none" />
                                            </motion.div>

                                            <motion.button
                                                custom={4}
                                                variants={fieldVariants}
                                                initial="hidden"
                                                animate="visible"
                                                type="submit"
                                                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(235,179,5,0.35)] hover:brightness-105 cursor-pointer flex items-center justify-center gap-2"
                                            >
                                                <Send className="w-4 h-4" />
                                                <span>Send Message</span>
                                            </motion.button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default GetInTouch;
