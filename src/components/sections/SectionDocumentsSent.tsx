import { motion } from "framer-motion";

import Callout from "../ui/Callout";
import DataTable from "../ui/DataTable";

const headers = ["Lender", "E-Sign Sent From", "Satisfaction Note Sent From"];

const rows = [
  ["BNP Paribas", "account@info.creation.co.uk", "STAX noreply@staxpay.co.uk"],
  ["This Bank", "noreply@thisbank.co.uk", "STAX noreply@staxpay.co.uk"],
  ["Propensio", "esign@propensio.co.uk", "STAX noreply@staxpay.co.uk"],
  ["V12", "customerservices@v12finance.com", "STAX noreply@staxpay.co.uk"],
  ["ZOPA", "STAX noreply@staxpay.co.uk", "STAX noreply@staxpay.co.uk"],
  ["HUMM", "HUMM (tbc)", "STAX noreply@staxpay.co.uk"],
];

function SectionDocumentsSent() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-stax-dark">
        Documents Sent to the Customer
      </h2>

      <p className="text-stax-dark leading-relaxed">
        Throughout the application journey, the customer will receive important
        documents via email. There are two key document types to be aware of:
      </p>

      <div className="space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="font-semibold text-stax-teal">
            E-Sign (Credit Agreement)
          </h3>
          <p className="mt-1 text-stax-dark">
            The E-Sign document is the digital credit agreement that the
            customer must sign electronically. This is sent{" "}
            <strong>automatically</strong> once the application has been approved
            by the lender. The email address it is sent from varies depending on
            the lender - see the table below.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="font-semibold text-stax-teal">Satisfaction Note</h3>
          <p className="mt-1 text-stax-dark">
            The satisfaction note confirms the customer is happy with the
            installation and triggers the payout process. This is{" "}
            <strong>not</strong> sent automatically - it is triggered by the
            retailer clicking the{" "}
            <span className="rounded bg-stax-teal/10 px-1.5 py-0.5 font-mono text-sm font-semibold text-stax-teal">
              SEND SAT NOTE
            </span>{" "}
            button on the application summary screen.
          </p>
        </div>
      </div>

      <DataTable headers={headers} rows={rows} />

      <Callout variant="warning">
        <p>
          <strong>Important:</strong> Customers should always check their{" "}
          <strong>junk/spam</strong> folder if they have not received their
          E-Sign or satisfaction note email. Email providers frequently filter
          automated messages.
        </p>
        <p className="mt-2">
          If the customer still cannot locate the email, contact Sales Support
          at{" "}
          <a
            href="mailto:salessupport@sherminfinance.co.uk"
            className="font-semibold text-stax-teal underline"
          >
            salessupport@sherminfinance.co.uk
          </a>{" "}
          for assistance.
        </p>
      </Callout>

    </motion.article>
  );
}

export default SectionDocumentsSent;
