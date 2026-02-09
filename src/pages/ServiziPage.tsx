import React from 'react';
import { motion } from 'motion/react';
import Services from '../components/Services';
import SEO from '../components/SEO';
import { Code, Palette, TrendingUp, Zap } from 'lucide-react';
import './ServiziPage.css';

interface ServiziPageProps { }

const ServiziPage: React.FC<ServiziPageProps> = () => {
    const processSteps = [
        {
            icon: <Zap size={32} />,
            number: '01',
            title: 'Discovery',
            description: 'Analizziamo il tuo business, i tuoi obiettivi e il mercato di riferimento.'
        },
        {
            icon: <Code size={32} />,
            number: '02',
            title: 'Design & Development',
            description: 'Creiamo soluzioni su misura con tecnologie all\'avanguardia.'
        },
        {
            icon: <Palette size={32} />,
            number: '03',
            title: 'Testing & Optimization',
            description: 'Testiamo, ottimizziamo e perfezioniamo ogni dettaglio.'
        },
        {
            icon: <TrendingUp size={32} />,
            number: '04',
            title: 'Launch & Growth',
            description: 'Lanciamo il progetto e supportiamo la crescita continua.'
        }
    ];

    return (
        <div className="servizi-page">
            <SEO
                title="Servizi di Web Design e Sviluppo"
                description="Offriamo servizi professionali di Web Design, Sviluppo App, Branding e Strategie Digitali per far crescere il tuo business online."
            />
            <section className="servizi-hero">
                <div className="container">
                    <motion.h1
                        className="page-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        I Nostri <span className="gradient-text">Servizi</span>
                    </motion.h1>
                    <motion.p
                        className="page-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Soluzioni digitali complete per far crescere il tuo business
                    </motion.p>
                </div>
            </section>

            <Services />

            <section className="process-section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Il Nostro <span className="gradient-text">Processo</span>
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Un approccio strutturato per risultati eccezionali
                    </motion.p>

                    <div className="process-grid">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="process-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="process-number">{step.number}</div>
                                <div className="process-icon">{step.icon}</div>
                                <h3 className="process-title">{step.title}</h3>
                                <p className="process-description">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiziPage;
