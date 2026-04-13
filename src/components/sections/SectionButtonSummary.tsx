import { motion } from "framer-motion";
import Callout from "../ui/Callout";
import DataTable from "../ui/DataTable";

const headers = ["Button", "Available From", "Key Notes"];

const rows = [
  [
    "Loan Cancellation",
    "All stages up to Payout Made",
    "Cancels the finance application entirely. Once cancelled, this cannot be undone - a new application must be submitted if the customer wishes to proceed.",
  ],
  [
    "Resume",
    "Application Initiated only",
    "Resumes an application that has been started but not yet submitted to the lender. DON'T use this button if the application link has already been sent to the customer - doing so may cause duplication issues.",
  ],
  [
    "Deposit Paid",
    "After Executed stage",
    "Confirms that the customer has paid their deposit. You MUST press this button before sending the satisfaction note. The satisfaction note cannot be sent until the deposit has been recorded.",
  ],
  [
    "Loan Amendment",
    "After Approval (some lenders only)",
    "Allows changes to the loan amount after approval. Only available for lenders that support amendments (currently BNP Paribas and V12). See the Loan Amendments section for full details.",
  ],
  [
    "Send Satisfaction Note",
    "After Executed or Deposit Paid",
    "Sends the satisfaction note to the customer for signing, which triggers the payout process. Ensure the deposit has been recorded first if applicable.",
  ],
];

function SectionButtonSummary() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-stax-dark">
        Action Buttons Summary
      </h2>

      <p className="text-stax-dark leading-relaxed">
        The Application Summary screen features several action buttons that
        allow you to manage the finance application at various stages. Each
        button is only visible and active when the application is at the correct
        stage. The table below summarises each button, when it becomes
        available, and important notes for use.
      </p>

      <DataTable headers={headers} rows={rows} />

      <Callout variant="warning">
        <p>
          <strong>Admin Permissions Required:</strong> Some action buttons are
          only visible to users with <strong>admin-level access</strong>. If you
          cannot see a button that should be available at the current application
          stage, contact your administrator to check your account permissions.
        </p>
      </Callout>

      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="font-semibold text-stax-dark">
          Correct Order of Operations
        </h3>
        <p className="mt-2 text-stax-dark leading-relaxed">
          For a standard application flow after the customer has signed the
          E-Sign (credit agreement), the typical button sequence is:
        </p>
        <ol className="mt-2 list-decimal space-y-1 pl-6 text-stax-dark">
          <li>
            Customer signs the E-Sign - application moves to{" "}
            <strong>Executed</strong>
          </li>
          <li>
            Retailer clicks <strong>Deposit Paid</strong> once the deposit is
            collected
          </li>
          <li>
            Retailer clicks <strong>Send Satisfaction Note</strong> once the
            installation is complete
          </li>
          <li>
            Customer signs the satisfaction note - payout is triggered
          </li>
        </ol>
      </div>

    </motion.article>
  );
}

export default SectionButtonSummary;
