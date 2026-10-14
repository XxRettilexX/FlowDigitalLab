import React from 'react';
import { useTranslations } from 'next-intl';

interface FaqItem {
    q: string;
    a: string;
}

const Faq: React.FC = () => {
    const t = useTranslations('faq');
    const items = t.raw('items') as FaqItem[];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    };

    return (
        <section className="faq">
            <div className="container faq-inner">
                <h2 className="section-title">
                    {t('heading')} <span className="text-accent">{t('headingAccent')}</span>
                </h2>
                <div className="faq-list">
                    {items.map((item) => (
                        <details key={item.q} className="faq-item">
                            <summary>{item.q}</summary>
                            <p>{item.a}</p>
                        </details>
                    ))}
                </div>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </section>
    );
};

export default Faq;
