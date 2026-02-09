import React from 'react';
import { Code, Palette, TrendingUp, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SpotlightCard } from './animations';
import './Services.css';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, index }) => {
    return (
        <SpotlightCard className="service-card-wrapper">
            <motion.div
                className="service-card-inner"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: 'easeOut'
                }}
            >
                <div className="service-icon">{icon}</div>
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
                <ul className="service-features">
                    {features.map((feature, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + i * 0.1 + 0.3 }}
                        >
                            <ArrowUpRight size={16} className="feature-icon" />
                            {feature}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </SpotlightCard>
    );
};

interface ServicesProps { }

const Services: React.FC<ServicesProps> = () => {
    const services = [
        {
            icon: <Code size={40} />,
            title: 'Web Design',
            description: 'Siti web moderni, performanti e ottimizzati per la conversione.',
            features: [
                'Design Responsivo',
                'Performance Ottimizzate',
                'SEO Ready',
                'Accessibilità WCAG'
            ]
        },
        {
            icon: <Palette size={40} />,
            title: 'Branding',
            description: 'Identità visive che raccontano la tua storia e ti distinguono.',
            features: [
                'Logo Design',
                'Brand Guidelines',
                'Visual Identity',
                'Marketing Materials'
            ]
        },
        {
            icon: <TrendingUp size={40} />,
            title: 'Strategy',
            description: 'Strategie digitali data-driven per massimizzare il ROI.',
            features: [
                'Digital Marketing',
                'Content Strategy',
                'Analytics & Insights',
                'Growth Hacking'
            ]
        }
    ];

    return (
        <section className="services">
            <div className="container">
                <div className="services-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        I Nostri <span className="gradient-text">Servizi</span>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Soluzioni complete per portare il tuo business al livello successivo
                    </motion.p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
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
