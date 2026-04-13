import { useState, useCallback } from 'react';
import { sections } from '../data/sections';

const STORAGE_KEY = 'stax-guide-progress';

function loadProgress(): Set<string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return new Set(JSON.parse(stored));
  } catch { /* ignore */ }
  return new Set();
}

function saveProgress(completed: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(loadProgress);

  const markComplete = useCallback((sectionId: string) => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.add(sectionId);
      saveProgress(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    setCompleted(new Set());
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const isComplete = useCallback((sectionId: string) => completed.has(sectionId), [completed]);

  const progressPercentage = Math.round((completed.size / sections.length) * 100);

  return { completed, markComplete, resetProgress, isComplete, progressPercentage };
}
