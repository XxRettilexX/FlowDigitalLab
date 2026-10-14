'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const t = useTranslations('nav');
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => { document.body.style.overflow = 'auto'; };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: t('home'), path: '/' },
        { name: t('servizi'), path: '/servizi' },
        { name: t('progetti'), path: '/progetti' },
        { name: t('blog'), path: '/blog' },
        { name: t('contatti'), path: '/contatti' },
    ];

    return (
        <>
            <motion.nav
                className={`navbar ${isScrolled ? 'scrolled' : ''}`}
                initial={shouldReduceMotion ? false : { y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className="container navbar-content">
                    <Link href="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="text-accent">Flow</span>
                        <span className="logo-subtitle">Digital Lab</span>
                    </Link>

                    <ul className="navbar-links desktop-nav">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`nav-link ${pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar-actions">
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <Link href="/contatti" className="btn btn-primary navbar-cta">
                            {t('contactCta')}
                        </Link>

                        <button
                            className="mobile-menu-toggle"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </motion.div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-nav-overlay"
                        initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 100, duration: 0.4 }}
                    >
                        <div className="mobile-nav-content">
                            <ul className="mobile-nav-links">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.path}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.15 + index * 0.05 }}
                                    >
                                        <Link
                                            href={link.path}
                                            className={`mobile-nav-link ${pathname === link.path ? 'active' : ''}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className="link-text">{link.name}</span>
                                            {pathname === link.path && <ArrowRight size={20} className="active-indicator" />}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.div
                                className="mobile-nav-utility"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <LanguageSwitcher />
                                <ThemeToggle />
                            </motion.div>

                            <motion.div
                                className="mobile-socials"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <p>Seguici sui social</p>
                                <div className="social-links">
                                    <a href="https://instagram.com/flow_digital.lab" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    <a href="mailto:info@flowdigitallab.it">Email</a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
