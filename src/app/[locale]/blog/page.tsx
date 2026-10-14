import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getAllPosts } from '@/lib/blog';
import BlogGrid from '@/components/BlogGrid';

interface BlogPageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'blog' });
    return buildMetadata({ locale, path: '/blog', title: t('seoTitle'), description: t('seoDescription') });
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'blog' });
    const posts = getAllPosts(locale);

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <div className="container">
                    <h1 className="page-title">
                        {t('title')} <span className="text-accent">{t('titleAccent')}</span>
                    </h1>
                    <p className="page-subtitle">{t('subtitle')}</p>
                </div>
            </section>

            <section className="blog-section">
                <div className="container">
                    {posts.length > 0 ? (
                        <BlogGrid posts={posts} minReadLabel={t('minRead')} />
                    ) : (
                        <p className="blog-empty">{t('emptyState')}</p>
                    )}
                </div>
            </section>
        </div>
    );
}
