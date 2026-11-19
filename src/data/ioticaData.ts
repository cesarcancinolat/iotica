export interface PainSignal {
  id: string;
  number: string;
  title: string;
  costLabel: string;
  description: string;
  variant: 'navy' | 'slate';
}

export interface ServiceModule {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  diagramType: 'curve' | 'payments' | 'sii' | 'bars' | 'nodes' | 'api';
  bullets: string[];
  highlightOutcome: string;
}

export interface GatewayOption {
  id: string;
  name: string;
  methods: string;
  settlement: string;
  useCase: string;
}

export interface SiiDocOption {
  code: string;
  name: string;
  trigger: string;
  output: string;
}

export interface SiiCapabilityGroup {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface IndustrySector {
  id: string;
  title: string;
  description: string;
  stackFocus: string;
  image: string;
  imageAlt: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  summary: string;
  guarantee: string;
  deliverables: string[];
}

export interface ComparisonRow {
  criterion: string;
  catalog: string;
  iotica: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ObjectionRow {
  id: string;
  objection: string;
  solutionBadge: string;
  resolution: string;
}

export const PAIN_SIGNALS: PainSignal[] = [
  {
    id: 'fragile-sheets',
    number: '01',
    title: 'Planillas frágiles y conocimiento concentrado',
    costLabel: 'Vulnerabilidad operativa ante errores o ausencias',
    description:
      'Cuando el inventario, las comisiones o la cobranza dependen de archivos aislados, un cambio accidental rompe fórmulas y frena las decisiones del día.',
    variant: 'navy',
  },
  {
    id: 'manual-sii',
    number: '02',
    title: 'Cobros en línea y SII desconectados',
    costLabel: 'Horas perdidas conciliando pagos y digitando DTE',
    description:
      'Recibes transferencias o ventas web, pero tu equipo administrativo debe validar comprobantes uno a uno antes de emitir la boleta o factura electrónica.',
    variant: 'slate',
  },
  {
    id: 'web-friction',
    number: '03',
    title: 'Sitio web informativo que no genera cierre',
    costLabel: 'Oportunidades perdidas por falta de pago online',
    description:
      'Una web lenta o sin flujo claro de reserva y pago obliga al comprador a esperar una respuesta manual—justo en el momento en que decide contratar.',
    variant: 'navy',
  },
  {
    id: 'rigid-tools',
    number: '04',
    title: 'Herramientas genéricas que cobran por crecer',
    costLabel: 'Costos mensuales crecientes por usuario y funciones sin uso',
    description:
      'Lo que sirvió al inicio hoy traba aprobaciones entre áreas, encarece cada nueva contratación y te obliga a adaptar tu negocio a una plantilla rígida.',
    variant: 'slate',
  },
];

export const SERVICE_MODULES: ServiceModule[] = [
  {
    id: 'web-ecommerce',
    number: '01',
    category: 'Desarrollo de Plataformas Web y Tiendas Online a Medida',
    title: 'Software web y e-commerce diseñados exactamente para la operación de tu negocio.',
    description:
      'No adaptamos tu empresa a plantillas rígidas; construimos plataformas escalables, rápidas y seguras alineadas con tus reglas de negocio. Desde comercios electrónicos de alto tráfico hasta portales B2B con precios diferenciados y flujos de aprobación personalizados, creamos soluciones listas para crecer contigo.',
    diagramType: 'curve',
    bullets: [
      'Comercios electrónicos propios de alto tráfico y carga rápida en móvil',
      'Portales B2B con listas de precios diferenciadas por cliente y crédito',
      'Flujos personalizados de cotización, aprobación y órdenes de compra',
      'Propiedad 100% del código fuente sin cobros crecientes por usuario',
    ],
    highlightOutcome: 'Arquitectura pensada para tus reglas comerciales, roles y volúmenes reales.',
  },
  {
    id: 'payment-gateways',
    number: '02',
    category: 'Integración de Pasarelas de Pago Chilenas',
    title: 'Recibe pagos online de forma segura, rápida y sin fricciones en Chile.',
    description:
      'Conectamos tu plataforma directamente con Transbank (Webpay Plus, Oneclick), Mercado Pago, Flow, Khipu y otros medios locales. Optimizamos el flujo de compra (checkout) para evitar carritos abandonados y asegurar conciliación automática de transacciones en tiempo real.',
    diagramType: 'payments',
    bullets: [
      'Integración directa con Transbank Webpay Plus y Oneclick para pagos en 1 clic',
      'Mercado Pago, Flow y Khipu para tarjetas nacionales, cuotas y transferencias',
      'Checkout optimizado para reducir fricción y recuperar ventas',
      'Confirmación criptográfica vía webhooks con conciliación instantánea',
    ],
    highlightOutcome: 'Experiencia fluida con Webpay Plus, tarjetas y transferencias locales.',
  },
  {
    id: 'sii-dte',
    number: '03',
    category: 'Facturación Electrónica Automática con el SII',
    title: 'Emite boletas y facturas electrónicas en automático tras cada venta.',
    description:
      'Olvídate de digitar documentos manualmente. Integramos tu tienda o sistema web directamente con el Servicio de Impuestos Internos (SII) para que, al confirmarse un pago, se genere la boleta o factura electrónica (DTE), se timbre y se envíe automáticamente al correo electrónico de tu cliente.',
    diagramType: 'sii',
    bullets: [
      'Emisión automática de Boletas (39/41), Facturas (33/34), Guías (52) y Notas (61)',
      'Timbre electrónico SII y envío automático del PDF + XML al correo del cliente',
      'Cola de reintentos y llaves de idempotencia ante intermitencias del SII',
      'Validación previa de RUT, giro y control automático de folios CAF',
    ],
    highlightOutcome: 'El sistema timbra y envía el PDF/XML al cliente al instante de aprobarse el pago.',
  },
  {
    id: 'crm-erp',
    number: '04',
    category: 'Integración de Sistemas CRM y ERP',
    title: 'Sincroniza tu web con tu operación interna en tiempo real.',
    description:
      'Eliminamos la doble digitación y los errores de inventario conectando tu sitio web con tu ERP y CRM (como Softland, Defontana, SAP, Nubox, HubSpot o sistemas propios mediante API REST). Mantén actualizado tu stock, listas de precios, estados de despacho y fichas de clientes en un solo ecosistema conectado.',
    diagramType: 'api',
    bullets: [
      'Conectores bidireccionales con Softland, Defontana, SAP, Nubox y HubSpot',
      'Sincronización en vivo de stock por bodega para evitar quiebres o sobreventa',
      'Actualización automática de precios, estados de despacho y clientes',
      'API REST documentada para conectar aplicaciones propias y e-commerce',
    ],
    highlightOutcome: 'El inventario de tu tienda conversa en vivo con tu sistema de gestión.',
  },
];

export const OBJECTION_ROWS: ObjectionRow[] = [
  {
    id: 'obj-sii',
    objection: '«Voy a perder mucho tiempo emitiendo boletas una por una.»',
    solutionBadge: 'Automatización SII',
    resolution: 'El sistema timbra y envía el PDF/XML al cliente al instante de aprobarse el pago.',
  },
  {
    id: 'obj-stock',
    objection: '«Se va a vender stock que ya no tengo en bodega.»',
    solutionBadge: 'Sincronización ERP',
    resolution: 'El inventario de tu tienda conversa en vivo con tu sistema de gestión.',
  },
  {
    id: 'obj-templates',
    objection: '«Las plantillas genéricas no soportan mi modelo de venta.»',
    solutionBadge: 'Desarrollo a medida',
    resolution: 'Arquitectura pensada para tus reglas comerciales, roles y volúmenes reales.',
  },
  {
    id: 'obj-payments',
    objection: '«Mis clientes no confían o abandonan al pagar.»',
    solutionBadge: 'Pasarelas locales certificadas',
    resolution: 'Experiencia fluida con Webpay Plus, tarjetas y transferencias locales.',
  },
];

export const PAYMENT_GATEWAYS: GatewayOption[] = [
  {
    id: 'webpay',
    name: 'Transbank Webpay / Oneclick',
    methods: 'Redcompra débito, crédito en cuotas y pago guardado en 1 clic',
    settlement: 'Liquidación bancaria directa en Chile · Homologación oficial Transbank',
    useCase: 'Comercio electrónico nacional, portales de pago de cuentas y cobros recurrentes.',
  },
  {
    id: 'mercadopago',
    name: 'Mercado Pago Checkout',
    methods: 'Tarjetas bancarias, saldo digital y financiamiento en cuotas',
    settlement: 'Gestión flexible de abonos y división de pagos entre comercios',
    useCase: 'Plataformas de alto tráfico, reservas en línea y marketplaces multi-tienda.',
  },
  {
    id: 'khipu',
    name: 'Khipu / Transferencia Conciliada',
    methods: 'Transferencia bancaria guiada con confirmación instantánea',
    settlement: 'Menor costo transaccional para tickets altos y pagos entre empresas',
    useCase: 'Facturas B2B, pagos de servicios profesionales, arriendos y matrículas.',
  },
  {
    id: 'flow',
    name: 'Flow Pagos Chile',
    methods: 'Webpay, Servipag, Mach, transferencias y tarjetas nacionales',
    settlement: 'Recaudación centralizada y envío automático de links de cobro',
    useCase: 'Cobranzas periódicas, servicios profesionales y comercios multimedio.',
  },
];

export const SII_DOCUMENTS: SiiDocOption[] = [
  {
    code: 'DTE 39',
    name: 'Boleta Electrónica',
    trigger: 'Generación instantánea al recibir confirmación segura desde la pasarela',
    output: 'PDF con timbre electrónico enviado al comprador y registro automático SII',
  },
  {
    code: 'DTE 33',
    name: 'Factura Electrónica',
    trigger: 'Validación automática de RUT, giro y dirección tributaria en el checkout',
    output: 'XML firmado + PDF cedible despachado al cliente y al portal tributario',
  },
  {
    code: 'DTE 52',
    name: 'Guía de Despacho',
    trigger: 'Emisión directa al confirmar preparación de pedido o salida de bodega',
    output: 'Documento tributario listo para traslado y trazabilidad de entrega',
  },
  {
    code: 'DTE 61',
    name: 'Nota de Crédito',
    trigger: 'Anulación o devolución controlada desde el panel administrativo IOTICA',
    output: 'Referencia tributaria exacta al DTE original y reversa contable limpia',
  },
];

export const SII_SUITE_GROUPS: SiiCapabilityGroup[] = [
  {
    id: 'dte-emission',
    title: 'Emisión DTE completa y automática',
    subtitle: 'Documentos tributarios sin cobro por folios',
    items: [
      'Emisión de Boletas (39/41), Facturas (33/34), Guías de Despacho (52) y Notas de Crédito/Débito (61/56)',
      'Gestión automática de folios CAF, timbre electrónico SII y validación previa de RUT',
      'Envío instantáneo de PDF con logo corporativo y respaldo XML al correo del cliente',
      'Usuarios ilimitados, múltiples sucursales, bodegas y puntos de emisión',
    ],
  },
  {
    id: 'payments-reconciliation',
    title: 'Recaudación en línea integrada al SII',
    subtitle: 'Cobro y respaldo tributario en un solo flujo',
    items: [
      'Conexión nativa con Transbank Webpay Plus, Oneclick, Mercado Pago, Khipu y Flow',
      'Emisión automática de boleta o factura al aprobarse el pago vía webhook',
      'Generación de enlaces de cobro desde cotizaciones o estados de cuenta pendientes',
      'Conciliación bancaria automática entre pedidos pagados y folios emitidos',
    ],
  },
  {
    id: 'reception-accounting',
    title: 'Recepción de compras y control contable',
    subtitle: 'Orden tributario para empresas y contadores',
    items: [
      'Recepción automática de facturas de proveedores directamente desde el SII',
      'Gestión de acuses de recibo o rechazo dentro del plazo legal vigente',
      'Libros de compra y venta actualizados con resumen de débito y crédito para F29 / PPM',
      'Consola Multi-RUT y descargas masivas de XML/PDF para grupos empresariales o estudios contables',
    ],
  },
  {
    id: 'api-resilience',
    title: 'API REST y continuidad ante caídas del SII',
    subtitle: 'Arquitectura preparada para alto volumen',
    items: [
      'API REST JSON documentada con entorno de pruebas (sandbox) sin validez fiscal',
      'Llaves Idempotency-Key para evitar documentos duplicados ante fallas de red',
      'Cola de reintentos automática cuando los servidores del SII presentan intermitencia',
      'Conectores listos para Wix, WooCommerce, Shopify, PrestaShop, Jumpseller, ERP corporativos y aplicaciones propias',
    ],
  },
];

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 'comercio',
    title: 'Comercio, Retail y E-commerce',
    description:
      'Sitio de venta propio, stock integrado por bodega, Webpay o Mercado Pago y emisión automática de boleta SII.',
    stackFocus: 'Web de venta + Checkout + Boleta 39',
    image: '/src/assets/images/case_fintech_workspace_1794851553250.jpg',
    imageAlt: 'Especialistas diseñando plataforma de comercio electrónico y pagos',
  },
  {
    id: 'transporte',
    title: 'Transporte y Logística',
    description:
      'Seguimiento de flota, confirmación móvil en destino y emisión automática de guías de despacho electrónicas.',
    stackFocus: 'App en ruta + Guías DTE 52 + ERP',
    image: '/src/assets/images/case_logistics_platform_1794851552018.jpg',
    imageAlt: 'Centro de control logístico supervisando rutas y entregas en tiempo real',
  },
  {
    id: 'servicios-b2b',
    title: 'Servicios Técnicos y B2B',
    description:
      'Órdenes de trabajo digitales, portal para aprobar presupuestos, cobro en línea y facturación SII sin demoras.',
    stackFocus: 'Portal clientes + Khipu/Webpay + Factura 33',
    image: '/src/assets/images/hero_engineering_studio_1794851551819.jpg',
    imageAlt: 'Equipo de ingeniería planificando plataforma de servicios corporativos',
  },
  {
    id: 'salud',
    title: 'Salud, Clínicas y Centros Médicos',
    description:
      'Reserva web de horas, pago anticipado seguro, historial protegido por roles y emisión de boleta exenta.',
    stackFocus: 'Agenda web + Webpay + Boleta Exenta 41',
    image: '/src/assets/images/case_cloud_infrastructure_1794851552560.jpg',
    imageAlt: 'Infraestructura cloud segura para datos sensibles en salud',
  },
  {
    id: 'construccion',
    title: 'Construcción e Inmobiliaria',
    description:
      'Control de avance físico y financiero, estados de pago a contratistas, reservas web y portal de clientes.',
    stackFocus: 'Control de obra + Transferencia + Factura 33',
    image: '/src/assets/images/case_logistics_platform_1794851552018.jpg',
    imageAlt: 'Plataforma de seguimiento de obra y estados de pago',
  },
  {
    id: 'educacion',
    title: 'Educación, OTEC y Capacitación',
    description:
      'Admisión en línea, matrícula digital, cobro mensual con Oneclick y emisión automática de boletas ante el SII.',
    stackFocus: 'Portal alumnos + Oneclick + Boleta SII',
    image: '/src/assets/images/hero_engineering_studio_1794851551819.jpg',
    imageAlt: 'Desarrollo de plataforma educativa y recaudación de matrículas',
  },
  {
    id: 'agro',
    title: 'Agroindustria y Exportación',
    description:
      'Trazabilidad por lote y productor, control de packing, documentos de embarque y conexión contable.',
    stackFocus: 'Trazabilidad + Guías + Factura Exportación',
    image: '/src/assets/images/case_cloud_infrastructure_1794851552560.jpg',
    imageAlt: 'Servidores de respaldo continuo para sistemas agroindustriales',
  },
  {
    id: 'saas',
    title: 'Empresas de Suscripción y Contadores',
    description:
      'Plataformas multi-empresa con facturación mensual automatizada vía Webpay Oneclick o Flow y DTE programados.',
    stackFocus: 'Multi-RUT + Cobro recurrente + DTE mensual',
    image: '/src/assets/images/case_fintech_workspace_1794851553250.jpg',
    imageAlt: 'Arquitectos evaluando métricas de suscripción y facturación automática',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Radiografía Operativa',
    duration: 'Días 1 a 5',
    summary:
      'Analizamos cómo vendes, cobras y facturas hoy para definir exactamente qué automatizar y qué integraciones necesitas.',
    guarantee: 'Recibes un documento de alcance claro e inversión cerrada antes de contratar.',
    deliverables: [
      'Mapeo de procesos comerciales, pagos y flujo tributario SII',
      'Definición técnica de conectores (Webpay, Mercado Pago, ERP, SII)',
      'Propuesta cerrada por etapas con fechas comprometidas',
    ],
  },
  {
    step: '02',
    title: 'Diseño y Prototipo Validado',
    duration: 'Semanas 1 a 2',
    summary:
      'Construimos pantallas interactivas centradas en confianza y baja fricción para que apruebes el flujo antes de programar.',
    guarantee: 'Tu equipo prueba la experiencia real de usuario antes de pasar a código.',
    deliverables: [
      'Prototipo navegable optimizado para computador y teléfono',
      'Arquitectura de base de datos y seguridad de accesos',
      'Diseño de checkout diseñado para reducir abandono',
    ],
  },
  {
    step: '03',
    title: 'Ingeniería, Pagos y SII',
    duration: 'Ciclos de 2 semanas',
    summary:
      'Desarrollamos el sitio web, la plataforma interna y las integraciones de pago y SII con entregas funcionales cada quincena.',
    guarantee: 'Avances visibles en ambiente de pruebas privado desde la segunda semana.',
    deliverables: [
      'Desarrollo frontend y backend modular documentado',
      'Integración de pasarela en ambiente de certificación',
      'Motor de emisión DTE conectado a set de pruebas SII',
    ],
  },
  {
    step: '04',
    title: 'Certificación Real y QA',
    duration: 'Semana previa al estreno',
    summary:
      'Ejecutamos pruebas de estrés, validación de pagos reales acotados, timbres SII y optimización de velocidad web.',
    guarantee: 'Cero sorpresas el día de lanzamiento: todo se valida con transacciones reales.',
    deliverables: [
      'Aprobación formal ante Transbank / Mercado Pago / SII',
      'Revisión de seguridad OWASP, certificados SSL y respaldos automáticos',
      'Capacitación práctica grabada para tu equipo operativo',
    ],
  },
  {
    step: '05',
    title: 'Autonomía y Soporte Continuo',
    duration: 'Post-lanzamiento',
    summary:
      'Entregamos el 100% del código fuente y credenciales a nombre de tu empresa, con acompañamiento técnico garantizado.',
    guarantee: 'Independencia total: sin ataduras de proveedor ni cobros por usuario.',
    deliverables: [
      'Transferencia completa de repositorios Git y nube',
      'Monitoreo de disponibilidad y mesa de soporte con SLA',
      'Hoja de evolución continua guiada por métricas de venta',
    ],
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    criterion: 'Ajuste a tu negocio',
    catalog: 'Debes modificar la forma en que trabaja tu equipo para usar la herramienta',
    iotica: 'El sitio web, el checkout y los flujos internos calzan con tu operación real',
  },
  {
    criterion: 'Pasarelas de pago',
    catalog: 'Conectores básicos, poca flexibilidad y comisiones adicionales por venta',
    iotica: 'Integración directa Webpay, Oneclick, Mercado Pago, Khipu o Flow sin intermediarios',
  },
  {
    criterion: 'Emisión tributaria SII',
    catalog: 'Plugins externos frágiles o emisión manual posterior en otro portal',
    iotica: 'Emisión automática de Boletas, Facturas y Guías al confirmarse cada pago',
  },
  {
    criterion: 'Inversión a mediano plazo',
    catalog: 'Mensualidades crecientes cada vez que sumas usuarios o sucursales',
    iotica: 'Sin cobro por usuario ni folios adicionales: escalas sin multiplicar licencias',
  },
  {
    criterion: 'Velocidad de despliegue',
    catalog: 'Rápido para funciones genéricas, lento y costoso al pedir cambios propios',
    iotica: 'Activación rápida de facturación SII o despliegues a medida en 3 a 8 semanas',
  },
  {
    criterion: 'Propiedad intelectual',
    catalog: 'El código y la estructura pertenecen al proveedor externo',
    iotica: 'Código fuente, dominio y base de datos 100% a nombre de tu empresa',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Puedo contratar la solución de Facturación SII + Pagos sin desarrollar un sistema completo?',
    answer:
      'Sí. Puedes activar únicamente nuestra plataforma de facturación electrónica SII con pasarelas de pago y API REST conectada a tu tienda o flujo actual, o bien integrarla dentro de un sitio web y sistema operativo construido a medida por IOTICA.',
  },
  {
    id: 'faq-2',
    question: '¿Cómo protege IOTICA mi inversión antes de iniciar un proyecto?',
    answer:
      'Comenzamos con una evaluación técnica de tu operación y entregamos una propuesta con alcance definido según tu volumen real, prototipo navegable previo a la programación y entregas verificables cada dos semanas. No firmas a ciegas ni asumes sobrecostos imprevistos.',
  },
  {
    id: 'faq-3',
    question: '¿Qué pasa si el sitio del SII está caído al momento de cobrar una venta?',
    answer:
      'Nuestra arquitectura incorpora cola de reintentos automática y llaves de idempotencia. El pago del cliente se aprueba y registra normalmente sin duplicar cobros, y el motor envía el DTE al SII en cuanto el servicio tributario vuelve a responder.',
  },
  {
    id: 'faq-4',
    question: '¿Qué pasarelas de pago integran y cómo aseguran las transacciones?',
    answer:
      'Integramos Transbank Webpay Plus, Oneclick Mall, Mercado Pago, Khipu y Flow mediante APIs oficiales y webhooks validados criptográficamente. Esto garantiza que ningún pedido se marque como pagado sin confirmación real de la entidad financiera.',
  },
  {
    id: 'faq-5',
    question: '¿Incluye ambiente de pruebas API y gestión multi-RUT para contadores?',
    answer:
      'Sí. La plataforma incluye llaves de prueba (sandbox) para validar documentos sin valor fiscal antes de salir a producción, además de consola multi-empresa para estudios contables, grupos societarios y preparación de F29 / PPM.',
  },
  {
    id: 'faq-6',
    question: '¿Quién queda como dueño del código fuente, dominio y documentos tributarios?',
    answer:
      'En los desarrollos a medida, tu empresa conserva el 100% de la propiedad intelectual, repositorios, credenciales cloud y base de datos. En la plataforma de facturación SII, todos tus XML, PDF y registros contables son exportables en cualquier momento sin amarras.',
  },
  {
    id: 'faq-7',
    question: '¿Pueden conectarse con nuestro ERP, CRM o tienda e-commerce actual?',
    answer:
      'Sí. Contamos con API REST documentada y conectores estables para Softland, Defontana, SAP, Nubox, HubSpot, además de tiendas en Wix, WooCommerce, Shopify, PrestaShop y Jumpseller para sincronizar precios, stock, despachos, pagos y documentos tributarios.',
  },
];
