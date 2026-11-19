import {useEffect, useState} from 'react';
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  Globe,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {WhatsAppIcon} from './WhatsAppIcon';

interface HeroAnimatedShowcaseProps {
  onRequestQuote: (topic: string) => void;
}

const HERO_SERVICES = [
  {
    id: 'web',
    shortLabel: 'Web y E-Commerce',
    badge: 'Plataformas Web y Tiendas Online',
    headlineHighlight: 'Software web y e-commerce diseñados exactamente para tu negocio',
    heroDescription:
      'Construimos plataformas escalables, rápidas y seguras alineadas con tus reglas de negocio: desde tiendas online de alto tráfico hasta portales B2B con precios diferenciados y flujos de aprobación personalizados.',
    metricLabel: 'Plataformas Web + B2B',
    metricValue: 'Escalable · Sin plantillas rígidas',
    icon: Globe,
    topic: 'Desarrollo de Plataformas Web y Tiendas Online a Medida',
  },
  {
    id: 'pagos',
    shortLabel: 'Pasarelas de Pago',
    badge: 'Pasarelas de Pago Chilenas',
    headlineHighlight: 'Recibe pagos online seguros, rápidos y sin fricciones en Chile',
    heroDescription:
      'Conectamos tu plataforma directamente con Transbank (Webpay Plus, Oneclick), Mercado Pago, Flow y Khipu, optimizando el checkout para evitar carritos abandonados y conciliar transacciones en tiempo real.',
    metricLabel: 'Recaudación Local Directa',
    metricValue: 'Webpay Plus · Oneclick · MP · Flow · Khipu',
    icon: CreditCard,
    topic: 'Integración de Pasarelas de Pago Chilenas',
  },
  {
    id: 'sii',
    shortLabel: 'Facturación SII',
    badge: 'Facturación Electrónica Automática',
    headlineHighlight: 'Emite boletas y facturas electrónicas en automático tras cada venta',
    heroDescription:
      'Integramos tu tienda o sistema web directamente con el SII para que, al confirmarse un pago, se genere la boleta o factura electrónica (DTE), se timbre y se envíe automáticamente al correo de tu cliente.',
    metricLabel: 'Emisión DTE Automática SII',
    metricValue: 'PDF + XML timbrado al instante',
    icon: FileCheck2,
    topic: 'Facturación Electrónica Automática con el SII',
  },
  {
    id: 'erp-crm',
    shortLabel: 'CRM y ERP',
    badge: 'Integración CRM y ERP en Tiempo Real',
    headlineHighlight: 'Sincroniza tu sitio web con tu operación interna en tiempo real',
    heroDescription:
      'Eliminamos la doble digitación y los quiebres de inventario conectando tu web vía API REST con Softland, Defontana, SAP, Nubox, HubSpot o sistemas propios para mantener stock, precios y despachos al día.',
    metricLabel: 'Ecosistema Conectado API',
    metricValue: 'Softland · Defontana · SAP · Nubox · HubSpot',
    icon: RefreshCw,
    topic: 'Integración de Sistemas CRM y ERP',
  },
];

