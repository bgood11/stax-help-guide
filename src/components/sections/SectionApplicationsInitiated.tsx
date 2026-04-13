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

export default function SectionApplicationsInitiated() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      <header>
        <h2 className="text-3xl font-bold text-stax-dark mb-2">Applications Initiated</h2>
        <p className="text-lg text-stax-dark/70">
          Track and manage applications that have been started but not yet completed by the
          customer. Prompt follow-up at this stage can significantly improve conversion rates.
        </p>
      </header>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
        {/* Tracking Applications */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="text-2xl font-semibold text-stax-teal">Tracking Initiated Applications</h3>
          <p className="text-stax-dark/80">
            When a customer starts a finance application, it immediately appears on your Dashboard
            with the stage <span className="font-semibold text-stax-teal">Application Initiated</span>.
            At this point, the customer has begun the process but has not yet submitted their
            application to a lender.
          </p>
          <p className="text-stax-dark/80">
            To view all initiated applications, use the search box on your Dashboard and search for
            the status{" "}
            <span className="font-semibold text-stax-teal">&quot;Application Initiated&quot;</span>.
            This will filter your view to show only applications that are waiting for the customer
            to complete them.
          </p>
        </motion.div>

        {/* Follow Up */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="text-2xl font-semibold text-stax-teal">Follow-Up After 24 Hours</h3>
          <p className="text-stax-dark/80">
            If an application has been in the &quot;Application Initiated&quot; stage for more than
            24 hours, this is a strong indicator that the customer may need a reminder or assistance
            to complete their application. Reaching out to the customer at this point can help
            recover applications that might otherwise be abandoned.
          </p>
          <div className="rounded-xl border border-stax-teal/20 bg-stax-light p-5 space-y-3">
            <h4 className="font-semibold text-stax-dark">Recommended Follow-Up Actions</h4>
            <ul className="space-y-2 text-sm text-stax-dark/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-stax-teal" />
                Contact the customer by phone or email to check if they need help completing the
                application.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-stax-teal" />
                Remind them of the benefits of the finance option and the product they were
                interested in.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-stax-teal" />
                Offer to walk them through the application process if they are unsure about any
                steps.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-stax-teal" />
                Note any issues the customer raises so you can address them promptly.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Cancellation */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="text-2xl font-semibold text-stax-teal">Cancelling an Application</h3>
          <p className="text-stax-dark/80">
            If the customer is not proceeding with the application, click on the AP number to
            open the customer summary and press the{" "}
            <span className="font-semibold text-stax-teal">'Loan Cancellation'</span> button.
            See the Cancelling an Application section for full details.
          </p>
          <Callout variant="tip">
            It is good practice to cancel applications that are not progressing rather than
            leaving them to auto-cancel after 28 days. This keeps your dashboard clean and your
            records accurate.
          </Callout>
        </motion.div>

        {/* Auto-Cancel */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="text-2xl font-semibold text-stax-teal">
            Automatic Cancellation After 28 Days
          </h3>
          <p className="text-stax-dark/80">
            Applications that remain in the &quot;Application Initiated&quot; stage for{" "}
            <span className="font-semibold text-stax-pink">28 days</span> without any customer
            action will be automatically cancelled by the system. This helps keep your Dashboard
            clean and ensures that stale applications do not clutter your view.
          </p>
          <Callout variant="important">
            The 28-day auto-cancellation only applies to applications in the &quot;Application
            Initiated&quot; stage. Applications that have progressed further in the process are not
            affected by this rule.
          </Callout>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/clean/applications-initiated.png"
            alt="Applications Initiated view on the Dashboard"
          />
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
