import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Code2, Rocket } from 'lucide-react';
import SEO from '../components/SEO';
import './ProgettiPage.css';

interface ProgettiPageProps { }

const ProgettiPage: React.FC<ProgettiPageProps> = () => {
    return (
        <div className="progetti-page">
            <SEO
                title="Progetti e Open Source"
                description="Esplora i nostri progetti open source su GitHub e scopri come costruiamo siti web e applicazioni moderne per i nostri clienti."
            />
            <section className="progetti-hero">
                <div className="container">
                    <motion.h1
                        className="page-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        I Nostri <span className="gradient-text">Progetti</span>
                    </motion.h1>
                    <motion.p
                        className="page-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Codice open source e lavori pubblici su GitHub
                    </motion.p>
                </div>
            </section>

            <section className="progetti-content">
                <div className="container">
                    {/* GitHub CTA Section */}
                    <motion.div
                        className="github-showcase"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="github-card">
                            <div className="github-icon-wrapper">
                                <Github size={60} />
                            </div>
                            <h2>Esplora i nostri progetti su GitHub</h2>
                            <p>
                                Crediamo nell'open source e nella trasparenza del codice.
                                Tutti i nostri progetti pubblici sono disponibili su GitHub
                                per ispirarti e collaborare.
                            </p>
                            <motion.a
                                href="https://github.com/flowdigitallab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary github-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github size={20} />
                                Visita il nostro GitHub
                                <ExternalLink size={16} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* What We Build Section */}
                    <motion.div
                        className="what-we-build"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="section-title">
                            Cosa <span className="gradient-text">Costruiamo</span>
                        </h2>
                        <div className="build-grid">
                            <motion.div
                                className="build-card"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="build-icon">
                                    <Code2 size={32} />
                                </div>
                                <h3>Siti Web</h3>
                                <p>Landing page, portfolio e siti aziendali con design moderno e performance ottimizzate.</p>
                            </motion.div>

                            <motion.div
                                className="build-card"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="build-icon">
                                    <Rocket size={32} />
                                </div>
                                <h3>Web App</h3>
                                <p>Applicazioni web interattive con React, TypeScript e le tecnologie più moderne.</p>
                            </motion.div>

                            <motion.div
                                className="build-card"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="build-icon">
                                    <Github size={32} />
                                </div>
                                <h3>Open Source</h3>
                                <p>Componenti, template e tool che condividiamo con la community.</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Coming Soon Section */}
                    <motion.div
                        className="coming-soon"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="coming-soon-content">
                            <span className="badge">Work in Progress</span>
                            <h3>Nuovi progetti in arrivo</h3>
                            <p>
                                Stiamo lavorando a progetti entusiasmanti che saranno presto disponibili.
                                Seguici su Instagram per restare aggiornato!
                            </p>
                            <a
                                href="https://instagram.com/flow_digital.lab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Seguici su Instagram
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProgettiPage;
