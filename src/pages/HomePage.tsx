import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Manifesto from '../components/Manifesto';

interface HomePageProps { }

const HomePage: React.FC<HomePageProps> = () => {
    return (
        <div className="home-page">
            <Hero />
            <Services />
            <Manifesto />
        </div>
    );
};

export default HomePage;
