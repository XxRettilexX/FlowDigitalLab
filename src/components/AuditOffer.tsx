import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const AuditOffer: React.FC = () => {
    const t = useTranslations('audit');

    return (
        <section className="audit">
            <div className="container audit-inner">
                <div className="audit-copy">
                    <h2 className="audit-title">{t('heading')}</h2>
                    <p className="audit-text">{t('text')}</p>
                </div>
                <Link href="/contatti" className="btn btn-primary">
                    {t('cta')}
                </Link>
            </div>
        </section>
    );
};

export default AuditOffer;
