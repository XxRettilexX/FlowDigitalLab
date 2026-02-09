import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import './Navbar.css';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Revert to default
    }

    return () => { document.body.style.overflow = 'auto'; }; // Cleanup
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Progetti', path: '/progetti' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container navbar-content">
          <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="gradient-text">Flow</span>
            <span className="logo-subtitle">Digital Lab</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="navbar-links desktop-nav">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {/* Animating icon swap */}
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay - Rendered OUTSIDE navbar container to ensure full screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ type: "spring", damping: 25, stiffness: 100, duration: 0.5 }}
          >
            <div className="mobile-nav-content">
              <ul className="mobile-nav-links">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="link-text">{link.name}</span>
                      {location.pathname === link.path && <ArrowRight size={20} className="active-indicator" />}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mobile-socials"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
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
