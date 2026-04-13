import { motion } from "framer-motion";
import ImageZoom from "../ui/ImageZoom";
import Callout from "../ui/Callout";

function SectionApplicationSummary() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-stax-dark">
        Application Summary
      </h2>

      <p className="text-stax-dark leading-relaxed">
        The Application Summary screen provides a comprehensive overview of the
        customer's finance application. It is accessed by clicking the{" "}
        <strong>AP number</strong> (application reference) on the dashboard. This
        screen is divided into several key sections.
      </p>

      {/* Customer Summary */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-stax-teal">
          Customer Summary
        </h3>
        <p className="text-stax-dark leading-relaxed">
          At the top of the Application Summary, you will see the customer's
          name, application reference number, and the current stage of the
          application. The blue action buttons are displayed prominently — these
          allow you to perform key actions such as cancelling the loan, sending
          the satisfaction note, or submitting a loan amendment.
        </p>
        <p className="text-stax-dark leading-relaxed">
          To access the full Application Summary, click the{" "}
          <strong>AP number</strong> link on the dashboard. Note that certain
          action buttons are only available to users with{" "}
          <strong>admin access</strong> permissions. If you cannot see a button
          you expect, check your account permissions with your administrator.
        </p>

        <ImageZoom
          src="/images/screenshots/page-28.png"
          alt="Customer summary section showing AP number and blue action buttons"
        />
      </section>

      {/* Customer Details */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-stax-teal">
          Customer Details
        </h3>
        <p className="text-stax-dark leading-relaxed">
          The Customer Details section displays the personal information
          associated with the application, including the customer's{" "}
          <strong>full name</strong>, <strong>email address</strong>,{" "}
          <strong>contact number</strong>, and the financial details such as the{" "}
          <strong>purchase amount</strong>, <strong>deposit amount</strong>, and{" "}
          <strong>loan amount</strong>.
        </p>

        <Callout variant="warning">
          <p>
            <strong>Important:</strong> If the lender has changed any details
            directly (for example, adjusted the loan amount), you must contact
            STAX to update the application record. Do not attempt to modify
            lender-changed details through the platform — contact{" "}
            <a
              href="mailto:salessupport@sherminfinance.co.uk"
              className="font-semibold text-stax-teal underline"
            >
              salessupport@sherminfinance.co.uk
            </a>{" "}
            instead.
          </p>
        </Callout>

        <ImageZoom
          src="/images/screenshots/page-29.png"
          alt="Customer details section with personal and financial information"
        />
      </section>

      {/* Lender Details */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-stax-teal">
          Lender Details
        </h3>
        <p className="text-stax-dark leading-relaxed">
          The Lender Details section can be expanded by clicking on the{" "}
          <strong>lender bar</strong>. Once expanded, it reveals two sets of
          financial terms side by side:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Requested Terms</h4>
            <p className="mt-1 text-sm text-stax-dark">
              The original terms submitted in the application — including APR,
              Term (months), Monthly Payment, and Total Amount Repayable.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Finalised Terms</h4>
            <p className="mt-1 text-sm text-stax-dark">
              The terms confirmed by the lender after approval. These may differ
              slightly from the requested terms — including APR, Term, Monthly
              Payment, and Total Amount Repayable.
            </p>
          </div>
        </div>

        <Callout variant="important">
          <p>
            <strong>Tolerance:</strong> There may be minor rounding differences
            between Requested and Finalised Terms. A difference of up to{" "}
            <strong>&pound;1</strong> is considered within acceptable tolerance
            and does not indicate an error.
          </p>
        </Callout>

        <ImageZoom
          src="/images/screenshots/page-30.png"
          alt="Lender details showing Requested versus Finalised Terms"
        />
      </section>

      {/* Application Flow Timeline */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-stax-teal">
          Application Flow Timeline
        </h3>
        <p className="text-stax-dark leading-relaxed">
          On the right-hand side of the Application Summary, the{" "}
          <strong>Application Flow Timeline</strong> displays the chronological
          progression of the application through each stage. Each stage is listed
          with the date it was reached.
        </p>
        <p className="text-stax-dark leading-relaxed">
          The timeline records stages such as Application Initiated, Application
          Submitted, Approved, E-Sign Sent, Executed, Deposit Paid, Satisfaction
          Note Sent, and Payout Made. Only the <strong>first date</strong> is
          shown for each stage — if a stage was revisited (e.g. after an
          amendment), the original date is retained.
        </p>

        <ImageZoom
          src="/images/screenshots/page-31.png"
          alt="Application flow timeline showing chronological stage progression"
        />
      </section>
    </motion.article>
  );
}

export default SectionApplicationSummary;
