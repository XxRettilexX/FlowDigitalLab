'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { PostSummary } from '@/lib/blog';
import { BLUR_DATA_URL } from '@/lib/image';
import { Link } from '@/i18n/navigation';

interface BlogGridProps {
    posts: PostSummary[];
    minReadLabel: string;
}

const container: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.04 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const BlogGrid: React.FC<BlogGridProps> = ({ posts, minReadLabel }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            className="blog-grid"
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={shouldReduceMotion ? undefined : container}
        >
            {posts.map((post) => (
                <motion.article
                    key={post.slug}
                    className="blog-card"
                    variants={shouldReduceMotion ? undefined : item}
                >
                    <Link href={`/blog/${post.slug}`}>
                        <div className="blog-card-cover">
                            <Image
                                src={post.cover}
                                alt={post.title}
                                fill
                                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                                placeholder="blur"
                                blurDataURL={BLUR_DATA_URL}
                            />
                        </div>
                        <div className="blog-card-body">
                            {post.tags[0] && <span className="blog-card-tag">{post.tags[0]}</span>}
                            <h3>{post.title}</h3>
                            <p className="blog-card-excerpt">{post.excerpt}</p>
                            <div className="blog-card-meta">
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                <span>&middot;</span>
                                <span>{post.minutes} {minReadLabel}</span>
                            </div>
                        </div>
                    </Link>
                </motion.article>
            ))}
        </motion.div>
    );
};

export default BlogGrid;
