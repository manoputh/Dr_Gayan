export const DIAGNOSTIC_DIMENSIONS = [
   { id: "d1", label: "D1 - System Inventory" },
   { id: "d2", label: "D2 - Behavioural Reliability" },
   { id: "d3", label: "D3 - Data Governance" },
   { id: "d4", label: "D4 - Governance Process" },
   { id: "d5", label: "D5 - Transparency" },
];

export const DIAGNOSTIC_QUESTIONS = [
   {
      id: "q1",
      dimensionId: "d1",
      text: "Do you have a documented inventory of every AI system currently in production?",
      options: [
         { key: "a", label: "No, we do not know exactly what is in production." },
         { key: "b", label: "Partial inventory exists but is incomplete." },
         { key: "c", label: "Inventory exists but is not risk-classified." },
         { key: "d", label: "Complete inventory with ownership and status." },
      ],
   },
   {
      id: "q2",
      dimensionId: "d1",
      text: "Have your AI systems been classified against high-impact or high-risk categories?",
      options: [
         { key: "a", label: "No classification has been performed." },
         { key: "b", label: "Awareness exists but no formal classification." },
         { key: "c", label: "Classification is partial for key systems." },
         { key: "d", label: "Classification is complete and documented." },
      ],
   },
   {
      id: "q3",
      dimensionId: "d1",
      text: "Do you know your obligations for third-party AI systems you deploy?",
      options: [
         { key: "a", label: "No, these obligations are not mapped." },
         { key: "b", label: "General awareness only." },
         { key: "c", label: "Mapped for some critical tools." },
         { key: "d", label: "Mapped and assigned with clear owners." },
      ],
   },
   {
      id: "q4",
      dimensionId: "d2",
      text: "Have reliability and calibration checks been performed on production models?",
      options: [
         { key: "a", label: "Never tested." },
         { key: "b", label: "Ad hoc checks only." },
         { key: "c", label: "Tested at deployment but not continuously." },
         { key: "d", label: "Regular monitoring with thresholds and alerts." },
      ],
   },
   {
      id: "q5",
      dimensionId: "d2",
      text: "Are your models monitored for data drift and performance shift over time?",
      options: [
         { key: "a", label: "No drift monitoring in place." },
         { key: "b", label: "Manual spot checks only." },
         { key: "c", label: "Basic monitoring, inconsistent coverage." },
         { key: "d", label: "Automated monitoring with clear escalation paths." },
      ],
   },
   {
      id: "q6",
      dimensionId: "d2",
      text: "Have you tested model robustness under stress or adversarial conditions?",
      options: [
         { key: "a", label: "No robustness testing." },
         { key: "b", label: "Awareness only, no testing program." },
         { key: "c", label: "One-time testing completed." },
         { key: "d", label: "Regular robustness testing integrated in governance." },
      ],
   },
   {
      id: "q7",
      dimensionId: "d3",
      text: "Is training and production data lineage documented end to end?",
      options: [
         { key: "a", label: "No formal lineage documentation." },
         { key: "b", label: "Informal notes only." },
         { key: "c", label: "Documented for some critical models." },
         { key: "d", label: "Full lineage documentation across systems." },
      ],
   },
   {
      id: "q8",
      dimensionId: "d3",
      text: "Have high-impact datasets been assessed for bias and representativeness?",
      options: [
         { key: "a", label: "No formal bias assessment." },
         { key: "b", label: "Informal reviews only." },
         { key: "c", label: "Partial assessments completed." },
         { key: "d", label: "Structured assessments with evidence records." },
      ],
   },
   {
      id: "q9",
      dimensionId: "d3",
      text: "Are data protection and impact assessments current for relevant AI systems?",
      options: [
         { key: "a", label: "No relevant assessments completed." },
         { key: "b", label: "General assessments exist but not AI-specific." },
         { key: "c", label: "Some AI systems have updated assessments." },
         { key: "d", label: "Assessments are complete and maintained." },
      ],
   },
   {
      id: "q10",
      dimensionId: "d4",
      text: "Do high-impact systems have complete technical documentation?",
      options: [
         { key: "a", label: "Documentation is missing or minimal." },
         { key: "b", label: "Basic model notes only." },
         { key: "c", label: "Documentation exists for some systems." },
         { key: "d", label: "Complete, auditable documentation for all relevant systems." },
      ],
   },
   {
      id: "q11",
      dimensionId: "d4",
      text: "Is there a formal risk management process for AI systems throughout lifecycle?",
      options: [
         { key: "a", label: "No formal process." },
         { key: "b", label: "General risk register only." },
         { key: "c", label: "System-level process exists but is not continuous." },
         { key: "d", label: "Continuous process with regular reviews." },
      ],
   },
   {
      id: "q12",
      dimensionId: "d4",
      text: "Is executive ownership for AI compliance formally assigned?",
      options: [
         { key: "a", label: "No clear owner." },
         { key: "b", label: "Informal ownership only." },
         { key: "c", label: "Named owner without formal mandate." },
         { key: "d", label: "Named owner with mandate and accountability." },
      ],
   },
   {
      id: "q13",
      dimensionId: "d5",
      text: "Can your AI systems provide meaningful explanations for key decisions?",
      options: [
         { key: "a", label: "No explanations available." },
         { key: "b", label: "Limited indicators only." },
         { key: "c", label: "Explanations available for some models." },
         { key: "d", label: "Validated explainability approach is in place." },
      ],
   },
   {
      id: "q14",
      dimensionId: "d5",
      text: "Is human oversight formally defined for high-impact decisions?",
      options: [
         { key: "a", label: "No formal human oversight." },
         { key: "b", label: "Informal review only." },
         { key: "c", label: "Defined in policy but inconsistently enforced." },
         { key: "d", label: "Formally enforced oversight model." },
      ],
   },
   {
      id: "q15",
      dimensionId: "d5",
      text: "Can leadership clearly report current AI compliance posture?",
      options: [
         { key: "a", label: "No clear board-level visibility." },
         { key: "b", label: "General awareness but no structured reporting." },
         { key: "c", label: "Periodic reporting with known gaps." },
         { key: "d", label: "Clear and regular compliance reporting in place." },
      ],
   },
];
