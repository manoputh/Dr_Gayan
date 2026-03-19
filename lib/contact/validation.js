import "server-only";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class ContactValidationError extends Error {}

function normalizeString(value) {
   return typeof value === "string" ? value.trim() : "";
}

export function validateContactSubmission(payload) {
   if (!payload || typeof payload !== "object") {
      throw new ContactValidationError("Invalid request payload.");
   }

   const submission = {
      fullName: normalizeString(payload.fullName),
      workEmail: normalizeString(payload.workEmail).toLowerCase(),
      companyName: normalizeString(payload.companyName),
      companySize: normalizeString(payload.companySize),
      role: normalizeString(payload.role),
      aiSystemsInProduction: normalizeString(payload.aiSystemsInProduction),
      situation: normalizeString(payload.situation),
      message: normalizeString(payload.message),
      submittedAt: new Date().toISOString(),
   };

   if (!submission.fullName) {
      throw new ContactValidationError("Full name is required.");
   }

   if (!EMAIL_REGEX.test(submission.workEmail)) {
      throw new ContactValidationError("A valid work email is required.");
   }

   if (!submission.companyName) {
      throw new ContactValidationError("Company name is required.");
   }

   if (!submission.companySize) {
      throw new ContactValidationError("Company size is required.");
   }

   if (!submission.role) {
      throw new ContactValidationError("Role is required.");
   }

   if (!submission.aiSystemsInProduction) {
      throw new ContactValidationError("Please indicate AI systems in production.");
   }

   if (!submission.situation) {
      throw new ContactValidationError("Please select your current situation.");
   }

   if (!submission.message) {
      throw new ContactValidationError("Message is required.");
   }

   return submission;
}
