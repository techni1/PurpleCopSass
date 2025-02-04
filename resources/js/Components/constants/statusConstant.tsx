export const STATE_CLASS_MAP: { [key: string]: string } = {
  ongoing: "px-2 py-1 bg-warning-subtle rounded-2  text-warning",
  compliant: "px-2 py-1 bg-success-subtle rounded-2  text-success",
  comingsoon: "px-2 py-1 bg-dark-subtle rounded-2  text-dark",
};
export const STATE_TEXT_MAP: { [key: string]: string } = {
  ongoing: "Ongoing",
  compliant: "Compliant",
  comingsoon: "Coming Soon",
};

export const BILLING_STATUS_CLASS_MAP: { [key: string]: string } = {
  Regenrate: "px-2 py-1 bg-warning-subtle rounded-2  text-warning",
  New: "px-2 py-1 bg-success-subtle rounded-2  text-success",
  Cancel: "px-2 py-1 bg-danger-subtle rounded-2  text-danger",
  quotation: "px-2 py-1 bg-info-subtle rounded-2  text-info",
  billing: "px-2 py-1 bg-success-subtle rounded-2  text-dark",
};
export const BILLING_STATUS_TEXT_MAP: { [key: string]: string } = {
  Regenrate: "Regenrate",
  New: "New",
  Cancel: "Canceled",
  quotation: "Quotation",
  billing: "Billing",
};



export const BILLING_PAYMENTSTATUS_CLASS_MAP: { [key: string]: string } = {
  Pending: "px-2 py-1 bg-warning-subtle rounded-2 text-warning",
  Paid: "px-2 py-1 bg-success-subtle rounded-2 text-success",
  Cancelled: "px-2 py-1 bg-danger-subtle rounded-2 text-danger",
  Refunded: "px-2 py-1 bg-success-subtle rounded-2 text-dark",
};
export const BILLING_PAYMENTSTATUS_TEXT_MAP: { [key: string]: string } = {
  Pending: "Pending",
  Paid: "Paid",
  Cancelled: "Canceled",
  Refunded: "Refunded",

};




export const SUPPORT_STATUS_CLASS_MAP: { [key: string]: string } = {
  open: "px-2 py-1 bg-warning-subtle rounded-2  text-warning",
  in_progress: "px-2 py-1 bg-success-subtle rounded-2  text-success",
  closed: "px-2 py-1 bg-danger-subtle rounded-2  text-danger",
};
export const SUPPORT_STATUS_TEXT_MAP: { [key: string]: string } = {
  open: "Open",
  in_progress: "In Progress",
  closed: "Closed",
};

export const STATUS_CLASS_MAP: { [key: string]: string } = {
  all: " rounded-4  text-dark",
  submitted: " rounded-4  text-warning",
  approved: " rounded-4  text-info",
  published: " rounded-4  text-success",
  audited: " rounded-4  text-primary",
};
export const STATUS_TEXT_MAP: { [key: string]: string } = {
  all: "Total",
  submitted: "Submitted",
  approved: "Approved",
  published: "Published",
  audited: "Audited",
};
export const COMPLIANT_STATUS_CLASS_MAP: { [key: string]: string } = {
  non_compliant: " rounded-4  text-danget",
  compliant: " rounded-4  text-success",
};
export const COMPLIANT_STATUS_TEXT_MAP: { [key: string]: string } = {
  non_compliant: "Non Compliant",
  compliant: "Compliant",
};
export const POLICY_STATUS_CLASS_MAP: { [key: string]: string } = {
  not_uploaded: " px-2 py-1 rounded bg-dark-subtle text-dark",
  need_review: " px-2 py-1 rounded bg-danger-subtle text-danger",
  submitted: " px-2 py-1 rounded bg-warning-subtle text-warning",
  external_need_review: " px-2 py-1 rounded bg-warning text-white",
  approved: " px-2 py-1 rounded bg-info-subtle text-info",
  published: " px-2 py-1 rounded bg-success-subtle text-success",
  audited: " px-2 py-1 rounded bg-success text-light",
};
export const POLICY_STATUS_TEXT_MAP: { [key: string]: string } = {
  not_uploaded: "Not Uploaded",
  submitted: "Submitted",
  approved: "Approved",
  published: "Published",
  need_review: "Need Review",
  external_need_review: "External Need Review",
  audited: "Audited",
};
export const ASSIGNEE_STATUS_CLASS_MAP: { [key: string]: string } = {
  pending: "text-info",
  complete: "text-success",
};
export const ASSIGNEE_STATUS_TEXT_MAP: { [key: string]: string } = {
  pending: "Pending",
  complete: "Completed",
};
export const APPROVER_STATUS_CLASS_MAP: { [key: string]: string } = {
  pending: "text-info",
  deny: "text-danger",
  approved: "text-success",
};
export const APPROVER_STATUS_CLASS_MAP_DATE: { [key: string]: string } = {
  pending: "text-info bg-info-subtle px-2 py-1 rounded",
  deny: "text-danger bg-danger-subtle px-2 py-1 rounded",
  approved: "text-success bg-success-subtle px-2 py-1 rounded",
};
export const APPROVER_STATUS_TEXT_MAP: { [key: string]: string } = {
  pending: "Pending",
  deny: "Denied",
  approved: "Approved",
};
export const APPROVER_STATUS_TEXT_MAP_DATE: { [key: string]: string } = {
  pending: "Due Date",
  deny: "Denied On",
  approved: "Approved On",
};
export const EVIDENCE_STATUS_CLASS_MAP: { [key: string]: string } = {
  not_uploaded: "bg-danger-subtle text-danger",
  draft: "bg-info-subtle text-info",
  approved: "bg-success-subtle text-success",
};
export const EVIDENCE_STATUS_TEXT_MAP: { [key: string]: string } = {
  not_uploaded: "Not Uploaded",
  draft: "Draft",
  approved: "Approved",
};
export const CORRECTIVE_ACTION_STATUS_CLASS_MAP: { [key: string]: string } = {
  high: "bg-danger-subtle text-danger",
  medium: "bg-info-subtle text-info",
  low: "bg-success-subtle text-success",
};
export const CORRECTIVE_ACTION_STATUS_TEXT_MAP: { [key: string]: string } = {
  high: "HIGH",
  medium: "MEDIUM",
  low: "LOW",
};


