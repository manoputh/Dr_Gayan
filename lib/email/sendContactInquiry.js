import "server-only";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function getContactEmailConfig() {
   return {
      adminEmail: process.env.CONTACT_ADMIN_EMAIL || process.env.DIAGNOSTIC_ADMIN_EMAIL,
      fromAddress: process.env.CONTACT_EMAIL_FROM || process.env.DIAGNOSTIC_EMAIL_FROM,
      apiKey: process.env.EMAIL_SERVICE_API_KEY || process.env.RESEND_API_KEY,
   };
}

function buildContactEmailText(submission) {
   return [
      "New Contact Inquiry",
      "",
      `Submitted: ${submission.submittedAt}`,
      `Name: ${submission.fullName}`,
      `Work Email: ${submission.workEmail}`,
      `Company: ${submission.companyName}`,
      `Company Size: ${submission.companySize}`,
      `Role: ${submission.role}`,
      `AI Systems in Production: ${submission.aiSystemsInProduction}`,
      `Situation: ${submission.situation}`,
      "",
      "Message",
      submission.message,
   ].join("\n");
}

function buildContactEmailHtml(submission) {
   return `
      <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
         <h1>New Contact Inquiry</h1>
         <p><strong>Submitted:</strong> ${submission.submittedAt}</p>
         <p><strong>Name:</strong> ${submission.fullName}</p>
         <p><strong>Work Email:</strong> ${submission.workEmail}</p>
         <p><strong>Company:</strong> ${submission.companyName}</p>
         <p><strong>Company Size:</strong> ${submission.companySize}</p>
         <p><strong>Role:</strong> ${submission.role}</p>
         <p><strong>AI Systems in Production:</strong> ${submission.aiSystemsInProduction}</p>
         <p><strong>Situation:</strong> ${submission.situation}</p>
         <h2>Message</h2>
         <p>${submission.message.replace(/\n/g, "<br />")}</p>
      </div>
   `;
}

export async function sendContactInquiryEmail(submission) {
   const config = getContactEmailConfig();

   if (!config.adminEmail) {
      throw new Error("Missing CONTACT_ADMIN_EMAIL (or DIAGNOSTIC_ADMIN_EMAIL) environment variable.");
   }

   if (!config.fromAddress) {
      throw new Error("Missing CONTACT_EMAIL_FROM (or DIAGNOSTIC_EMAIL_FROM) environment variable.");
   }

   if (!config.apiKey) {
      throw new Error("Missing EMAIL_SERVICE_API_KEY (or RESEND_API_KEY) environment variable.");
   }

   const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
         Authorization: `Bearer ${config.apiKey}`,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         from: config.fromAddress,
         to: [config.adminEmail],
         subject: `Contact Inquiry: ${submission.companyName} | ${submission.fullName}`,
         text: buildContactEmailText(submission),
         html: buildContactEmailHtml(submission),
         reply_to: submission.workEmail,
      }),
   });

   if (!response.ok) {
      const responseText = await response.text();
      throw new Error(`Email delivery failed: ${response.status} ${responseText}`);
   }
}
