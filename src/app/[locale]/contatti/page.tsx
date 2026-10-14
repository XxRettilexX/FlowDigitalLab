import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ScrollReveal from '@/components/ScrollReveal';

interface ContattiPageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContattiPageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'contattiPage' });
    return buildMetadata({ locale, path: '/contatti', title: t('seoTitle'), description: t('seoDescription') });
}

export default async function ContattiPage({ params }: ContattiPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'contattiPage' });
    const tCommon = await getTranslations({ locale, namespace: 'common' });
    const hours = t.raw('hours') as string[];

    const contactMethods = [
        {
            icon: <Mail size={24} />,
            title: t('methods.email'),
            value: 'info@flowdigitallab.it',
            href: 'mailto:info@flowdigitallab.it',
        },
        {
            icon: <MessageCircle size={24} />,
            title: t('methods.whatsapp'),
            value: 'WhatsApp',
            href: `https://wa.me/393273315926?text=${encodeURIComponent(tCommon('whatsappMessage'))}`,
            external: true,
        },
        {
            icon: <MapPin size={24} />,
            title: t('methods.location'),
            value: t('methods.locationValue'),
            href: null,
        },
    ];

    return (
        <div className="contatti-page">
            <section className="contatti-hero">
                <div className="container">
                    <h1 className="page-title">
                        <span className="text-accent">{t('title')}</span>
                    </h1>
                    <p className="page-subtitle">{t('subtitle')}</p>
                </div>
            </section>

            <section className="contatti-content">
                <div className="container">
                    <div className="contatti-grid">
                        <ScrollReveal className="contact-info">
                            <h2 className="info-title">{t('infoTitle')}</h2>
                            <p className="info-description">{t('infoDescription')}</p>

                            <div className="contact-methods">
                                {contactMethods.map((method, index) => (
                                    <div className="contact-method" key={index}>
                                        <div className="method-icon">{method.icon}</div>
                                        <div className="method-content">
                                            <h3>{method.title}</h3>
                                            {method.href ? (
                                                <a
                                                    href={method.href}
                                                    target={method.external ? '_blank' : undefined}
                                                    rel={method.external ? 'noopener noreferrer' : undefined}
                                                >
                                                    {method.value}
                                                </a>
                                            ) : (
                                                <p>{method.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="business-hours">
                                <div className="hours-header">
                                    <Clock size={20} />
                                    <h3>{t('hoursTitle')}</h3>
                                </div>
                                {hours.map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="contact-form-column">
                            <ContactForm />
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
