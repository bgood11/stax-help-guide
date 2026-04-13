import { motion } from 'framer-motion';
import ImageZoom from '../ui/ImageZoom';
import Callout from '../ui/Callout';
import DataTable from '../ui/DataTable';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SectionCreditAgreementExpiry() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      <header>
        <h2 className="text-3xl font-bold text-stax-dark mb-2">Credit Agreement Expiry</h2>
        <p className="text-lg text-stax-dark/70">
          A customer's Credit Agreement is only valid for certain periods depending on the
          different decision stages of the application. After which, they are automatically
          cancelled by the lender.
        </p>
      </header>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
        <motion.div variants={fadeUp} className="space-y-4">
          <p className="text-stax-dark/80">
            STAX will either show <span className="font-semibold">'Cancelled'</span> or{' '}
            <span className="font-semibold">'Expired'</span> on the dashboard when an agreement
            has lapsed. The table below details how long an agreement is valid for before it will
            show as cancelled or expired on STAX after it is submitted to the lender.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <DataTable
            headers={['LENDER', 'Refer Expiry', 'Approved Expiry', 'Executed Expiry']}
            rows={[
              ['BNP Paribas', '28 Days', '271 Days', '271 Days'],
              ['This Bank', '30 Days', '30 Days', '180 Days'],
              ['Propensio', '30 Days', '30 Days', '180 Days'],
              ['V12', '14 Days', '90 Days', '360 Days'],
              ['ZOPA', 'n/a', '25 Days', '365 Days'],
              ['HUMM', '30 Days', '90 Days', 'No current restriction'],
            ]}
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Callout variant="warning" title="Check with your BDM">
            These expiry periods are subject to change. Always check with your Shermin Business
            Development Manager if you are unsure about the current validity period for a specific
            lender or application. Acting before the expiry deadline saves time for both you and
            your customer.
          </Callout>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/page-25.png"
            alt="Credit agreement expiry periods by lender"
            caption="Credit Agreement Expiry — PDF page 25"
          />
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
