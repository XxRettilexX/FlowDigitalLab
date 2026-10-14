import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft } from 'lucide-react';
import { buildMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import { BLUR_DATA_URL } from '@/lib/image';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

interface BlogPostPageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams({ params }: { params: { locale: string } }) {
    return getAllSlugs(params.locale).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { locale, slug } = await params;
    const post = getPostBySlug(locale, slug);
    if (!post) return {};
    return buildMetadata({
        locale,
        path: `/blog/${slug}`,
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        image: post.cover,
    });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { locale, slug } = await params;

    if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
        notFound();
    }

    setRequestLocale(locale);
    const post = getPostBySlug(locale, slug);
    if (!post) notFound();

    const t = await getTranslations({ locale, namespace: 'blog' });

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        image: `${SITE_URL}${post.cover}`,
        inLanguage: locale,
        mainEntityOfPage: `${SITE_URL}/${locale}/blog/${slug}`,
        author: { '@type': 'Organization', name: SITE_NAME },
        publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.svg` } },
    };

    return (
        <div className="blog-article">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <section className="blog-article-hero">
                <div className="container">
                    <Link href="/blog" className="blog-back-link">
                        <ArrowLeft size={16} />
                        {t('backToBlog')}
                    </Link>
                    <h1 className="page-title">{post.title}</h1>
                    <div className="blog-article-meta">
                        <span>{t('publishedOn')} {new Date(post.date).toLocaleDateString(locale)}</span>
                        <span>&middot;</span>
                        <span>{post.minutes} {t('minRead')}</span>
                    </div>
                    <div className="blog-article-tags">
                        {post.tags.map((tag) => (
                            <span key={tag} className="blog-article-tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="blog-article-cover">
                <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                />
            </div>

            <div className="container">
                <article className="blog-article-body">
                    <MDXRemote source={post.content} />
                </article>
            </div>
        </div>
    );
}
