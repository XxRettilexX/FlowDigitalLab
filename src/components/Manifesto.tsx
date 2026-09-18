'use client';

import React from 'react';
import { Waves } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

interface ManifestoProps { }

const Manifesto: React.FC<ManifestoProps> = () => {
    const t = useTranslations('manifesto');

    return (
        <section className="manifesto">
            <div className="container">
                <ScrollReveal className="manifesto-content">
                    <motion.div
                        className="manifesto-icon"
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 0.6 }}
                    >
                        <Waves size={60} />
                    </motion.div>

                    <h2 className="manifesto-title">
                        {t('heading')} <span className="text-accent-inverse">{t('headingAccent')}</span>
                    </h2>

                    <div className="manifesto-text">
                        <p>
                            {t('p1Plain')} <strong>{t('p1Bold')}</strong>{t('p1End')}
                        </p>
                        <p>
                            {t('p2Plain')} <span className="text-accent-inverse">{t('p2Accent')}</span> {t('p2End')}
                        </p>
                        <p>
                            {t('p3Plain')} <strong>{t('p3Bold')}</strong> {t('p3Mid')} <span className="text-accent-inverse">{t('p3Accent')}</span>{t('p3End')}
                        </p>
                        <p className="manifesto-cta-text">{t('ctaText')}</p>
                    </div>

                    <div className="manifesto-divider">
                        <div className="divider-line"></div>
                        <div className="divider-dot" />
                        <div className="divider-line"></div>
                    </div>

                    <blockquote className="manifesto-quote">
                        &ldquo;{t('quote')}&rdquo;
                    </blockquote>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Manifesto;
