import { Menu, Search, BookOpen } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  onSearchOpen: () => void;
  progressPercentage: number;
  completedCount: number;
}

export default function Header({
  onMenuToggle,
  onSearchOpen,
  progressPercentage,
  completedCount,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-stax-teal/10">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left: hamburger (mobile) + logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 -ml-2 rounded-lg text-stax-dark/60 hover:text-stax-dark hover:bg-stax-light transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>

          <div className="flex items-center gap-2.5">
            <img
              src="/images/logos/stax-logo.png"
              alt="Stax"
              className="h-7 w-auto"
            />
            <div className="hidden sm:block h-5 w-px bg-stax-teal/15" />
            <div className="hidden sm:flex items-center gap-1.5 text-stax-dark/50">
              <BookOpen size={14} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Help Guide
              </span>
            </div>
          </div>
        </div>

        {/* Center: search trigger */}
        <button
          onClick={onSearchOpen}
          className="
            flex items-center gap-2.5 px-4 py-2 rounded-xl
            bg-stax-light/80 border border-stax-teal/10
            text-stax-dark/40 hover:text-stax-dark/60
            hover:border-stax-teal/20 hover:bg-stax-light
            transition-all duration-200 cursor-pointer
            max-w-xs sm:max-w-sm w-full mx-4
          "
        >
          <Search size={15} className="flex-shrink-0" />
          <span className="text-sm truncate">Search guide...</span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 ml-auto px-1.5 py-0.5 rounded bg-white border border-stax-teal/10 text-[10px] font-semibold text-stax-dark/35 tracking-wide">
            <span className="text-[11px]">Ctrl</span>
            <span>K</span>
          </kbd>
        </button>

        {/* Right: progress indicator */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs font-medium text-stax-dark/50">
              <span className="font-bold text-stax-teal">{completedCount}</span>
              {' '}of 16 complete
            </span>
          </div>

          {/* Circular progress ring */}
          <div className="relative w-9 h-9">
            <svg className="w-9 h-9 -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-stax-dark/5"
              />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="url(#progress-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={`${progressPercentage * 0.9425} 94.25`}
                className="transition-all duration-500 ease-out"
              />
              <defs>
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#477085" />
                  <stop offset="100%" stopColor="#2ab7e3" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-stax-teal">
              {progressPercentage}%
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
