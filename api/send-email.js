import { Resend } from 'resend';

const recipient = 'gvlapova3@gmail.com';

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character]);
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = request.body ?? {};

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !/^\S+@\S+\.\S+$/.test(email.trim()) ||
    !message.trim() ||
    name.length > 100 ||
    email.length > 254 ||
    message.length > 5000
  ) {
    return response.status(400).json({ error: 'Please provide valid contact details and a message.' });
  }

  const resend = new Resend(process.env.API_KEY);
  const senderDomain = process.env.RESEND_EMAIL_DOMAIN;
  const from = senderDomain ? `Portfolio contact form <contact@${senderDomain}>` : 'Portfolio contact form <onboarding@resend.dev>';
  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  const { data, error } = await resend.emails.send(
    {
      from,
      to: [recipient],
      replyTo: cleanEmail,
      subject: `Portfolio contact from ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
      html: `<h2>New portfolio contact</h2><p><strong>Name:</strong> ${escapeHtml(cleanName)}</p><p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p><p><strong>Message:</strong></p><p>${escapeHtml(cleanMessage).replace(/\n/g, '<br />')}</p>`,
    },
    { idempotencyKey: `portfolio-contact/${cleanEmail}/${Date.now()}` },
  );

  if (error) {
    console.error('[v0] Resend email failed:', error.message);
    return response.status(502).json({ error: 'Unable to send your message right now.' });
  }

  return response.status(200).json({ id: data?.id });
}
