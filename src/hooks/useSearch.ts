import { useState, useMemo, useCallback } from 'react';
import { sections } from '../data/sections';

export interface SearchResult {
  sectionId: string;
  title: string;
  shortTitle: string;
  matchedKeywords: string[];
}

export function useSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return sections
      .map(section => {
        const titleMatch = section.title.toLowerCase().includes(q) || section.shortTitle.toLowerCase().includes(q);
        const matchedKeywords = section.keywords.filter(kw => kw.toLowerCase().includes(q));
        const score = (titleMatch ? 10 : 0) + matchedKeywords.length;
        return { section, matchedKeywords, score };
      })
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(r => ({
        sectionId: r.section.id,
        title: r.section.title,
        shortTitle: r.section.shortTitle,
        matchedKeywords: r.matchedKeywords,
      }));
  }, [query]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => { setIsOpen(false); setQuery(''); }, []);

  return { query, setQuery, results, isOpen, open, close };
}
