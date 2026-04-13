import { motion } from 'framer-motion';
import ImageZoom from '../ui/ImageZoom';
import Callout from '../ui/Callout';
import StepIndicator from '../ui/StepIndicator';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const firstLoginSteps = [
  {
    title: 'Receive Welcome Email',
    description:
      'You will be sent a login email from noreply@staxpay.co.uk. Click on the blue hyperlink or copy and paste it into your browser bar to enable your login. Please ignore the username shown in the email - you do not need it.',
  },
  {
    title: 'Set Your Password',
    description:
      'Create a password using the on-screen instructions. Your password must include at least 8 characters, 1 letter, and 1 number. Once both password boxes match and go green, click Change Password.',
  },
  {
    title: 'Arrive at the Dashboard',
    description:
      'Once complete you will be directed to the STAX dashboard. This is your HOME screen. You may now delete the email sent to activate your login - this cannot be used again.',
  },
  {
    title: 'Complete All Training',
    description:
      "You will need to complete ALL training in the 'TRAINING' tab. Once all training is completed, the 'START A NEW APPLICATION' button at the top of the screen will turn blue and you are ready to start using STAX.",
  },
];

const subsequentLoginSteps = [
  {
    title: 'Go to www.staxpay.co.uk',
    description: 'Navigate to www.staxpay.co.uk and click the Login button.',
  },
  {
    title: 'Enter Your Email Address',
    description:
      "Enter your email address (NOT your username) and click 'Log In'.",
  },
  {
    title: 'Enter Verification Code',
    description:
      'A verification code will be sent to your email address. Retrieve this code and enter it on the screen, then follow the on-screen instructions. This will take you to your STAX dashboard.',
  },
];

export default function SectionLoggingIn() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      <header>
        <h2 className="text-3xl font-bold text-stax-dark mb-2">Logging into STAX</h2>
        <p className="text-lg text-stax-dark/70">
          Everything you need to know about accessing your STAX account, from your very first
          login through to troubleshooting common issues.
        </p>
      </header>

      {/* First Login */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">First-Time Login</h3>
          <p className="text-stax-dark/80 mb-6">
            To login into STAX for the first time you will need a user profile created by the
            STAX team. Follow these steps to complete your first login.
          </p>
          <StepIndicator steps={firstLoginSteps} />
        </motion.div>

        <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-2">
          <ImageZoom src="/images/screenshots/clean/login-welcome-email.png" alt="First login welcome email" />
          <ImageZoom src="/images/screenshots/clean/login-password-setup-before.png" alt="Password setup screen" />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom src="/images/screenshots/clean/login-dashboard-arrival.png" alt="STAX dashboard on first login" caption="Once complete you will be directed to the STAX dashboard" />
        </motion.div>
      </motion.div>

      {/* Bookmarking */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">
            Bookmarking the Login Page
          </h3>
          <Callout variant="important" title="Important">
            Please favourite the following website in your internet browser:{' '}
            <span className="font-bold">www.staxpay.co.uk</span>. The next time you log into
            STAX you will go to this page and click the Login button.
          </Callout>
        </motion.div>
        <motion.div variants={fadeUp}>
          <ImageZoom src="/images/screenshots/clean/login-staxpay-website.png" alt="Staxpay.co.uk website with Login button highlighted" />
        </motion.div>
      </motion.div>

      {/* Subsequent Logins */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">Subsequent Logins</h3>
          <p className="text-stax-dark/80 mb-6">
            When you log into STAX moving forward you will do so every time by going to
            www.staxpay.co.uk and clicking the login button.
          </p>
          <StepIndicator steps={subsequentLoginSteps} />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Callout variant="warning" title="Please Note">
            CLEAR BROWSING DATA weekly as a minimum. Always use your email address (not username)
            in the login screen.
          </Callout>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom src="/images/screenshots/clean/login-email-entry.png" alt="STAX login screen showing email entry and verification" />
        </motion.div>
      </motion.div>

      {/* Login Troubleshooting */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">Login Troubleshooting</h3>
          <p className="text-stax-dark/80 mb-4">
            If you are having difficulties logging into STAX please use the following as a guide:
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-stax-teal/20 bg-white p-5 space-y-2">
            <h4 className="font-semibold text-stax-dark">"I could login yesterday!"</h4>
            <p className="text-sm text-stax-dark/70">
              This is most probably a cache issue. Clear your browsing data in full. Once cleared,
              close all open browser tabs. Then open a new one before you continue to login again.
            </p>
          </div>
          <div className="rounded-xl border border-stax-pink/20 bg-white p-5 space-y-2">
            <h4 className="font-semibold text-stax-dark">"I haven't logged in for over 28 days"</h4>
            <p className="text-sm text-stax-dark/70">
              Contact either your Shermin BDM or the STAX team at{' '}
              <a href="mailto:salessupport@sherminfinance.co.uk" className="text-stax-teal underline">
                salessupport@sherminfinance.co.uk
              </a>{' '}
              to get your profile reset. STAX will send you a one-time-use email. Click the hyperlink
              and follow the on-screen instructions. Delete the email once complete.{' '}
              <strong>Before clicking on the reset link</strong>, clear your browsing history in full.
            </p>
          </div>
          <div className="rounded-xl border border-stax-pink/30 bg-white p-5 space-y-2">
            <h4 className="font-semibold text-stax-dark">"I haven't logged in for over 45 days"</h4>
            <p className="text-sm text-stax-dark/70">
              Contact either your Shermin BDM or the STAX team at{' '}
              <a href="mailto:salessupport@sherminfinance.co.uk" className="text-stax-teal underline">
                salessupport@sherminfinance.co.uk
              </a>{' '}
              to get your profile re-enabled. You will have been disabled due to lack of activity.
              STAX will send you a one-time-use email. Click the hyperlink and follow the on-screen
              instructions. Delete the email once complete.{' '}
              <strong>Before clicking on the reset link</strong>, clear your browsing history in full.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom src="/images/screenshots/clean/login-troubleshooting-tips.png" alt="Login troubleshooting guidance" />
        </motion.div>
      </motion.div>

      {/* Login Tips */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">Login Tips</h3>
          <p className="text-stax-dark/80 mb-4">
            If you are having trouble logging in, follow these hints and tips:
          </p>
          <ul className="space-y-3">
            {[
              'Clear Browsing Data - weekly as a minimum',
              "Logout correctly using the 'Logout' facility on the STAX dashboard in the top right-hand corner",
              'Close all active browser windows regularly',
              "Try using an 'Incognito' or 'Private' browsing window in your internet browser when using STAX",
              "Always use your 'email address' in the login screen",
              'Regularly log into STAX to avoid needing to be reset or being disabled due to lack of activity',
            ].map((tip, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-lg bg-stax-light px-4 py-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stax-teal text-white text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-stax-dark/80 text-sm">{tip}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </motion.div>
    </motion.article>
  );
}
