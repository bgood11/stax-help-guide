import { motion } from "framer-motion";
import ImageZoom from "../ui/ImageZoom";
import Callout from "../ui/Callout";
import DataTable from "../ui/DataTable";

const headers = [
  "Criteria",
  "BNP Paribas",
  "THIS Bank",
  "PROPENSIO",
  "V12",
  "ZOPA",
  "HUMM",
];

const rows = [
  ["Minimum Age", "18", "18", "18", "18", "21", "18"],
  ["Maximum Age", "79", "79", "79", "79", "79", "79"],
  ["End Age", "85", "85", "85", "85", "85", "85"],
  [
    "UK Residency",
    "3 years",
    "3 years",
    "3 years",
    "3 years",
    "3 years",
    "3 years",
  ],
  [
    "Property Status",
    "Homeowner",
    "Homeowner",
    "Homeowner",
    "Homeowner",
    "Homeowner",
    "Homeowner / Tenant",
  ],
  [
    "Income Required",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
  ],
  [
    "UK Bank Account",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
  ],
  [
    "Valid Debit Card",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
  ],
  [
    "Not Bankrupt / IVA",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
  ],
  [
    "Email Address Required",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
  ],
  [
    "Mobile Number Required",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
  ],
  [
    "Amendments Available",
    "Yes",
    "No",
    "No",
    "Yes",
    "No",
    "No",
  ],
  [
    "Joint Applications",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
  ],
];

function SectionMinimumLenderCriteria() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-stax-dark">
        Minimum Lender Criteria
      </h2>

      <p className="text-stax-dark leading-relaxed">
        Each lender on the STAX platform has specific eligibility requirements
        that the customer must meet before an application can be submitted. The
        table below provides a side-by-side comparison of the minimum criteria
        across all six lenders.
      </p>

      <Callout variant="important">
        <p>
          <strong>Key difference:</strong> HUMM is the only lender that accepts
          both <strong>Homeowners</strong> and <strong>Tenants</strong>. All
          other lenders require the applicant to be a homeowner. ZOPA requires a
          minimum age of <strong>21</strong>, while all other lenders accept
          applicants from age <strong>18</strong>.
        </p>
      </Callout>

      <div className="overflow-x-auto">
        <DataTable
          headers={headers}
          rows={rows}
          stickyFirstColumn={true}
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-stax-dark">
          Additional Notes
        </h3>
        <ul className="list-disc space-y-2 pl-6 text-stax-dark">
          <li>
            <strong>Amendments:</strong> Only <strong>BNP Paribas</strong> and{" "}
            <strong>V12</strong> currently support loan amendments after
            approval. For all other lenders, a new application must be submitted
            if changes are required.
          </li>
          <li>
            <strong>End Age:</strong> The loan term plus the customer's age at
            application must not exceed 85 years for any lender.
          </li>
          <li>
            <strong>Joint Applications:</strong> None of the lenders currently
            support joint applications through STAX.
          </li>
        </ul>
      </div>

      <ImageZoom
        src="/images/screenshots/page-27.png"
        alt="Minimum lender criteria comparison table across all six lenders"
      />
    </motion.article>
  );
}

export default SectionMinimumLenderCriteria;
