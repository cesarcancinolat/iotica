import type {ReactNode} from 'react';
import {motion} from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 18,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{opacity: 0, y}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.15}}
      transition={{duration: 0.48, ease: [0.22, 1, 0.36, 1], delay}}
      className={className}
    >
      {children}
    </motion.div>
  );
}
