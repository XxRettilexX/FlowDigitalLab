import React from 'react';
import { Waves } from 'lucide-react';
import { motion } from 'motion/react';
import './Manifesto.css';

interface ManifestoProps { }

const Manifesto: React.FC<ManifestoProps> = () => {
    return (
        <section className="manifesto">
            <div className="container">
                <div className="manifesto-content">
                    <motion.div
                        className="manifesto-icon"
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            duration: 0.8
                        }}
                    >
                        <Waves size={60} />
                    </motion.div>

                    <motion.h2
                        className="manifesto-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        La Filosofia <span className="gradient-text">Flow</span>
                    </motion.h2>

                    <div className="manifesto-text">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Nel digitale, come nell'acqua, <strong>il movimento è vita</strong>.
                            Non crediamo nei siti statici o nelle strategie rigide.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Crediamo nel <span className="gradient-text">flusso continuo</span> di innovazione,
                            nell'adattamento costante, nella crescita organica.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Ogni progetto è un <strong>ecosistema vivo</strong> che respira,
                            si evolve e si adatta al mercato. La tua presenza digitale non è un prodotto finito,
                            ma un <span className="gradient-text">flusso in continua trasformazione</span>.
                        </motion.p>
                        <motion.p
                            className="manifesto-cta-text"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Sei pronto a far scorrere il tuo business verso nuovi orizzonti?
                        </motion.p>
                    </div>

                    <motion.div
                        className="manifesto-divider"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <div className="divider-line"></div>
                        <motion.div
                            className="divider-dot"
                            animate={{
                                boxShadow: [
                                    '0 0 20px var(--teal)',
                                    '0 0 40px var(--teal)',
                                    '0 0 20px var(--teal)'
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <div className="divider-line"></div>
                    </motion.div>

                    <motion.blockquote
                        className="manifesto-quote"
                        initial={{ opacity: 0, y: 30, rotateX: -20 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        "Il digitale non aspetta. O fluisci, o ristagni."
                    </motion.blockquote>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
