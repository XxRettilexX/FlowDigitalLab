'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ScrollReveal from './ScrollReveal';

const Manifesto: React.FC = () => {
    const t = useTranslations('manifesto');

    return (
        <section className="manifesto">
            <div className="container">
                <ScrollReveal className="manifesto-content">
                    <h2 className="manifesto-title">
                        {t('heading')} <span className="text-accent-inverse">{t('headingAccent')}</span>
                    </h2>

                    <div className="manifesto-text">
                        <p>{t('text')}</p>
                        <p className="manifesto-cta-text">{t('ctaText')}</p>
                    </div>

                    <Link href="/contatti" className="btn btn-primary">
                        {t('ctaButton')}
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Manifesto;
