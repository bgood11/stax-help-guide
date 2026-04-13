import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  BookOpen,
} from 'lucide-react';
import { sections } from '../../data/sections';

interface NavTarget {
  id: string;
  shortTitle: string;
}

interface ContentAreaProps {
  activeSection: string;
  prevSection: NavTarget | null;
  nextSection: NavTarget | null;
  onNavigate: (id: string) => void;
  onMarkComplete: () => void;
  isComplete: boolean;
  children: React.ReactNode;
}

export default function ContentArea({
  activeSection,
  prevSection,
  nextSection,
  onNavigate,
  onMarkComplete,
  isComplete,
  children,
}: ContentAreaProps) {
  const currentSection = sections.find(s => s.id === activeSection);
  const currentIndex = sections.findIndex(s => s.id === activeSection);

  return (
    <div className="flex flex-col h-full overflow-y-auto content-area">
      {/* Breadcrumb */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-stax-teal/5">
        <div className="flex items-center gap-2 px-6 lg:px-10 py-3 text-sm">
          <BookOpen size={14} className="text-stax-teal/60 flex-shrink-0" />
          <span className="text-stax-dark/40 font-medium">Guide</span>
          <ChevronRight size={14} className="text-stax-dark/25" />
          <span className="text-stax-dark/40 font-medium">
            Section {currentIndex + 1}
          </span>
          <ChevronRight size={14} className="text-stax-dark/25" />
          <span className="text-stax-teal font-semibold truncate">
            {currentSection?.shortTitle}
          </span>
        </div>
      </div>

      {/* Main content with transitions */}
      <div className="flex-1 px-6 lg:px-10 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer: mark complete + navigation */}
      <div className="border-t border-stax-teal/8 bg-white/60 backdrop-blur-md">
        {/* Mark complete */}
        <div className="flex justify-center px-6 lg:px-10 py-5">
          <button
            onClick={onMarkComplete}
            className={`
              group flex items-center gap-2.5 px-6 py-3 rounded-xl
              font-semibold text-sm transition-all duration-300 cursor-pointer
              ${isComplete
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100'
                : 'bg-stax-teal text-white shadow-lg shadow-stax-teal/20 hover:shadow-xl hover:shadow-stax-teal/30 hover:scale-[1.02] active:scale-[0.98]'
              }
            `}
          >
            {isComplete ? (
              <>
                <CheckCircle2 size={18} />
                <span>Completed</span>
              </>
            ) : (
              <>
                <Circle size={18} className="group-hover:scale-110 transition-transform" />
                <span>Mark as complete</span>
              </>
            )}
          </button>
        </div>

        {/* Prev / Next navigation */}
        <div className="flex items-center justify-between px-6 lg:px-10 py-4 border-t border-stax-teal/5">
          {/* Previous */}
          {prevSection ? (
            <button
              onClick={() => onNavigate(prevSection.id)}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-stax-dark/60 hover:text-stax-dark hover:bg-stax-light transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft
                size={16}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-stax-dark/35 font-semibold">
                  Previous
                </div>
                <div className="truncate max-w-[160px]">
                  {prevSection.shortTitle}
                </div>
              </div>
            </button>
          ) : (
            <div />
          )}

          {/* Next */}
          {nextSection ? (
            <button
              onClick={() => onNavigate(nextSection.id)}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-stax-teal hover:text-stax-dark hover:bg-stax-light transition-all duration-200 cursor-pointer"
            >
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider text-stax-dark/35 font-semibold">
                  Next
                </div>
                <div className="truncate max-w-[160px]">
                  {nextSection.shortTitle}
                </div>
              </div>
              <ChevronRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
