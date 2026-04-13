import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { sections } from '../../data/sections';

interface SidebarProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
  isComplete: (id: string) => boolean;
  isOpen: boolean;
  onClose: () => void;
  progressPercentage: number;
}

export default function Sidebar({
  activeSection,
  onSelectSection,
  isComplete,
  isOpen,
  onClose,
  progressPercentage,
}: SidebarProps) {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeSection]);

  const navContent = (
    <div className="flex flex-col h-full bg-white">
      {/* Logo + close */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-stax-teal/10">
        <img
          src="/images/logos/stax-logo.png"
          alt="Stax"
          className="h-7 w-auto"
        />
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg text-stax-dark/50 hover:text-stax-dark hover:bg-stax-light transition-colors"
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>

      {/* Section list */}
      <nav className="flex-1 overflow-y-auto sidebar py-3 px-3">
        <ul className="space-y-0.5">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const active = section.id === activeSection;
            const completed = isComplete(section.id);

            return (
              <li key={section.id}>
                <button
                  ref={active ? activeRef : undefined}
                  onClick={() => {
                    onSelectSection(section.id);
                    onClose();
                  }}
                  className={`
                    group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left
                    text-[13px] font-medium transition-all duration-200 cursor-pointer
                    ${active
                      ? 'bg-stax-teal text-white shadow-md shadow-stax-teal/20'
                      : 'text-stax-dark/70 hover:bg-stax-light hover:text-stax-dark'
                    }
                  `}
                >
                  {/* Section number */}
                  <span
                    className={`
                      flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                      ${active
                        ? 'bg-white/20 text-white'
                        : completed
                          ? 'bg-stax-teal/10 text-stax-teal'
                          : 'bg-stax-dark/5 text-stax-dark/40 group-hover:bg-stax-dark/8 group-hover:text-stax-dark/60'
                      }
                    `}
                  >
                    {index + 1}
                  </span>

                  {/* Icon */}
                  <Icon
                    size={16}
                    className={`flex-shrink-0 ${
                      active
                        ? 'text-white/90'
                        : completed
                          ? 'text-stax-teal'
                          : 'text-stax-dark/40 group-hover:text-stax-dark/60'
                    }`}
                  />

                  {/* Title */}
                  <span className="flex-1 truncate">{section.shortTitle}</span>

                  {/* Completion checkmark */}
                  {completed && (
                    <CheckCircle2
                      size={16}
                      className={`flex-shrink-0 ${
                        active ? 'text-white/80' : 'text-emerald-500'
                      }`}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Progress bar */}
      <div className="px-5 py-4 border-t border-stax-teal/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-stax-dark/60 uppercase tracking-wider">
            Progress
          </span>
          <span className="text-xs font-bold text-stax-teal">
            {progressPercentage}%
          </span>
        </div>
        <div className="h-2 bg-stax-dark/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-stax-teal to-stax-blue"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar - always visible on lg+ */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-[280px] lg:z-40 lg:border-r lg:border-stax-teal/10 lg:bg-white lg:pt-16">
        {navContent}
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-stax-dark/60 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-[280px] shadow-2xl lg:hidden"
            >
              {navContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
