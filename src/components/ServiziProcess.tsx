'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

interface Step {
    title: string;
    timing: string;
    description: string;
    output: string;
}

const ServiziProcess: React.FC = () => {
    const t = useTranslations('serviziPage');
    const steps = t.raw('steps') as Step[];

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
                            <div className="process-number">
                                {String(index + 1).padStart(2, '0')}
                                {step.timing && <span> · {step.timing}</span>}
                            </div>
                            <h3 className="process-title">{step.title}</h3>
                            <p className="process-description">{step.description}</p>
                            <p className="process-output">
                                <strong>{t('receive')}:</strong> {step.output}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiziProcess;
