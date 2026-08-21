import React from 'react';
import { motion } from 'framer-motion';

const AnimatedContent = ({
    children,
    distance = 60,
    direction = 'vertical',
    reverse = false,
    duration = 0.7,
    initialOpacity = 0,
    animateOpacity = true,
    scale = 1,
    delay = 0,
    className = '',
}) => {
    let x = 0;
    let y = 0;

    if (direction === 'vertical') {
        y = reverse ? -distance : distance;
    } else if (direction === 'horizontal') {
        x = reverse ? -distance : distance;
    }

    const initialScale = scale !== 1 ? 0.95 : 1;

    return (
        <motion.div
            initial={{
                x,
                y,
                scale: initialScale,
                opacity: animateOpacity ? initialOpacity : 1,
            }}
            whileInView={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
            }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
                duration,
                delay,
                ease: 'easeOut',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedContent;
