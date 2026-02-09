import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    animation?: 'fadeUp' | 'fadeDown' | 'scaleUp' | 'rotateIn';
}

const SplitText: React.FC<SplitTextProps> = ({
    text,
    className = '',
    delay = 0,
    duration = 0.8,
    stagger = 0.03,
    animation = 'fadeUp'
}) => {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const chars = container.querySelectorAll('.split-char');

        const getAnimationProps = () => {
            switch (animation) {
                case 'fadeUp':
                    return { y: 50, opacity: 0, rotationX: -40 };
                case 'fadeDown':
                    return { y: -50, opacity: 0, rotationX: 40 };
                case 'scaleUp':
                    return { scale: 0, opacity: 0 };
                case 'rotateIn':
                    return { rotation: 90, opacity: 0, transformOrigin: 'bottom left' };
                default:
                    return { y: 50, opacity: 0 };
            }
        };

        gsap.set(chars, getAnimationProps());

        gsap.to(chars, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            rotationX: 0,
            duration,
            stagger,
            delay,
            ease: 'back.out(1.7)',
        });

        return () => {
            gsap.killTweensOf(chars);
        };
    }, [text, delay, duration, stagger, animation]);

    const words = text.split(' ');

    return (
        <span ref={containerRef} className={`split-text ${className}`}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="split-word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {word.split('').map((char, charIndex) => (
                        <span
                            key={charIndex}
                            className="split-char"
                            style={{
                                display: 'inline-block',
                                willChange: 'transform, opacity',
                            }}
                        >
                            {char}
                        </span>
                    ))}
                    {wordIndex < words.length - 1 && <span>&nbsp;</span>}
                </span>
            ))}
        </span>
    );
};

export default SplitText;
