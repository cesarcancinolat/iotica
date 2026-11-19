import {useState} from 'react';
import {ArrowRight, Check, CreditCard, FileText, ShieldCheck} from 'lucide-react';
import {motion} from 'motion/react';
import {PAYMENT_GATEWAYS, SII_DOCUMENTS} from '../data/ioticaData';
import {ScrollReveal} from './ScrollReveal';

interface PaymentSiiFlowProps {
  onQuoteCombination: (summary: string) => void;
}

export function PaymentSiiFlow({onQuoteCombination}: PaymentSiiFlowProps) {
  const [selectedGatewayId, setSelectedGatewayId] = useState(PAYMENT_GATEWAYS[0].id);
  const [selectedDocCode, setSelectedDocCode] = useState(SII_DOCUMENTS[0].code);

  const gateway =
    PAYMENT_GATEWAYS.find((item) => item.id === selectedGatewayId) ?? PAYMENT_GATEWAYS[0];
  const siiDoc = SII_DOCUMENTS.find((doc) => doc.code === selectedDocCode) ?? SII_DOCUMENTS[0];

  return (
    <section
      id="pagos-sii"
      className="py-16 lg:py-24 bg-[#0B192C] text-white relative overflow-hidden"
    >
      {/* Subtle architectural dot matrix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-35"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="max-w-3xl">
          <p className="text-xs font-semibold text-blue-300">
            Recaudación y Cumplimiento Tributario Automatizado
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Del clic de compra al documento timbrado en el SII en menos de tres segundos
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Elimina la revisión manual de comprobantes y el atraso en boletas o facturas. Selecciona
            una pasarela y un documento tributario para verificar el circuito técnico completo.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left selector column */}
          <ScrollReveal delay={0.05} className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 mb-3">
                <motion.span
                  key={`gw-icon-${gateway.id}`}
                  initial={{scale: 0.75, rotate: -8}}
                  animate={{scale: 1, rotate: 0}}
                  transition={{type: 'spring', stiffness: 320, damping: 18}}
                  className="inline-flex"
                >
                  <CreditCard className="w-4 h-4 text-blue-400" aria-hidden="true" />
                </motion.span>
                <span>1. Elige la pasarela de pago</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {PAYMENT_GATEWAYS.map((item) => {
                  const active = item.id === gateway.id;
                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      whileTap={{scale: 0.99}}
                      onClick={() => setSelectedGatewayId(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-150 cursor-pointer ${
                        active
                          ? 'bg-blue-700 border-blue-500 text-white shadow-sm shadow-blue-950/40'
                          : 'bg-[#122640] border-slate-700/80 text-slate-200 hover:border-slate-500 hover:text-white'
                      }`}
                    >
                      <p className="text-sm font-bold tracking-tight">{item.name}</p>
                      <p className={`text-xs mt-0.5 ${active ? 'text-blue-100' : 'text-slate-400'}`}>
                        {item.methods}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 mb-3">
                <motion.span
                  key={`doc-icon-${siiDoc.code}`}
                  initial={{scale: 0.75, rotate: 8}}
                  animate={{scale: 1, rotate: 0}}
                  transition={{type: 'spring', stiffness: 320, damping: 18}}
                  className="inline-flex"
                >
                  <FileText className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                </motion.span>
                <span>2. Elige el documento tributario SII</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {SII_DOCUMENTS.map((doc) => {
                  const active = doc.code === siiDoc.code;
                  return (
                    <motion.button
                      key={doc.code}
                      type="button"
                      whileTap={{scale: 0.985}}
                      onClick={() => setSelectedDocCode(doc.code)}
                      className={`text-left px-3.5 py-3 rounded-xl border transition-all duration-150 cursor-pointer ${
                        active
                          ? 'bg-white border-white text-[#0B192C] shadow-sm'
                          : 'bg-[#122640] border-slate-700/80 text-slate-200 hover:border-slate-500 hover:text-white'
                      }`}
                    >
                      <span
                        className={`font-mono text-xs font-semibold tabular-nums ${
                          active ? 'text-emerald-700' : 'text-emerald-400'
                        }`}
                      >
                        {doc.code}
                      </span>
                      <p className="text-sm font-bold mt-0.5">{doc.name}</p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Right automated flow panel */}
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <div className="bg-[#122640] border border-slate-700/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
              />

              <motion.div
                key={`${gateway.id}-${siiDoc.code}`}
                initial={{opacity: 0, y: 6}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.22, ease: 'easeOut'}}
                className="space-y-6"
              >
                <div className="pb-5 border-b border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <motion.span
                        animate={{scale: [1, 1.15, 1]}}
                        transition={{duration: 2.6, repeat: Infinity, ease: 'easeInOut'}}
                        className="inline-flex"
                      >
                        <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                      </motion.span>
                      <span>Circuito certificado en producción</span>
                    </p>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
                      {gateway.name} + {siiDoc.name} ({siiDoc.code})
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-slate-300 tabular-nums">
                    <motion.span
                      animate={{opacity: [0.35, 1, 0.35]}}
                      transition={{duration: 1.5, repeat: Infinity, ease: 'easeInOut'}}
                      className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"
                    />
                    <span>Emisión automática &lt; 3 seg</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{opacity: 0, y: 6}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.2, delay: 0.02}}
                    className="bg-[#0B192C] border border-slate-700/70 rounded-xl p-4"
                  >
                    <p className="font-mono text-xs text-blue-300 tabular-nums">
                      Paso 01 · Checkout
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-white">
                      Cobro cifrado vía {gateway.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                      {gateway.settlement}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{opacity: 0, y: 6}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.2, delay: 0.07}}
                    className="bg-[#0B192C] border border-slate-700/70 rounded-xl p-4"
                  >
                    <p className="font-mono text-xs text-blue-300 tabular-nums">
                      Paso 02 · Validación
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-white">
                      Confirmación criptográfica segura
                    </p>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">{siiDoc.trigger}</p>
                  </motion.div>

                  <motion.div
                    initial={{opacity: 0, y: 6}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.2, delay: 0.12}}
                    className="bg-[#0B192C] border border-slate-700/70 rounded-xl p-4"
                  >
                    <p className="font-mono text-xs text-emerald-400 tabular-nums">
                      Paso 03 · Timbre SII
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-white">
                      Emisión automática de {siiDoc.code}
                    </p>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">{siiDoc.output}</p>
                  </motion.div>

                  <motion.div
                    initial={{opacity: 0, y: 6}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.2, delay: 0.17}}
                    className="bg-[#0B192C] border border-slate-700/70 rounded-xl p-4"
                  >
                    <p className="font-mono text-xs text-emerald-400 tabular-nums">
                      Paso 04 · Conciliación
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-white">
                      Respaldo contable y stock al día
                    </p>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                      Vincula comprobante bancario, folio tributario y movimiento de inventario en un
                      solo registro auditable.
                    </p>
                  </motion.div>
                </div>

                <div className="bg-[#081220] border border-slate-700/70 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-slate-200">
                    Escenario ideal para esta arquitectura:
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">{gateway.useCase}</p>
                  <ul className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>Control automático de folios CAF</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>Homologación oficial ante SII</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-slate-300">
                    Implementable tanto en sitios nuevos como en plataformas que ya operan hoy.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      onQuoteCombination(
                        `Integración ${gateway.name} + Emisión ${siiDoc.name} (${siiDoc.code})`,
                      )
                    }
                    className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[42px]"
                  >
                    <span>Activar esta integración</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
