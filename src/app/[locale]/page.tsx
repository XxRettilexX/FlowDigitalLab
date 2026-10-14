import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AuditOffer from '@/components/AuditOffer';
import Manifesto from '@/components/Manifesto';
import Faq from '@/components/Faq';

interface HomePageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'home' });
    return buildMetadata({ locale, path: '', title: t('seoTitle'), description: t('seoDescription') });
}

export default async function HomePage({ params }: HomePageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="home-page">
            <Hero />
            <Services />
            <AuditOffer />
            <Manifesto />
            <Faq />
        </div>
    );
}
