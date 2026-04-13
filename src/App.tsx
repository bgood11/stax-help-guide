import {
  lazy,
  Suspense,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ComponentType,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X, Loader2 } from 'lucide-react';
import { useActiveSection } from './hooks/useActiveSection';
import { useProgress } from './hooks/useProgress';
import { useSearch, type SearchResult } from './hooks/useSearch';
import { sections } from './data/sections';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ContentArea from './components/layout/ContentArea';

/* ---------------------------------------------------------------------------
 * Lazy-loaded section components
 * --------------------------------------------------------------------------- */
const sectionComponents: Record<string, React.LazyExoticComponent<ComponentType>> = {
  'logging-in':              lazy(() => import('./components/sections/SectionLoggingIn')),
  'clearing-browsing-data':  lazy(() => import('./components/sections/SectionClearingBrowsingData')),
  'dashboard-glossary':      lazy(() => import('./components/sections/SectionDashboardGlossary')),
  'understanding-dashboard': lazy(() => import('./components/sections/SectionUnderstandingDashboard')),
  'searching':               lazy(() => import('./components/sections/SectionSearching')),
  'applications-initiated':  lazy(() => import('./components/sections/SectionApplicationsInitiated')),
  'customer-follow-up':      lazy(() => import('./components/sections/SectionCustomerFollowUp')),
  'credit-agreement-expiry': lazy(() => import('./components/sections/SectionCreditAgreementExpiry')),
  'documents-sent':          lazy(() => import('./components/sections/SectionDocumentsSent')),
  'minimum-lender-criteria': lazy(() => import('./components/sections/SectionMinimumLenderCriteria')),
  'application-summary':     lazy(() => import('./components/sections/SectionApplicationSummary')),
  'button-summary':          lazy(() => import('./components/sections/SectionButtonSummary')),
  'cancelling-application':  lazy(() => import('./components/sections/SectionCancellingApplication')),
  'troubleshooting':         lazy(() => import('./components/sections/SectionTroubleshooting')),
  'epvs-validation':         lazy(() => import('./components/sections/SectionEPVSValidation')),
  'loan-amendments':         lazy(() => import('./components/sections/SectionLoanAmendments')),
};

/* ---------------------------------------------------------------------------
 * Loading spinner
 * --------------------------------------------------------------------------- */
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="flex flex-col items-center gap-4">
        <Loader2 size={32} className="animate-spin text-stax-teal" />
        <p className="text-sm font-medium text-stax-dark/40">Loading section...</p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Search modal (inline)
 * --------------------------------------------------------------------------- */
interface SearchModalProps {
  isOpen: boolean;
  query: string;
  results: SearchResult[];
  onQueryChange: (q: string) => void;
  onSelect: (sectionId: string) => void;
  onClose: () => void;
}

function SearchModal({
  isOpen,
  query,
  results,
  onQueryChange,
  onSelect,
  onClose,
}: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Small delay to allow the animation to start before focusing
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-stax-dark/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[12vh] z-[70] mx-auto max-w-lg"
          >
            <div className="bg-white rounded-2xl shadow-2xl shadow-stax-dark/20 border border-stax-teal/10 overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-stax-teal/8">
                <Search size={18} className="text-stax-teal/60 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => onQueryChange(e.target.value)}
                  placeholder="Search sections, topics, keywords..."
                  className="flex-1 text-sm text-stax-dark placeholder:text-stax-dark/30 outline-none bg-transparent"
                />
                <button
                  onClick={onClose}
                  className="p-1 rounded-md text-stax-dark/30 hover:text-stax-dark/60 hover:bg-stax-light transition-colors cursor-pointer"
                  aria-label="Close search"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[50vh] overflow-y-auto sidebar">
                {query.trim() === '' ? (
                  <div className="px-5 py-8 text-center">
                    <p className="text-sm text-stax-dark/35">
                      Start typing to search across all sections
                    </p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="px-5 py-8 text-center">
                    <p className="text-sm text-stax-dark/45 font-medium">No results found</p>
                    <p className="text-xs text-stax-dark/30 mt-1">
                      Try a different keyword or browse the sidebar
                    </p>
                  </div>
                ) : (
                  <ul className="py-2">
                    {results.map(result => {
                      const section = sections.find(s => s.id === result.sectionId);
                      if (!section) return null;
                      const Icon = section.icon;

                      return (
                        <li key={result.sectionId}>
                          <button
                            onClick={() => onSelect(result.sectionId)}
                            className="w-full flex items-start gap-3 px-5 py-3 hover:bg-stax-light/60 transition-colors text-left cursor-pointer"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-stax-teal/8 flex items-center justify-center mt-0.5">
                              <Icon size={16} className="text-stax-teal" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-stax-dark truncate">
                                {result.title}
                              </p>
                              {result.matchedKeywords.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-1.5">
                                  {result.matchedKeywords.slice(0, 4).map(kw => (
                                    <span
                                      key={kw}
                                      className="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium bg-stax-blue/10 text-stax-blue"
                                    >
                                      {kw}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between px-5 py-2.5 border-t border-stax-teal/5 bg-stax-light/40">
                <span className="text-[10px] text-stax-dark/30 font-medium">
                  {results.length > 0
                    ? `${results.length} result${results.length > 1 ? 's' : ''}`
                    : '\u00A0'}
                </span>
                <div className="flex items-center gap-2 text-[10px] text-stax-dark/30 font-medium">
                  <kbd className="px-1 py-0.5 rounded border border-stax-dark/10 bg-white">esc</kbd>
                  <span>to close</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------------------------------------------------
 * App
 * --------------------------------------------------------------------------- */
export default function App() {
  const { activeSection, setActiveSection, prevSection, nextSection } = useActiveSection();
  const { completed, markComplete, isComplete, progressPercentage } = useProgress();
  const search = useSearch();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  /* Keyboard shortcut: Ctrl+K / Cmd+K */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        search.open();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [search]);

  /* Navigate from search */
  const handleSearchSelect = useCallback(
    (sectionId: string) => {
      setActiveSection(sectionId);
      search.close();
    },
    [setActiveSection, search],
  );

  /* Render active section component */
  const ActiveComponent = sectionComponents[activeSection];

  return (
    <div className="min-h-screen bg-stax-light/40">
      {/* Header */}
      <Header
        onMenuToggle={toggleSidebar}
        onSearchOpen={search.open}
        progressPercentage={progressPercentage}
        completedCount={completed.size}
      />

      {/* Grid layout */}
      <div className="grid lg:grid-cols-[280px_1fr] min-h-screen pt-16">
        {/* Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onSelectSection={setActiveSection}
          isComplete={isComplete}
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          progressPercentage={progressPercentage}
        />

        {/* Main content */}
        <main className="min-w-0">
          <ContentArea
            activeSection={activeSection}
            prevSection={prevSection}
            nextSection={nextSection}
            onNavigate={setActiveSection}
            onMarkComplete={() => markComplete(activeSection)}
            isComplete={isComplete(activeSection)}
          >
            <Suspense fallback={<LoadingSpinner />}>
              {ActiveComponent ? <ActiveComponent /> : <LoadingSpinner />}
            </Suspense>
          </ContentArea>
        </main>
      </div>

      {/* Search modal */}
      <SearchModal
        isOpen={search.isOpen}
        query={search.query}
        results={search.results}
        onQueryChange={search.setQuery}
        onSelect={handleSearchSelect}
        onClose={search.close}
      />
    </div>
  );
}
