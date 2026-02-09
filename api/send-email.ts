import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Handle CORS
const allowCors = (fn: any) => async (req: VercelRequest, res: VercelResponse) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*'); // Allow any origin for now (dev) or specific for prod
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    return await fn(req, res);
};

const handler = async (req: VercelRequest, res: VercelResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Configure Nodemailer Transporter using environment variables
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'authsmtp.securemail.pro', // Default Register.it SMTP
        port: Number(process.env.SMTP_PORT) || 465, // Usually 465 for SSL or 587 for TLS
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        // 1. Send email to YOU (Admin)
        await transporter.sendMail({
            from: `"Flow Digital Lab Website" <${process.env.SMTP_USER}>`, // Sender MUST be the authenticated user
            to: process.env.ADMIN_EMAIL || 'vitostri89@gmail.com', // Your personal email
            subject: `Nuovo Messaggio da ${name} - Flow Digital Lab`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #64ffda;">Nuovo Contatto dal Sito Web</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <h3>Messaggio:</h3>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
            replyTo: email, // So you can hit "Reply" to answer the client
        });

        // 2. Send confirmation email to CLIENT
        await transporter.sendMail({
            from: `"Flow Digital Lab" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Grazie per averci contattato! - Flow Digital Lab',
            html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #0a192f; color: #e6f1ff; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #64ffda; margin: 0;">Flow Digital Lab</h1>
            </div>
            
            <h2 style="color: #fff;">Ciao ${name},</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #8892b0;">
                Grazie per averci scritto! Abbiamo ricevuto il tuo messaggio e siamo entusiasti di conoscere il tuo progetto.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #8892b0;">
                Il nostro team analizzerà la tua richiesta e ti risponderà entro <strong>24-48 ore lavorative</strong>.
            </p>
            
            <div style="background-color: rgba(100, 255, 218, 0.1); border-left: 4px solid #64ffda; padding: 15px; margin: 30px 0;">
                <p style="margin: 0; font-style: italic; color: #e6f1ff;">
                    "Trasformiamo la tua visione in un Flusso Digitale."
                </p>
            </div>
            
            <p style="font-size: 14px; color: #8892b0; margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
                © ${new Date().getFullYear()} Flow Digital Lab. Tutti i diritti riservati.<br>
                <a href="https://flowdigitallab.it" style="color: #64ffda; text-decoration: none;">www.flowdigitallab.it</a>
            </p>
        </div>
      `,
        });

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email', error: error.message });
    }
};

export default allowCors(handler);
