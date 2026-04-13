import { ExternalLink, Globe } from 'lucide-react';
import type { ComponentType } from 'react';

interface VideoLinkProps {
  title: string;
  url: string;
  icon?: ComponentType<{ size?: number; className?: string }>;
}

export default function VideoLink({ title, url, icon: Icon = Globe }: VideoLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-premium flex items-center gap-4 p-4 no-underline group"
    >
      <div className="w-12 h-12 rounded-full bg-stax-teal-light flex items-center justify-center flex-shrink-0">
        <Icon size={24} className="text-stax-teal" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-stax-dark group-hover:text-stax-teal transition-colors">{title}</p>
        <p className="text-sm text-stax-gray">Watch video guide</p>
      </div>
      <ExternalLink size={18} className="text-stax-gray group-hover:text-stax-teal transition-colors flex-shrink-0" />
    </a>
  );
}
