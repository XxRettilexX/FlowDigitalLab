import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getAllPosts } from '@/lib/blog';
import { SITE_URL } from '@/lib/seo';

const STATIC_PATHS = ['', '/servizi', '/progetti', '/blog', '/contatti', '/privacy', '/cookie', '/terms'];

function entry(path: string, lastModified?: string): MetadataRoute.Sitemap {
    const languages = Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]));
    return routing.locales.map((locale) => ({
        url: `${SITE_URL}/${locale}${path}`,
        ...(lastModified ? { lastModified } : {}),
        alternates: { languages },
    }));
}

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = STATIC_PATHS.flatMap((path) => entry(path));
    const slugsByLocale = routing.locales.map((l) => getAllPosts(l));
    const posts = routing.locales.flatMap((locale, i) =>
        slugsByLocale[i].map((post) => ({
            url: `${SITE_URL}/${locale}/blog/${post.slug}`,
            lastModified: post.date,
            alternates: {
                languages: Object.fromEntries(
                    routing.locales
                        .filter((l, j) => slugsByLocale[j].some((p) => p.slug === post.slug))
                        .map((l) => [l, `${SITE_URL}/${l}/blog/${post.slug}`]),
                ),
            },
        })),
    );
    return [...pages, ...posts];
}
