import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight, X, CheckCircle2 } from 'lucide-react';

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.85,
        y: 40,
        filter: 'blur(8px)',
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            type: 'spring',
            stiffness: 380,
            damping: 28,
            mass: 0.8,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: 24,
        filter: 'blur(6px)',
        transition: {
            duration: 0.22,
            ease: 'easeIn',
        },
    },
};

const fieldVariants = {
    hidden: {
        opacity: 0,
        y: 14,
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.12 + i * 0.06,
            duration: 0.35,
            ease: 'easeOut',
        },
    }),
};

const Contact = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

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
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="relative w-full py-20 lg:py-28 px-6 md:px-12 lg:px-16 bg-transparent text-white overflow-hidden"
        >

            <div className="max-w-[1380px] mx-auto w-full relative z-10">

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                    }}
                    className="relative rounded-[32px] sm:rounded-[40px] bg-white/[0.03] border border-white/10 p-8 sm:p-12 lg:p-14 overflow-hidden backdrop-blur-xl"
                >

                    {/* Ambient Glow */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#EBB305]/10 blur-[120px] pointer-events-none"
                        aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

                        {/* Content */}
                        <div className="lg:col-span-7 space-y-4">

                            {/* Section Label */}
                            <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBB305]/10 border border-[#EBB305]/35 text-[#EBB305] text-xs font-medium tracking-wide font-['Plus_Jakarta_Sans']">
                                <span
                                    className="w-2 h-2 rounded-full bg-[#EBB305] shadow-[0_0_8px_#EBB305] animate-pulse"
                                    aria-hidden="true"
                                />

                                <span>LET'S WORK TOGETHER</span>
                            </p>

                            {/* Main Heading */}
                            <h2
                                id="contact-heading"
                                className="text-3xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-wider text-white leading-[0.95] font-['Bebas_Neue']"
                            >
                                HAVE A PROJECT IN MIND?
                            </h2>

                            {/* SEO-Friendly Description */}
                            <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed font-['Plus_Jakarta_Sans'] max-w-lg">
                                Let's discuss your digital marketing, branding, social media,
                                content, or creative media project and build something meaningful
                                together.
                            </p>

                        </div>

                        {/* CTA Buttons */}
                        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-center gap-3.5">

                            <button
                                type="button"
                                onClick={() => setIsFormOpen(true)}
                                aria-label="Get a free consultation from TWOTEN MEDIA"
                                className="w-full sm:w-auto lg:w-full max-w-xs px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:brightness-105 text-black font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(235,179,5,0.35)] hover:shadow-[0_0_40px_rgba(235,179,5,0.5)] hover:scale-[1.02] cursor-pointer font-['Plus_Jakarta_Sans']"
                            >
                                <span>GET FREE CONSULTATION</span>

                                <ArrowRight
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                />
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsFormOpen(true)}
                                aria-label="Contact TWOTEN MEDIA"
                                className="w-full sm:w-auto lg:w-full max-w-xs px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#EBB305]/40 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md hover:scale-[1.02] cursor-pointer font-['Plus_Jakarta_Sans']"
                            >
                                <span>CONTACT US</span>

                                <ArrowRight
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                />
                            </button>

                        </div>

                    </div>
                </motion.div>

            </div>

            {/* Contact Form Modal */}
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
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-form-heading"
                    >

                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-xl p-8 sm:p-10 rounded-[32px] bg-white/[0.06] border border-white/15 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] text-white overflow-hidden"
                        >

                            {/* Modal Glow */}
                            <div
                                className="absolute -top-20 -right-20 w-56 h-56 bg-[#EBB305]/10 blur-[80px] pointer-events-none"
                                aria-hidden="true"
                            />

                            {/* Close Button */}
                            <motion.button
                                type="button"
                                initial={{
                                    opacity: 0,
                                    rotate: -90,
                                }}
                                animate={{
                                    opacity: 1,
                                    rotate: 0,
                                }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.3,
                                }}
                                onClick={closeForm}
                                aria-label="Close contact form"
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer z-10"
                            >
                                <X
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            </motion.button>

                            <AnimatePresence mode="wait">

                                {/* Success State */}
                                {formSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.95,
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 320,
                                            damping: 24,
                                        }}
                                        className="relative z-10 text-center py-10 space-y-4"
                                    >

                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 400,
                                                damping: 18,
                                                delay: 0.1,
                                            }}
                                            className="w-16 h-16 rounded-full bg-[#EBB305]/15 border border-[#EBB305]/40 text-[#EBB305] flex items-center justify-center mx-auto"
                                        >
                                            <CheckCircle2
                                                className="w-8 h-8"
                                                aria-hidden="true"
                                            />
                                        </motion.div>

                                        <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans']">
                                            Thank You!
                                        </h3>

                                        <p className="text-gray-300 text-sm max-w-xs mx-auto">
                                            Your message has been received. Our team will contact you shortly.
                                        </p>

                                    </motion.div>

                                ) : (

                                    /* Contact Form */
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

                                            <h3
                                                id="contact-form-heading"
                                                className="text-2xl font-bold font-['Plus_Jakarta_Sans'] mb-1"
                                            >
                                                Get Free Consultation
                                            </h3>

                                            <p className="text-xs text-gray-400">
                                                Tell us about your project and our team will get back to you within 24 hours.
                                            </p>

                                        </motion.div>

                                        <form
                                            onSubmit={handleSubmit}
                                            className="space-y-4"
                                        >

                                            {/* Name */}
                                            <motion.div
                                                custom={1}
                                                variants={fieldVariants}
                                                initial="hidden"
                                                animate="visible"
                                            >
                                                <label
                                                    htmlFor="contact-name"
                                                    className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1.5 font-['Plus_Jakarta_Sans']"
                                                >
                                                    Your Name
                                                </label>

                                                <input
                                                    id="contact-name"
                                                    name="name"
                                                    required
                                                    type="text"
                                                    autoComplete="name"
                                                    placeholder="John Doe"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EBB305]/70 transition-colors"
                                                />
                                            </motion.div>

                                            {/* Email */}
                                            <motion.div
                                                custom={2}
                                                variants={fieldVariants}
                                                initial="hidden"
                                                animate="visible"
                                            >
                                                <label
                                                    htmlFor="contact-email"
                                                    className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1.5 font-['Plus_Jakarta_Sans']"
                                                >
                                                    Email Address
                                                </label>

                                                <input
                                                    id="contact-email"
                                                    name="email"
                                                    required
                                                    type="email"
                                                    autoComplete="email"
                                                    placeholder="john@example.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EBB305]/70 transition-colors"
                                                />
                                            </motion.div>

                                            {/* Project Details */}
                                            <motion.div
                                                custom={3}
                                                variants={fieldVariants}
                                                initial="hidden"
                                                animate="visible"
                                            >
                                                <label
                                                    htmlFor="project-details"
                                                    className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1.5 font-['Plus_Jakarta_Sans']"
                                                >
                                                    Project Details
                                                </label>

                                                <textarea
                                                    id="project-details"
                                                    name="projectDetails"
                                                    required
                                                    rows="4"
                                                    placeholder="Tell us about your project requirements..."
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#EBB305]/70 transition-colors resize-none"
                                                />
                                            </motion.div>

                                            {/* Submit */}
                                            <motion.button
                                                custom={4}
                                                variants={fieldVariants}
                                                initial="hidden"
                                                animate="visible"
                                                type="submit"
                                                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(235,179,5,0.35)] hover:brightness-105 cursor-pointer flex items-center justify-center gap-2"
                                            >
                                                <Send
                                                    className="w-4 h-4"
                                                    aria-hidden="true"
                                                />

                                                <span>SEND MESSAGE</span>
                                            </motion.button>

                                        </form>

                                    </motion.div>
                                )}

                            </AnimatePresence>

                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Contact;