import { NextResponse } from "next/server";

import {
   DiagnosticValidationError,
   validateDiagnosticSubmission,
   generateDiagnosticReport,
   buildDiagnosticReportText,
   buildDiagnosticReportHtml,
} from "@/lib/diagnostic/report";
import { sendDiagnosticReportEmails } from "@/lib/email/sendDiagnosticReport";

export async function POST(request) {
   try {
      const payload = await request.json();
      const submission = validateDiagnosticSubmission(payload);
      const report = generateDiagnosticReport(submission);

      const text = buildDiagnosticReportText(submission, report);
      const html = buildDiagnosticReportHtml(submission, report);

      const delivery = await sendDiagnosticReportEmails({
         submission,
         report,
         text,
         html,
      });

      const userDeliveryFailure = (delivery.failedRecipients || []).find(
         (entry) => entry.recipient === submission.email,
      );

      if (userDeliveryFailure) {
         return NextResponse.json(
            {
               ok: false,
               email: submission.email,
               deliveredTo: delivery.deliveredTo,
               message:
                  "Submission received, but we could not deliver the report to the submitted email address. Please verify the email and sender-domain settings, then retry.",
            },
            { status: 502 },
         );
      }

      return NextResponse.json({
         ok: true,
         email: submission.email,
         deliveredTo: delivery.deliveredTo,
         message: "Your results have been sent to your email address and our team.",
      });
   } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown server error";
      console.error("Diagnostic submit failed:", errorMessage);

      if (error instanceof DiagnosticValidationError) {
         return NextResponse.json(
            {
               ok: false,
               message: error.message,
            },
            { status: 400 },
         );
      }

      return NextResponse.json(
         {
            ok: false,
            message:
               process.env.NODE_ENV === "production"
                  ? "Unable to submit diagnostic at this time."
                  : `Unable to submit diagnostic: ${errorMessage}`,
         },
         { status: 500 },
      );
   }
}
