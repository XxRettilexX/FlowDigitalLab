'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/navigation';

const ContactForm: React.FC = () => {
    const t = useTranslations('contattiPage.form');
    const shouldReduceMotion = useReducedMotion();
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const schema = z.object({
        name: z.string().min(2, t('validation.nameMin')),
        email: z.string().email(t('validation.emailInvalid')),
        message: z.string().min(10, t('validation.messageMin')),
        privacy: z.boolean().refine((value) => value === true, {
            message: t('validation.privacyRequired'),
        }),
    });

    type FormValues = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: { name: '', email: '', message: '', privacy: false },
    });

    const onSubmit = async (data: FormValues) => {
        setStatus('idle');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-group">
                    <label htmlFor="name">{t('nameLabel')}</label>
                    <input
                        id="name"
                        type="text"
                        placeholder={t('namePlaceholder')}
                        className={errors.name ? 'has-error' : ''}
                        aria-invalid={!!errors.name}
                        {...register('name')}
                    />
                    {errors.name && <span className="form-error" role="alert">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">{t('emailLabel')}</label>
                    <input
                        id="email"
                        type="email"
                        placeholder={t('emailPlaceholder')}
                        className={errors.email ? 'has-error' : ''}
                        aria-invalid={!!errors.email}
                        {...register('email')}
                    />
                    {errors.email && <span className="form-error" role="alert">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">{t('messageLabel')}</label>
                    <textarea
                        id="message"
                        rows={6}
                        placeholder={t('messagePlaceholder')}
                        className={errors.message ? 'has-error' : ''}
                        aria-invalid={!!errors.message}
                        {...register('message')}
                    />
                    {errors.message && <span className="form-error" role="alert">{errors.message.message}</span>}
                </div>

                <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                        <input type="checkbox" {...register('privacy')} />
                        <span>
                            {t('privacyLabelPrefix')} <Link href="/privacy" className="link-highlight">{t('privacyLabelLink')}</Link>
                        </span>
                    </label>
                    {errors.privacy && <span className="form-error" role="alert">{errors.privacy.message}</span>}
                </div>

                <div className="form-feedback" role="alert" aria-live="polite">
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                className="success-message"
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <CheckCircle2 size={20} />
                                <span>{t('success')}</span>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                className="error-message"
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {t('error')}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            {t('submitting')}
                        </>
                    ) : (
                        <>
                            <Send size={20} />
                            {t('submit')}
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
