'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Code, Palette, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

const ICONS = [
    <Zap size={32} key="zap" />,
    <Code size={32} key="code" />,
    <Palette size={32} key="palette" />,
    <TrendingUp size={32} key="trend" />,
];

const ServiziProcess: React.FC = () => {
    const t = useTranslations('serviziPage');
    const steps = t.raw('steps') as { title: string; description: string }[];

    return (
        <section className="process-section">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">
                        {t('processHeading')} <span className="text-accent">{t('processHeadingAccent')}</span>
                    </h2>
                    <p className="section-subtitle">{t('processSubtitle')}</p>
                </ScrollReveal>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="process-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <div className="process-number">{String(index + 1).padStart(2, '0')}</div>
                            <div className="process-icon">{ICONS[index % ICONS.length]}</div>
                            <h3 className="process-title">{step.title}</h3>
                            <p className="process-description">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiziProcess;
