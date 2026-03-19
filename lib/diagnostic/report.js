import "server-only";

import { DIAGNOSTIC_DIMENSIONS, DIAGNOSTIC_QUESTIONS } from "@/lib/diagnostic/questions";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const OPTION_SCORE = {
   a: 1,
   b: 2,
   c: 3,
   d: 5,
};

const SCORE_BANDS = [
   {
      max: 25,
      label: "Critical Exposure",
      summary: "Significant gaps across core controls. Prioritize immediate scoping and remediation planning.",
      recommendation: "Book a full AI Audit scoping call now.",
   },
   {
      max: 40,
      label: "High Exposure",
      summary: "Material gaps are likely across multiple dimensions and need focused intervention.",
      recommendation: "Start with targeted AI Audit workstreams within 30 days.",
   },
   {
      max: 58,
      label: "Moderate Exposure",
      summary: "Foundation exists, but important risk and documentation controls require strengthening.",
      recommendation: "Run a focused gap-closure plan with defined owners.",
   },
   {
      max: 75,
      label: "Lower Exposure",
      summary: "Your posture appears stronger, but independent validation is still valuable for assurance.",
      recommendation: "Use AI Audit as validation and continuous control check.",
   },
];

export class DiagnosticValidationError extends Error {}

function normalizeOptionalString(value) {
   if (typeof value !== "string") return "";
   return value.trim();
}

function getDimensionLookup() {
   return DIAGNOSTIC_DIMENSIONS.reduce((acc, dimension) => {
      acc[dimension.id] = dimension.label;
      return acc;
   }, {});
}

function getScoreBand(totalScore) {
   return SCORE_BANDS.find((band) => totalScore <= band.max) || SCORE_BANDS[SCORE_BANDS.length - 1];
}

export function validateDiagnosticSubmission(payload) {
   if (!payload || typeof payload !== "object") {
      throw new DiagnosticValidationError("Invalid request payload.");
   }

   const fullName = normalizeOptionalString(payload.fullName);
   const company = normalizeOptionalString(payload.company);
   const role = normalizeOptionalString(payload.role);
   const email = normalizeOptionalString(payload.email).toLowerCase();

   if (!EMAIL_REGEX.test(email)) {
      throw new DiagnosticValidationError("A valid email address is required.");
   }

   const answers = payload.answers;
   if (!answers || typeof answers !== "object" || Array.isArray(answers)) {
      throw new DiagnosticValidationError("Answers are required.");
   }

   for (const question of DIAGNOSTIC_QUESTIONS) {
      const optionKey = answers[question.id];
      const validOption = question.options.find((option) => option.key === optionKey);
      if (!validOption) {
         throw new DiagnosticValidationError(`Missing or invalid answer for ${question.id}.`);
      }
   }

   return {
      fullName,
      company,
      role,
      email,
      answers,
      submittedAt: new Date().toISOString(),
   };
}

export function generateDiagnosticReport(submission) {
   const dimensionLookup = getDimensionLookup();

   const perDimension = DIAGNOSTIC_DIMENSIONS.map((dimension) => ({
      id: dimension.id,
      label: dimension.label,
      earned: 0,
      max: 0,
   }));

   const answerRows = DIAGNOSTIC_QUESTIONS.map((question) => {
      const selectedKey = submission.answers[question.id];
      const selectedOption = question.options.find((option) => option.key === selectedKey);
      const score = OPTION_SCORE[selectedKey] || 0;

      const dimensionEntry = perDimension.find((item) => item.id === question.dimensionId);
      if (dimensionEntry) {
         dimensionEntry.earned += score;
         dimensionEntry.max += 5;
      }

      return {
         questionId: question.id,
         dimension: dimensionLookup[question.dimensionId],
         question: question.text,
         selectedOption: selectedOption ? selectedOption.label : "Unknown",
         optionKey: selectedKey,
         score,
      };
   });

   const totalScore = answerRows.reduce((sum, answer) => sum + answer.score, 0);
   const scoreBand = getScoreBand(totalScore);

   const dimensionScores = perDimension.map((item) => ({
      ...item,
      percent: item.max > 0 ? Math.round((item.earned / item.max) * 100) : 0,
   }));

   return {
      totalScore,
      maxScore: DIAGNOSTIC_QUESTIONS.length * 5,
      scoreBand,
      dimensionScores,
      answerRows,
      generatedAt: new Date().toISOString(),
   };
}

function toUserDetailLine(label, value) {
   return `${label}: ${value || "Not provided"}`;
}

