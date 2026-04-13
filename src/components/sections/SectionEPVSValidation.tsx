import { motion } from "framer-motion";
import ImageZoom from "../ui/ImageZoom";
import Callout from "../ui/Callout";
import StepIndicator from "../ui/StepIndicator";

const validationSteps = [
  {
    title: "Click Send Sat Note",
    description:
      "From the Application Summary screen, click the Send Satisfaction Note button. Before the satisfaction note is sent, the system requires EPVS validation.",
  },
  {
    title: "Enter EPVS Validation ID",
    description:
      "A dialog will prompt you to enter the EPVS Validation ID. This is a 5-digit numeric code obtained from the EPVS portal under the Validations section. You must register the installation on the EPVS portal first before this ID is available.",
  },
  {
    title: "Click Validate",
    description:
      "Click the Validate button to submit the EPVS Validation ID. The system will check the ID against the EPVS portal to confirm the installation has been validated.",
  },
  {
    title: "Receive Success Confirmation",
    description:
      "If the validation is successful, a green success message will be displayed confirming the EPVS validation has passed. The system checks that both the customer surname AND the Validation ID match the EPVS portal records.",
  },
  {
    title: "Send the Satisfaction Note",
    description:
      "Once validation is confirmed, you can proceed to send the satisfaction note to the customer. The sat note email will be dispatched from STAX (noreply@staxpay.co.uk).",
  },
];

function SectionEPVSValidation() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-stax-dark">
        EPVS Validation
      </h2>

      <p className="text-stax-dark leading-relaxed">
        Before a satisfaction note can be sent to the customer, the installation
        must be validated against the <strong>EPVS portal</strong>. This
        validation step ensures that the installation has been properly
        registered and meets the required standards. You must register the
        installation on the EPVS portal <strong>before</strong> attempting
        validation in STAX.
      </p>

      <StepIndicator steps={validationSteps} />

      <ImageZoom
        src="/images/screenshots/page-36.png"
        alt="Send Satisfaction Note button triggering EPVS validation prompt"
      />

      <ImageZoom
        src="/images/screenshots/page-37.png"
        alt="EPVS Validation ID entry dialog"
      />

      {/* Hints for Successful Validation */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-stax-teal">
          Hints for Successful Validation
        </h3>
        <p className="text-stax-dark leading-relaxed">
          To ensure the EPVS validation passes on the first attempt, make sure
          the following details on the EPVS portal match the STAX application:
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Name &amp; Address</h4>
            <p className="mt-1 text-sm text-stax-dark">
              The customer's name and address on the EPVS portal must exactly
              match the details on the STAX application.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Product Type</h4>
            <p className="mt-1 text-sm text-stax-dark">
              The product type registered on EPVS must match the product type on
              the finance application (e.g. windows, doors, conservatory).
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Payment Method</h4>
            <p className="mt-1 text-sm text-stax-dark">
              The payment method on the EPVS portal must be set to{" "}
              <strong>Consumer Credit</strong>.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Finance Broker</h4>
            <p className="mt-1 text-sm text-stax-dark">
              The finance broker field must be set to{" "}
              <strong>Shermin Finance Limited</strong>.
            </p>
          </div>
        </div>
      </section>

      <ImageZoom
        src="/images/screenshots/page-38.png"
        alt="EPVS portal showing validation details and hints"
      />

      {/* Common Error Types */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-stax-teal">
          Common Validation Errors
        </h3>
        <p className="text-stax-dark leading-relaxed">
          If the EPVS validation fails, you will see an error message explaining
          the reason. Below are the most common error types and how to resolve
          them:
        </p>

        <Callout variant="warning">
          <p>
            <strong>Surname Mismatch:</strong> The customer surname on the STAX
            application does not match the surname registered on the EPVS
            portal. Double-check for spelling errors, maiden/married name
            differences, or hyphenated names. Update the EPVS record to match
            and retry.
          </p>
        </Callout>

        <Callout variant="warning">
          <p>
            <strong>Status Not Validated:</strong> The installation on the EPVS
            portal has not yet reached "Validated" status. Ensure the
            installation registration is complete and has been fully validated on
            the EPVS portal before retrying in STAX.
          </p>
        </Callout>

        <Callout variant="warning">
          <p>
            <strong>Non-Numeric ID:</strong> The Validation ID entered contains
            non-numeric characters. The EPVS Validation ID must be a{" "}
            <strong>5-digit numeric code</strong> only. Remove any letters,
            spaces, or special characters and retry.
          </p>
        </Callout>

        <Callout variant="warning">
          <p>
            <strong>Validation ID Not Found:</strong> The entered Validation ID
            does not exist on the EPVS portal. Verify the correct ID from the
            Validations section of the EPVS portal and re-enter it. If the
            installation has not been registered, complete the registration
            first.
          </p>
        </Callout>
      </section>

      <ImageZoom
        src="/images/screenshots/page-39.png"
        alt="EPVS validation error messages"
      />

      <ImageZoom
        src="/images/screenshots/page-40.png"
        alt="Successful EPVS validation confirmation"
      />
    </motion.article>
  );
}

export default SectionEPVSValidation;
