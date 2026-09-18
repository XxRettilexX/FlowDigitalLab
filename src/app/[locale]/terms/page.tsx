import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { FileText, Scale, AlertCircle, CreditCard, RefreshCw, Gavel } from 'lucide-react';
import { renderBold } from '@/lib/renderBold';

interface TermsPageProps {
    params: Promise<{ locale: string }>;
}

const ICONS = [
    <Scale size={24} key="scale" />,
    <FileText size={24} key="file" />,
    <CreditCard size={24} key="card" />,
    <RefreshCw size={24} key="refresh" />,
    <AlertCircle size={24} key="alert" />,
    <Gavel size={24} key="gavel" />,
];

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'legal.terms' });
    return { title: t('seoTitle') };
}

export default async function TermsPage({ params }: TermsPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'legal.terms' });
    const tLegal = await getTranslations({ locale, namespace: 'legal' });
    type Section = { heading: string; body: string; list?: string[]; footer?: string; contactBox?: boolean };
    const sections = t.raw('sections') as Section[];

    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="container">
                    <FileText size={48} className="legal-icon" />
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
                                {section.contactBox && (
                                    <div className="contact-box">
                                        <p><strong>{tLegal('contactBoxEmailLabel')}:</strong> <a href="mailto:info@flowdigitallab.it">info@flowdigitallab.it</a></p>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