export function HeroAnimatedShowcase({onRequestQuote}: HeroAnimatedShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SERVICES.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const activeService = HERO_SERVICES[activeIndex] ?? HERO_SERVICES[0];
  const ActiveIcon = activeService.icon;

  return (
    <section id="inicio" className="pt-4 sm:pt-6 pb-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="bg-[#0B192C] text-white rounded-3xl px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20 border border-slate-800 relative overflow-hidden shadow-lg shadow-slate-950/15"
      >
        {/* Architectural dot matrix & subtle top specular border */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
        />
        <motion.div
          aria-hidden="true"
          animate={{opacity: [0.45, 0.78, 0.45], scale: [0.98, 1.03, 0.98]}}
          transition={{duration: 7, repeat: Infinity, ease: 'easeInOut'}}
          className="pointer-events-none absolute -bottom-24 left-1/3 -translate-x-1/2 w-[720px] h-[260px] rounded-full bg-blue-600/20 blur-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          {/* Left Hero Copy: Unified Value Proposition + Interactive Animated Service Pillars */}
          <motion.div
            initial={{opacity: 0, y: 14}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
            className="lg:col-span-7 text-left"
          >
            {/* Unified Brand Value Proposition Kicker */}
            <div className="inline-flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
              <motion.span
                animate={{scale: [1, 1.12, 1]}}
                transition={{duration: 3, repeat: Infinity, ease: 'easeInOut'}}
                className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold"
              >
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Ingeniería de Software y E-Commerce Integrado para Empresas en Chile</span>
              </motion.span>
            </div>

            <h1
              className="mt-4 font-display font-bold tracking-tight text-white text-balance leading-[1.08]"
              style={{fontSize: 'clamp(2rem, 3.75vw, 3.2rem)'}}
            >
              Plataformas web y tiendas a medida conectadas{' '}
              <span className="text-blue-400">de extremo a extremo</span> con tu operación.
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Desarrollamos software web y e-commerce conectado en un solo ecosistema: recaudación
              con Webpay Plus y Mercado Pago, emisión automática de boletas y facturas ante el SII
              y sincronización en tiempo real con tu ERP y CRM.
            </p>

            {/* Animated Service Switcher Tabs */}
            <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Pilares de ingeniería IOTICA">
              {HERO_SERVICES.map((service, idx) => {
                const selected = idx === activeIndex;
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveIndex(idx)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 cursor-pointer ${
                      selected
                        ? 'bg-blue-700 border-blue-500 text-white shadow-xs'
                        : 'bg-[#122640]/80 border-slate-700/80 text-slate-300 hover:border-slate-500 hover:text-white'
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 ${selected ? 'text-blue-200' : 'text-blue-400'}`}
                      aria-hidden="true"
                    />
                    <span>{service.shortLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Active Service Spotlight Text */}
            <div className="mt-4 bg-[#122640]/70 border border-slate-700/80 rounded-xl px-4 py-3.5 min-h-[104px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{opacity: 0, y: 6}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -6}}
                  transition={{duration: 0.24, ease: 'easeOut'}}
                >
                  <p className="text-xs font-bold text-blue-300">{activeService.headlineHighlight}</p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeService.heroDescription}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.button
                type="button"
                whileTap={{scale: 0.985}}
                onClick={() => onRequestQuote(activeService.topic)}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-600 rounded-xl shadow-sm shadow-blue-950/40 transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer min-h-[46px]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Solicitar Activación</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </motion.button>
              <a
                href="#pagos-sii"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:underline underline-offset-4 whitespace-nowrap shrink-0 min-h-[44px]"
              >
                Ver flujo Pagos + SII
              </a>
            </div>
          </motion.div>

          {/* Right Animated Architecture Graphic */}
          <motion.div
            initial={{opacity: 0, scale: 0.96}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1]}}
            className="lg:col-span-5"
          >
            <div className="bg-[#122640]/90 border border-slate-700/80 rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-xl shadow-slate-950/30">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
              />

              {/* Top Header inside Hero Graphic */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-700/70">
                <div className="flex items-center gap-2.5">
                  <motion.span
                    key={activeService.id}
                    initial={{scale: 0.75, rotate: -10}}
                    animate={{scale: 1, rotate: 0}}
                    transition={{type: 'spring', stiffness: 320, damping: 20}}
                    className="w-9 h-9 rounded-xl bg-blue-700/30 border border-blue-500/40 flex items-center justify-center text-blue-300 shrink-0"
                  >
                    <ActiveIcon className="w-4 h-4" aria-hidden="true" />
                  </motion.span>
                  <div>
                    <p className="font-mono text-[11px] text-blue-300">{activeService.metricLabel}</p>
                    <p className="text-xs font-bold text-white">{activeService.badge}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <motion.span
                    animate={{opacity: [0.4, 1, 0.4]}}
                    transition={{duration: 1.8, repeat: Infinity, ease: 'easeInOut'}}
                    className="w-2 h-2 rounded-full bg-emerald-400"
                  />
                  <span>En vivo</span>
                </span>
              </div>

              {/* Animated Architecture SVG Diagram */}
              <div className="py-4">
                <svg
                  viewBox="0 0 340 185"
                  className="w-full h-auto"
                  fill="none"
                  aria-hidden="true"
                >
                  <line x1="18" y1="92" x2="322" y2="92" stroke="#1E3A5F" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="170" y1="16" x2="170" y2="168" stroke="#1E3A5F" strokeWidth="1" strokeDasharray="3 4" />

                  <path d="M170 92 L62 42" stroke={activeIndex === 0 ? '#60A5FA' : '#334155'} strokeWidth={activeIndex === 0 ? '2.2' : '1.4'} />
                  <path d="M170 92 L278 42" stroke={activeIndex === 1 ? '#60A5FA' : '#334155'} strokeWidth={activeIndex === 1 ? '2.2' : '1.4'} />
                  <path d="M170 92 L278 142" stroke={activeIndex === 2 ? '#10B981' : '#334155'} strokeWidth={activeIndex === 2 ? '2.2' : '1.4'} />
                  <path d="M170 92 L62 142" stroke={activeIndex === 3 ? '#60A5FA' : '#334155'} strokeWidth={activeIndex === 3 ? '2.2' : '1.4'} />

                  <motion.circle
                    key={`packet-${activeService.id}`}
                    r="4"
                    fill={activeIndex === 2 ? '#10B981' : '#60A5FA'}
                    initial={{cx: 170, cy: 92, opacity: 0}}
                    animate={{
                      cx:
                        activeIndex === 0
                          ? [170, 62]
                          : activeIndex === 1
                            ? [170, 278]
                            : activeIndex === 2
                              ? [170, 278]
                              : [170, 62],
                      cy: activeIndex <= 1 ? [92, 42] : [92, 142],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{duration: 1.5, repeat: Infinity, ease: 'easeInOut'}}
                  />

                  <motion.g
                    animate={{scale: [1, 1.03, 1]}}
                    transition={{duration: 3.6, repeat: Infinity, ease: 'easeInOut'}}
                    style={{transformOrigin: '170px 92px'}}
                  >
                    <polygon
                      points="170,58 199,75 199,109 170,126 141,109 141,75"
                      fill="#0B192C"
                      stroke="#60A5FA"
                      strokeWidth="2.4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M141 75L156 86L170 58L184 85L199 75M156 86L184 85"
                      stroke="#3B82F6"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M161 98L154 103L161 108M179 98L186 103L179 108M172 95L168 111"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.g>

                  {/* Node 1: Web y E-Commerce */}
                  <g onClick={() => setActiveIndex(0)} className="cursor-pointer">
                    <rect
                      x="14"
                      y="20"
                      width="96"
                      height="42"
                      rx="10"
                      fill="#0B192C"
                      stroke={activeIndex === 0 ? '#60A5FA' : '#334155'}
                      strokeWidth={activeIndex === 0 ? '2' : '1.2'}
                    />
                    <text x="62" y="39" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">
                      Web &amp; E-Commerce
                    </text>
                    <text x="62" y="52" textAnchor="middle" fill="#93C5FD" fontSize="8">
                      Tiendas · Portal B2B
                    </text>
                  </g>

                  {/* Node 2: Pasarelas Chile */}
                  <g onClick={() => setActiveIndex(1)} className="cursor-pointer">
                    <rect
                      x="230"
                      y="20"
                      width="96"
                      height="42"
                      rx="10"
                      fill="#0B192C"
                      stroke={activeIndex === 1 ? '#60A5FA' : '#334155'}
                      strokeWidth={activeIndex === 1 ? '2' : '1.2'}
                    />
                    <text x="278" y="39" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">
                      Pasarelas Chile
                    </text>
                    <text x="278" y="52" textAnchor="middle" fill="#93C5FD" fontSize="8">
                      Webpay · MP · Flow
                    </text>
                  </g>

                  {/* Node 3: Facturación SII */}
                  <g onClick={() => setActiveIndex(2)} className="cursor-pointer">
                    <rect
                      x="230"
                      y="122"
                      width="96"
                      height="42"
                      rx="10"
                      fill="#0B192C"
                      stroke={activeIndex === 2 ? '#10B981' : '#334155'}
                      strokeWidth={activeIndex === 2 ? '2' : '1.2'}
                    />
                    <text x="278" y="141" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">
                      Facturación SII
                    </text>
                    <text x="278" y="154" textAnchor="middle" fill="#34D399" fontSize="8">
                      Boleta 39 · Factura 33
                    </text>
                  </g>

                  {/* Node 4: CRM & ERP */}
                  <g onClick={() => setActiveIndex(3)} className="cursor-pointer">
                    <rect
                      x="14"
                      y="122"
                      width="96"
                      height="42"
                      rx="10"
                      fill="#0B192C"
                      stroke={activeIndex === 3 ? '#60A5FA' : '#334155'}
                      strokeWidth={activeIndex === 3 ? '2' : '1.2'}
                    />
                    <text x="62" y="141" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">
                      CRM &amp; ERP API
                    </text>
                    <text x="62" y="154" textAnchor="middle" fill="#93C5FD" fontSize="8">
                      Softland · SAP · Nubox
                    </text>
                  </g>
                </svg>
              </div>

              {/* Animated Footer Telemetry Strip */}
              <div className="pt-3 border-t border-slate-700/70 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-200 min-w-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span className="truncate font-medium">{activeService.metricValue}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {HERO_SERVICES.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Ver servicio ${item.shortLabel}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                        idx === activeIndex ? 'w-5 bg-blue-400' : 'w-1.5 bg-slate-600 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
