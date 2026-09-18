'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface WhatsAppButtonProps { }

const WHATSAPP_NUMBER = '393273315926';

const WhatsAppButton: React.FC<WhatsAppButtonProps> = () => {
    const t = useTranslations('common');
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('whatsappMessage'))}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-fab"
            aria-label={t('whatsappCta')}
        >
            <MessageCircle size={26} strokeWidth={2} aria-hidden="true" />
        </a>
    );
};

export default WhatsAppButton;
