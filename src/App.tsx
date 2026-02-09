import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServiziPage from './pages/ServiziPage';
import ProgettiPage from './pages/ProgettiPage';
import ContattiPage from './pages/ContattiPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

interface AppProps { }

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servizi" element={<ServiziPage />} />
            <Route path="/progetti" element={<ProgettiPage />} />
            <Route path="/contatti" element={<ContattiPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

