import { motion } from "framer-motion";
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
  ['Min Age at application?', '18', '21', '21', '18', '18', '18'],
  ['Max Age at Application?', '79', '79', '79', '79', '79', '79'],
  ['Max Age at end of Agreement?', '85', '85', '85', '85', '85', '85'],
  ['Minimum Address History?', '3years - UK only', '3years - UK only', '3years - UK only', '3years - UK only', '3years - UK only', '3years - UK only'],
  ['Are tenants accepted?', 'Homeowner only', 'Homeowner only', 'Homeowner only', 'Homeowner only', 'Homeowner only', 'Homeowner & Tenant'],
  ['Can installation be at another address?', 'Yes', 'Yes', 'Yes', 'Yes', 'No', 'Yes'],
  ['Are joint applicants required?', 'No', 'No', 'No', 'No', 'No', 'No'],
  ['Is household income a requirement?', 'Yes', 'Yes', 'Yes', 'Yes', 'No', 'No'],
  ['Acceptable income statuses', 'Employed / Self-Employed / Retired', 'Employed / Self-Employed / Retired', 'Employed / Self-Employed / Retired', 'Employed / Self-Employed / Retired', 'Employed / Self-Employed / Retired', 'Employed / Self-Employed / Retired'],
  ['Are underwriting notes available on STAX?', 'Yes', 'Yes', 'No', 'No', 'No', 'No'],
  ['Is email address mandatory?', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
  ['Can amendments be made on STAX?', 'Yes', 'No', 'No', 'Yes', 'No', 'No'],
  ['Bank Account owner', 'Applicant or Joint, Not a business account', 'Applicant or Joint, Not a business account', 'Applicant or Joint, Not a business account', 'Applicant or Joint, Not a business account', 'APPLICANT ONLY, Not a joint card, Not a business card', 'APPLICANT ONLY, Not a joint card, Not a business card'],
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
          <strong>Key differences:</strong> HUMM is the only lender that accepts
          both <strong>Homeowners</strong> and <strong>Tenants</strong>. All
          other lenders require the applicant to be a homeowner. THIS Bank and
          Propensio require a minimum age of <strong>21</strong>, while all other
          lenders accept applicants from age <strong>18</strong>. ZOPA does not
          allow installation at another address. Only BNP Paribas and V12
          support loan amendments on STAX.
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

    </motion.article>
  );
}

export default SectionMinimumLenderCriteria;
