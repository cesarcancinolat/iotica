import {motion} from 'motion/react';

interface IoticaLogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  size?: 'header' | 'footer';
}

export function IoticaLogo({
  variant = 'light',
  showTagline = true,
}: IoticaLogoProps) {
  const isDark = variant === 'dark';
  const heightClass = 'h-14 w-auto';

  // High-contrast neuroscience palette (Processing Fluency >= 6.7:1):
  // - On white header: Cobalt #1D4ED8 (6.7:1) + Deep Navy #0B192C (17.4:1)
  // - On dark footer: Luminous Blue #60A5FA (7.6:1) + Crisp White #FFFFFF (19.3:1)
  const primaryBlue = isDark ? 'var(--color-blue-400, #60A5FA)' : '#1D4ED8';
  const structureInk = isDark ? '#FFFFFF' : '#0B192C';
  const nodeFill = isDark ? '#060E1A' : '#FFFFFF';
  const taglineColor = isDark ? '#CBD5E1' : '#0B192C';

  return (
    <span className="inline-flex items-center select-none whitespace-nowrap shrink-0 group">
      <svg
        viewBox="0 0 208 60"
        className={heightClass}
        fill="none"
        role="img"
        aria-label="IOTICA — Connect, Code, Innovate"
      >
        {/* Lower structural hexagon cradle & diagonal supports (drawn first so upper nodes sit cleanly on top) */}
        <path
          d="M10.5 18.5V41.5L30 54L49.5 41.5V18.5"
          stroke={structureInk}
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 41.5L20 26.5M49.5 41.5L40.5 25"
          stroke={structureInk}
          strokeWidth="2.3"
          strokeLinecap="round"
        />

        {/* Upper active network dome & geodesic triangulation (solid high-contrast blue, no gradient) */}
        <path
          d="M10.5 18.5L30 7L49.5 18.5"
          stroke={primaryBlue}
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 18.5L20 26.5L30 7L40.5 25L49.5 18.5"
          stroke={primaryBlue}
          strokeWidth="2.3"
          strokeLinejoin="round"
        />
        <path
          d="M20 26.5L40.5 25"
          stroke={primaryBlue}
          strokeWidth="2.3"
          strokeLinecap="round"
        />

        {/* Connectivity waves top-right (animated signal pulse) */}
        <motion.path
          d="M50.5 13C53.7 14 56.2 16.5 57.2 19.7"
          stroke={primaryBlue}
          strokeWidth="2.4"
          strokeLinecap="round"
          animate={{opacity: [0.45, 1, 0.45]}}
          transition={{duration: 2.4, repeat: Infinity, ease: 'easeInOut'}}
        />
        <motion.path
          d="M52.8 8.6C57.5 10.1 61.1 13.7 62.6 18.4"
          stroke={primaryBlue}
          strokeWidth="2.4"
          strokeLinecap="round"
          animate={{opacity: [0.3, 1, 0.3]}}
          transition={{duration: 2.4, delay: 0.45, repeat: Infinity, ease: 'easeInOut'}}
        />

        {/* </> code symbol in lower chamber */}
        <path
          d="M24 33.8L19 37.8L24 41.8"
          stroke={structureInk}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 33.8L41 37.8L36 41.8"
          stroke={structureInk}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.9 32.1L28.1 43.3"
          stroke={structureInk}
          strokeWidth="2.6"
          strokeLinecap="round"
        />

        {/* Lower structural nodes */}
        <circle cx="49.5" cy="41.5" r="3.1" fill={nodeFill} stroke={structureInk} strokeWidth="2.4" />
        <circle cx="30" cy="54" r="3.1" fill={nodeFill} stroke={structureInk} strokeWidth="2.4" />
        <circle cx="10.5" cy="41.5" r="3.1" fill={nodeFill} stroke={structureInk} strokeWidth="2.4" />

        {/* Upper network nodes */}
        <circle cx="30" cy="7" r="3.1" fill={nodeFill} stroke={primaryBlue} strokeWidth="2.4" />
        <circle cx="49.5" cy="18.5" r="3.1" fill={nodeFill} stroke={primaryBlue} strokeWidth="2.4" />
        <circle cx="10.5" cy="18.5" r="3.1" fill={nodeFill} stroke={primaryBlue} strokeWidth="2.4" />
        <circle cx="20" cy="26.5" r="2.7" fill={nodeFill} stroke={primaryBlue} strokeWidth="2.3" />
        <circle cx="40.5" cy="25" r="2.7" fill={nodeFill} stroke={primaryBlue} strokeWidth="2.3" />

        {/* IOTICA Wordmark — exact matched width (128px) with slogan */}
        <text
          x="72"
          y="34"
          textLength="128"
          lengthAdjust="spacing"
          fontFamily="'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif"
          fontWeight="800"
          fontSize="31"
        >
          <tspan fill={primaryBlue}>IOT</tspan>
          <tspan fill={structureInk}>ICA</tspan>
        </text>

        {/* Slogan — exact same width (128px) directly beneath IOTICA */}
        {showTagline && (
          <text
            x="72"
            y="45.5"
            textLength="128"
            lengthAdjust="spacing"
            fontFamily="'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif"
            fontWeight="700"
            fontSize="7.8"
            fill={taglineColor}
          >
            CONNECT · CODE · INNOVATE
          </text>
        )}
      </svg>
    </span>
  );
}
