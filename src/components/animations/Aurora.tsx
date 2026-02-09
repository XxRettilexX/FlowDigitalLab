import React, { useEffect, useRef } from 'react';
import './Aurora.css';

interface AuroraProps {
    colorStops?: string[];
    speed?: number;
    blur?: number;
}

const Aurora: React.FC<AuroraProps> = ({
    colorStops = ['#64ffda', '#00d9ff', '#a2ff00', '#64ffda'],
    speed = 4,
    blur = 80
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Set CSS variables for animation
        container.style.setProperty('--aurora-speed', `${speed}s`);
        container.style.setProperty('--aurora-blur', `${blur}px`);
    }, [speed, blur]);

    return (
        <div className="aurora-container" ref={containerRef}>
            <div className="aurora-wrapper">
                {colorStops.map((color, index) => (
                    <div
                        key={index}
                        className={`aurora-blob aurora-blob-${index + 1}`}
                        style={{
                            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                            animationDelay: `${index * -1.5}s`
                        }}
                    />
                ))}
            </div>
            <div className="aurora-noise" />
        </div>
    );
};

export default Aurora;
