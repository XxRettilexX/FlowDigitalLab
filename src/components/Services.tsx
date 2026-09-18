'use client';

import React from 'react';
import { Code, Palette, TrendingUp, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

const ICONS = [
    <Code size={22} key="code" />,
    <Palette size={22} key="palette" />,
    <TrendingUp size={22} key="trend" />,
];

interface ServiceRowProps {
    icon: React.ReactNode;
    number: string;
    title: string;
    description: string;
    features: string[];
    index: number;
}

const ServiceRow: React.FC<ServiceRowProps> = ({ icon, number, title, description, features, index }) => {
    return (
        <motion.article
            className="service-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
        >
            <span className="service-row-number">{number}</span>

            <div className="service-row-main">
                <div className="service-row-heading">
                    <span className="service-icon">{icon}</span>
                    <h3 className="service-title">{title}</h3>
                </div>
                <p className="service-description">{description}</p>
            </div>

            <ul className="service-features">
                {features.map((feature, i) => (
                    <li key={i}>
                        <ArrowUpRight size={14} className="feature-icon" />
                        {feature}
                    </li>
                ))}
            </ul>
        </motion.article>
    );
};

interface ServicesProps { }

const Services: React.FC<ServicesProps> = () => {
    const t = useTranslations('services');
    const items = t.raw('items') as { title: string; description: string; features: string[] }[];

    return (
        <section className="services">
            <div className="container">
                <ScrollReveal className="services-header">
                    <h2 className="section-title">
                        {t('heading')} <span className="text-accent">{t('headingAccent')}</span>
                    </h2>
                    <p className="section-subtitle">{t('subtitle')}</p>
                </ScrollReveal>

                <div className="services-list">
                    {items.map((service, index) => (
                        <ServiceRow
                            key={index}
                            icon={ICONS[index % ICONS.length]}
                            number={String(index + 1).padStart(2, '0')}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
