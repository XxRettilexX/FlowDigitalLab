import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Services from '@/components/Services';
import ServiziProcess from '@/components/ServiziProcess';

interface ServiziPageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ServiziPageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'serviziPage' });
    return {
        title: t('seoTitle'),
        description: t('seoDescription'),
    };
}

export default async function ServiziPage({ params }: ServiziPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'serviziPage' });

    return (
        <div className="servizi-page">
            <section className="servizi-hero">
                <div className="container">
                    <h1 className="page-title">
                        {t('title')} <span className="text-accent">{t('titleAccent')}</span>
                    </h1>
                    <p className="page-subtitle">{t('subtitle')}</p>
                </div>
            </section>

            <Services />

            <ServiziProcess />
        </div>
    );
}
