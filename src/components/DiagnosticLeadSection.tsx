import {useEffect, useRef, useState, type FormEvent} from 'react';
import {ArrowRight, CheckCircle2, Clock} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {ScrollReveal} from './ScrollReveal';
import {WhatsAppIcon} from './WhatsAppIcon';

interface DiagnosticLeadSectionProps {
  preselectedTopic?: string;
}

const WHATSAPP_NUMBER = '56930782410';

const SCOPE_OPTIONS = [
  {id: 'facturacion-sii-api', label: 'Facturación SII + API'},
  {id: 'pasarelas-sii', label: 'Pasarelas de Pago + SII'},
  {id: 'web-conversion', label: 'Sitio Web + Checkout'},
  {id: 'software-medida', label: 'Software Operativo Propio'},
];

export function DiagnosticLeadSection({preselectedTopic}: DiagnosticLeadSectionProps) {
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    'facturacion-sii-api',
    'pasarelas-sii',
  ]);
  const [companyOrUrl, setCompanyOrUrl] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<{
    code: string;
    email: string;
    scopes: string[];
    whatsappUrl: string;
  } | null>(null);

  const whatsappLauncherRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!preselectedTopic) return;
    setDetails(`Interés en activar: ${preselectedTopic}.`);
    const normalized = preselectedTopic.toLowerCase();
    if (normalized.includes('facturación') || normalized.includes('api')) {
      setSelectedScopes(['facturacion-sii-api', 'pasarelas-sii']);
    } else if (normalized.includes('webpay') || normalized.includes('sii')) {
      setSelectedScopes(['pasarelas-sii', 'web-conversion']);
    }
    setSubmitted(null);
  }, [preselectedTopic]);

  const toggleScope = (id: string) => {
    setSelectedScopes((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((item) => item !== id)
          : prev
        : [...prev, id],
    );
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (companyOrUrl.trim().length < 2) {
      nextErrors.companyOrUrl = 'Indica el nombre de tu empresa o la URL de tu sitio actual.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Ingresa un correo electrónico válido.';
    }
    if (phone.replace(/\D/g, '').length < 8) {
      nextErrors.phone = 'Ingresa un teléfono de contacto válido (ej. +56 9 3078 2410).';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const labels = SCOPE_OPTIONS.filter((opt) => selectedScopes.includes(opt.id)).map(
      (opt) => opt.label,
    );
    const code = `IOT-${Math.floor(1000 + Math.random() * 9000)}`;

    const messageLines = [
      'Hola equipo IOTICA, solicito activación y evaluación técnica.',
      `Folio: ${code}`,
      `Áreas: ${labels.join(', ')}`,
      `Empresa / Web: ${companyOrUrl.trim()}`,
      `Correo: ${email.trim()}`,
      `Teléfono: ${phone.trim()}`,
      details.trim() ? `Detalle: ${details.trim()}` : null,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      messageLines.join('\n'),
    )}`;

    if (whatsappLauncherRef.current) {
      whatsappLauncherRef.current.href = whatsappUrl;
      whatsappLauncherRef.current.click();
    }

    setSubmitted({
      code,
      email: email.trim(),
      scopes: labels,
      whatsappUrl,
    });
  };

  return (
    <section id="contacto" className="py-16 lg:py-20 bg-slate-50">
      <a
        ref={whatsappLauncherRef}
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
      >
        Enviar por WhatsApp
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#0B192C] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-35"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Left Immediate Activation & Direct Support Copy */}
            <div className="lg:col-span-5 space-y-5">
              <p className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Atención directa · Respuesta por WhatsApp</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance leading-tight">
                Activación para automatizar tus ventas, pagos y SII
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Envía tu requerimiento directo al WhatsApp técnico de IOTICA. Recibe asesoría
                especializada y acompañamiento continuo para activar tu plataforma web, pasarelas
                de pago o facturación electrónica SII.
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                <p>
                  <span className="text-white font-semibold">Atención directa</span> por
                  WhatsApp con especialistas de ingeniería
                </p>
                <p>
                  <span className="text-white font-semibold">Activación prioritaria</span> de
                  facturación SII, API y pasarelas de cobro en Chile
                </p>
                <p>
                  <span className="text-white font-semibold">100% propiedad intelectual</span> y
                  certificación directa con Webpay, Mercado Pago, Khipu, Flow y SII
                </p>
              </div>
            </div>

            {/* Right Interactive Direct-to-WhatsApp Form */}
            <div className="lg:col-span-7 bg-[#122640] border border-slate-700/80 rounded-2xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{opacity: 0, y: 8}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -8}}
                    transition={{duration: 0.25}}
                    className="py-6 space-y-5"
                  >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-emerald-400 tabular-nums">
                      Mensaje generado para WhatsApp · Folio {submitted.code}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                      Tu solicitud de activación está lista
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      Preparamos tu mensaje directo al WhatsApp de atención de IOTICA (
                      <span className="text-white font-semibold">+569 30782410</span>) para{' '}
                      <span className="text-white font-semibold">
                        {submitted.scopes.join(' · ')}
                      </span>
                      . Si no se abrió automáticamente, pulsa el botón inferior para enviarlo ahora.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={submitted.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-bold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors min-h-[44px]"
                    >
                      <WhatsAppIcon className="w-5 h-5 shrink-0" />
                      <span>Abrir chat en WhatsApp ahora</span>
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(null);
                        setDetails('');
                      }}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer min-h-[44px]"
                    >
                      Enviar otra solicitud
                    </button>
                  </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{opacity: 0, y: 8}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -8}}
                    transition={{duration: 0.25}}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-700/80">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-white">
                      <WhatsAppIcon className="w-4 h-4 shrink-0" />
                      <span>Solicitar activación · Equipo técnico IOTICA</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>Atención directa</span>
                    </span>
                  </div>

                  <div>
                    <span className="block text-xs font-semibold text-slate-200 mb-2.5">
                      Áreas a activar (puedes seleccionar varias)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SCOPE_OPTIONS.map((option) => {
                        const active = selectedScopes.includes(option.id);
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => toggleScope(option.id)}
                            className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                              active
                                ? 'bg-blue-700 border-blue-500 text-white'
                                : 'bg-[#0B192C] border-slate-700 text-slate-300 hover:border-slate-500'
                            }`}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="companyOrUrl"
                      className="block text-xs font-semibold text-slate-200 mb-1.5"
                    >
                      Empresa o sitio web actual (ej. tuempresa.cl)
                    </label>
                    <input
                      id="companyOrUrl"
                      type="text"
                      value={companyOrUrl}
                      onChange={(e) => setCompanyOrUrl(e.target.value)}
                      placeholder="tuempresa.cl o Razón Social"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#0B192C] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 ${
                        errors.companyOrUrl ? 'border-red-400' : 'border-slate-700'
                      }`}
                    />
                    {errors.companyOrUrl && (
                      <p className="mt-1 text-xs text-red-300">{errors.companyOrUrl}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="leadEmail"
                        className="block text-xs font-semibold text-slate-200 mb-1.5"
                      >
                        Correo corporativo
                      </label>
                      <input
                        id="leadEmail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nombre@tuempresa.cl"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#0B192C] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 ${
                          errors.email ? 'border-red-400' : 'border-slate-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-300">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="leadPhone"
                        className="block text-xs font-semibold text-slate-200 mb-1.5"
                      >
                        Teléfono / WhatsApp
                      </label>
                      <input
                        id="leadPhone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+56 9 3078 2410"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#0B192C] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 ${
                          errors.phone ? 'border-red-400' : 'border-slate-700'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-300">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="leadDetails"
                      className="block text-xs font-semibold text-slate-200 mb-1.5"
                    >
                      Contexto breve del proyecto (opcional)
                    </label>
                    <textarea
                      id="leadDetails"
                      rows={2}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Ej. Necesitamos activar facturación SII con Webpay y conexión a nuestra tienda o ERP..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-700 bg-[#0B192C] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors duration-150 cursor-pointer min-h-[46px]"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    <span>Solicitar Activación</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Se envía directo a WhatsApp (+569 30782410) · Atención directa con equipo técnico.
                  </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
