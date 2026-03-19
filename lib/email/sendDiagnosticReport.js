import "server-only";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function getEmailConfig() {
   return {
      adminEmail: process.env.DIAGNOSTIC_ADMIN_EMAIL,
      fromAddress: process.env.DIAGNOSTIC_EMAIL_FROM,
      apiKey: process.env.EMAIL_SERVICE_API_KEY || process.env.RESEND_API_KEY,
      smtpHost: process.env.SMTP_HOST,
      smtpPort: process.env.SMTP_PORT,
      smtpUser: process.env.SMTP_USER,
      smtpPass: process.env.SMTP_PASS,
   };
}

async function sendViaResend({ apiKey, fromAddress, to, subject, text, html }) {
   const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
         Authorization: `Bearer ${apiKey}`,
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         from: fromAddress,
         to,
         subject,
         text,
         html,
      }),
   });

   if (!response.ok) {
      const responseText = await response.text();
      throw new Error(`Email delivery failed: ${response.status} ${responseText}`);
   }
}

export async function sendDiagnosticReportEmails({ submission, report, text, html }) {
   const config = getEmailConfig();

   if (!config.adminEmail) {
      throw new Error("Missing DIAGNOSTIC_ADMIN_EMAIL environment variable.");
   }

   if (!config.fromAddress) {
      throw new Error("Missing DIAGNOSTIC_EMAIL_FROM environment variable.");
   }

   if (!config.apiKey) {
      if (config.smtpHost || config.smtpPort || config.smtpUser || config.smtpPass) {
         throw new Error(
            "SMTP credentials are present but no SMTP transport is configured. Add EMAIL_SERVICE_API_KEY or wire an SMTP transporter.",
         );
      }

      throw new Error("Missing EMAIL_SERVICE_API_KEY (or RESEND_API_KEY) environment variable.");
   }

   const recipients = [submission.email, config.adminEmail];
   const subject = `AI Diagnostic Report - ${report.scoreBand.label} (${report.totalScore}/${report.maxScore})`;

   const deliveryResults = await Promise.allSettled(
      recipients.map((recipient) =>
         sendViaResend({
            apiKey: config.apiKey,
            fromAddress: config.fromAddress,
            to: recipient,
            subject,
            text,
            html,
         }),
      ),
   );

   const deliveredTo = [];
   const failedRecipients = [];

   deliveryResults.forEach((result, index) => {
      const recipient = recipients[index];
      if (result.status === "fulfilled") {
         deliveredTo.push(recipient);
      } else {
         const reason = result.reason instanceof Error ? result.reason.message : String(result.reason);
         failedRecipients.push({ recipient, reason });
      }
   });

   if (deliveredTo.length === 0) {
      const failureMessage = failedRecipients.map((item) => `${item.recipient}: ${item.reason}`).join(" | ");
      throw new Error(`Email delivery failed for all recipients. ${failureMessage}`);
   }

   return {
      deliveredTo,
      failedRecipients,
   };
}
