import sgMail from '@sendgrid/mail';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=sendgrid',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key || !connectionSettings.settings.from_email)) {
    throw new Error('SendGrid not connected');
  }
  return { apiKey: connectionSettings.settings.api_key, email: connectionSettings.settings.from_email };
}

export async function getUncachableSendGridClient() {
  const { apiKey, email } = await getCredentials();
  sgMail.setApiKey(apiKey);
  return {
    client: sgMail,
    fromEmail: email
  };
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const OWNER_EMAIL = "muhammadabdulwadudayinde@gmail.com";

export async function sendContactEmails(data: ContactFormData): Promise<void> {
  const { client, fromEmail } = await getUncachableSendGridClient();

  const notificationToOwner = {
    to: OWNER_EMAIL,
    from: fromEmail,
    subject: `New Contact Form Submission: ${data.subject}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Message</h1>
        </div>
        <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
          <p style="margin: 0 0 20px 0; color: #475569;"><strong>From:</strong> ${data.name}</p>
          <p style="margin: 0 0 20px 0; color: #475569;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #0ea5e9;">${data.email}</a></p>
          <p style="margin: 0 0 20px 0; color: #475569;"><strong>Subject:</strong> ${data.subject}</p>
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 10px 0; color: #475569; font-weight: bold;">Message:</p>
            <p style="margin: 0; color: #1e293b; line-height: 1.6;">${data.message}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #94a3b8; font-size: 12px;">This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      </div>
    `,
  };

  const confirmationToSender = {
    to: data.email,
    from: fromEmail,
    subject: `Thank you for contacting Devtec!`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${data.name}!</h1>
        </div>
        <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
          <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
            I've received your message and I truly appreciate you taking the time to reach out.
          </p>
          <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
            I'll review your inquiry and get back to you <strong>within 24 hours</strong>.
          </p>
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0;">
            <p style="margin: 0 0 10px 0; color: #475569; font-weight: bold;">Your Message:</p>
            <p style="margin: 0 0 10px 0; color: #64748b;"><strong>Subject:</strong> ${data.subject}</p>
            <p style="margin: 0; color: #64748b; line-height: 1.6;">${data.message}</p>
          </div>
          <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
            In the meantime, feel free to check out my work on <a href="https://github.com/Devtec-3" style="color: #0ea5e9;">GitHub</a> or connect with me on <a href="https://www.linkedin.com/in/devtec3" style="color: #0ea5e9;">LinkedIn</a>.
          </p>
          <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin: 0;">
            Best regards,<br/>
            <strong style="color: #0ea5e9;">Muhammad Abdulwadud Ayinde (Devtec)</strong><br/>
            <span style="color: #64748b;">Frontend Developer</span>
          </p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #94a3b8; font-size: 12px;">This is an automated confirmation email. Please do not reply directly to this email.</p>
          </div>
        </div>
      </div>
    `,
  };

  await Promise.all([
    client.send(notificationToOwner),
    client.send(confirmationToSender)
  ]);
}