export function buildDiagnosticReportText(submission, report) {
   const answerLines = report.answerRows.map(
      (answer) =>
         `- ${answer.questionId} (${answer.dimension})\n  Q: ${answer.question}\n  A: ${answer.selectedOption}\n  Score: ${answer.score}`,
   );

   const dimensionLines = report.dimensionScores.map(
      (dimension) => `- ${dimension.label}: ${dimension.earned}/${dimension.max} (${dimension.percent}%)`,
   );

   return [
      "AI Compliance Diagnostic Report",
      "",
      "User Details",
      toUserDetailLine("Name", submission.fullName),
      toUserDetailLine("Email", submission.email),
      toUserDetailLine("Company", submission.company),
      toUserDetailLine("Role", submission.role),
      toUserDetailLine("Submitted", submission.submittedAt),
      "",
      "Result Summary",
      `Total Score: ${report.totalScore}/${report.maxScore}`,
      `Exposure Band: ${report.scoreBand.label}`,
      `Summary: ${report.scoreBand.summary}`,
      `Recommendation: ${report.scoreBand.recommendation}`,
      "",
      "Dimension Breakdown",
      ...dimensionLines,
      "",
      "Submitted Answers",
      ...answerLines,
   ].join("\n");
}

export function buildDiagnosticReportHtml(submission, report) {
   const answerRows = report.answerRows
      .map(
         (answer) => `
            <tr>
               <td style="padding:8px;border:1px solid #d1d5db;vertical-align:top;">${answer.questionId}</td>
               <td style="padding:8px;border:1px solid #d1d5db;vertical-align:top;">${answer.dimension}</td>
               <td style="padding:8px;border:1px solid #d1d5db;vertical-align:top;">${answer.question}</td>
               <td style="padding:8px;border:1px solid #d1d5db;vertical-align:top;">${answer.selectedOption}</td>
               <td style="padding:8px;border:1px solid #d1d5db;vertical-align:top;">${answer.score}</td>
            </tr>
         `,
      )
      .join("");

   const dimensionRows = report.dimensionScores
      .map(
         (dimension) => `
            <tr>
               <td style="padding:8px;border:1px solid #d1d5db;">${dimension.label}</td>
               <td style="padding:8px;border:1px solid #d1d5db;">${dimension.earned}/${dimension.max}</td>
               <td style="padding:8px;border:1px solid #d1d5db;">${dimension.percent}%</td>
            </tr>
         `,
      )
      .join("");

   return `
      <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
         <h1>AI Compliance Diagnostic Report</h1>
         <h2>User Details</h2>
         <ul>
            <li><strong>Name:</strong> ${submission.fullName || "Not provided"}</li>
            <li><strong>Email:</strong> ${submission.email}</li>
            <li><strong>Company:</strong> ${submission.company || "Not provided"}</li>
            <li><strong>Role:</strong> ${submission.role || "Not provided"}</li>
            <li><strong>Submitted:</strong> ${submission.submittedAt}</li>
         </ul>

         <h2>Result Summary</h2>
         <p><strong>Total Score:</strong> ${report.totalScore}/${report.maxScore}</p>
         <p><strong>Exposure Band:</strong> ${report.scoreBand.label}</p>
         <p><strong>Summary:</strong> ${report.scoreBand.summary}</p>
         <p><strong>Recommendation:</strong> ${report.scoreBand.recommendation}</p>

         <h2>Dimension Breakdown</h2>
         <table style="border-collapse:collapse;width:100%;margin-bottom:20px;">
            <thead>
               <tr>
                  <th style="text-align:left;padding:8px;border:1px solid #d1d5db;">Dimension</th>
                  <th style="text-align:left;padding:8px;border:1px solid #d1d5db;">Score</th>
                  <th style="text-align:left;padding:8px;border:1px solid #d1d5db;">Coverage</th>
               </tr>
            </thead>
            <tbody>${dimensionRows}</tbody>
         </table>

         <h2>Submitted Answers</h2>
         <table style="border-collapse:collapse;width:100%;">
            <thead>
               <tr>
                  <th style="text-align:left;padding:8px;border:1px solid #d1d5db;">ID</th>
                  <th style="text-align:left;padding:8px;border:1px solid #d1d5db;">Dimension</th>
                  <th style="text-align:left;padding:8px;border:1px solid #d1d5db;">Question</th>
                  <th style="text-align:left;padding:8px;border:1px solid #d1d5db;">Answer</th>
                  <th style="text-align:left;padding:8px;border:1px solid #d1d5db;">Score</th>
               </tr>
            </thead>
            <tbody>${answerRows}</tbody>
         </table>
      </div>
   `;
}
