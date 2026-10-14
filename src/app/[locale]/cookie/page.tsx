import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Cookie, Eye, ExternalLink } from 'lucide-react';
import { renderBold } from '@/lib/renderBold';

interface CookiePageProps {
    params: Promise<{ locale: string }>;
}

const ICONS = [
    <Cookie size={24} key="cookie" />,
    <Eye size={24} key="eye" />,
    <ExternalLink size={24} key="link" />,
];

export async function generateMetadata({ params }: CookiePageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'legal.cookie' });
    return buildMetadata({ locale, path: '/cookie', title: t('seoTitle') });
}

export default async function CookiePage({ params }: CookiePageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'legal.cookie' });
    type Section = { heading: string; body: string; list?: string[]; footer?: string };
    const sections = t.raw('sections') as Section[];

    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="container">
                    <Cookie size={48} className="legal-icon" />
                    <h1 className="page-title">
                        {t('title')} <span className="text-accent">{t('titleAccent')}</span>
                    </h1>
                    <p className="page-subtitle">{t('subtitle')}</p>
                    <p className="legal-date">{t('updated')}</p>
                </div>
            </section>

            <section className="legal-content">
                <div className="container">
                    <div className="legal-sections">
                        {sections.map((section, index) => (
                            <article className="legal-section" key={index}>
                                <div className="section-icon">{ICONS[index % ICONS.length]}</div>
                                <h2>{section.heading}</h2>
                                <p>{renderBold(section.body)}</p>
                                {section.list && (
                                    <ul>
                                        {section.list.map((item, i) => (
                                            <li key={i}>{renderBold(item)}</li>
                                        ))}
                                    </ul>
                                )}
                                {section.footer && <p>{renderBold(section.footer)}</p>}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
