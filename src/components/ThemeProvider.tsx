'use client';

import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemeProviderProps {
    children: React.ReactNode;
}

/**
 * Wraps next-themes so the toggle is entirely client-side (localStorage +
 * prefers-color-scheme as the initial default) with no server calls.
 * attribute="data-theme" matches the selector used in design-tokens.css.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <NextThemesProvider attribute="data-theme" defaultTheme="system" enableSystem>
            {children}
        </NextThemesProvider>
    );
}
