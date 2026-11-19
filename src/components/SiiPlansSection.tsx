import {ArrowRight, Check, ShieldCheck} from 'lucide-react';
import {motion} from 'motion/react';
import {SII_SUITE_GROUPS} from '../data/ioticaData';
import {ScrollReveal} from './ScrollReveal';

interface SiiPlansSectionProps {
  onSelectPlan: (summary: string) => void;
}

export function SiiPlansSection({onSelectPlan}: SiiPlansSectionProps) {
  return (
    <section id="facturacion-sii" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Unified Architectural Block */}
        <ScrollReveal>
          <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
            {/* Header Banner inside the single block */}
            <div className="bg-[#0B192C] text-white px-6 py-8 sm:px-10 sm:py-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-30"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
              />

              <div className="max-w-3xl relative z-10">
                <p className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Plataforma Integral de Facturación Electrónica SII + Pagos + API</span>
                </p>
                <h2 className="mt-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                  Todas las funcionalidades tributarias, de cobro y emisión de documentos.
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Sin divisiones artificiales ni cobros por usuario o folios. Implementamos y
                  habilitamos la plataforma completa según la estructura operativa de tu empresa,
                  lista para emitir ante el SII y conectar con tu sitio web o ERP.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  onSelectPlan('Plataforma Integral de Facturación Electrónica SII + Pagos + API')
                }
                className="group relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-600 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
              >
                <span>Activar Facturación SII + API</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Unified 2x2 Capability Grid inside the single block */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:gap-px bg-slate-200">
              {SII_SUITE_GROUPS.map((group, idx) => (
                <motion.div
                  key={group.id}
                  initial={{opacity: 0, y: 12}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 0.15}}
                  transition={{duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: idx * 0.06}}
                  className="bg-white p-6 sm:p-8 flex flex-col justify-between transition-colors hover:bg-slate-50/70"
                >
                  <div>
                    <p className="text-xs font-semibold text-blue-700">{group.subtitle}</p>
                    <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[#0B192C]">
                      {group.title}
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                        >
                          <Check
                            className="w-4 h-4 text-emerald-700 shrink-0 mt-1"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Unified Action Strip at the bottom of the single block */}
            <div className="bg-slate-50 px-6 py-5 sm:px-10 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-600">
                Incluye{' '}
                <span className="font-semibold text-[#0B192C]">
                  usuarios ilimitados, folios CAF incluidos y ambiente de pruebas API (sandbox)
                </span>{' '}
                antes de certificar en producción ante el SII.
              </p>
              <button
                type="button"
                onClick={() =>
                  onSelectPlan('Activación Directa Plataforma Facturación SII + Pagos + API')
                }
                className="group inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
              >
                <span>Solicitar activación directa</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
