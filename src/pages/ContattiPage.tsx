import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, MapPin, Send, Clock, Loader2, CheckCircle2 } from 'lucide-react';
import './ContattiPage.css';

interface ContattiPageProps { }

/**
 * Handles the contact form submission by sending data to the serverless function.
 */
const ContattiPage: React.FC<ContattiPageProps> = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    /**
     * Submits the form data to the Vercel API endpoint.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Clear form
                setTimeout(() => setSubmitStatus('idle'), 5000); // Reset status after 5s
            } else {
                const errorData = await response.json();
                console.error('Error sending email:', errorData);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Network error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: <Mail size={24} />,
            title: 'Email',
            value: 'info@flowdigitallab.it',
            href: 'mailto:info@flowdigitallab.it'
        },
        {
            icon: <Instagram size={24} />,
            title: 'Instagram',
            value: '@flow_digital.lab',
            href: 'https://instagram.com/flow_digital.lab',
            external: true
        },
        {
            icon: <MapPin size={24} />,
            title: 'Locazione',
            value: 'Italia - Lavoriamo da remoto',
            href: null
        }
    ];

    return (
        <div className="contatti-page">
            <section className="contatti-hero">
                <div className="container">
                    <motion.h1
                        className="page-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="gradient-text">Contattaci</span>
                    </motion.h1>
                    <motion.p
                        className="page-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Pronto a trasformare la tua visione in realtà digitale?
                    </motion.p>
                </div>
            </section>

            <section className="contatti-content">
                <div className="container">
                    <div className="contatti-grid">
                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="info-title">Parliamo del tuo progetto</h2>
                            <p className="info-description">
                                Hai un'idea, un progetto o semplicemente vuoi saperne di più?
                                Siamo qui per ascoltarti e trovare la soluzione perfetta per te.
                            </p>

                            <div className="contact-methods">
                                {contactMethods.map((method, index) => (
                                    <motion.div
                                        key={index}
                                        className="contact-method"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                    >
                                        <div className="method-icon">
                                            {method.icon}
                                        </div>
                                        <div className="method-content">
                                            <h3>{method.title}</h3>
                                            {method.href ? (
                                                <a
                                                    href={method.href}
                                                    target={method.external ? '_blank' : undefined}
                                                    rel={method.external ? 'noopener noreferrer' : undefined}
                                                >
                                                    {method.value}
                                                </a>
                                            ) : (
                                                <p>{method.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="business-hours"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="hours-header">
                                    <Clock size={20} />
                                    <h3>Orari di Lavoro</h3>
                                </div>
                                <p>Lun - Ven: 9:00 - 18:00</p>
                                <p>Sabato: Su appuntamento</p>
                                <p>Domenica: Chiuso</p>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <motion.div
                                    className="form-group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <label htmlFor="name">Nome Completo *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Mario Rossi"
                                    />
                                </motion.div>

                                <motion.div
                                    className="form-group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="mario@example.com"
                                    />
                                </motion.div>

                                <motion.div
                                    className="form-group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <label htmlFor="message">Messaggio *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Raccontaci del tuo progetto..."
                                    ></textarea>
                                </motion.div>

                                <div className="form-feedback">
                                    {submitStatus === 'success' && (
                                        <div className="success-message">
                                            <CheckCircle2 size={20} />
                                            <span>Messaggio inviato! Ti risponderemo presto.</span>
                                        </div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <div className="error-message">
                                            Errore nell'invio. Riprova o scrivici su Instagram.
                                        </div>
                                    )}
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary btn-submit"
                                    disabled={isSubmitting}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            Invio in corso...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Invia Messaggio
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContattiPage;
