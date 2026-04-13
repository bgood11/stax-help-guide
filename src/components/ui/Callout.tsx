import { Lightbulb, AlertTriangle, Info } from 'lucide-react';
import type { ReactNode } from 'react';

const config = {
  tip: { className: 'callout callout-tip', Icon: Lightbulb, defaultTitle: 'Tip' },
  warning: { className: 'callout callout-warning', Icon: AlertTriangle, defaultTitle: 'Warning' },
  important: { className: 'callout callout-important', Icon: Info, defaultTitle: 'Important' },
};

interface CalloutProps {
  variant: 'tip' | 'warning' | 'important';
  title?: string;
  children: ReactNode;
}

export default function Callout({ variant, title, children }: CalloutProps) {
  const { className, Icon, defaultTitle } = config[variant];
  return (
    <div className={className} role="note">
      <Icon size={20} className="flex-shrink-0 mt-0.5" />
      <div>
        {(title || defaultTitle) && (
          <p className="font-semibold text-sm mb-1">{title || defaultTitle}</p>
        )}
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
