import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

/**
 * Vercel Serverless Function (app/api/contact/route.ts). No dedicated
 * server: this only validates input and forwards it as an email via
 * Resend (https://resend.com — free tier). Deploys as-is on Vercel.
 */

const contactSchema = z.object({
    name: z.string().trim().min(2).max(120),
    email: z.string().trim().email(),
    message: z.string().trim().min(10).max(5000),
    privacy: z.literal(true),
});

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { message: 'Invalid input', issues: parsed.error.flatten() },
            { status: 400 },
        );
    }

    const { name, email, message } = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error('RESEND_API_KEY is not configured');
        return NextResponse.json({ message: 'Email service is not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const adminEmail = process.env.CONTACT_TO_EMAIL || 'vitostri89@gmail.com';
    const fromAddress = process.env.CONTACT_FROM_EMAIL || 'Flow Digital Lab <onboarding@resend.dev>';

    try {
        await resend.emails.send({
            from: fromAddress,
            to: adminEmail,
            replyTo: email,
            subject: `Nuovo messaggio da ${name} - Flow Digital Lab`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #0B1220;">
          <h2 style="color: #2A5CFF;">Nuovo contatto dal sito web</h2>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <h3>Messaggio:</h3>
          <p style="white-space: pre-wrap; background: #F7F8FA; padding: 15px; border-radius: 6px;">${escapeHtml(message)}</p>
        </div>
      `,
        });

        await resend.emails.send({
            from: fromAddress,
            to: email,
            subject: 'Grazie per averci contattato! - Flow Digital Lab',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #0B1220; color: #F3F5F8; border-radius: 10px;">
          <h1 style="color: #7C9EFF; margin: 0 0 24px;">Flow Digital Lab</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #A7AFBE;">
            Ciao ${escapeHtml(name)}, grazie per averci scritto! Il nostro team ti risponderà entro 24-48 ore lavorative.
          </p>
        </div>
      `,
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email via Resend:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
