import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Aurora, SplitText, AnimatedGradientText, MagnetButton } from './animations';
import './Hero.css';

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
    return (
        <section className="hero">
            {/* Aurora Background */}
            <Aurora
                colorStops={['#64ffda', '#00d9ff', '#a2ff00', '#64ffda']}
                speed={8}
                blur={100}
            />

            <div className="container hero-content">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Sparkles size={16} />
                    <span>Nuova Energia Digitale</span>
                </motion.div>

                <h1 className="hero-title">
                    <SplitText
                        text="Trasformiamo la tua visione"
                        delay={0.5}
                        duration={0.6}
                        stagger={0.02}
                        animation="fadeUp"
                    />
                    <br />
                    <span>in un </span>
                    <AnimatedGradientText animationSpeed={3}>
                        Flusso
                    </AnimatedGradientText>
                    <span> Digitale.</span>
                </h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    Web Design, Branding e Strategie ad alta conversione<br />
                    per business che non vogliono stare fermi.
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <Link to="/contatti">
                        <MagnetButton className="btn btn-primary" strength={0.2}>
                            Inizia il Progetto
                            <ArrowRight size={20} className="btn-icon" />
                        </MagnetButton>
                    </Link>
                    <Link to="/progetti" className="btn btn-secondary">
                        Scopri i Progetti
                    </Link>
                </motion.div>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                >
                    <div className="stat-item">
                        <h3 className="gradient-text">∞</h3>
                        <p>Idee Fresche</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <h3 className="gradient-text">100%</h3>
                        <p>Su Misura</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <h3 className="gradient-text">Fast</h3>
                        <p>Consegna Rapida</p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
            >
                <div className="scroll-line"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
