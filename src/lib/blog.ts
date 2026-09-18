import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface PostFrontmatter {
    title: string;
    date: string;
    excerpt: string;
    cover: string;
    tags: string[];
}

export interface PostSummary extends PostFrontmatter {
    slug: string;
    minutes: number;
}

export interface Post extends PostSummary {
    content: string;
}

function localeDir(locale: string): string {
    return path.join(BLOG_DIR, locale);
}

export function getAllSlugs(locale: string): string[] {
    const dir = localeDir(locale);
    if (!fs.existsSync(dir)) return [];
    return fs
        .readdirSync(dir)
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace(/\.mdx$/, ''));
}

export function getAllPosts(locale: string): PostSummary[] {
    const slugs = getAllSlugs(locale);
    const posts = slugs.map((slug) => {
        const raw = fs.readFileSync(path.join(localeDir(locale), `${slug}.mdx`), 'utf8');
        const { data, content } = matter(raw);
        const frontmatter = data as PostFrontmatter;
        return {
            slug,
            ...frontmatter,
            minutes: Math.max(1, Math.round(readingTime(content).minutes)),
        };
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(locale: string, slug: string): Post | null {
    const filePath = path.join(localeDir(locale), `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(raw);
    const frontmatter = data as PostFrontmatter;

    return {
        slug,
        ...frontmatter,
        minutes: Math.max(1, Math.round(readingTime(content).minutes)),
        content,
    };
}
