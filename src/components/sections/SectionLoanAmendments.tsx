import { motion } from "framer-motion";
import ImageZoom from "../ui/ImageZoom";
import Callout from "../ui/Callout";
import StepIndicator from "../ui/StepIndicator";

const amendmentSteps = [
  {
    title: "Click Loan Amendment Button",
    description:
      "From the Application Summary screen, click the Loan Amendment button. This button is only available after the application has been approved and only for lenders that support amendments (currently BNP Paribas and V12).",
  },
  {
    title: "Review the Amendment Pop-Up",
    description:
      "A pop-up dialog will appear showing the current loan details. If the lender has a Pre-Approved Loan Limit, this will be displayed in red at the top of the pop-up — you cannot exceed this amount.",
  },
  {
    title: "Change Purchase Amount and Deposit",
    description:
      "You can only change the Purchase Amount and Deposit fields. The Term, APR, and product type cannot be changed through an amendment — if these need to change, a new application is required. Adjust the values as needed.",
  },
  {
    title: "Review Auto-Updated Calculations",
    description:
      "As you change the Purchase Amount and Deposit, the Loan Amount, Monthly Payment, and Total Amount Repayable will automatically recalculate based on the existing APR and Term.",
  },
  {
    title: "Submit Amendment",
    description:
      "Once you are satisfied with the updated figures, click Submit Amendment to send the amended loan details to the lender for processing.",
  },
  {
    title: "Wait for Confirmation",
    description:
      "A confirmation message will appear on screen indicating the amendment has been successfully submitted to the lender. The lender will process the amendment and update the terms.",
  },
  {
    title: "Screen Refreshes with Updated Figures",
    description:
      "The Application Summary screen will refresh automatically, showing the updated financial figures. The Requested Terms and Finalised Terms sections in the Lender Details will both reflect the amended values.",
  },
  {
    title: "Timeline and Dashboard Update",
    description:
      "The Application Flow Timeline will show a new entry for Loan Amendment Submitted with the date. The dashboard will also update to reflect the amended application details.",
  },
];

function SectionLoanAmendments() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-stax-dark">
        Loan Amendments
      </h2>

      <p className="text-stax-dark leading-relaxed">
        Loan amendments allow you to modify the financial details of an approved
        application without submitting a completely new application. This is
        useful when the purchase amount or deposit changes after the initial
        approval — for example, if the scope of work has increased or decreased.
      </p>

      {/* Overview */}
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-stax-teal">Overview</h3>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Availability</h4>
            <p className="mt-1 text-sm text-stax-dark">
              Only available for <strong>some lenders</strong> — currently BNP
              Paribas and V12. Not available for THIS Bank, Propensio, ZOPA, or
              HUMM.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Stage</h4>
            <p className="mt-1 text-sm text-stax-dark">
              Available after <strong>Approval</strong> and up until{" "}
              <strong>Payout Made</strong>. Cannot be used before approval or
              after payout.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Permissions</h4>
            <p className="mt-1 text-sm text-stax-dark">
              The Loan Amendment button is only visible to users with{" "}
              <strong>Admin access</strong>. Standard users will not see this
              option.
            </p>
          </div>
        </div>
      </section>

      <StepIndicator steps={amendmentSteps} />

      <ImageZoom
        src="/images/screenshots/page-41.png"
        alt="Loan Amendment button on the Application Summary screen"
      />

      <ImageZoom
        src="/images/screenshots/page-42.png"
        alt="Amendment pop-up showing Pre-Approved Loan Limit in red"
      />

      <ImageZoom
        src="/images/screenshots/page-43.png"
        alt="Editing Purchase Amount and Deposit with auto-calculated fields"
      />

      <Callout variant="warning">
        <p>
          <strong>Pre-Approved Loan Limit:</strong> If a Pre-Approved Loan Limit
          is displayed in red at the top of the amendment pop-up, the amended
          loan amount <strong>cannot exceed</strong> this limit. If you need to
          request a higher amount than the pre-approved limit, a new application
          must be submitted.
        </p>
      </Callout>

      <Callout variant="important">
        <p>
          <strong>What you can change:</strong> Only the{" "}
          <strong>Purchase Amount</strong> and <strong>Deposit</strong> can be
          modified through a loan amendment. The Term, APR, and product type
          remain fixed. If any of these need to change, a new application is
          required.
        </p>
      </Callout>

      <ImageZoom
        src="/images/screenshots/page-44.png"
        alt="Amendment submission confirmation message"
      />

      <ImageZoom
        src="/images/screenshots/page-45.png"
        alt="Updated Application Summary showing amended figures"
      />

      {/* New Credit Agreement */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-stax-teal">
          New Credit Agreement Required
        </h3>
        <p className="text-stax-dark leading-relaxed">
          After every loan amendment, the customer <strong>must</strong> sign a
          new Credit Agreement (E-Sign). The previous agreement is superseded by
          the amendment, and the updated terms must be formally accepted by the
          customer before the process can continue. The new E-Sign will be sent
          automatically to the customer's email address on file.
        </p>
      </section>

      <ImageZoom
        src="/images/screenshots/page-46.png"
        alt="Application Flow Timeline showing Loan Amendment Submitted entry"
      />

      <ImageZoom
        src="/images/screenshots/page-47.png"
        alt="Requested versus Finalised Terms updated after amendment"
      />

      {/* Button Unavailable */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-stax-teal">
          Loan Amendment Button Unavailable?
        </h3>
        <p className="text-stax-dark leading-relaxed">
          If the Loan Amendment button is not visible on the Application Summary
          screen, this could be for one of the following reasons:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-stax-dark">
          <li>
            The lender does not support amendments (only BNP Paribas and V12
            currently do)
          </li>
          <li>
            The application has not yet been approved by the lender
          </li>
          <li>The application has already progressed past Payout Made</li>
          <li>
            Your user account does not have admin-level permissions
          </li>
        </ul>
        <p className="text-stax-dark leading-relaxed">
          In all of these cases, a <strong>new application</strong> must be
          submitted if changes to the loan are required. Contact your
          administrator or Sales Support for assistance.
        </p>
      </section>

      <ImageZoom
        src="/images/screenshots/page-48.png"
        alt="Dashboard updated after loan amendment completion"
      />
    </motion.article>
  );
}

export default SectionLoanAmendments;
