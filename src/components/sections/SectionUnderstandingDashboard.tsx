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

export default function SectionUnderstandingDashboard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      <header>
        <h2 className="text-3xl font-bold text-stax-dark mb-2">Understanding the Dashboard</h2>
        <p className="text-lg text-stax-dark/70">
          Your Stax Dashboard is the central hub for viewing and managing all finance applications.
          This section explains the key features and how to navigate them effectively.
        </p>
      </header>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
        {/* Dashboard Overview */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="text-2xl font-semibold text-stax-teal">Dashboard Overview</h3>
          <p className="text-stax-dark/80">
            When you log in to Stax, the Dashboard displays all of your finance applications in one
            place. Each application is shown as a row with key details including the customer name,
            AP number, lender, stage, status, and date information. You can quickly scan the
            Dashboard to see the current state of every application.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-stax-teal/20 bg-stax-light p-5 space-y-2">
              <h4 className="font-semibold text-stax-dark">All Applications</h4>
              <p className="text-sm text-stax-dark/70">
                The Dashboard shows every application associated with your account, from newly
                initiated applications through to completed payouts. Use the search and filter tools
                to find specific applications quickly.
              </p>
            </div>
            <div className="rounded-xl border border-stax-teal/20 bg-stax-light p-5 space-y-2">
              <h4 className="font-semibold text-stax-dark">Admin Access</h4>
              <p className="text-sm text-stax-dark/70">
                If you have admin access, you can view applications across all users and branches
                within your organisation. This gives managers a complete picture of all finance
                activity without needing to log in to individual accounts.
              </p>
            </div>
            <div className="rounded-xl border border-stax-teal/20 bg-stax-light p-5 space-y-2">
              <h4 className="font-semibold text-stax-dark">Training Tab</h4>
              <p className="text-sm text-stax-dark/70">
                The Training tab on your Dashboard provides access to helpful resources, guides, and
                training materials. Check here regularly for updates and new content to help you get
                the most out of Stax.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/clean/dashboard-overview.png"
            alt="Stax Dashboard overview showing all applications"
          />
        </motion.div>

        {/* References Section */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="text-2xl font-semibold text-stax-teal">Application References</h3>
          <p className="text-stax-dark/80">
            Every application in Stax is assigned a unique reference number known as the{" "}
            <span className="font-semibold text-stax-teal">AP Number</span>. This number is
            created automatically as soon as an application is started and serves as the primary
            identifier throughout the entire lifecycle of the application.
          </p>

          <div className="rounded-xl border border-stax-teal/20 bg-stax-light p-6 space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-stax-dark">When is the AP Number Created?</h4>
              <p className="text-sm text-stax-dark/70">
                The AP Number is generated the moment a new finance application is started in Stax.
                It appears immediately on the Dashboard and remains associated with that application
                permanently, even if the application is later cancelled or expires.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-stax-dark">Why is the AP Number Important?</h4>
              <p className="text-sm text-stax-dark/70">
                The AP Number is the quickest way to locate a specific application on your
                Dashboard. It is also required whenever you contact Shermin for support - always have
                the AP Number ready so your query can be resolved as quickly as possible.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-stax-dark">Dashboard Stage &amp; Status</h4>
              <p className="text-sm text-stax-dark/70">
                Alongside the AP Number, the Dashboard shows the current Stage and Status of each
                application. These tell you exactly where the application is in the process - from
                initiation through to payout. See the Dashboard Glossary section for a full
                explanation of each Stage and Status.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Callout variant="important">
            Always quote the AP Number when contacting Shermin about any application. This is the
            fastest way to identify and resolve your query.
          </Callout>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/clean/dashboard-references.png"
            alt="Application reference details on the Dashboard"
          />
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
