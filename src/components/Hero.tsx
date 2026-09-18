'use client';

import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SplitText, MagnetButton } from './animations';

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
    const t = useTranslations('hero');
    const shouldReduceMotion = useReducedMotion();

    const titleAccent = t('titleAccent');
    const fullLine = t('titleLine2Full');
    const accentIndex = fullLine.indexOf(titleAccent);
    const linePrefix = accentIndex >= 0 ? fullLine.slice(0, accentIndex) : fullLine;
    const lineSuffix = accentIndex >= 0 ? fullLine.slice(accentIndex + titleAccent.length) : '';

    return (
        <section className="hero">
            <div className="container hero-content">
                <motion.div
                    className="hero-badge"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <ArrowUpRight size={16} />
                    <span>{t('badge')}</span>
                </motion.div>

                <h1 className="hero-title">
                    <SplitText
                        text={t('titleLine1')}
                        delay={0.4}
                        duration={0.5}
                        stagger={0.02}
                        animation="fadeUp"
                    />
                    <br />
                    {linePrefix}
                    <span className="text-accent">{titleAccent}</span>
                    {lineSuffix}
                </h1>

                <motion.p
                    className="hero-subtitle"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    {t('subtitle')}
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                >
                    <Link href="/contatti">
                        <MagnetButton className="btn btn-primary" strength={0.2}>
                            {t('ctaPrimary')}
                            <ArrowRight size={20} className="btn-icon" />
                        </MagnetButton>
                    </Link>
                    <Link href="/progetti" className="btn btn-secondary">
                        {t('ctaSecondary')}
                    </Link>
                </motion.div>

                <motion.div
                    className="hero-stats"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                >
                    <div className="stat-item">
                        <h3 className="gradient-text">&#8734;</h3>
                        <p>{t('statIdeas')}</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <h3 className="gradient-text">100%</h3>
                        <p>{t('statCustom')}</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <h3 className="gradient-text">{t('statFastLabel')}</h3>
                        <p>{t('statFast')}</p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
            >
                <div className="scroll-line"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
