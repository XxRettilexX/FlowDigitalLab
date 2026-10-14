import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';

export const SITE_URL = 'https://flowdigitallab.it';
export const SITE_NAME = 'Flow Digital Lab';

const OG_LOCALE: Record<string, string> = { it: 'it_IT', en: 'en_US' };

interface BuildMetadataInput {
    locale: string;
    /** Path without locale prefix, e.g. "/servizi". Use "" for the home page. */
    path: string;
    title: string;
    description?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    image?: string;
}

/** Canonical, hreflang, OpenGraph and Twitter metadata for one localized page. */
export function buildMetadata({
    locale,
    path,
    title,
    description,
    type = 'website',
    publishedTime,
    image,
}: BuildMetadataInput): Metadata {
    const languages: Record<string, string> = {};
    for (const l of routing.locales) languages[l] = `/${l}${path}`;
    languages['x-default'] = `/${routing.defaultLocale}${path}`;

    return {
        title,
        description,
        alternates: { canonical: `/${locale}${path}`, languages },
        openGraph: {
            title,
            description,
            url: `/${locale}${path}`,
            siteName: SITE_NAME,
            locale: OG_LOCALE[locale],
            type,
            ...(publishedTime ? { publishedTime } : {}),
            ...(image ? { images: [image] } : {}),
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            ...(image ? { images: [image] } : {}),
        },
    };
}
