import { motion } from "framer-motion";
import ImageZoom from "../ui/ImageZoom";
import Callout from "../ui/Callout";
import StepIndicator from "../ui/StepIndicator";

const cancellationSteps = [
  {
    title: "Check Availability",
    description:
      "The Loan Cancellation button is available at all stages of the application up to and including Payout Made. If the application has already been paid out, contact Sales Support directly.",
  },
  {
    title: "Click Loan Cancellation",
    description:
      "On the Application Summary screen, locate and click the Loan Cancellation button from the blue action buttons at the top of the page.",
  },
  {
    title: "Confirm via Pop-Up",
    description:
      "A pop-up confirmation dialog will appear asking you to confirm that you want to cancel the application. Review the details carefully before proceeding.",
  },
  {
    title: "Enter Cancellation Reason",
    description:
      "You will be prompted to enter a reason for cancelling the application. Provide a clear and accurate reason - this is recorded against the application for audit purposes.",
  },
  {
    title: "Click Confirm Cancellation",
    description:
      "Once you have entered the reason, click the Confirm Cancellation button to submit the cancellation request.",
  },
  {
    title: "Success Message",
    description:
      "A success message will be displayed on screen confirming that the application has been cancelled. The lender will be notified automatically.",
  },
  {
    title: "Dashboard Updates",
    description:
      "The dashboard will update to reflect the cancelled status. The application will now show as Cancelled in the application list and the Application Flow Timeline.",
  },
];

function SectionCancellingApplication() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-stax-dark">
        Cancelling an Application
      </h2>

      <p className="text-stax-dark leading-relaxed">
        If a customer wishes to cancel their finance application, or if the
        installation is no longer proceeding, you can cancel the application
        directly from the Application Summary screen. The cancellation process
        is straightforward and can be completed in a few steps.
      </p>

      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="font-semibold text-stax-dark">When Can You Cancel?</h3>
        <p className="mt-1 text-stax-dark">
          The Loan Cancellation button is available at{" "}
          <strong>all stages</strong> of the application, from Application
          Initiated right through to Payout Made. Once an application is
          cancelled, it cannot be reinstated - a completely new application must
          be submitted if the customer changes their mind.
        </p>
      </div>

      <StepIndicator steps={cancellationSteps} />

      <ImageZoom
        src="/images/screenshots/clean/cancel-confirm-dialog.png"
        alt="Loan cancellation pop-up confirmation dialog"
      />

      <ImageZoom
        src="/images/screenshots/clean/cancel-reason-input.png"
        alt="Cancel reason input field"
        caption="Enter your reason for cancelling and click Confirm Cancellation"
      />

      <ImageZoom
        src="/images/screenshots/clean/cancel-success-banner.png"
        alt="Cancellation success confirmation"
        caption="Success message confirming your cancel request has been submitted"
      />

      <Callout variant="warning">
        <p>
          <strong>Encountering an error?</strong> If you receive an error message
          when attempting to cancel an application, or if the cancellation does
          not appear to have processed correctly, email{" "}
          <a
            href="mailto:salessupport@sherminfinance.co.uk"
            className="font-semibold text-stax-teal underline"
          >
            salessupport@sherminfinance.co.uk
          </a>{" "}
          with the application reference number and a description of the issue.
          The Sales Support team will investigate and resolve the cancellation
          manually.
        </p>
      </Callout>
    </motion.article>
  );
}

export default SectionCancellingApplication;
