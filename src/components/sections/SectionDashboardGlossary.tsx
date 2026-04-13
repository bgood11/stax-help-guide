import { motion } from 'framer-motion';
import ImageZoom from '../ui/ImageZoom';
import DataTable from '../ui/DataTable';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SectionDashboardGlossary() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      <header>
        <h2 className="text-3xl font-bold text-stax-dark mb-2">Dashboard Glossary</h2>
        <p className="text-lg text-stax-dark/70">
          A complete reference for every Stage and Status you will encounter on your STAX
          Dashboard. Understanding these terms is key to tracking applications effectively.
        </p>
      </header>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">
            Early Stages: Initiation Through to Decision
          </h3>
          <DataTable
            headers={['STAGE', 'STATUS', 'Explanation']}
            rows={[
              [
                'Application Initiated',
                'Consent, Personal info, Address, Employment, Finance, Review',
                'A quotation has been started for a customer but not progressed yet. There are five pages of the application form after it has been started with the customer (after Consent). The STATUS will detail which page the customer is on or has reached.',
              ],
              [
                'Pending Customer Submission',
                'Consent, Cash Payment, Personal info, Address, Employment, Finance, Review',
                "A quotation has been sent to the customer for them to complete the application form themselves. The STATUS will detail which page the customer is on or has reached. If the STATUS says 'CASH PAYMENT' this is when a link has been sent to the customer and they have indicated they do not want to take the finance option and wish to pay cash.",
              ],
              [
                'Pending Decision',
                'Submitted',
                'SUBMISSION = Application only partially submitted. Thank you screen exited before full submission completed — NOT REACHED LENDER. Contact Shermin to action resubmission.',
              ],
              [
                'Pending Decision',
                'Exception',
                'EXCEPTION = An error has occurred during submission — DO NOT CREATE A NEW APPLICATION. Contact Shermin to investigate.',
              ],
              [
                'Pending Decision',
                'Referred',
                "The lender has yet to make a final decision on the application — often waiting for additional information requested directly with the customer and in some instances the retailer. 'Underwriting Notes' show in the 'Lender' concertina's within STAX — available with some lenders. All information MUST be sent to the lender by the customer due to GDPR. For referred applications — please ask your BDM how long an approval is valid for with your lending panel.",
              ],
            ]}
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/page-12.png"
            alt="Dashboard glossary — early stages"
            caption="Dashboard Glossary Part 1 — PDF page 12"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">
            Later Stages: Decision Through to Completion
          </h3>
          <DataTable
            headers={['STAGE', 'STATUS', 'Explanation']}
            rows={[
              [
                'Decision Made',
                'Approved / Rejected',
                "A decision has been made for this application — refer to Application Status for decision made on your 'Home' screen/dashboard. For approved applications — please ask your BDM how long an approval is valid for with your lending panel — they are only valid for a limited time if a customer does not esign an agreement.",
              ],
              [
                'Contract Signed',
                'Executed',
                'The customer has eSigned the application form — also known as executed. Please ask your BDM how long an execution is valid for with your lending panel — they are valid for a limited time.',
              ],
              [
                'Deposit Paid',
                'Executed',
                "The customer has eSigned the application form — also known as executed and the retailer has marked the deposit as paid. This can only be done after 'Contract Signed' stage.",
              ],
              [
                'Sat Note Sent',
                'Executed',
                'The retailer has triggered the Satisfaction Note eSign link to the customer.',
              ],
              [
                'Sat Note Accepted',
                'Executed',
                'The customer has eSigned the satisfaction note — which is automatically sent to the lender to be reviewed for payout.',
              ],
              [
                'Payout Requested',
                'Executed',
                'The payout has been requested from the lender, but they have not yet released funds.',
              ],
              [
                'Payout Made',
                'Live',
                'The lender has now released funds on this application.',
              ],
              [
                'Cancelled',
                'Cancelled',
                'This application has been cancelled post approval/execution. As a retailer you may cancel applications on STAX subject to the lender and your STAX permissions.',
              ],
              [
                'Expired',
                'Expired',
                'This application has been cancelled due to expiration of the agreement by the lender.',
              ],
              [
                'Not Taken Up',
                'NTU',
                "This application has been marked as 'Not Taken Up' as it was never approved.",
              ],
            ]}
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/page-13.png"
            alt="Dashboard glossary — later stages"
            caption="Dashboard Glossary Part 2 — PDF page 13"
          />
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
