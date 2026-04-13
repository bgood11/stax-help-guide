import { motion } from 'framer-motion';
import ImageZoom from '../ui/ImageZoom';
import Callout from '../ui/Callout';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const tips = [
  {
    number: 1,
    title: 'REFRESH YOUR DASHBOARD',
    content:
      "The dashboard does not auto-refresh. Once you are back on the Home page, to get updates you will need to either press 'Home' on the STAX navigation bar or 'refresh' your browser to receive updates.",
  },
  {
    number: 2,
    title: 'Follow up on all Referred applications',
    content:
      "We recommend you search 'Referred' applications as a minimum daily to ensure you don't have any current Referred applications outstanding. This means the lender is manually underwriting the application or waiting for information (normally from the customer) to make a decision. It may be worth a call to the customer to see if they have received an email requesting further information. Your Shermin BDM may also be able to help. Please note any information requested by a lender must be provided to them directly from the customer due to GDPR.",
  },
  {
    number: 3,
    title: 'Follow up on all Approved applications',
    content:
      "Once approved, the customer will receive an email with details of how to e-Sign their agreement. We recommend not booking a survey or delivery/installation date until the customer has e-Signed their agreement and it is showing on STAX as 'Executed'. By searching 'Approved' in the STAX dashboard you can see which customers are yet to sign. If they haven't yet signed, call the customer to ensure they have received their agreement to e-Sign via email and to consolidate the sale. Within the first 24/48 hours from the sale is the optimum time a customer is likely to sign their finance agreement. An 'Approval' from a lender is limited and will be cancelled if the agreement remains unsigned.",
  },
  {
    number: 4,
    title: 'Executed applications',
    content:
      "Once the customer has e-Signed their agreement, it will show on STAX as 'Executed'. Then the customer's survey/installation/delivery dates can be arranged (subject to the withdrawal period). By searching 'Executed' in the STAX dashboard you can see which customers are in your pipeline for survey/fitting/delivery. On average an e-Signed finance agreement is valid for 180 days/6 months. Once you can see an agreement is 'Executed' in STAX, if the customer has paid a deposit and funds have been received by you, you can then select the 'DEPOSIT PAID' button in STAX. You will need to click on the AP Number from the dashboard which opens the customer record to do so.",
  },
  {
    number: 5,
    title: 'Executed - Sat Note Sent',
    content:
      "Once the installation/delivery is complete the 'SEND SATISFACTION NOTE' button can be pressed in STAX. Please DO NOT send the satisfaction note to the customer before the installation is complete - we have found this leads to customer dissatisfaction and in some cases order cancellation. Once you have sent the satisfaction note to the customer, we recommend a customer care call or before if this is your normal process. You can then search the dashboard to see when a customer has signed the satisfaction note and also those that are outstanding (we recommend checking after 24 hours on STAX).",
  },
  {
    number: 6,
    title: 'Sat Note Accepted and Payout Requested',
    content:
      "When the customer has signed the satisfaction note the status will change to 'SAT NOTE ACCEPTED'. It is automatically sent to the lender by STAX to request payment. This status may only show briefly. Once received by the lender, the status will normally change to PAYOUT REQUESTED. If after 48 hours you are still seeing 'SAT NOTE ACCEPTED' please contact your Shermin BDM to investigate further. Payout Requested means the payout has been requested and received by the lender, but they have not yet released funds.",
  },
  {
    number: 7,
    title: 'Payout Made - LIVE',
    content:
      "Once the application is showing as 'Payout Made - LIVE', the lender has then released funds to you and the customer's loan agreement is live. You will receive notification from the lender that the transaction is complete, and the funds will be transferred to the nominated bank account for you to cross reference with your records and customer contracts.",
  },
];

export default function SectionCustomerFollowUp() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      <header>
        <h2 className="text-3xl font-bold text-stax-dark mb-2">
          Customer Follow Up Hints and Tips
        </h2>
        <p className="text-lg text-stax-dark/70">
          Once the application has been submitted, you are waiting for a decision to be made
          from your lending panel. Use these tips to manage each stage effectively.
        </p>
      </header>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        {tips.map((tip) => (
          <motion.div
            key={tip.number}
            variants={fadeUp}
            className="rounded-xl border border-stax-teal/15 bg-white shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-4 bg-stax-light px-6 py-4 border-b border-stax-teal/10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stax-teal text-white text-lg font-bold">
                {tip.number}
              </span>
              <h3 className="text-lg font-semibold text-stax-dark">{tip.title}</h3>
            </div>
            <div className="px-6 py-4">
              <p className="text-stax-dark/80 text-sm leading-relaxed">{tip.content}</p>
            </div>
          </motion.div>
        ))}

        <motion.div variants={fadeUp}>
          <Callout variant="warning" title="GDPR Reminder">
            Please note any information requested by a lender must be provided to them directly
            from the customer due to GDPR. You cannot send customer information to a lender on
            their behalf.
          </Callout>
        </motion.div>

        <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2">
          <ImageZoom src="/images/screenshots/page-19.png" alt="Customer follow-up - refresh dashboard and referred applications" />
          <ImageZoom src="/images/screenshots/page-20.png" alt="Follow-up on approved applications" />
        </motion.div>

        <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2">
          <ImageZoom src="/images/screenshots/page-21.png" alt="Executed applications and deposit paid" />
          <ImageZoom src="/images/screenshots/page-22.png" alt="Satisfaction note sent" />
        </motion.div>

        <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2">
          <ImageZoom src="/images/screenshots/page-23.png" alt="Sat note accepted and payout requested" />
          <ImageZoom src="/images/screenshots/page-24.png" alt="Payout made - LIVE" />
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
