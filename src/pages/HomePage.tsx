import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Manifesto from '../components/Manifesto';
import SEO from '../components/SEO';

interface HomePageProps { }

const HomePage: React.FC<HomePageProps> = () => {
    return (
        <div className="home-page">
            <SEO
                title="Web Agency, Design & Sviluppo Strategico"
                description="Agenzia digitale specializzata in Web Design, Sviluppo App e Strategie di Branding. Trasformiamo la tua visione in realtà digitale con soluzioni innovative."
            />
            <Hero />
            <Services />
            <Manifesto />
        </div>
    );
};

export default HomePage;
