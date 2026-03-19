import { NextResponse } from "next/server";

import { ContactValidationError, validateContactSubmission } from "@/lib/contact/validation";
import { sendContactInquiryEmail } from "@/lib/email/sendContactInquiry";

export async function POST(request) {
   try {
      const payload = await request.json();
      const submission = validateContactSubmission(payload);

      await sendContactInquiryEmail(submission);

      return NextResponse.json({
         ok: true,
         message: "Your message has been received. We will follow up within 24 hours.",
      });
   } catch (error) {
      if (error instanceof ContactValidationError) {
         return NextResponse.json(
            {
               ok: false,
               message: error.message,
            },
            { status: 400 },
         );
      }

      const errorMessage = error instanceof Error ? error.message : "Unknown server error";
      console.error("Contact submit failed:", errorMessage);

      return NextResponse.json(
         {
            ok: false,
            message:
               process.env.NODE_ENV === "production"
                  ? "Unable to submit inquiry at this time."
                  : `Unable to submit inquiry: ${errorMessage}`,
         },
         { status: 500 },
      );
   }
}
