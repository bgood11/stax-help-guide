import { motion } from "framer-motion";
import ImageZoom from "../ui/ImageZoom";
import VideoLink from "../ui/VideoLink";

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

const videoGuides = [
  { title: "Google Chrome", url: "#" },
  { title: "Microsoft Edge", url: "#" },
  { title: "Safari on iPhone", url: "#" },
  { title: "Safari on iPad", url: "#" },
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
          Regularly clearing your browsing data can resolve many common login and display issues
          with Stax. Follow the video guide for your browser below.
        </p>
      </header>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
        <motion.div variants={fadeUp}>
          <p className="text-stax-dark/80">
            Over time, your browser stores cached files, cookies, and other temporary data. This
            data can sometimes become outdated or corrupted, leading to problems such as login
            failures, pages not loading correctly, or old information being displayed on your Stax
            Dashboard. Clearing your browsing data forces the browser to fetch fresh information
            from Stax, which typically resolves these issues.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="text-stax-dark/80">
            We recommend clearing your browsing data as a{" "}
            <span className="font-semibold text-stax-teal">first troubleshooting step</span>{" "}
            whenever you encounter any issues with Stax. Select your browser from the video guides
            below for step-by-step instructions.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="grid gap-6 sm:grid-cols-2"
        >
          {videoGuides.map((guide) => (
            <VideoLink
              key={guide.title}
              title={guide.title}
              url={guide.url}
            />
          ))}
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/page-11.png"
            alt="Clearing browsing data instructions overview"
          />
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
