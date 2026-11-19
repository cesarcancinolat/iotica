import {motion} from 'motion/react';
import type {ServiceModule} from '../data/ioticaData';

interface ServiceDiagramProps {
  type: ServiceModule['diagramType'];
}

export function ServiceDiagram({type}: ServiceDiagramProps) {
  return (
    <div className="h-36 w-full bg-[#0B192C] border-b border-slate-800 flex items-center justify-center p-5 overflow-hidden">
      {type === 'curve' && (
        <svg viewBox="0 0 260 90" className="w-full h-full" aria-hidden="true">
          <line x1="16" y1="74" x2="244" y2="74" stroke="#1E293B" strokeWidth="1" />
          <line
            x1="16"
            y1="45"
            x2="244"
            y2="45"
            stroke="#1E293B"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <motion.path
            d="M 18 68 C 68 66, 98 48, 134 40 C 170 32, 200 18, 240 14"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{pathLength: 0, opacity: 0.4}}
            whileInView={{pathLength: 1, opacity: 1}}
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.9, ease: [0.22, 1, 0.36, 1]}}
          />
          <motion.circle
            cx="88"
            cy="54"
            r="3.5"
            fill="#60A5FA"
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            viewport={{once: true}}
            transition={{delay: 0.35, duration: 0.3}}
          />
          <motion.circle
            cx="164"
            cy="34"
            r="3.5"
            fill="#60A5FA"
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            viewport={{once: true}}
            transition={{delay: 0.55, duration: 0.3}}
          />
          <motion.circle
            cx="240"
            cy="14"
            r="4.5"
            fill="#FFFFFF"
            stroke="#10B981"
            strokeWidth="2.5"
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            viewport={{once: true}}
            transition={{delay: 0.75, type: 'spring', stiffness: 320, damping: 20}}
          />
        </svg>
      )}

      {type === 'payments' && (
        <svg viewBox="0 0 260 90" className="w-full h-full" aria-hidden="true">
          <motion.g
            initial={{opacity: 0, x: -8}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.45}}
          >
            <rect x="20" y="22" width="66" height="46" rx="6" fill="#122640" stroke="#334155" />
            <rect x="28" y="34" width="20" height="12" rx="2" fill="#3B82F6" />
            <line
              x1="28"
              y1="56"
              x2="72"
              y2="56"
              stroke="#64748B"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>

          <motion.line
            x1="94"
            y1="45"
            x2="152"
            y2="45"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeDasharray="4 3"
            initial={{pathLength: 0}}
            whileInView={{pathLength: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.2}}
          />
          <motion.circle
            cx="123"
            cy="45"
            r="4"
            fill="#60A5FA"
            animate={{cx: [102, 144, 102]}}
            transition={{duration: 2.6, repeat: Infinity, ease: 'easeInOut'}}
          />

          <motion.g
            initial={{opacity: 0, x: 8}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.45, delay: 0.15}}
          >
            <rect x="160" y="22" width="80" height="46" rx="6" fill="#122640" stroke="#10B981" />
            <motion.path
              d="M 182 45 L 194 55 L 216 33"
              fill="none"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{pathLength: 0}}
              whileInView={{pathLength: 1}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.4}}
            />
          </motion.g>
        </svg>
      )}

      {type === 'sii' && (
        <svg viewBox="0 0 260 90" className="w-full h-full" aria-hidden="true">
          <motion.g
            initial={{opacity: 0, y: 6}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.4}}
          >
            <rect x="26" y="14" width="68" height="62" rx="5" fill="#122640" stroke="#334155" />
            <line x1="38" y1="28" x2="80" y2="28" stroke="#94A3B8" strokeWidth="2" />
            <line x1="38" y1="40" x2="74" y2="40" stroke="#64748B" strokeWidth="2" />
            <line x1="38" y1="52" x2="68" y2="52" stroke="#64748B" strokeWidth="2" />
            <rect x="38" y="60" width="28" height="8" rx="2" fill="#3B82F6" />
          </motion.g>

          <motion.g
            initial={{opacity: 0, scaleX: 0}}
            whileInView={{opacity: 1, scaleX: 1}}
            viewport={{once: true}}
            transition={{duration: 0.45, delay: 0.25}}
            style={{transformOrigin: '102px 45px'}}
          >
            <line x1="102" y1="45" x2="150" y2="45" stroke="#10B981" strokeWidth="2" />
            <polygon points="150,40 160,45 150,50" fill="#10B981" />
          </motion.g>

          <motion.g
            initial={{opacity: 0, y: 6}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.45, delay: 0.35}}
          >
            <rect x="168" y="18" width="66" height="54" rx="5" fill="#122640" stroke="#10B981" />
            <rect x="180" y="28" width="42" height="16" rx="2" fill="#1E293B" />
            <line
              x1="184"
              y1="36"
              x2="218"
              y2="36"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="3 2"
            />
            <line x1="180" y1="56" x2="222" y2="56" stroke="#94A3B8" strokeWidth="2" />
          </motion.g>
        </svg>
      )}

      {type === 'bars' && (
        <svg viewBox="0 0 260 90" className="w-full h-full" aria-hidden="true">
          <motion.rect
            x="24"
            y="18"
            width="130"
            height="10"
            rx="3"
            fill="#3B82F6"
            initial={{scaleX: 0}}
            whileInView={{scaleX: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.1}}
            style={{transformOrigin: '24px 23px'}}
          />
          <motion.rect
            x="24"
            y="36"
            width="188"
            height="10"
            rx="3"
            fill="#334155"
            initial={{scaleX: 0}}
            whileInView={{scaleX: 1}}
            viewport={{once: true}}
            transition={{duration: 0.55, delay: 0.2}}
            style={{transformOrigin: '24px 41px'}}
          />
          <motion.rect
            x="24"
            y="54"
            width="152"
            height="10"
            rx="3"
            fill="#10B981"
            fillOpacity="0.85"
            initial={{scaleX: 0}}
            whileInView={{scaleX: 1}}
            viewport={{once: true}}
            transition={{duration: 0.55, delay: 0.3}}
            style={{transformOrigin: '24px 59px'}}
          />
          <motion.rect
            x="24"
            y="72"
            width="104"
            height="10"
            rx="3"
            fill="#1E293B"
            initial={{scaleX: 0}}
            whileInView={{scaleX: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.4}}
            style={{transformOrigin: '24px 77px'}}
          />
        </svg>
      )}

      {type === 'nodes' && (
        <svg viewBox="0 0 260 90" className="w-full h-full" aria-hidden="true">
          <motion.line
            x1="48"
            y1="45"
            x2="212"
            y2="45"
            stroke="#334155"
            strokeWidth="2"
            initial={{pathLength: 0}}
            whileInView={{pathLength: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
          />
          <motion.line
            x1="130"
            y1="45"
            x2="174"
            y2="20"
            stroke="#3B82F6"
            strokeWidth="2"
            initial={{pathLength: 0}}
            whileInView={{pathLength: 1}}
            viewport={{once: true}}
            transition={{duration: 0.45, delay: 0.25}}
          />
          <motion.line
            x1="130"
            y1="45"
            x2="174"
            y2="70"
            stroke="#334155"
            strokeWidth="2"
            initial={{pathLength: 0}}
            whileInView={{pathLength: 1}}
            viewport={{once: true}}
            transition={{duration: 0.45, delay: 0.25}}
          />
          <circle cx="48" cy="45" r="7" fill="#64748B" />
          <motion.circle
            cx="130"
            cy="45"
            r="9"
            fill="#3B82F6"
            animate={{r: [8.5, 10.5, 8.5]}}
            transition={{duration: 2.8, repeat: Infinity, ease: 'easeInOut'}}
          />
          <circle cx="174" cy="20" r="6" fill="#FFFFFF" />
          <circle cx="174" cy="70" r="6" fill="#64748B" />
          <motion.circle
            cx="212"
            cy="45"
            r="7"
            fill="#10B981"
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            viewport={{once: true}}
            transition={{delay: 0.5, type: 'spring', stiffness: 300}}
          />
        </svg>
      )}

      {type === 'api' && (
        <svg viewBox="0 0 260 90" className="w-full h-full" aria-hidden="true">
          <line
            x1="130"
            y1="45"
            x2="54"
            y2="22"
            stroke="#475569"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <line
            x1="130"
            y1="45"
            x2="54"
            y2="68"
            stroke="#475569"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <line
            x1="130"
            y1="45"
            x2="206"
            y2="22"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <line
            x1="130"
            y1="45"
            x2="206"
            y2="68"
            stroke="#475569"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <motion.circle
            cx="130"
            cy="45"
            r="14"
            fill="#2563EB"
            animate={{scale: [1, 1.08, 1]}}
            transition={{duration: 2.8, repeat: Infinity, ease: 'easeInOut'}}
          />
          <circle cx="54" cy="22" r="6" fill="#475569" />
          <circle cx="54" cy="68" r="6" fill="#475569" />
          <motion.circle
            cx="206"
            cy="22"
            r="6"
            fill="#10B981"
            animate={{opacity: [0.65, 1, 0.65]}}
            transition={{duration: 2.2, repeat: Infinity, ease: 'easeInOut'}}
          />
          <circle cx="206" cy="68" r="6" fill="#475569" />
        </svg>
      )}
    </div>
  );
}
