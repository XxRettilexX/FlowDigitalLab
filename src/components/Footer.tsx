import React from 'react';
import { Mail, MapPin, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <span className="gradient-text">Flow</span>
                            <span className="logo-subtitle">Digital Lab</span>
                        </div>
                        <p className="footer-tagline">
                            Trasformiamo visioni in flussi digitali che convertono.
                        </p>
                        <div className="footer-social">
                            <a href="https://instagram.com/flow_digital.lab" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Instagram size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Navigazione</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/servizi">Servizi</Link></li>
                            <li><Link to="/progetti">Progetti</Link></li>
                            <li><Link to="/contatti">Contatti</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Servizi</h4>
                        <ul className="footer-links">
                            <li><Link to="/servizi">Web Design</Link></li>
                            <li><Link to="/servizi">Branding</Link></li>
                            <li><Link to="/servizi">Digital Strategy</Link></li>
                            <li><Link to="/servizi">SEO & Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Contatti</h4>
                        <ul className="footer-contact">
                            <li>
                                <Mail size={16} />
                                <a href="mailto:info@flowdigitallab.it">info@flowdigitallab.it</a>
                            </li>
                            <li>
                                <Instagram size={16} />
                                <a href="https://instagram.com/flow_digital.lab" target="_blank" rel="noopener noreferrer">@flow_digital.lab</a>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>Italia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Flow Digital Lab. Tutti i diritti riservati.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Termini & Condizioni</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
