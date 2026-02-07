import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';



export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message, service } = request.body;

    if (!name || !email || !message) {
        return response.status(400).json({ error: 'Missing required fields' });
    }

    // Use environment variables for sensitive info
    // These should be set in Vercel project settings
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"ABUAC Website" <${process.env.EMAIL_USER}>`,
            to: 'mabuarab@abuac.com',
            subject: `New Inquiry from ${name} - ABUAC Website`,
            text: `
        Name: ${name}
        Email: ${email}
        Service: ${service || 'Not specified'}
        Message: ${message}
      `,
            html: `
        <h3>New Project Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return response.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return response.status(500).json({ error: 'Failed to send email' });
    }
}
