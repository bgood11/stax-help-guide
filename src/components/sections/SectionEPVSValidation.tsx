import { motion } from 'framer-motion';
import ImageZoom from '../ui/ImageZoom';
import Callout from '../ui/Callout';
import StepIndicator from '../ui/StepIndicator';

const validationSteps = [
  {
    title: 'Click Send Sat Note',
    description:
      'From the Application Summary screen, click the Send Satisfaction Note button. Before the satisfaction note is sent, the system requires EPVS validation.',
    screenshot: {
      src: '/images/screenshots/clean/epvs-send-sat-note.png',
      alt: 'Send Satisfaction Note button highlighted on the application summary',
    },
  },
  {
    title: 'Enter EPVS Validation ID',
    description:
      'A dialog will prompt you to enter the EPVS Validation ID. This is a 5-digit numeric code obtained from the EPVS portal under the Validations section. You must register the installation on the EPVS portal first before this ID is available.',
    screenshot: {
      src: '/images/screenshots/clean/epvs-validate-dialog.png',
      alt: 'EPVS Validation ID entry dialog',
    },
  },
  {
    title: 'Click Validate',
    description:
      'Click the Validate button to submit the EPVS Validation ID. The system will check the ID against the EPVS portal to confirm the installation has been validated.',
  },
  {
    title: 'Receive Success Confirmation',
    description:
      'If the validation is successful, a green success message will be displayed confirming the EPVS validation has passed. The system checks that both the customer surname AND the Validation ID match the EPVS portal records.',
    screenshot: {
      src: '/images/screenshots/clean/epvs-success.png',
      alt: 'EPVS validation success message and Send SAT Note confirmation',
    },
  },
  {
    title: 'Send the Satisfaction Note',
    description:
      'Once validation is confirmed, you can proceed to send the satisfaction note to the customer. The sat note email will be dispatched from STAX (noreply@staxpay.co.uk).',
  },
];

export default function SectionEPVSValidation() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header>
        <h2 className="text-3xl font-bold text-stax-dark mb-2">
          Solar PV & Battery Storage EPVS Validation
        </h2>
        <p className="text-lg text-stax-dark/70">
          If you offer Solar PV or Battery Storage products AND you are EPVS registered, you will
          be required to enter the EPVS validation number into STAX before you are able to send a
          satisfaction note to your customer.
        </p>
      </header>

      <Callout variant="important" title="Before you start">
        You MUST have already registered the customer's installation and validated it on the EPVS
        portal before this step can be completed in STAX.
      </Callout>

      <StepIndicator steps={validationSteps} />

      <div>
        <ImageZoom
          src="/images/screenshots/clean/epvs-portal-validations.png"
          alt="EPVS portal Validations section showing where to find the Validation ID"
          caption="The Validation ID can be found in the EPVS portal under Validations - typically a 5-digit number"
        />
      </div>

      {/* Hints for Successful Validation */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-stax-teal">
          Hints for Successful Validation
        </h3>
        <p className="text-stax-dark/80">
          To ensure the EPVS validation passes on the first attempt, make sure the following
          details on the EPVS portal match the STAX application:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-stax-teal/15 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Name & Address</h4>
            <p className="mt-1 text-sm text-stax-dark/70">
              Customer Name and Address MUST match the finance agreement exactly.
            </p>
          </div>
          <div className="rounded-lg border border-stax-teal/15 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Product Type</h4>
            <p className="mt-1 text-sm text-stax-dark/70">
              The installation 'Product Type' MUST match the contract and finance agreement.
            </p>
          </div>
          <div className="rounded-lg border border-stax-teal/15 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Payment Method</h4>
            <p className="mt-1 text-sm text-stax-dark/70">
              The 'Payment Method' should be <strong>'Consumer Credit'</strong>.
            </p>
          </div>
          <div className="rounded-lg border border-stax-teal/15 bg-white p-4">
            <h4 className="font-semibold text-stax-dark">Finance Broker</h4>
            <p className="mt-1 text-sm text-stax-dark/70">
              Add the 'Finance Broker' as <strong>'Shermin Finance Limited'</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Common Error Types */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-stax-teal">
          Common Validation Errors
        </h3>
        <p className="text-stax-dark/80">
          When entering the validation ID and clicking 'Validate', you may encounter some error
          messaging. See below for potential errors and their meaning:
        </p>

        <div className="space-y-4">
          <Callout variant="warning" title="1. Surname Mismatch">
            The customer surname does not match our records. Please verify the surname in the
            EPVS Portal and try again. It is essential that you are inputting the customer's
            surname correctly on the application AND the EPVS portal.
          </Callout>
          <ImageZoom
            src="/images/screenshots/clean/epvs-error-surname.png"
            alt="EPVS error: customer surname does not match"
            className="max-w-md"
          />

          <Callout variant="warning" title="2. Validation Status">
            The status of the certification in the EPVS portal is not showing as 'Validated'. It
            needs to have a status of 'Validated' on the EPVS portal in order for this check to
            succeed. Please log into the EPVS portal to check the status and resolve.
          </Callout>
          <ImageZoom
            src="/images/screenshots/clean/epvs-error-status.png"
            alt="EPVS error: status not validated"
            className="max-w-md"
          />

          <Callout variant="warning" title="3. Non-Numeric Characters">
            EPVS validations are numeric only. If a non-numeric character is entered, this error
            message will be shown. Please enter a valid EPVS ID.
          </Callout>
          <ImageZoom
            src="/images/screenshots/clean/epvs-error-numeric.png"
            alt="EPVS error: please enter a valid EPVS ID"
            className="max-w-md"
          />

          <Callout variant="warning" title="4. Validation ID Not Found">
            This will appear when a completely incorrect validation ID is input. Validation not
            found in EPVS system. Verify the correct ID from the Validations section of the EPVS
            portal and re-enter it.
          </Callout>
          <ImageZoom
            src="/images/screenshots/clean/epvs-error-notfound.png"
            alt="EPVS error: validation not found in EPVS system"
            className="max-w-md"
          />
        </div>
      </section>
    </motion.article>
  );
}
