import { motion } from "framer-motion";
import Callout from "../ui/Callout";

function SectionTroubleshooting() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-stax-dark">
        Troubleshooting: Email Issues
      </h2>

      <p className="text-stax-dark leading-relaxed">
        One of the most common support queries relates to customers not
        receiving their E-Sign or satisfaction note emails. In many cases, this
        is linked to the customer using a <strong>Hotmail</strong> email address
        or an outdated email application.
      </p>

      {/* Hotmail Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-stax-teal">
          Hotmail Email Addresses
        </h3>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="font-semibold text-stax-dark">The Problem</h4>
          <p className="mt-1 text-stax-dark leading-relaxed">
            Hotmail no longer exists as a standalone email service. Microsoft
            migrated all Hotmail accounts to{" "}
            <strong>Outlook (outlook.com)</strong> several years ago. However,
            many customers still use their old <code>@hotmail.co.uk</code> or{" "}
            <code>@hotmail.com</code> email addresses without realising the
            underlying platform has changed.
          </p>
          <p className="mt-2 text-stax-dark leading-relaxed">
            Customers who use <strong>out-of-date email apps</strong> (such as
            the old Windows Mail app or third-party clients that haven't been
            updated) may miss incoming emails entirely. These older apps may not
            sync correctly with the Outlook servers, causing emails to appear
            missing.
          </p>
        </div>

        <div className="rounded-lg border border-stax-teal/30 bg-stax-teal/5 p-4">
          <h4 className="font-semibold text-stax-teal">The Solution</h4>
          <p className="mt-1 text-stax-dark leading-relaxed">
            Advise the customer to follow these steps:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-6 text-stax-dark">
            <li>
              Open a web browser (Chrome, Edge, Safari, Firefox, etc.)
            </li>
            <li>
              Navigate to{" "}
              <strong>
                <a
                  href="https://outlook.com"
                  className="text-stax-teal underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Outlook.com
                </a>
              </strong>
            </li>
            <li>
              Log in using their <strong>Hotmail credentials</strong> (their
              @hotmail email address and existing password)
            </li>
            <li>
              Check the <strong>Inbox</strong> for the expected email
            </li>
            <li>
              If not in the Inbox, check the <strong>Spam/Junk</strong> folder
            </li>
            <li>
              Also check the <strong>Trash/Deleted Items</strong> folder - some
              filters may auto-delete messages
            </li>
            <li>
              Review <strong>auto-delete settings</strong> and email rules under
              Settings &rarr; Mail &rarr; Rules to ensure automated emails are
              not being filtered out
            </li>
          </ol>
        </div>
      </section>

      {/* Outlook Users */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-stax-teal">
          Outlook Users
        </h3>
        <p className="text-stax-dark leading-relaxed">
          This issue is not limited to Hotmail users. Some customers with{" "}
          <strong>@outlook.com</strong> or <strong>@outlook.co.uk</strong>{" "}
          addresses may also experience the same problem if they are using an
          outdated desktop or mobile email client. The same solution applies -
          direct them to log in via the browser at{" "}
          <strong>Outlook.com</strong> to check for the missing email.
        </p>
      </section>

      <Callout variant="important">
        <p>
          <strong>Tip:</strong> If a customer reports they haven't received an
          email, always ask which email app they are using. If they are using
          anything other than the Outlook web app or a recently updated mail
          client, guide them through the browser-based login steps above before
          escalating to Sales Support.
        </p>
      </Callout>

    </motion.article>
  );
}

export default SectionTroubleshooting;
