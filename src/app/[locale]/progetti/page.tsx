import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Github, ExternalLink } from 'lucide-react';
import BuildList from '@/components/BuildList';
import ScrollReveal from '@/components/ScrollReveal';

interface ProgettiPageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ProgettiPageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'progettiPage' });
    return buildMetadata({ locale, path: '/progetti', title: t('seoTitle'), description: t('seoDescription') });
}

export default async function ProgettiPage({ params }: ProgettiPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'progettiPage' });

    const build = t.raw('build') as { title: string; description: string }[];

    return (
        <div className="progetti-page">
            <section className="progetti-hero">
                <div className="container">
                    <h1 className="page-title">
                        {t('title')} <span className="text-accent">{t('titleAccent')}</span>
                    </h1>
                    <p className="page-subtitle">{t('subtitle')}</p>
                </div>
            </section>

            <section className="progetti-content">
                <div className="container">
                    <ScrollReveal className="coming-soon">
                        <div className="coming-soon-content">
                            <span className="badge">{t('comingSoonBadge')}</span>
                            <h3>{t('comingSoonTitle')}</h3>
                            <p>{t('comingSoonText')}</p>
                            <a
                                href="https://instagram.com/flow_digital.lab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                {t('comingSoonCta')}
                            </a>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="github-showcase">
                        <div className="github-card">
                            <div className="github-icon-wrapper">
                                <Github size={60} />
                            </div>
                            <h2>{t('githubHeading')}</h2>
                            <p>{t('githubText')}</p>
                            <a
                                href="https://github.com/flowdigitallab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary github-btn"
                            >
                                <Github size={20} />
                                {t('githubCta')}
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="what-we-build">
                        <h2 className="section-title">
                            {t('buildHeading')} <span className="text-accent">{t('buildHeadingAccent')}</span>
                        </h2>
                        <BuildList items={build} />
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
