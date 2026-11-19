import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';
import {motion, useScroll, useSpring} from 'motion/react';
import {IoticaLogo} from './IoticaLogo';

interface NavbarProps {
  onRequestQuote: () => void;
}

const NAV_LINKS = [
  {href: '#servicios', id: 'servicios', label: 'Servicios'},
  {href: '#pagos-sii', id: 'pagos-sii', label: 'Pagos y SII'},
  {href: '#facturacion-sii', id: 'facturacion-sii', label: 'Facturación SII'},
  {href: '#metodologia', id: 'metodologia', label: 'Metodología'},
  {href: '#faq', id: 'faq', label: 'Preguntas'},
];

export function Navbar({onRequestQuote}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{y: -14, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
      className={`sticky top-0 z-40 border-b transition-all duration-200 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md border-slate-200/90 shadow-sm shadow-slate-900/5'
          : 'bg-white/95 backdrop-blur-sm border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Lockup with Slogan */}
        <motion.a
          href="#inicio"
          aria-label="IOTICA — Connect, Code, Innovate"
          whileHover={{scale: 1.02}}
          whileTap={{scale: 0.98}}
          transition={{type: 'spring', stiffness: 400, damping: 25}}
          className="whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 rounded"
        >
          <IoticaLogo variant="light" showTagline size="header" />
        </motion.a>

        {/* Zone 2: 5 concise single-line text nav links with scroll-spy indicator */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 rounded ${
                  isActive
                    ? 'text-blue-700 font-semibold'
                    : 'hover:text-[#0B192C]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-underline"
                    transition={{type: 'spring', stiffness: 380, damping: 32}}
                    className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-blue-700"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <motion.button
            type="button"
            whileTap={{scale: 0.97}}
            onClick={onRequestQuote}
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs shadow-blue-700/20 transition-all duration-150 hover:-translate-y-px whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Solicitar Activación
          </motion.button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Scroll Reading Progress Bar */}
      <motion.div
        style={{scaleX}}
        aria-hidden="true"
        className="h-[2px] bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 origin-left"
      />

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1">
          <nav aria-label="Navegación móvil" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onRequestQuote();
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer min-h-[44px]"
            >
              Solicitar Activación
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
