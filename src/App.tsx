import {useState} from 'react';
import {
  ArrowRight,
  Check,
  Code2,
  Cpu,
  Layers,
  Mail,
  MapPin,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
} from 'lucide-react';
import {AnimatePresence, motion, MotionConfig} from 'motion/react';
import {DiagnosticLeadSection} from './components/DiagnosticLeadSection';
import {HeroAnimatedShowcase} from './components/HeroAnimatedShowcase';
import {IoticaLogo} from './components/IoticaLogo';
import {Navbar} from './components/Navbar';
import {CorfoLogo, SercotecLogo} from './components/PartnerLogos';
import {PaymentSiiFlow} from './components/PaymentSiiFlow';
import {ResilientImage} from './components/ResilientImage';
import {ScrollReveal} from './components/ScrollReveal';
import {ServiceDiagram} from './components/ServiceDiagram';
import {SiiPlansSection} from './components/SiiPlansSection';
import {WhatsAppIcon} from './components/WhatsAppIcon';
import {
  COMPARISON_ROWS,
  FAQ_ITEMS,
  INDUSTRY_SECTORS,
  OBJECTION_ROWS,
  PAIN_SIGNALS,
  PROCESS_STEPS,
  SERVICE_MODULES,
} from './data/ioticaData';

export default function App() {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRY_SECTORS[0].id);
  const [preselectedTopic, setPreselectedTopic] = useState<string | undefined>(undefined);

  const activeProcessStep = PROCESS_STEPS[selectedStepIndex] ?? PROCESS_STEPS[0];
  const activeIndustry =
    INDUSTRY_SECTORS.find((sector) => sector.id === selectedIndustryId) ?? INDUSTRY_SECTORS[0];

  const scrollToContact = (topic?: string) => {
    if (topic) {
      setPreselectedTopic(topic);
    }
    const target = document.getElementById('contacto');
    if (target) {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar onRequestQuote={() => scrollToContact()} />

        <main className="flex-1">
          {/* 1. ANIMATED HERO HEADER WITH ROTATING SERVICE TEXTS, ICONS & ARCHITECTURE GRAPHIC */}
          <HeroAnimatedShowcase onRequestQuote={scrollToContact} />

          {/* 2. COGNITIVE CLARITY & EMPATHY ANCHOR */}
          <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-white border border-slate-200 rounded-2xl px-6 py-8 sm:px-10 text-center shadow-xs">
                <h2 className="text-base sm:text-lg font-bold tracking-tight text-[#0B192C]">
                  La tecnología debe adaptarse al ritmo de tu negocio, nunca frenarlo.
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Cuando tu sitio web comercial, la recaudación bancaria y la emisión de documentos en el
                  SII operan conectados en una sola arquitectura, tu equipo deja de resolver tareas
                  repetitivas y recupera horas clave para atender clientes.
                </p>
              </div>
            </ScrollReveal>
          </section>

        {/* 3. NEUROMARKETING DIAGNOSTIC PAIN SECTION (Midnight Navy + Crisp Slate) */}
        <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-blue-700">Diagnóstico de fricción operativa</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#0B192C] text-balance">
              Dónde se fuga la rentabilidad de{' '}
              <span className="text-blue-700">tu operación hoy.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Si un software estándar cubre lo que necesitas, te lo recomendamos con transparencia.
              En cambio, si reconoces estos cuatro cuellos de botella, una arquitectura propia
              protege tu crecimiento:
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PAIN_SIGNALS.map((signal, idx) => {
              const isNavy = signal.variant === 'navy';
              return (
                <ScrollReveal key={signal.id} delay={idx * 0.05} className="flex">
                  <article
                    className={`group w-full rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                      isNavy
                        ? 'bg-[#0B192C] text-white border border-slate-800 hover:shadow-slate-950/20'
                        : 'bg-white text-slate-900 border border-slate-200 hover:shadow-slate-900/5'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <motion.span
                          initial={{scale: 0.85, rotate: -6}}
                          whileInView={{scale: 1, rotate: 0}}
                          viewport={{once: true, amount: 0.3}}
                          transition={{type: 'spring', stiffness: 280, damping: 18, delay: idx * 0.06}}
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3 ${
                            isNavy ? 'bg-[#122640] text-blue-400' : 'bg-blue-50 text-blue-700'
                          }`}
                        >
                          {signal.number === '01' && <Code2 className="w-5 h-5" aria-hidden="true" />}
                          {signal.number === '02' && <Layers className="w-5 h-5" aria-hidden="true" />}
                          {signal.number === '03' && (
                            <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                          )}
                          {signal.number === '04' && <Cpu className="w-5 h-5" aria-hidden="true" />}
                        </motion.span>
                        <span className="font-mono text-xs tabular-nums text-slate-400">
                          {signal.number}
                        </span>
                      </div>

                      <h3 className="mt-5 text-lg font-bold tracking-tight leading-snug">
                        {signal.title}
                      </h3>

                      <p
                        className={`mt-3 text-sm leading-relaxed ${
                          isNavy ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {signal.description}
                      </p>
                    </div>

                    <p
                      className={`mt-6 pt-4 border-t text-xs font-medium ${
                        isNavy
                          ? 'border-slate-800 text-blue-300'
                          : 'border-slate-100 text-blue-700'
                      }`}
                    >
                      {signal.costLabel}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* 4. SERVICES & CAPABILITIES GRID (4 Pilares Integrados) */}
        <section id="servicios" className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-blue-700">
              Ingeniería de Software y E-Commerce Integrado para Empresas en Chile
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#0B192C] text-balance">
              Cuatro pilares diseñados para{' '}
              <span className="text-blue-700">vender, cobrar, emitir y sincronizar.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Desarrollamos plataformas web y tiendas online a medida conectadas de extremo a extremo
              con pasarelas locales, emisión automática ante el SII y tu sistema ERP/CRM.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_MODULES.map((service, idx) => (
              <ScrollReveal key={service.id} delay={(idx % 2) * 0.06} className="flex">
                <article className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-200">
                  <div>
                    <ServiceDiagram type={service.diagramType} />
                    <div className="p-6 sm:p-7">
                      <p className="font-mono text-xs font-semibold text-blue-700 tabular-nums">
                        {service.number}. {service.category}
                      </p>
                      <h3 className="mt-2 text-xl font-bold tracking-tight text-[#0B192C] leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-sm text-slate-700 leading-snug"
                          >
                            <Check
                              className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between gap-3">
                    <p className="text-xs font-medium text-slate-700 leading-snug">
                      {service.highlightOutcome}
                    </p>
                    <button
                      type="button"
                      onClick={() => scrollToContact(service.category)}
                      className="group inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Solicitar solución</span>
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 5. INTERACTIVE PAYMENT GATEWAY + SII DTE EMISSION FLOW */}
        <PaymentSiiFlow onQuoteCombination={(summary) => scrollToContact(summary)} />

        {/* 5B. MONTHLY SII + PAYMENT & API PLANS */}
        <SiiPlansSection onSelectPlan={(summary) => scrollToContact(summary)} />

        {/* 6. INDUSTRY SECTORS */}
        <section id="rubros" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-blue-700">Experiencia sectorial</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#0B192C] text-balance">
              Soluciones probadas según la{' '}
              <span className="text-blue-700">realidad operativa de tu industria.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Selecciona tu rubro para revisar la arquitectura recomendada de plataforma web,
              recaudación digital y documentos SII.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRY_SECTORS.map((sector, idx) => {
              const selected = sector.id === activeIndustry.id;
              return (
                <ScrollReveal key={sector.id} delay={(idx % 4) * 0.05}>
                  <motion.button
                    type="button"
                    whileTap={{scale: 0.985}}
                    onClick={() => setSelectedIndustryId(sector.id)}
                    className={`group relative w-full text-left rounded-2xl overflow-hidden h-60 border transition-all duration-150 cursor-pointer ${
                      selected
                        ? 'border-blue-700 ring-2 ring-blue-700/30 shadow-md shadow-blue-950/10'
                        : 'border-slate-200 hover:border-slate-400 hover:shadow-sm'
                    }`}
                  >
                    <ResilientImage
                      src={sector.image}
                      alt={sector.imageAlt}
                      fallbackTitle={sector.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081220] via-[#0B192C]/80 to-[#0B192C]/25" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="font-mono text-[11px] text-blue-300">{sector.stackFocus}</p>
                      <h3 className="mt-1 text-base font-bold tracking-tight">{sector.title}</h3>
                      <p className="mt-1.5 text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {sector.description}
                      </p>
                    </div>
                  </motion.button>
                </ScrollReveal>
              );
            })}
          </div>

          <motion.div
            key={activeIndustry.id}
            initial={{opacity: 0, y: 6}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.22, ease: 'easeOut'}}
            className="mt-6 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
          >
            <div>
              <p className="text-xs font-semibold text-blue-700">
                Combinación recomendada para {activeIndustry.title}
              </p>
              <p className="mt-1 text-sm text-slate-700">
                {activeIndustry.description}{' '}
                <span className="font-mono text-xs text-slate-500">
                  ({activeIndustry.stackFocus})
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                scrollToContact(`Rubro ${activeIndustry.title} (${activeIndustry.stackFocus})`)
              }
              className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0B192C] hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[40px]"
            >
              <span>Activar solución para este rubro</span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </motion.div>
        </section>

        {/* 7. 5-STEP TRANSPARENT METHODOLOGY */}
        <section id="metodologia" className="py-16 lg:py-20 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-2xl">
              <p className="text-xs font-semibold text-blue-700">Certidumbre en cada hito</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#0B192C] text-balance">
                Metodología transparente:{' '}
                <span className="text-blue-700">sabes qué se entrega, cuándo y cuánto inviertes.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Cada fase incluye validación práctica con tu equipo, pruebas reales de cobro y
                homologación SII antes de salir a producción.
              </p>
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {PROCESS_STEPS.map((step, index) => {
                const active = index === selectedStepIndex;
                return (
                  <ScrollReveal key={step.step} delay={index * 0.05} className="flex">
                    <motion.button
                      type="button"
                      whileTap={{scale: 0.985}}
                      onClick={() => setSelectedStepIndex(index)}
                      className={`w-full text-left rounded-2xl p-5 border transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                        active
                          ? 'bg-[#0B192C] border-[#0B192C] text-white shadow-md shadow-slate-950/15'
                          : 'bg-slate-50 border-slate-200 text-slate-900 hover:border-slate-300 hover:-translate-y-0.5'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`font-mono text-2xl font-bold tabular-nums ${
                              active ? 'text-blue-400' : 'text-blue-700'
                            }`}
                          >
                            {step.step}
                          </span>
                          <span
                            className={`font-mono text-[11px] tabular-nums ${
                              active ? 'text-slate-400' : 'text-slate-500'
                            }`}
                          >
                            {step.duration}
                          </span>
                        </div>
                        <h3 className="mt-3 text-base font-bold tracking-tight">{step.title}</h3>
                        <p
                          className={`mt-2 text-xs leading-relaxed ${
                            active ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          {step.summary}
                        </p>
                      </div>
                    </motion.button>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Active Stage Guarantee & Deliverables Bar */}
            <motion.div
              key={activeProcessStep.step}
              initial={{opacity: 0, y: 6}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.22, ease: 'easeOut'}}
              className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-semibold text-blue-700">
                  Garantía etapa {activeProcessStep.step}: {activeProcessStep.title}
                </p>
                <p className="text-sm font-semibold text-[#0B192C]">
                  {activeProcessStep.guarantee}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5 pt-1">
                  {activeProcessStep.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600"
                    >
                      <Check
                        className="w-3.5 h-3.5 text-emerald-700 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => scrollToContact(`Iniciar Etapa ${activeProcessStep.step}`)}
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[40px]"
              >
                <span>Solicitar Activación</span>
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </motion.div>
          </div>
        </section>

        {/* 8. TRANSPARENCY COMPARISON TABLE */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-blue-700">Criterio de inversión</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#0B192C] text-balance">
              Transparencia técnica: cuándo elegir una herramienta estándar y{' '}
              <span className="text-blue-700">cuándo construir con IOTICA.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="mt-10 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="p-5 text-xs font-semibold text-slate-500 w-1/4">Aspecto</th>
                      <th className="p-5 text-base font-bold text-slate-700 w-[37.5%]">
                        Solución enlatada o plantilla
                      </th>
                      <th className="p-5 bg-[#0B192C] text-white text-base font-bold w-[37.5%]">
                        Arquitectura propia IOTICA
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {COMPARISON_ROWS.map((row, idx) => (
                      <motion.tr
                        key={row.criterion}
                        initial={{opacity: 0, y: 8}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.35, delay: idx * 0.04}}
                      >
                        <td className="p-5 font-semibold text-[#0B192C]">{row.criterion}</td>
                        <td className="p-5 text-slate-600">{row.catalog}</td>
                        <td className="p-5 bg-[#122640] text-slate-100 border-t border-slate-800">
                          <span className="inline-flex items-start gap-2">
                            <Check
                              className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{row.iotica}</span>
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
          <p className="mt-4 text-center text-xs text-slate-500">
            Una herramienta estándar resuelve tareas genéricas;{' '}
            <span className="font-semibold text-slate-800">
              IOTICA consolida el modelo operativo que diferencia a tu empresa.
            </span>
          </p>

          {/* Tabla de Objeciones Resueltas */}
          <ScrollReveal delay={0.12} className="mt-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-xs font-semibold text-blue-700">Respuestas de negocio concretas</p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#0B192C] text-balance">
                Objeciones habituales resueltas con{' '}
                <span className="text-blue-700">arquitectura integrada.</span>
              </h3>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="p-5 text-xs font-semibold text-slate-500 w-[44%]">
                        Lo que frena la decisión hoy
                      </th>
                      <th className="p-5 bg-[#0B192C] text-white text-sm font-bold w-[56%]">
                        Cómo lo resuelve IOTICA en producción
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {OBJECTION_ROWS.map((item, idx) => (
                      <motion.tr
                        key={item.id}
                        initial={{opacity: 0, y: 8}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.35, delay: idx * 0.05}}
                      >
                        <td className="p-5 font-medium text-slate-700 italic">{item.objection}</td>
                        <td className="p-5 bg-[#122640] text-slate-100 border-t border-slate-800">
                          <div className="flex items-start gap-2.5">
                            <Check
                              className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <div>
                              <span className="font-bold text-blue-300">{item.solutionBadge}: </span>
                              <span>{item.resolution}</span>
                            </div>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 9. TRUST CONVERSION STRIP (Cobalt Blue High-Trust Banner) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4">
          <ScrollReveal>
            <div className="bg-blue-700 text-white rounded-2xl px-6 py-7 sm:px-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden shadow-md shadow-blue-950/10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:24px_24px] opacity-15"
              />
              <div className="relative z-10">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                  Da el siguiente paso con claridad técnica y alcance definido.
                </h2>
                <p className="mt-1 text-sm text-blue-100">
                  Preparamos tu hoja de ruta web, pasarelas de pago y certificación SII con atención directa.
                </p>
              </div>
              <button
                type="button"
                onClick={() => scrollToContact('Propuesta Técnica Cerrada')}
                className="group relative z-10 inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-bold text-white bg-[#0B192C] hover:bg-slate-900 rounded-xl transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Solicitar Activación</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </ScrollReveal>
        </section>

        {/* 11. FAQ ACCORDION */}
        <section id="faq" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="text-xs font-semibold text-blue-700">Claridad antes de contratar</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#0B192C] text-balance">
              Resolvemos tus dudas técnicas y{' '}
              <span className="text-blue-700">tributarias antes de empezar.</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqId === item.id;
              return (
                <ScrollReveal key={item.id} delay={idx * 0.04}>
                  <div className="bg-[#0B192C] text-white border border-slate-800 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#122640] transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-semibold">{item.question}</span>
                      <span className="w-7 h-7 rounded-lg bg-[#122640] flex items-center justify-center shrink-0 text-blue-400">
                        {isOpen ? (
                          <Minus className="w-4 h-4" aria-hidden="true" />
                        ) : (
                          <Plus className="w-4 h-4" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{height: 0, opacity: 0}}
                          animate={{height: 'auto', opacity: 1}}
                          exit={{height: 0, opacity: 0}}
                          transition={{duration: 0.22, ease: [0.22, 1, 0.36, 1]}}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-2 text-sm text-slate-300 leading-relaxed border-t border-slate-800">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* 12. DIAGNOSTIC & QUOTE SECTION */}
        <DiagnosticLeadSection preselectedTopic={preselectedTopic} />
      </main>

      {/* 13. ARCHITECTURAL FOOTER */}
      <footer className="bg-[#060E1A] text-slate-300 border-t border-slate-900">
        <ScrollReveal y={14} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
            <div className="md:col-span-6 space-y-4">
              <IoticaLogo variant="dark" showTagline size="footer" />
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Ingeniería de software, sitios web de alto rendimiento, integración de pasarelas de
                pago y emisión electrónica ante el SII en Chile.
              </p>
              <ul className="space-y-2 text-sm text-slate-400 pt-2">
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:contacto@iotica.cl"
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    contacto@iotica.cl
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+56930782410"
                    className="tabular-nums text-white hover:text-blue-300 transition-colors"
                  >
                    +569 30782410
                  </a>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <a
                    href="https://wa.me/56930782410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>WhatsApp directo</span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Antonio Varas 175, Ofi 208, Providencia, Santiago</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-2.5 text-sm">
              <p className="text-xs font-semibold text-slate-400">Servicios</p>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    Sitios Web Corporativos
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    Software Operativo Propio
                  </a>
                </li>
                <li>
                  <a href="#pagos-sii" className="hover:text-white transition-colors">
                    Webpay, Mercado Pago, Khipu y Flow
                  </a>
                </li>
                <li>
                  <a href="#facturacion-sii" className="hover:text-white transition-colors">
                    Facturación Electrónica SII + API
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-2.5 text-sm">
              <p className="text-xs font-semibold text-slate-400">Navegación</p>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#rubros" className="hover:text-white transition-colors">
                    Soluciones por Industria
                  </a>
                </li>
                <li>
                  <a href="#metodologia" className="hover:text-white transition-colors">
                    Metodología Transparente
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-white transition-colors">
                    Solicitar Activación
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-6 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-400">Respaldo Institucional</p>
              <p className="mt-0.5 text-sm font-medium text-slate-200">
                El proyecto IOTICA ha sido impulsado por CORFO y SERCOTEC.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3.5">
              <CorfoLogo />
              <SercotecLogo />
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026 IOTICA Ingeniería de Software. Todos los derechos reservados.</p>
            <p className="text-slate-400">Sitios Web · Software a Medida · Pasarelas de Pago · SII</p>
          </div>
        </ScrollReveal>
      </footer>
    </div>
    </MotionConfig>
  );
}
