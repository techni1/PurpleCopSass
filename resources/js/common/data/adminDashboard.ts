const chartData: any = [
  {
    name: "Not Uploaded",
    type: "bar",
    data: [50, 48, 35],
  },
  {
    name: "Draft",
    type: "bar",
    data: [50, 48, 35],
  },
  {
    name: "Approved",
    type: "bar",
    data: [12, 10, 20],
  },
  {
    name: "Published",
    type: "bar",
    data: [8, 15, 10],
  },
];

const upcomingAuditList = [
  {
    name: "GDPR Audit ",
    auditDate: "08-09-2024",
  },
  {
    name: "ISO 27001 2022",
    auditDate: "24-10-2024",
  },
  {
    name: "Audit 1",
    auditDate: "05-11-2024",
  },
];

// totlaProvision
// totlaControl
// totalPolicies
// totalEvidence
// totalAssets
// totalEmployes
// totalPublished

// data of individual framework
//     compliant (if all provision is compliant)
//     non compliant (remaining - compliant)
//     total provision
//         compliant (if all controls is compliant)
//         non compliant (remaining - compliant)
//     total control
//         compliant (if all policy/Evidence is compliant)
//         non compliant (remaining - compliant)
//     total policy
//         percentage of compliant(total-policy - published)
//         number of notuploaded
//         number of draft
//         number of approved
//         number of need-review
//         number of published
//     total evidence
//         percentage of compliant(total-evidence - published)
//         number of notuploaded
//         number of draft
//         number of approved
//         number of need-review
//         number of published
