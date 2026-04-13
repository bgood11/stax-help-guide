import {
  LogIn, Trash2, BookOpen, LayoutDashboard, Search,
  FileText, Users, Clock, Mail, Building2,
  ClipboardList, MousePointerClick, XCircle, HelpCircle,
  Shield, PenLine
} from 'lucide-react';
import type { ComponentType } from 'react';

export interface Section {
  id: string;
  title: string;
  shortTitle: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  pages: string;
  keywords: string[];
  screenshots: string[];
}

export const sections: Section[] = [
  {
    id: 'logging-in',
    title: 'Logging into STAX',
    shortTitle: 'Logging In',
    icon: LogIn,
    pages: '4-10',
    keywords: ['login', 'password', 'email', 'first time', 'verification', 'bookmark', 'troubleshooting', 'reset', 'disabled', '28 days', '45 days', 'cache', 'logout'],
    screenshots: ['page-04.png', 'page-05.png', 'page-06.png', 'page-07.png', 'page-08.png', 'page-09.png', 'page-10.png'],
  },
  {
    id: 'clearing-browsing-data',
    title: 'Clearing Browsing Data',
    shortTitle: 'Clear Cache',
    icon: Trash2,
    pages: '11',
    keywords: ['browsing', 'cache', 'clear', 'chrome', 'edge', 'safari', 'iphone', 'ipad', 'video'],
    screenshots: ['page-11.png'],
  },
  {
    id: 'dashboard-glossary',
    title: 'Dashboard Glossary',
    shortTitle: 'Glossary',
    icon: BookOpen,
    pages: '12-13',
    keywords: ['stage', 'status', 'application initiated', 'pending', 'decision', 'approved', 'rejected', 'executed', 'contract signed', 'deposit paid', 'sat note', 'payout', 'cancelled', 'expired', 'not taken up', 'NTU', 'referred', 'submitted', 'exception', 'consent', 'cash payment'],
    screenshots: ['page-12.png', 'page-13.png'],
  },
  {
    id: 'understanding-dashboard',
    title: 'Understanding the STAX Dashboard',
    shortTitle: 'Dashboard',
    icon: LayoutDashboard,
    pages: '14-15',
    keywords: ['dashboard', 'home', 'applications', 'approvals', 'payouts', 'approval rate', 'executed apps', 'training', 'AP number', 'reference', 'stage', 'status'],
    screenshots: ['page-14.png', 'page-15.png'],
  },
  {
    id: 'searching',
    title: 'Searching in STAX',
    shortTitle: 'Searching',
    icon: Search,
    pages: '16-17',
    keywords: ['search', 'date range', 'range', 'from', 'to', 'show', 'custom', 'customer name', 'postcode', 'lender', 'AP number', 'referred', 'approved', 'executed'],
    screenshots: ['page-16.png', 'page-17.png'],
  },
  {
    id: 'applications-initiated',
    title: 'Applications Sent to the Customer',
    shortTitle: 'Applications',
    icon: FileText,
    pages: '18',
    keywords: ['application initiated', 'follow up', 'cancel', '28 days', 'track', 'sent to customer'],
    screenshots: ['page-18.png'],
  },
  {
    id: 'customer-follow-up',
    title: 'Customer Follow Up Hints & Tips',
    shortTitle: 'Follow Up Tips',
    icon: Users,
    pages: '19-24',
    keywords: ['refresh', 'referred', 'approved', 'executed', 'sat note', 'satisfaction note', 'payout', 'live', 'follow up', 'GDPR', 'deposit paid', 'e-sign', 'withdrawal', '24 hours', '48 hours', '180 days'],
    screenshots: ['page-19.png', 'page-20.png', 'page-21.png', 'page-22.png', 'page-23.png', 'page-24.png'],
  },
  {
    id: 'credit-agreement-expiry',
    title: 'Credit Agreement Expiry',
    shortTitle: 'Agreement Expiry',
    icon: Clock,
    pages: '25',
    keywords: ['expiry', 'BNP', 'This Bank', 'Propensio', 'V12', 'ZOPA', 'HUMM', 'refer expiry', 'approved expiry', 'executed expiry', 'cancelled', 'expired', 'days'],
    screenshots: ['page-25.png'],
  },
  {
    id: 'documents-sent',
    title: 'Documents Sent to a Customer',
    shortTitle: 'Documents',
    icon: Mail,
    pages: '26',
    keywords: ['esign', 'satisfaction note', 'email', 'BNP Paribas', 'This Bank', 'Propensio', 'V12', 'ZOPA', 'HUMM', 'noreply', 'junk', 'spam'],
    screenshots: ['page-26.png'],
  },
  {
    id: 'minimum-lender-criteria',
    title: 'Minimum Lender Criteria',
    shortTitle: 'Lender Criteria',
    icon: Building2,
    pages: '27',
    keywords: ['criteria', 'age', 'address history', 'tenant', 'homeowner', 'income', 'employed', 'self-employed', 'retired', 'joint applicant', 'bank account', 'underwriting notes', 'amendments', 'BNP', 'This Bank', 'Propensio', 'V12', 'ZOPA', 'HUMM'],
    screenshots: ['page-27.png'],
  },
  {
    id: 'application-summary',
    title: 'Application Summary Page',
    shortTitle: 'App Summary',
    icon: ClipboardList,
    pages: '28-31',
    keywords: ['summary', 'customer name', 'AP number', 'lender', 'requested terms', 'finalised terms', 'application flow', 'timeline', 'finance product', 'APR', 'term', 'monthly payment', 'total repayable'],
    screenshots: ['page-28.png', 'page-29.png', 'page-30.png', 'page-31.png'],
  },
  {
    id: 'button-summary',
    title: 'STAX Button Summary',
    shortTitle: 'Buttons',
    icon: MousePointerClick,
    pages: '32',
    keywords: ['loan cancellation', 'resume', 'deposit paid', 'loan amendment', 'send satisfaction note', 'button', 'permissions', 'admin'],
    screenshots: ['page-32.png'],
  },
  {
    id: 'cancelling-application',
    title: 'Cancelling an Application',
    shortTitle: 'Cancelling',
    icon: XCircle,
    pages: '33-34',
    keywords: ['cancel', 'loan cancellation', 'confirm cancellation', 'reason', 'success'],
    screenshots: ['page-33.png', 'page-34.png'],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    shortTitle: 'Troubleshooting',
    icon: HelpCircle,
    pages: '35',
    keywords: ['hotmail', 'outlook', 'email', 'spam', 'junk', 'trash', 'migration', 'not receiving emails'],
    screenshots: ['page-35.png'],
  },
  {
    id: 'epvs-validation',
    title: 'Solar PV & Battery Storage EPVS Validation',
    shortTitle: 'EPVS Validation',
    icon: Shield,
    pages: '36-40',
    keywords: ['EPVS', 'solar', 'battery', 'validation', 'validation ID', 'send satisfaction note', 'error', 'surname', 'numeric', 'invalid', 'product type', 'finance broker', 'Shermin'],
    screenshots: ['page-36.png', 'page-37.png', 'page-38.png', 'page-39.png', 'page-40.png'],
  },
  {
    id: 'loan-amendments',
    title: 'Loan Amendments',
    shortTitle: 'Amendments',
    icon: PenLine,
    pages: '41-48',
    keywords: ['amendment', 'loan amendment', 'purchase amount', 'deposit', 'pre-approved limit', 'submit amendment', 'total purchase price', 'lender', 'approved', 'executed', 'admin', 'requested terms', 'finalised terms', 'new agreement'],
    screenshots: ['page-41.png', 'page-42.png', 'page-43.png', 'page-44.png', 'page-45.png', 'page-46.png', 'page-47.png', 'page-48.png'],
  },
];
