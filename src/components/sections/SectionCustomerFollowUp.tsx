import { motion } from "framer-motion";
import ImageZoom from "../ui/ImageZoom";
import Callout from "../ui/Callout";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const tips = [
  {
    number: 1,
    title: "Refresh Your Dashboard Regularly",
    content:
      "Make it a habit to refresh your Stax Dashboard at the start of each working day and periodically throughout the day. Application statuses can change at any time as lenders process decisions, customers sign agreements, and payments are made. Refreshing ensures you are always looking at the most current information and can act on changes promptly. A simple browser refresh (F5 or Ctrl+R) is all it takes.",
  },
  {
    number: 2,
    title: "Follow Up on Referred Applications",
    content:
      "When an application is marked as 'Referred', it means the lender could not auto-approve it and has passed it to their underwriting team for manual review. This does not mean the application has been declined - many referred applications are ultimately approved. However, the process can take longer, so it is important to keep the customer informed. Let them know their application is being reviewed and that you will update them as soon as a decision is made. Check your Dashboard daily for status changes on referred applications.",
  },
  {
    number: 3,
    title: "Follow Up on Approved Applications",
    content:
      "Once an application is approved, time is of the essence. The customer needs to sign their credit agreement to move the process forward. Contact the customer promptly to congratulate them on their approval and remind them to check their email for the agreement to sign. If the agreement is not signed within a few days, follow up again - customers sometimes miss the email or forget to complete the signing. The sooner the agreement is signed, the sooner you can proceed towards payout.",
  },
  {
    number: 4,
    title: "Monitor Executed Applications",
    content:
      "An 'Executed' application means the customer has signed their credit agreement. At this point, the next step is for a satisfaction note to be sent confirming that the work has been completed or goods have been delivered. Make sure your operations team is aware of executed applications so they can schedule and complete the work promptly. The faster the work is done, the sooner the satisfaction note can be sent and the payout process can begin.",
  },
  {
    number: 5,
    title: "Track Satisfaction Notes Sent",
    content:
      "When a satisfaction note has been sent, it means confirmation is being sought that the customer is happy with the work or delivery. This step is critical for unlocking the payout. Monitor these applications closely - if the satisfaction note is not accepted within a reasonable timeframe, follow up with the relevant parties to ensure there are no issues. Any delays at this stage directly impact how quickly you receive payment.",
  },
  {
    number: 6,
    title: "Confirm Sat Note Accepted & Payout Requested",
    content:
      "Once the satisfaction note is accepted, a payout request is automatically submitted to the lender. This is a great milestone - it means the finance process is nearly complete. At this stage, the lender is processing the funds for release. Keep an eye on the Dashboard for the status to update to 'Payout Made'. If the payout seems delayed, you can contact Shermin with the AP Number to check on the progress.",
  },
  {
    number: 7,
    title: "Celebrate Payout Made - Application LIVE",
    content:
      "When the status changes to 'Payout Made - LIVE', the lender has released the funds and the finance agreement is fully active. The customer's repayment schedule has begun, and you have been paid. This is the final and most satisfying stage of the process. Use this as an opportunity to review your pipeline - check for any other applications that may be stuck at earlier stages and take action to move them forward.",
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
        <h2 className="text-3xl font-bold text-stax-dark mb-2">Customer Follow-Up Tips</h2>
        <p className="text-lg text-stax-dark/70">
          Proactive follow-up at every stage of the application process improves conversion rates
          and speeds up payouts. Use these seven tips to stay on top of your pipeline.
        </p>
      </header>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <Callout variant="important">
            Regular follow-up is the single most effective action you can take to improve your
            finance conversion rates. Even a brief phone call or email can make the difference
            between a completed application and an abandoned one.
          </Callout>
        </motion.div>

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
          <ImageZoom
            src="/images/screenshots/page-19.png"
            alt="Customer follow-up tips - refreshing Dashboard"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/page-20.png"
            alt="Follow-up guidance for referred and approved applications"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/page-21.png"
            alt="Executed applications and satisfaction notes"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/page-22.png"
            alt="Satisfaction note tracking"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/page-23.png"
            alt="Payout requested and processing"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/page-24.png"
            alt="Payout made - application LIVE"
          />
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
