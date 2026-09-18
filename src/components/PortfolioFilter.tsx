'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface Project {
    title: string;
    category: string;
    description: string;
}

interface PortfolioFilterProps {
    projects: Project[];
    filters: Record<string, string>;
}

const PortfolioFilter: React.FC<PortfolioFilterProps> = ({ projects, filters }) => {
    const [active, setActive] = useState('all');
    const shouldReduceMotion = useReducedMotion();
    const categories = Object.keys(filters).filter((key) => key !== 'all');
    const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

    return (
        <div>
            <div className="portfolio-filters" role="group" aria-label="Filtra per categoria">
                <button
                    type="button"
                    className={`filter-btn ${active === 'all' ? 'active' : ''}`}
                    onClick={() => setActive('all')}
                    aria-pressed={active === 'all'}
                >
                    {filters.all}
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        type="button"
                        className={`filter-btn ${active === cat ? 'active' : ''}`}
                        onClick={() => setActive(cat)}
                        aria-pressed={active === cat}
                    >
                        {filters[cat]}
                    </button>
                ))}
            </div>

            <motion.div className="portfolio-grid" layout>
                <AnimatePresence mode="popLayout">
                    {filtered.map((project) => (
                        <motion.article
                            key={project.title}
                            layoutId={project.title}
                            layout
                            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="portfolio-card"
                        >
                            <span className="portfolio-card-category">
                                {filters[project.category] ?? project.category}
                            </span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default PortfolioFilter;
