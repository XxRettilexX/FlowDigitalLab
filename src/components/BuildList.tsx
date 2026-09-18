'use client';

import React from 'react';
import { Code2, Rocket, Github } from 'lucide-react';
import { motion } from 'motion/react';

const ICONS = [
    <Code2 size={22} key="code2" />,
    <Rocket size={22} key="rocket" />,
    <Github size={22} key="github" />,
];

interface BuildListProps {
    items: { title: string; description: string }[];
}

const BuildList: React.FC<BuildListProps> = ({ items }) => {
    return (
        <div className="build-grid">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    className="build-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
                >
                    <div className="build-icon">{ICONS[index % ICONS.length]}</div>
                    <div className="build-card-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default BuildList;
