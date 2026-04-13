import { motion } from "framer-motion";
import ImageZoom from "../ui/ImageZoom";
import Callout from "../ui/Callout";
import StepIndicator from "../ui/StepIndicator";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const loginFlowSteps = [
  {
    title: "Receive Welcome Email",
    description:
      "You will receive an email from Stax containing your login link and initial credentials. Check your spam/junk folder if you do not see it in your inbox.",
  },
  {
    title: "Set Your Password",
    description:
      "Click the link in the email to set up your password. Choose a strong password that you will remember — you will need it every time you log in.",
  },
  {
    title: "Arrive at the Dashboard",
    description:
      "Once your password is set, you will be taken directly to your Stax Dashboard. This is your central hub for managing all finance applications.",
  },
  {
    title: "Bookmark the Login Page",
    description:
      "Bookmark www.staxpay.co.uk in your browser so you can quickly access Stax for all future logins.",
  },
];

const subsequentLoginSteps = [
  {
    title: "Go to www.staxpay.co.uk",
    description: "Navigate to the Stax login page using your bookmarked link or by typing the URL directly.",
  },
  {
    title: "Enter Your Email Address",
    description: "Type the email address associated with your Stax account.",
  },
  {
    title: "Enter Your Password",
    description: "Type the password you created during your first login.",
  },
  {
    title: "Receive Verification Code",
    description:
      "A one-time verification code will be sent to your email. Check your inbox (and spam/junk) for this code.",
  },
  {
    title: "Enter the Code & Access Dashboard",
    description:
      "Enter the verification code on the login screen to complete authentication and access your Dashboard.",
  },
];

const loginTips = [
  "Always use the same browser you originally set up your account with to avoid issues.",
  "Bookmark www.staxpay.co.uk so you never have to search for the login page.",
  "If you do not receive a verification code, check your spam/junk folder first.",
  "Clear your browsing data regularly to prevent login errors — see the Clearing Browsing Data section.",
  "Never share your login credentials with anyone. Each user should have their own Stax account.",
  "If you are locked out or experiencing persistent issues, contact Shermin with your details for assistance.",
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
        <h2 className="text-3xl font-bold text-stax-dark mb-2">Logging In to Stax</h2>
        <p className="text-lg text-stax-dark/70">
          Everything you need to know about accessing your Stax account — from your very first login
          through to troubleshooting common issues.
        </p>
      </header>

      {/* First Login */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">First-Time Login</h3>
          <p className="text-stax-dark/80 mb-6">
            When your Stax account is created, you will receive a welcome email with everything you
            need to get started. Follow these steps to complete your first login and set up your
            account.
          </p>
          <StepIndicator steps={loginFlowSteps} />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom src="/images/screenshots/page-04.png" alt="First login welcome email" />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom src="/images/screenshots/page-05.png" alt="Password setup screen" />
        </motion.div>
      </motion.div>

      {/* Password Setup */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">Password Setup</h3>
          <p className="text-stax-dark/80 mb-4">
            Your password must meet security requirements. When you click the link in your welcome
            email, you will be prompted to create a password. Make sure it is something secure but
            memorable — you will need it every time you log in to Stax.
          </p>
          <Callout variant="warning">
            Do not share your password with colleagues. Each team member should have their own
            individual Stax login. If a colleague needs access, contact your administrator to set up
            a new account.
          </Callout>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom src="/images/screenshots/page-06.png" alt="Password creation form" />
        </motion.div>
      </motion.div>

      {/* Dashboard Arrival */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">Dashboard Arrival</h3>
          <p className="text-stax-dark/80 mb-4">
            After setting your password, you will land on your Stax Dashboard. This is the central
            hub where you can view, track, and manage all of your finance applications. Take a
            moment to familiarise yourself with the layout — the Dashboard sections are covered in
            detail later in this guide.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom src="/images/screenshots/page-07.png" alt="Dashboard overview on first login" />
        </motion.div>
      </motion.div>

      {/* Bookmarking */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">
            Bookmarking www.staxpay.co.uk
          </h3>
          <p className="text-stax-dark/80 mb-4">
            We strongly recommend bookmarking{" "}
            <span className="font-semibold text-stax-teal">www.staxpay.co.uk</span> in your
            browser. This ensures you always navigate to the correct login page and saves time on
            every subsequent visit.
          </p>
          <Callout variant="important">
            To bookmark in most browsers, press <kbd className="px-1.5 py-0.5 bg-stax-light rounded text-sm font-mono">Ctrl+D</kbd> (Windows)
            or <kbd className="px-1.5 py-0.5 bg-stax-light rounded text-sm font-mono">Cmd+D</kbd> (Mac) while on the Stax login page.
          </Callout>
        </motion.div>
      </motion.div>

      {/* Subsequent Logins */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">Subsequent Logins</h3>
          <p className="text-stax-dark/80 mb-6">
            Every time you return to Stax, you will follow a two-step authentication process. This
            includes entering your email and password, then verifying your identity with a one-time
            code sent to your email.
          </p>
          <StepIndicator steps={subsequentLoginSteps} />
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom src="/images/screenshots/page-08.png" alt="Subsequent login flow with verification code" />
        </motion.div>
      </motion.div>

      {/* Login Troubleshooting */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">Login Troubleshooting</h3>
          <p className="text-stax-dark/80 mb-4">
            If you are experiencing difficulties logging in, the solution often depends on how long
            it has been since your last successful login. Use the guide below to identify and resolve
            your issue.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-stax-teal/20 bg-stax-light p-5 space-y-2">
            <h4 className="font-semibold text-stax-dark">Since Yesterday</h4>
            <p className="text-sm text-stax-dark/70">
              If you logged in successfully yesterday but cannot today, try clearing your browsing
              data and cache first. Then attempt to log in again. This resolves the majority of
              day-to-day login issues.
            </p>
          </div>
          <div className="rounded-xl border border-stax-pink/20 bg-stax-light p-5 space-y-2">
            <h4 className="font-semibold text-stax-dark">Within the Last 28 Days</h4>
            <p className="text-sm text-stax-dark/70">
              If it has been up to 28 days since your last login, your account may require a
              password reset. Use the &quot;Forgot Password&quot; link on the login page to receive
              a reset email and create a new password.
            </p>
          </div>
          <div className="rounded-xl border border-stax-pink/30 bg-stax-light p-5 space-y-2">
            <h4 className="font-semibold text-stax-dark">More Than 45 Days</h4>
            <p className="text-sm text-stax-dark/70">
              If you have not logged in for 45 days or more, your account may have been
              deactivated for security reasons. Contact Shermin to have your account reactivated
              and a new welcome email sent.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Callout variant="warning">
            If your account has been inactive for more than 45 days, you will need to contact
            Shermin directly to have it reactivated. Self-service password reset will not work on
            deactivated accounts.
          </Callout>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom src="/images/screenshots/page-09.png" alt="Login troubleshooting guidance" />
        </motion.div>
      </motion.div>

      {/* Login Tips */}
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">Login Tips</h3>
          <p className="text-stax-dark/80 mb-4">
            Keep these tips in mind to ensure a smooth login experience every time you access Stax.
          </p>
          <ul className="space-y-3">
            {loginTips.map((tip, i) => (
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

        <motion.div variants={fadeUp}>
          <ImageZoom src="/images/screenshots/page-10.png" alt="Login tips summary" />
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
