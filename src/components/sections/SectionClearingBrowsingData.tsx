import { motion } from 'framer-motion';
import Callout from '../ui/Callout';
import VideoLink from '../ui/VideoLink';
import StepIndicator from '../ui/StepIndicator';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const videoGuides = [
  { title: 'Google Chrome', url: 'https://www.loom.com/share/ef242050f99746e399d0db687cf0c10b' },
  { title: 'Microsoft Edge', url: 'https://www.loom.com/share/47af10799183414580f793c077ed3261' },
  { title: 'Safari on iPhone', url: 'https://www.loom.com/share/0d51135a573242459edfddec6d6f6da2' },
  { title: 'Safari on iPad', url: 'https://www.loom.com/share/159c40c7e5fa42959b87080e4ca8bf0c' },
];

const chromeSteps = [
  { title: 'Open Chrome Settings', description: 'Click the three dots in the top-right corner, then select Settings.' },
  { title: 'Go to Privacy and Security', description: "Click 'Privacy and security' in the left sidebar, then click 'Delete browsing data'." },
  { title: 'Select Time Range', description: "Set the time range to 'All time' to clear everything." },
  { title: 'Check All Boxes', description: "Make sure 'Browsing history', 'Cookies and other site data', and 'Cached images and files' are all ticked." },
  { title: 'Click Delete Data', description: "Click the 'Delete data' button. Close all browser tabs, then open a new window before logging into STAX." },
];

export default function SectionClearingBrowsingData() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      <header>
        <h2 className="text-3xl font-bold text-stax-dark mb-2">Clearing Browsing Data</h2>
        <p className="text-lg text-stax-dark/70">
          How to clear your browsing data. Here are a few videos that walk you through the
          process on a few different browsers and devices.
        </p>
      </header>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
        <motion.div variants={fadeUp}>
          <Callout variant="important" title="Why this matters">
            Clearing your browsing data is the number one fix for login issues with STAX. We
            recommend doing this weekly as a minimum. Always clear your cache before attempting
            to use a profile reset link.
          </Callout>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">Video Guides</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {videoGuides.map((guide) => (
              <VideoLink key={guide.title} title={guide.title} url={guide.url} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-stax-teal mb-4">
            Quick Steps (Google Chrome)
          </h3>
          <p className="text-stax-dark/80 mb-4">
            If you cannot access the video guides, follow these written steps for Chrome (the
            most common browser used with STAX):
          </p>
          <StepIndicator steps={chromeSteps} />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Callout variant="tip" title="After clearing">
            After clearing your browsing data, close ALL open browser tabs and windows. Open a
            fresh browser window before navigating to www.staxpay.co.uk to log in.
          </Callout>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
