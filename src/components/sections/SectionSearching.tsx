import { motion } from "framer-motion";
import ImageZoom from "../ui/ImageZoom";
import Callout from "../ui/Callout";

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

const rangeOptions = [
  { label: "Today", description: "Shows applications from today only." },
  { label: "Yesterday", description: "Shows applications from the previous day." },
  { label: "Last 7 Days", description: "Shows applications from the past week." },
  { label: "Last 30 Days", description: "Shows applications from the past 30 days." },
  { label: "Last 90 Days", description: "Shows applications from the past 3 months." },
  { label: "Custom Range", description: "Allows you to set specific start and end dates for your search." },
];

const searchCriteria = [
  {
    label: "AP Number",
    description:
      "Search by the unique application reference number. This is the fastest way to find a specific application.",
  },
  {
    label: "Customer Name",
    description:
      "Search by the customer's first name, last name, or full name to find their application(s).",
  },
  {
    label: "Postcode",
    description:
      "Search by the customer's postcode to locate applications in a specific area.",
  },
  {
    label: "Lender",
    description:
      "Filter applications by lender to see all applications submitted to a specific finance provider.",
  },
  {
    label: "Stages / Statuses",
    description:
      "Filter by application stage or status to see all applications at a particular point in the process — for example, all 'Referred' or 'Approved' applications.",
  },
  {
    label: "Branches",
    description:
      "If you have access to multiple branches, filter applications by branch to view activity for a specific location.",
  },
];

export default function SectionSearching() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      <header>
        <h2 className="text-3xl font-bold text-stax-dark mb-2">Searching the Dashboard</h2>
        <p className="text-lg text-stax-dark/70">
          Stax provides powerful search and filter tools to help you quickly find the applications
          you need. Learn how to use date range searches and the search box to navigate your
          Dashboard efficiently.
        </p>
      </header>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
        {/* Date Range Search */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="text-2xl font-semibold text-stax-teal">Date Range Search</h3>
          <p className="text-stax-dark/80">
            The date range search allows you to filter applications by when they were created or
            last updated. This is particularly useful when you want to review recent activity or
            look at applications from a specific period.
          </p>

          <div className="space-y-3">
            <h4 className="font-semibold text-stax-dark">How to Use the Date Range Search</h4>
            <ol className="list-decimal list-inside space-y-2 text-stax-dark/80 text-sm">
              <li>
                Click the <span className="font-semibold text-stax-teal">Range</span> dropdown at
                the top of your Dashboard.
              </li>
              <li>Select one of the predefined date range options, or choose a custom range.</li>
              <li>
                The start and end date fields will{" "}
                <span className="font-semibold">auto-populate</span> based on your selection. For a
                custom range, manually enter your desired dates.
              </li>
              <li>
                Click the <span className="font-semibold text-stax-teal">SHOW</span> button to
                apply the filter and display matching applications.
              </li>
            </ol>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {rangeOptions.map((option) => (
              <div
                key={option.label}
                className="rounded-lg border border-stax-teal/15 bg-stax-light px-4 py-3 space-y-1"
              >
                <h5 className="font-semibold text-stax-dark text-sm">{option.label}</h5>
                <p className="text-xs text-stax-dark/60">{option.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/page-16.png"
            alt="Date range search controls on the Dashboard"
          />
        </motion.div>

        {/* Search Box */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h3 className="text-2xl font-semibold text-stax-teal">Search Box</h3>
          <p className="text-stax-dark/80">
            The search box provides a flexible way to find applications using a variety of criteria.
            You can search by any of the following fields to quickly locate the application you are
            looking for.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {searchCriteria.map((criterion) => (
              <div
                key={criterion.label}
                className="flex items-start gap-3 rounded-xl border border-stax-teal/15 bg-stax-light p-4"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-stax-teal/10 text-stax-teal font-bold text-xs">
                  {criterion.label.charAt(0)}
                </span>
                <div className="space-y-1">
                  <h5 className="font-semibold text-stax-dark text-sm">{criterion.label}</h5>
                  <p className="text-xs text-stax-dark/70">{criterion.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Callout variant="important">
            Combine the date range filter with the search box for the most precise results. For
            example, set the range to &quot;Last 30 Days&quot; and then search for a specific
            customer name to quickly find recent applications.
          </Callout>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ImageZoom
            src="/images/screenshots/page-17.png"
            alt="Search box and filter options on the Dashboard"
          />
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
