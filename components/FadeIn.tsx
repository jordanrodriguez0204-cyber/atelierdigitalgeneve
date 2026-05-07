'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: 'bottom' | 'left' | 'right';
}

export default function FadeIn({ children, delay = 0, className = '', from = 'bottom' }: FadeInProps) {
  const initial = {
    opacity: 0,
    y: from === 'bottom' ? 28 : 0,
    x: from === 'left' ? -28 : from === 'right' ? 28 : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
