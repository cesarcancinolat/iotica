import {motion} from 'motion/react';

export function CorfoLogo() {
  return (
    <motion.a
      href="https://www.corfo.cl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="CORFO — Corporación de Fomento de la Producción"
      whileHover={{y: -2}}
      transition={{type: 'spring', stiffness: 360, damping: 24}}
      className="inline-flex items-center justify-center h-14 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
    >
      <img
        src="/logos/corfo.svg"
        alt="Logo oficial CORFO"
        className="h-9 w-auto object-contain select-none"
        loading="lazy"
      />
    </motion.a>
  );
}

export function SercotecLogo() {
  return (
    <motion.a
      href="https://www.sercotec.cl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="SERCOTEC — Servicio de Cooperación Técnica"
      whileHover={{y: -2}}
      transition={{type: 'spring', stiffness: 360, damping: 24}}
      className="inline-flex items-center justify-center h-14 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
    >
      <img
        src="/logos/sercotec.png"
        alt="Logo oficial SERCOTEC"
        className="h-9 w-auto object-contain select-none"
        loading="lazy"
      />
    </motion.a>
  );
}
