import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// team
import TeamReducer from "./team/reducer";

//Calendar
import CalendarReducer from "./calendar/reducer";

// API key
import APIKeyReducer from "./apiKey/reducer";

// To do
import TodosReducer from "./todos/reducer";

// Job
import JobReducer from "./jobs/reducer";

// File Manager
import FileManagerReducer from "./fileManager/reducer";

//Project
import ProjectsReducer from "./projects/reducer";

//Crypto
import CryptoReducer from "./crypto/reducer";

//Chat
import chatReducer from "./chat/reducer";

//Mailbox
import MailboxReducer from "./mailbox/reducer";

//TicketsList
import TicketsReducer from "./tickets/reducer";

//Invoice
import InvoiceReducer from "./invoice/reducer";

// Tasks
import TasksReducer from "./tasks/reducer";

//Crm
import CrmReducer from "./crm/reducer";

// Dashboard Analytics
import DashboardAnalyticsReducer from "./dashboardAnalytics/reducer";

//Ecommerce
import EcommerceReducer from "./ecommerce/reducer";

// Dashboard CRM
import DashboardCRMReducer from "./dashboardCRM/reducer";

//  Dashboard Ecommerce
import DashboardEcommerceReducer from "./dashboardEcommerce/reducer";

// Dashboard Cryto
import DashboardCryptoReducer from "./dashboardCrypto/reducer";

// Dashboard Project
import DashboardProjectReducer from "./dashboardProject/reducer";

// Dashboard NFT
import DashboardNFTReducer from "./dashboardNFT/reducer";

import frameworkReducer from "./framework/frameworkReducer";

import provisionScopeReducer from "./provisionScope/provisionScopeSlice";
import counterReducer from "./counter/reducer";
import policyScopeReducer from "./policyScope/policyScopeSlice";
import evidenceScopeReducer from "./evidenceScope/evidenceScopeSlice";
import assigneeReducer from "./assigneeList/reducer";
import policyFileReducer from "./policyFile/reducer";
import evidenceFileReducer from "./evidenceFile/reducer";
import correctiveActionReducer from "./correctiveAction/reducer";
import organizationPolicyReducer from "./OrganizationPolicy/reducer";
import organizationEvidenceReducer from "./OrganizationEvidence/reducer";
import controlDetailReducer from "./controlDetail/reducer";
import auditReducer from "./auditCenter/reducer";
import provisionReducer from "./provision/reducer";

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  Team: TeamReducer,
  Calendar: CalendarReducer,
  APIKey: APIKeyReducer,
  Todos: TodosReducer,
  Jobs: JobReducer,
  FileManager: FileManagerReducer,
  Projects: ProjectsReducer,
  Crypto: CryptoReducer,
  Chat: chatReducer,
  Mailbox: MailboxReducer,
  Tickets: TicketsReducer,
  Invoice: InvoiceReducer,
  Tasks: TasksReducer,
  Crm: CrmReducer,
  DashboardAnalytics: DashboardAnalyticsReducer,
  Ecommerce: EcommerceReducer,
  DashboardCRM: DashboardCRMReducer,
  DashboardEcommerce: DashboardEcommerceReducer,
  DashboardCrypto: DashboardCryptoReducer,
  DashboardProject: DashboardProjectReducer,
  DashboardNFT: DashboardNFTReducer,
  framework: frameworkReducer,
  provisionScope: provisionScopeReducer,
  policyScope: policyScopeReducer,
  evidenceScope: evidenceScopeReducer,
  Counter: counterReducer,
  assigneeList: assigneeReducer,
  policyFileList: policyFileReducer,
  evidenceFileList: evidenceFileReducer,
  correctiveAction: correctiveActionReducer,
  organizationPolicy: organizationPolicyReducer,
  organizationEvidence: organizationEvidenceReducer,
  controlDetail: controlDetailReducer,
  audit: auditReducer,
  provision: provisionReducer,
});

export default rootReducer;
