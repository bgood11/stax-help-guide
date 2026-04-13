import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageZoomProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export default function ImageZoom({ src, alt, caption, className = '' }: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  return (
    <>
      <figure className={`${className}`}>
        <div className="screenshot-container" onClick={() => setIsOpen(true)} role="button" tabIndex={0} aria-label={`View ${alt} full size`}>
          <img src={src} alt={alt} loading="lazy" />
        </div>
        {caption && <figcaption className="text-sm text-stax-gray mt-2 text-center italic">{caption}</figcaption>}
      </figure>

      {isOpen && createPortal(
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80" onClick={close} />
            <motion.div
              className="relative z-10 max-w-[95vw] max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button
                onClick={close}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
