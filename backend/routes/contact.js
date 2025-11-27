import express from 'express';
import Contact from '../models/Contact.js';
import { Resend } from 'resend';

const router = express.Router();

// Contact form submission
router.post('/', async (req, res) => {
  try {
    // Initialize Resend client here (lazy initialization after env vars are loaded)
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    // Save to database
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();
    console.log('Contact saved to database');

    // Email to admin (you will receive this at kiruthikbairavan66@gmail.com)
    const adminEmail = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact: ${subject || 'New Message'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">📬 New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p style="margin: 10px 0;"><strong>📱 Phone:</strong> ${phone}</p>` : ''}
            <p style="margin: 10px 0;"><strong>📌 Subject:</strong> ${subject || 'No subject'}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>💬 Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-left: 4px solid #ff0055; margin: 10px 0;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 20px;">✉️ This message was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    if (adminEmail.error) {
      console.error('Error sending admin email:', adminEmail.error);
      throw new Error('Failed to send notification email');
    }

    console.log('✅ Admin notification email sent successfully');
    console.log('📧 Email sent to:', process.env.CONTACT_EMAIL);

    // Note: User thank-you email is disabled on Resend free tier
    // Resend free tier only allows sending to your verified email address
    // To enable user thank-you emails, verify a domain at resend.com/domains

    console.log('✅ Contact form processed successfully');
    res.status(201).json({
      message: 'Thank you for your message! I will get back to you soon.',
      success: true
    });

  } catch (err) {
    console.error('Contact form error:', err.message);

    res.status(500).json({
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

export default router;