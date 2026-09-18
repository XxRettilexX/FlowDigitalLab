'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * Scroll-linked reveal for whole sections: fades/lifts content in as it
 * enters the viewport, using scroll progress rather than a fixed timer.
 * Animates transform + opacity only. No-ops under prefers-reduced-motion.
 */
const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 90%', 'start 40%'],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [32, 0]);

    if (shouldReduceMotion) {
        return <div ref={ref} className={className}>{children}</div>;
    }

    return (
        <motion.div ref={ref} className={className} style={{ opacity, y }}>
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
