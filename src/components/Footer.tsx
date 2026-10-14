import React from 'react';
import { Mail, MapPin, Instagram, Github, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    const currentYear = new Date().getFullYear();
    const t = useTranslations('footer');
    const tCommon = useTranslations('common');
    const tServ = useTranslations('services');

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <div className="footer-logo">
                            <span className="text-accent">Flow</span>
                            <span className="logo-subtitle">Digital Lab</span>
                        </div>
                        <p className="footer-tagline">{t('tagline')}</p>
                        <div className="footer-social">
                            <a href="https://instagram.com/flow_digital.lab" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://github.com/flowdigitallab" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">{t('navHeading')}</h4>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/servizi">Servizi</Link></li>
                            <li><Link href="/progetti">Progetti</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contatti">Contatti</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">{t('servicesHeading')}</h4>
                        <ul className="footer-links">
                            <li><Link href="/servizi">{tServ('items.0.title')}</Link></li>
                            <li><Link href="/servizi">{tServ('items.1.title')}</Link></li>
                            <li><Link href="/servizi">{tServ('items.2.title')}</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">{t('contactHeading')}</h4>
                        <ul className="footer-contact">
                            <li>
                                <Mail size={16} />
                                <a href="mailto:info@flowdigitallab.it">info@flowdigitallab.it</a>
                            </li>
                            <li>
                                <MessageCircle size={16} />
                                <a
                                    href={`https://wa.me/393273315926?text=${encodeURIComponent(tCommon('whatsappMessage'))}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-whatsapp"
                                    aria-label={tCommon('whatsappCta')}
                                >
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <Instagram size={16} />
                                <a href="https://instagram.com/flow_digital.lab" target="_blank" rel="noopener noreferrer">@flow_digital.lab</a>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>{t('location')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Flow Digital Lab. {t('rights')}</p>
                    <div className="footer-legal">
                        <Link href="/privacy">{t('privacy')}</Link>
                        <Link href="/terms">{t('terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
