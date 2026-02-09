import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';
import './LegalPage.css';

interface PrivacyPageProps { }

const PrivacyPage: React.FC<PrivacyPageProps> = () => {
    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Shield size={48} className="legal-icon" />
                        <h1 className="page-title">
                            Privacy <span className="gradient-text">Policy</span>
                        </h1>
                        <p className="page-subtitle">
                            La tua privacy è importante per noi. Ecco come trattiamo i tuoi dati.
                        </p>
                        <p className="legal-date">Ultimo aggiornamento: Febbraio 2026</p>
                    </motion.div>
                </div>
            </section>

            <section className="legal-content">
                <div className="container">
                    <motion.div
                        className="legal-sections"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <article className="legal-section">
                            <div className="section-icon">
                                <Database size={24} />
                            </div>
                            <h2>1. Raccolta dei Dati</h2>
                            <p>
                                Flow Digital Lab raccoglie i seguenti dati personali quando utilizzi il nostro sito web:
                            </p>
                            <ul>
                                <li><strong>Dati di contatto:</strong> Nome, email e messaggio quando compili il form di contatto.</li>
                                <li><strong>Dati di navigazione:</strong> Indirizzo IP, browser, dispositivo e pagine visitate tramite cookie tecnici.</li>
                                <li><strong>Dati volontari:</strong> Qualsiasi informazione aggiuntiva che decidi di condividere con noi.</li>
                            </ul>
                        </article>

                        <article className="legal-section">
                            <div className="section-icon">
                                <Eye size={24} />
                            </div>
                            <h2>2. Utilizzo dei Dati</h2>
                            <p>
                                I tuoi dati vengono utilizzati esclusivamente per:
                            </p>
                            <ul>
                                <li>Rispondere alle tue richieste di contatto e preventivi.</li>
                                <li>Migliorare l'esperienza di navigazione sul nostro sito.</li>
                                <li>Inviarti comunicazioni relative ai nostri servizi (solo con il tuo consenso).</li>
                                <li>Adempiere agli obblighi legali e fiscali.</li>
                            </ul>
                            <p>
                                <strong>Non vendiamo né condividiamo i tuoi dati con terze parti</strong> per scopi commerciali.
                            </p>
                        </article>

                        <article className="legal-section">
                            <div className="section-icon">
                                <Lock size={24} />
                            </div>
                            <h2>3. Sicurezza dei Dati</h2>
                            <p>
                                Adottiamo misure di sicurezza tecniche e organizzative per proteggere i tuoi dati personali:
                            </p>
                            <ul>
                                <li>Connessione sicura HTTPS per tutte le comunicazioni.</li>
                                <li>Accesso limitato ai dati solo al personale autorizzato.</li>
                                <li>Backup regolari e sistemi di protezione aggiornati.</li>
                            </ul>
                        </article>

                        <article className="legal-section">
                            <div className="section-icon">
                                <UserCheck size={24} />
                            </div>
                            <h2>4. I Tuoi Diritti</h2>
                            <p>
                                Ai sensi del GDPR (Regolamento UE 2016/679), hai il diritto di:
                            </p>
                            <ul>
                                <li><strong>Accesso:</strong> Richiedere una copia dei tuoi dati personali.</li>
                                <li><strong>Rettifica:</strong> Correggere dati inesatti o incompleti.</li>
                                <li><strong>Cancellazione:</strong> Richiedere la cancellazione dei tuoi dati ("diritto all'oblio").</li>
                                <li><strong>Portabilità:</strong> Ricevere i tuoi dati in un formato strutturato.</li>
                                <li><strong>Opposizione:</strong> Opporti al trattamento dei tuoi dati per specifici scopi.</li>
                            </ul>
                        </article>

                        <article className="legal-section">
                            <div className="section-icon">
                                <Mail size={24} />
                            </div>
                            <h2>5. Contatti</h2>
                            <p>
                                Per qualsiasi domanda sulla nostra Privacy Policy o per esercitare i tuoi diritti, contattaci:
                            </p>
                            <div className="contact-box">
                                <p><strong>Flow Digital Lab</strong></p>
                                <p>Email: <a href="mailto:privacy@flowdigitallab.it">privacy@flowdigitallab.it</a></p>
                                <p>Instagram: <a href="https://instagram.com/flow_digital.lab" target="_blank" rel="noopener noreferrer">@flow_digital.lab</a></p>
                            </div>
                        </article>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;
