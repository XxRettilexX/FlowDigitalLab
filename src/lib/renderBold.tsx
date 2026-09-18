import React from 'react';

/**
 * Renders a string with **bold** markers as JSX with <strong> spans.
 * Used for legal-page copy stored as plain strings in the i18n JSON files.
 */
export function renderBold(text: string): React.ReactNode {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
    });
}
