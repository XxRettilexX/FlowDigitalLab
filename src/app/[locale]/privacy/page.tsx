import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';
import { renderBold } from '@/lib/renderBold';

interface PrivacyPageProps {
    params: Promise<{ locale: string }>;
}

const ICONS = [
    <Database size={24} key="db" />,
    <Eye size={24} key="eye" />,
    <Lock size={24} key="lock" />,
    <UserCheck size={24} key="user" />,
    <Mail size={24} key="mail" />,
];

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'legal.privacy' });
    return buildMetadata({ locale, path: '/privacy', title: t('seoTitle') });
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'legal.privacy' });
    const tLegal = await getTranslations({ locale, namespace: 'legal' });
    type Section = { heading: string; body: string; list?: string[]; footer?: string; contactBox?: boolean };
    const sections = t.raw('sections') as Section[];

    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="container">
                    <Shield size={48} className="legal-icon" />
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
                                        <p><strong>Vito Strisciuglio - Flow Digital Lab</strong></p>
                                        <p>{tLegal('contactBoxEmailLabel')}: <a href="mailto:info@flowdigitallab.it">info@flowdigitallab.it</a></p>
                                        <p>{tLegal('contactBoxInstagramLabel')}: <a href="https://instagram.com/flow_digital.lab" target="_blank" rel="noopener noreferrer">@flow_digital.lab</a></p>
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
