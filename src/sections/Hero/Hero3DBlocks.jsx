import React from 'react';
import { motion } from 'framer-motion';

// Import the two hero assets uploaded by the user
import CenterBlockImage from '../../assets/images/hero/center-block.png';
import ElementsImage from '../../assets/images/hero/elemts.png';

const Hero3DBlocks = () => {
    return (
        <div className="relative w-full flex items-center justify-center py-2">
            {/* Volumetric Golden Ambient Backdrop Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: [1, 1.06, 1] }}
                transition={{
                    opacity: { duration: 1 },
                    scale: { repeat: Infinity, duration: 8, ease: 'easeInOut' }
                }}
                className="absolute w-[85%] h-[85%] bg-gradient-to-tr from-amber-600/18 via-yellow-600/10 to-transparent blur-[130px] rounded-full pointer-events-none -z-10"
            />

            {/* Main 3D Composite Container */}
            <div className="relative w-full max-w-[620px] lg:max-w-[720px] xl:max-w-[780px] aspect-[4/3.3] flex items-center justify-center select-none pointer-events-none">

                {/* Layer 1: Main Focal Point - Central Digital Marketing Cube & Podium (Shifted right) */}
                <motion.img
                    initial={{ opacity: 0, y: 20, scale: 1 }}
                    animate={{ opacity: 1, scale: 0.85, y: [0, -8, 0] }}
                    transition={{
                        opacity: { duration: 0.8 },
                        scale: { duration: 0.8 },
                        y: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
                    }}
                    src={CenterBlockImage}
                    alt="Central Digital Marketing Cube"
                    className="absolute inset-0 w-[80%] h-full object-contain z-10 translate-x-4 sm:translate-x-6 md:translate-x-15 top-[-7%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)]"
                />

                {/* Layer 2: Satellite Service Tiles & Orbital Ring */}
                <motion.img
                    initial={{ opacity: 0, y: 20, scale: 1 }}
                    animate={{
                        opacity: 1,
                        rotate: [-3, 3, -3],
                        y: [0, -10, 0],
                        scale: [1.38, 1.46, 1.42]
                    }}
                    transition={{
                        opacity: { duration: 0.9, delay: 0.15 },
                        rotate: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
                        y: { repeat: Infinity, duration: 5.4, ease: 'easeInOut' },
                        scale: { repeat: Infinity, duration: 5.4, ease: 'easeInOut' }
                    }}
                    src={ElementsImage}
                    alt="Digital Marketing Satellite Elements & Orbital Ring"
                    className="absolute inset-0 w-full h-full object-contain z-20 drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] origin-center"
                />

            </div>
        </div>
    );
};

export default Hero3DBlocks;
