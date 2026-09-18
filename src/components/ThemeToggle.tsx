'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';

const ThemeToggle: React.FC = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const t = useTranslations('theme');

    // Avoid a hydration mismatch: resolvedTheme is unknown on the server.
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <span className="theme-toggle" aria-hidden="true" style={{ visibility: 'hidden' }} />;
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={t('toggleLabel')}
            title={isDark ? t('light') : t('dark')}
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
};

export default ThemeToggle;
