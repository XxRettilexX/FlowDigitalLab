import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Fraunces, IBM_Plex_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import { routing, type Locale } from '@/i18n/routing';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import '../globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const plex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex', display: 'swap' });

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
    metadataBase: new URL('https://flowdigitallab.it'),
    title: {
        default: 'Flow Digital Lab',
        template: '%s | Flow Digital Lab',
    },
};

const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: 'info@flowdigitallab.it',
    telephone: '+393273315926',
    areaServed: 'IT',
    knowsAbout: ['Web Design', 'Branding', 'Digital Strategy'],
    sameAs: ['https://instagram.com/flow_digital.lab'],
};

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale} className={`${fraunces.variable} ${plex.variable}`} suppressHydrationWarning>
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                <ThemeProvider>
                    <NextIntlClientProvider messages={messages}>
                        <ScrollToTop />
                        <div className="app">
                            <Navbar />
                            <main className="main-content">{children}</main>
                            <Footer />
                            <WhatsAppButton />
                        </div>
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
