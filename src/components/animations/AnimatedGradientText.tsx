import React from 'react';
import { motion } from 'motion/react';
import './AnimatedGradientText.css';

interface AnimatedGradientTextProps {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
    children,
    className = '',
    colors = ['#64ffda', '#00d9ff', '#a2ff00', '#64ffda'],
    animationSpeed = 4
}) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '300% 100%',
        animationDuration: `${animationSpeed}s`
    };

    return (
        <motion.span
            className={`animated-gradient-text ${className}`}
            style={gradientStyle}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {children}
        </motion.span>
    );
};

export default AnimatedGradientText;