export const SUPPORTTEM_ATTENDANCE_STATUS_CLASS_MAP: { [key: string]: string } = {
  0: "bg-danger-subtle text-danger",
  1: "bg-success-subtle text-success",
};
export const SUPPORTTEM_ATTENDANCE_STATUS_TEXT_MAP: { [key: string]: string } = {
  0: "Absent",
  1: "Present",
 
};


export const SUPPORTTEM_STATUS_CLASS_MAP: { [key: string]: string } = {
  0: "bg-danger-subtle text-danger",
  1: "bg-success-subtle text-success",
  2: "bg-info-subtle text-success",
};
export const SUPPORTTEM_STATUS_TEXT_MAP: { [key: string]: string } = {
  0: "Deactive",
  1: "Active",
  2: "Hold",
 
};





export const FINDING_STATUS_TEXT_MAP: { [key: string]: string } = {
  open: "OPEN",
  closed: "CLOSED",
};
export const FINDING_STATUS_CLASS_MAP: { [key: string]: string } = {
  open: "bg-danger-subtle text-danger",
  closed: "bg-success-subtle text-success",
};
export const CORRECTIVE_STATUS_TEXT_MAP: { [key: string]: string } = {
  open: "OPEN",
  close: "CLOSED",
};
export const CORRECTIVE_STATUS_CLASS_MAP: { [key: string]: string } = {
  open: "bg-danger-subtle text-danger",
  close: "bg-success-subtle text-success",
};

export const FRAMEWORK_STATUS_TEXT_MAP: { [key: string]: string } = {
  0: "BLOCK",
  1: "ON",
  2: "BLOCK",
};
export const FRAMEWORK_STATUS_CLASS_MAP: { [key: string]: string } = {
  0: "bg-danger-subtle text-danger",
  1: "bg-success-subtle text-success",
  2: "bg-danger-subtle text-danger",
};
export const PROVISION_STATUS_TEXT_MAP: { [key: string]: string } = {
  0: "OFF",
  1: "ON",
};
export const PROVISION_STATUS_CLASS_MAP: { [key: string]: string } = {
  0: "bg-danger-subtle text-danger",
  1: "bg-success-subtle text-success",
};

export const DOCUMENT_STATUS_TEXT_MAP: { [key: string]: string } = {
  open: "OPEN",
  close: "CLOSED",
};
export const DOCUMENT_STATUS_CLASS_MAP: { [key: string]: string } = {
  open: "bg-success-subtle text-success",
  close: "bg-danger-subtle text-danger",
};
export const DOCUMENT_NDA_STATUS_TEXT_MAP: { [key: string]: string } = {
  signed: "SIGNED",
  not_signed: "NOT SIGNED",
};
export const DOCUMENT_NDA_STATUS_CLASS_MAP: { [key: string]: string } = {
  signed: "bg-success-subtle text-success",
  not_signed: "bg-danger-subtle text-danger",
};
export const CORRECTIVE_ACTION_SOURCE_TEXT_MAP: { [key: string]: string } = {
  OrganizationPolicy: "Policy",
  OrganizationEvidence: "Evidence",
  Riskregister: "Risk Register",
  Finding: "Finding",
};
