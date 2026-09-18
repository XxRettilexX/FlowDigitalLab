'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LanguageSwitcher: React.FC = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations('language');

    return (
        <div className="lang-switcher" role="group" aria-label={t('switchLabel')}>
            {routing.locales.map((loc) => (
                <button
                    key={loc}
                    type="button"
                    className={`lang-switcher-option ${loc === locale ? 'active' : ''}`}
                    onClick={() => router.replace(pathname, { locale: loc })}
                    aria-current={loc === locale ? 'true' : undefined}
                    aria-label={t(loc)}
                >
                    {loc}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
