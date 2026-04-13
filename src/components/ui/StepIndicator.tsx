import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import ImageZoom from './ImageZoom';

interface Step {
  title: string;
  description: string | ReactNode;
  screenshot?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

interface StepIndicatorProps {
  steps: Step[];
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function StepIndicator({ steps }: StepIndicatorProps) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="relative">
      {steps.map((step, index) => (
        <motion.div key={index} variants={item} className="flex gap-4 pb-8 last:pb-0">
          <div className="flex flex-col items-center">
            <div className="step-number">{index + 1}</div>
            {index < steps.length - 1 && <div className="step-line flex-1 min-h-[2rem]" />}
          </div>
          <div className="flex-1 pb-2">
            <h4 className="font-semibold text-stax-dark mb-1">{step.title}</h4>
            <div className="text-sm text-stax-gray leading-relaxed mb-3">
              {typeof step.description === 'string' ? <p>{step.description}</p> : step.description}
            </div>
            {step.screenshot && (
              <ImageZoom
                src={step.screenshot.src}
                alt={step.screenshot.alt}
                caption={step.screenshot.caption}
                className="max-w-xl"
              />
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
