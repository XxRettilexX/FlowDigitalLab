import React from 'react';
import { motion } from 'motion/react';
import { FileText, Scale, AlertCircle, CreditCard, RefreshCw, Gavel } from 'lucide-react';
import './LegalPage.css';

interface TermsPageProps { }

const TermsPage: React.FC<TermsPageProps> = () => {
    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <FileText size={48} className="legal-icon" />
                        <h1 className="page-title">
                            Termini e <span className="gradient-text">Condizioni</span>
                        </h1>
                        <p className="page-subtitle">
                            Leggi attentamente i termini che regolano l'utilizzo dei nostri servizi.
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
                                <Scale size={24} />
                            </div>
                            <h2>1. Accettazione dei Termini</h2>
                            <p>
                                Utilizzando il sito web di Flow Digital Lab e i nostri servizi, accetti di essere vincolato
                                dai presenti Termini e Condizioni. Se non accetti questi termini, ti preghiamo di non
                                utilizzare i nostri servizi.
                            </p>
                            <p>
                                Ci riserviamo il diritto di modificare questi termini in qualsiasi momento.
                                Le modifiche saranno effettive dalla data di pubblicazione sul sito.
                            </p>
                        </article>

                        <article className="legal-section">
                            <div className="section-icon">
                                <FileText size={24} />
                            </div>
                            <h2>2. Descrizione dei Servizi</h2>
                            <p>
                                Flow Digital Lab offre servizi di:
                            </p>
                            <ul>
                                <li><strong>Web Design & Development:</strong> Progettazione e sviluppo di siti web su misura.</li>
                                <li><strong>Branding:</strong> Creazione di identità visive, loghi e brand guidelines.</li>
                                <li><strong>Digital Strategy:</strong> Consulenza strategica, SEO e marketing digitale.</li>
                            </ul>
                            <p>
                                I dettagli specifici di ogni progetto vengono definiti in un preventivo separato
                                che costituisce parte integrante del contratto.
                            </p>
                        </article>

                        <article className="legal-section">
                            <div className="section-icon">
                                <CreditCard size={24} />
                            </div>
                            <h2>3. Pagamenti e Fatturazione</h2>
                            <p>
                                Le condizioni di pagamento sono le seguenti:
                            </p>
                            <ul>
                                <li><strong>Acconto:</strong> Il 50% dell'importo totale è richiesto all'inizio del progetto.</li>
                                <li><strong>Saldo:</strong> Il restante 50% è dovuto alla consegna del progetto.</li>
                                <li><strong>Metodi:</strong> Bonifico bancario, PayPal o carta di credito.</li>
                                <li><strong>Fatturazione:</strong> Viene emessa fattura elettronica per ogni pagamento.</li>
                            </ul>
                            <p>
                                I prezzi sono da intendersi IVA esclusa, salvo diversa indicazione.
                            </p>
                        </article>

                        <article className="legal-section">
                            <div className="section-icon">
                                <RefreshCw size={24} />
                            </div>
                            <h2>4. Revisioni e Modifiche</h2>
                            <p>
                                Il preventivo include un numero specifico di revisioni (solitamente 2-3 round).
                                Revisioni aggiuntive oltre quelle previste saranno quotate separatamente.
                            </p>
                            <p>
                                Modifiche sostanziali allo scope del progetto dopo l'approvazione iniziale
                                potrebbero comportare costi aggiuntivi e variazioni nei tempi di consegna.
                            </p>
                        </article>

                        <article className="legal-section">
                            <div className="section-icon">
                                <AlertCircle size={24} />
                            </div>
                            <h2>5. Proprietà Intellettuale</h2>
                            <p>
                                <strong>Prima del saldo finale:</strong> Tutti i materiali prodotti rimangono di proprietà
                                di Flow Digital Lab.
                            </p>
                            <p>
                                <strong>Dopo il saldo finale:</strong> Il cliente acquisisce la piena proprietà di tutti i
                                deliverable concordati, inclusi file sorgente, grafiche e codice.
                            </p>
                            <p>
                                Flow Digital Lab si riserva il diritto di utilizzare i lavori completati nel proprio
                                portfolio, salvo accordi di riservatezza (NDA) specifici.
                            </p>
                        </article>

                        <article className="legal-section">
                            <div className="section-icon">
                                <Gavel size={24} />
                            </div>
                            <h2>6. Limitazione di Responsabilità</h2>
                            <p>
                                Flow Digital Lab non è responsabile per:
                            </p>
                            <ul>
                                <li>Danni indiretti, incidentali o consequenziali derivanti dall'uso dei nostri servizi.</li>
                                <li>Problemi causati da servizi di terze parti (hosting, dominio, ecc.).</li>
                                <li>Ritardi dovuti a mancata collaborazione o feedback tardivi del cliente.</li>
                            </ul>
                            <p>
                                La nostra responsabilità massima è limitata all'importo totale pagato per il progetto.
                            </p>
                        </article>

                        <article className="legal-section">
                            <h2>7. Legge Applicabile</h2>
                            <p>
                                I presenti Termini e Condizioni sono regolati dalla legge italiana.
                                Per qualsiasi controversia sarà competente il Foro di competenza del domicilio
                                di Flow Digital Lab.
                            </p>
                            <div className="contact-box">
                                <p><strong>Per domande sui Termini e Condizioni:</strong></p>
                                <p>Email: <a href="mailto:info@flowdigitallab.it">info@flowdigitallab.it</a></p>
                            </div>
                        </article>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;
