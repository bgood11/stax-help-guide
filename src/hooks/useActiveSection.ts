import { useState, useEffect, useCallback } from 'react';
import { sections } from '../data/sections';

export function useActiveSection() {
  const getInitialSection = () => {
    const hash = window.location.hash.slice(1);
    const found = sections.find(s => s.id === hash);
    return found ? found.id : sections[0].id;
  };

  const [activeSection, setActiveSectionState] = useState(getInitialSection);

  const setActiveSection = useCallback((id: string) => {
    setActiveSectionState(id);
    window.location.hash = id;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const found = sections.find(s => s.id === hash);
      if (found) {
        setActiveSectionState(found.id);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentIndex = sections.findIndex(s => s.id === activeSection);
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return { activeSection, setActiveSection, prevSection, nextSection, currentIndex };
}
