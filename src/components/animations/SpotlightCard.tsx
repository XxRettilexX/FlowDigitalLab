import React, { useState, useRef, type ReactNode } from 'react';
import { motion } from 'motion/react';
import './SpotlightCard.css';

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
    spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    className = '',
    spotlightColor = 'rgba(100, 255, 218, 0.15)'
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <motion.div
            ref={containerRef}
            className={`spotlight-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{
                y: -10,
                transition: { duration: 0.3 }
            }}
        >
            <div
                className="spotlight-effect"
                style={{
                    background: isHovered
                        ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor} 0%, transparent 60%)`
                        : 'none',
                    opacity: isHovered ? 1 : 0
                }}
            />
            <div className="spotlight-border" style={{
                background: isHovered
                    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, var(--teal) 0%, transparent 50%)`
                    : 'none',
                opacity: isHovered ? 0.5 : 0
            }} />
            <div className="spotlight-content">
                {children}
            </div>
        </motion.div>
    );
};

export default SpotlightCard;
