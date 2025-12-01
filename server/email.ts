import sgMail from "@sendgrid/mail";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// 1. Where YOU want to receive alerts
const OWNER_EMAIL = "muhammadabdulwadudayinde@gmail.com";

// 2. The EXACT settings from your SendGrid Dashboard
const VERIFIED_SENDER = "muhammadabdulwadudalata@gmail.com"; // From Address
const REPLY_TO_EMAIL = "muhammadabdulwadud28@gmail.com"; // Reply Address

export async function sendContactEmails(data: ContactFormData): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;

  if (!apiKey) {
    throw new Error("SENDGRID_API_KEY is missing in .env file");
  }

  sgMail.setApiKey(apiKey);

  console.log(
    "SendGrid client ready. From:",
    VERIFIED_SENDER,
    "ReplyTo:",
    REPLY_TO_EMAIL
  );

  const notificationToOwner = {
    to: OWNER_EMAIL,
    from: {
      email: VERIFIED_SENDER,
      name: "Devtec Portfolio", // Adding a name sometimes helps
    },
    replyTo: REPLY_TO_EMAIL, // <--- ADDED THIS TO MATCH YOUR DASHBOARD
    subject: `New Contact Form Submission: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>New Message from ${data.name}</h2>
        <p><strong>Visitor Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <hr/>
        <p>${data.message}</p>
      </div>
    `,
  };

  const confirmationToSender = {
    to: data.email,
    from: {
      email: VERIFIED_SENDER,
      name: "Devtec Portfolio",
    },
    replyTo: REPLY_TO_EMAIL, // <--- ADDED THIS TO MATCH YOUR DASHBOARD
    subject: `Thank you for contacting Devtec!`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Hi ${data.name},</h2>
        <p>I received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br/><strong>Muhammad Abdulwadud (Devtec)</strong></p>
      </div>
    `,
  };

  try {
    console.log("Sending notification to owner...");
    await sgMail.send(notificationToOwner);
    console.log("✓ Notification sent");

    console.log("Sending confirmation to sender...");
    await sgMail.send(confirmationToSender);
    console.log("✓ Confirmation sent");
  } catch (error: any) {
    console.error("Email sending error:", error.response?.body || error);
    throw new Error("Failed to send emails via SendGrid");
  }
}
