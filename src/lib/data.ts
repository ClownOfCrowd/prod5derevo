import {Locale} from '@/i18n/routing';

export type CategoryId = 'solid' | 'plywood' | 'mdf' | 'decking' | 'custom';

type LocalizedText = Record<Locale, string>;

export type Product = {
  slug: string;
  category: CategoryId;
  title: LocalizedText;
  description: LocalizedText;
  woodType: string;
  thicknessMm: number;
  grade: string;
  pricePerM3: number;
  densityKgM3: number;
  moisturePercent: string;
  sizes: string[];
  applications: string[];
  image: string;
};

export type Category = {
  id: CategoryId;
  title: LocalizedText;
  teaser: LocalizedText;
  image: string;
};

export type LocalizedEntry = {
  label: LocalizedText;
  note?: LocalizedText;
  value: string;
};

export const categories: Category[] = [
  {
    id: 'solid',
    title: {
      de: 'Massivholz',
      en: 'Solid Wood',
      es: 'Madera maciza',
      ru: 'Массив дерева'
    },
    teaser: {
      de: 'Ausgewahlte Bohlen und Leimholz fur sichtbare Flachen.',
      en: 'Selected planks and glued panels for visible surfaces.',
      es: 'Tablones y paneles laminados para superficies vistas.',
      ru: 'Отборные доски и клееные щиты для видимых поверхностей.'
    },
    image:
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'plywood',
    title: {
      de: 'Sperrholz',
      en: 'Plywood',
      es: 'Contrachapado',
      ru: 'Фанера'
    },
    teaser: {
      de: 'Strukturelle Stabilitat fur Bau und Innenausbau.',
      en: 'Structural stability for construction and interiors.',
      es: 'Estabilidad estructural para construccion e interiores.',
      ru: 'Структурная стабильность для строительства и интерьеров.'
    },
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'mdf',
    title: {
      de: 'MDF / Platten',
      en: 'MDF / Panels',
      es: 'MDF / Paneles',
      ru: 'MDF / Плиты'
    },
    teaser: {
      de: 'Praxistaugliche Platten fur Serienproduktion.',
      en: 'Reliable boards for serial manufacturing.',
      es: 'Tableros fiables para produccion en serie.',
      ru: 'Надежные плиты для серийного производства.'
    },
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'decking',
    title: {
      de: 'Terrassendielen',
      en: 'Decking',
      es: 'Tarima exterior',
      ru: 'Террасная доска'
    },
    teaser: {
      de: 'Witterungsfeste Oberflachen fur Outdoor-Projekte.',
      en: 'Weather-ready surfaces for outdoor projects.',
      es: 'Superficies resistentes para proyectos exteriores.',
      ru: 'Износостойкие покрытия для уличных проектов.'
    },
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'custom',
    title: {
      de: 'Zuschnitte',
      en: 'Custom Cuts',
      es: 'Cortes a medida',
      ru: 'Кастомная резка'
    },
    teaser: {
      de: 'Millimetergenaue Fertigung fur komplexe Spezifikationen.',
      en: 'Millimeter-accurate production for complex specs.',
      es: 'Produccion milimetrica para especificaciones complejas.',
      ru: 'Точная обработка под сложные технические задачи.'
    },
    image:
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1400&q=80'
  }
];

export const products: Product[] = [
  {
    slug: 'oak-prime-40',
    category: 'solid',
    title: {
      de: 'Eiche Prime 40',
      en: 'Oak Prime 40',
      es: 'Roble Prime 40',
      ru: 'Дуб Prime 40'
    },
    description: {
      de: 'Ruhige Maserung fur hochwertige Mobelfronten und Treppen.',
      en: 'Calm grain for premium furniture fronts and stair elements.',
      es: 'Veta uniforme para frentes de mobiliario y escaleras premium.',
      ru: 'Ровная текстура для фасадов мебели и премиальных лестниц.'
    },
    woodType: 'Oak',
    thicknessMm: 40,
    grade: 'A/B',
    pricePerM3: 1290,
    densityKgM3: 720,
    moisturePercent: '8-10%',
    sizes: ['2500 x 650 mm', '3000 x 900 mm'],
    applications: ['Furniture', 'Interior Design'],
    image:
      'https://images.unsplash.com/photo-1616594039964-3e95f89c0a2e?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'ash-select-30',
    category: 'solid',
    title: {
      de: 'Esche Select 30',
      en: 'Ash Select 30',
      es: 'Fresno Select 30',
      ru: 'Ясень Select 30'
    },
    description: {
      de: 'Elastisch und hell fur Innenausbau mit hoher Belastung.',
      en: 'Elastic bright wood for high-load interior projects.',
      es: 'Madera elastica y clara para interiores con alta carga.',
      ru: 'Упругий светлый массив для нагруженных интерьерных задач.'
    },
    woodType: 'Ash',
    thicknessMm: 30,
    grade: 'A',
    pricePerM3: 1180,
    densityKgM3: 680,
    moisturePercent: '8-10%',
    sizes: ['2400 x 600 mm', '2800 x 800 mm'],
    applications: ['Construction', 'Furniture'],
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'birch-plywood-18',
    category: 'plywood',
    title: {
      de: 'Birke Sperrholz 18',
      en: 'Birch Plywood 18',
      es: 'Contrachapado de abedul 18',
      ru: 'Березовая фанера 18'
    },
    description: {
      de: 'Mehrlagige Platte fur prazise CNC-Bearbeitung.',
      en: 'Multi-layer board for precise CNC processing.',
      es: 'Panel multicapa para mecanizado CNC de precision.',
      ru: 'Многослойная плита для точной CNC-обработки.'
    },
    woodType: 'Birch',
    thicknessMm: 18,
    grade: 'BB/BB',
    pricePerM3: 760,
    densityKgM3: 650,
    moisturePercent: '6-9%',
    sizes: ['1525 x 1525 mm', '2500 x 1250 mm'],
    applications: ['Furniture', 'Construction'],
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'marine-plywood-21',
    category: 'plywood',
    title: {
      de: 'Marine Sperrholz 21',
      en: 'Marine Plywood 21',
      es: 'Contrachapado marino 21',
      ru: 'Морская фанера 21'
    },
    description: {
      de: 'Feuchtebestandig fur Outdoor und Schiffbau.',
      en: 'Moisture-resistant for outdoor and marine solutions.',
      es: 'Resistente a la humedad para exterior y soluciones navales.',
      ru: 'Влагостойкий материал для outdoor и судостроения.'
    },
    woodType: 'Mixed',
    thicknessMm: 21,
    grade: 'WBP',
    pricePerM3: 890,
    densityKgM3: 690,
    moisturePercent: '8-11%',
    sizes: ['2440 x 1220 mm'],
    applications: ['Outdoor', 'Construction'],
    image:
      'https://images.unsplash.com/photo-1572099606223-6e29045d7de3?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'mdf-ultra-22',
    category: 'mdf',
    title: {
      de: 'MDF Ultra 22',
      en: 'MDF Ultra 22',
      es: 'MDF Ultra 22',
      ru: 'MDF Ultra 22'
    },
    description: {
      de: 'Homogene Struktur fur Lackierung in Serienqualitat.',
      en: 'Homogeneous structure for industrial-grade finishing.',
      es: 'Estructura homogenea para acabados de calidad industrial.',
      ru: 'Однородная структура под промышленную покраску.'
    },
    woodType: 'MDF',
    thicknessMm: 22,
    grade: 'E1',
    pricePerM3: 540,
    densityKgM3: 760,
    moisturePercent: '5-8%',
    sizes: ['2800 x 2070 mm'],
    applications: ['Interior Design', 'Furniture'],
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'hpl-panel-16',
    category: 'mdf',
    title: {
      de: 'HPL Panel 16',
      en: 'HPL Panel 16',
      es: 'Panel HPL 16',
      ru: 'Панель HPL 16'
    },
    description: {
      de: 'Kratzfeste Oberflache fur Retail- und Office-Zonen.',
      en: 'Scratch-resistant surface for retail and office zones.',
      es: 'Superficie resistente para retail y oficinas.',
      ru: 'Износостойкая поверхность для retail и офисов.'
    },
    woodType: 'Composite',
    thicknessMm: 16,
    grade: 'A',
    pricePerM3: 620,
    densityKgM3: 790,
    moisturePercent: '5-8%',
    sizes: ['3050 x 1300 mm'],
    applications: ['Interior Design'],
    image:
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'thermo-ash-deck-26',
    category: 'decking',
    title: {
      de: 'Thermo Esche Deck 26',
      en: 'Thermo Ash Deck 26',
      es: 'Tarima termo fresno 26',
      ru: 'Термо-ясень Deck 26'
    },
    description: {
      de: 'Thermisch modifiziertes Holz mit hoher Formstabilitat.',
      en: 'Thermally modified wood with excellent shape stability.',
      es: 'Madera termotratada con gran estabilidad dimensional.',
      ru: 'Термомодифицированная древесина с высокой стабильностью.'
    },
    woodType: 'Thermo Ash',
    thicknessMm: 26,
    grade: 'A/B',
    pricePerM3: 1470,
    densityKgM3: 640,
    moisturePercent: '6-8%',
    sizes: ['3000 x 140 mm', '4000 x 140 mm'],
    applications: ['Outdoor'],
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'custom-cnc-lamella',
    category: 'custom',
    title: {
      de: 'CNC Lamella Custom',
      en: 'CNC Lamella Custom',
      es: 'Lamela CNC Custom',
      ru: 'CNC Lamella Custom'
    },
    description: {
      de: 'Projektbezogene Zuschnitte fur akustische und dekorative Wande.',
      en: 'Project-based cuts for acoustic and decorative wall systems.',
      es: 'Cortes por proyecto para sistemas acusticos y decorativos.',
      ru: 'Проектная резка для акустических и декоративных стен.'
    },
    woodType: 'Custom',
    thicknessMm: 12,
    grade: 'Custom',
    pricePerM3: 980,
    densityKgM3: 700,
    moisturePercent: 'By request',
    sizes: ['Custom dimensions'],
    applications: ['Interior Design', 'Furniture'],
    image:
      'https://images.unsplash.com/photo-1616627457334-5dcc8abf4c71?auto=format&fit=crop&w=1400&q=80'
  }
];

export const certificationBadges: LocalizedText[] = [
  {
    de: 'FSC-zertifizierte Lieferkette',
    en: 'FSC Certified Supply Chain',
    es: 'Cadena de suministro certificada FSC',
    ru: 'Сертифицированная цепочка поставок FSC'
  },
  {
    de: 'EN 14081 fur statische Sortierung',
    en: 'EN 14081 Structural Grading',
    es: 'Clasificacion estructural EN 14081',
    ru: 'Сортировка конструкционной древесины EN 14081'
  },
  {
    de: 'CARB Phase 2 Konformitat',
    en: 'CARB Phase 2 Compliance',
    es: 'Conformidad CARB Fase 2',
    ru: 'Соответствие CARB Phase 2'
  },
  {
    de: 'ISO 9001 Produktionskontrolle',
    en: 'ISO 9001 Production Control',
    es: 'Control de produccion ISO 9001',
    ru: 'Контроль производства ISO 9001'
  }
];

export const trustMetrics: LocalizedEntry[] = [
  {
    value: '18+',
    label: {
      de: 'Jahre im Markt',
      en: 'Years in business',
      es: 'Anos en el mercado',
      ru: 'Лет на рынке'
    },
    note: {
      de: 'Stabile Lieferketten seit 2008',
      en: 'Stable sourcing network since 2008',
      es: 'Red de abastecimiento estable desde 2008',
      ru: 'Стабильная сеть поставок с 2008 года'
    }
  },
  {
    value: '2,400+',
    label: {
      de: 'Abgeschlossene Projekte',
      en: 'Projects completed',
      es: 'Proyectos completados',
      ru: 'Реализованных проектов'
    },
    note: {
      de: 'Wohnbau, Hospitality und Retail',
      en: 'Residential, hospitality and retail segments',
      es: 'Segmentos residencial, hospitality y retail',
      ru: 'Жилые, гостиничные и retail-проекты'
    }
  },
  {
    value: '760+',
    label: {
      de: 'Aktive Kunden',
      en: 'Clients served',
      es: 'Clientes atendidos',
      ru: 'Клиентов в обслуживании'
    },
    note: {
      de: 'B2B Werkstatten, Developer und Studios',
      en: 'B2B workshops, developers and interior studios',
      es: 'Talleres B2B, promotores y estudios de interiorismo',
      ru: 'B2B мастерские, девелоперы и интерьерные студии'
    }
  }
];

export const productBenefits: Record<string, LocalizedText[]> = {
  'oak-prime-40': [
    {
      de: 'Ausgewogene Maserung fur sichtbare Premium-Flachen',
      en: 'Balanced grain for visible premium surfaces',
      es: 'Veta equilibrada para superficies premium visibles',
      ru: 'Сбалансированная текстура для премиальных видимых поверхностей'
    },
    {
      de: 'Hohe Formstabilitat bei wechselnder Innenfeuchte',
      en: 'High shape stability under changing indoor humidity',
      es: 'Alta estabilidad dimensional con humedad interior variable',
      ru: 'Высокая стабильность формы при перепадах влажности в интерьере'
    },
    {
      de: 'Geeignet fur Ol, Lack und transparente Systeme',
      en: 'Suitable for oil, lacquer and transparent finish systems',
      es: 'Adecuado para aceites, barnices y sistemas de acabado transparentes',
      ru: 'Подходит под масло, лак и прозрачные системы отделки'
    }
  ],
  'ash-select-30': [
    {
      de: 'Elastische Struktur fur hoch beanspruchte Elemente',
      en: 'Elastic structure for highly loaded components',
      es: 'Estructura elastica para elementos de alta exigencia',
      ru: 'Упругая структура для нагруженных элементов'
    },
    {
      de: 'Helles Erscheinungsbild fur moderne Innenraume',
      en: 'Bright visual tone for contemporary interiors',
      es: 'Tono claro para interiores contemporaneos',
      ru: 'Светлый оттенок для современных интерьеров'
    },
    {
      de: 'Prazise kalibriert fur serielle Fertigung',
      en: 'Precisely calibrated for serial production lines',
      es: 'Calibrado con precision para lineas de produccion',
      ru: 'Точно калиброван для серийного производства'
    }
  ],
  'birch-plywood-18': [
    {
      de: 'Stabile Mehrlagenstruktur fur CNC-Bearbeitung',
      en: 'Stable multilayer structure for CNC machining',
      es: 'Estructura multicapa estable para mecanizado CNC',
      ru: 'Стабильная многослойная структура для CNC-обработки'
    },
    {
      de: 'Gute Schraubenauszugswerte in Korpus-Anwendungen',
      en: 'Reliable screw holding in cabinetry applications',
      es: 'Buena retencion de tornillo en aplicaciones de mobiliario',
      ru: 'Надежное удержание крепежа в корпусных конструкциях'
    },
    {
      de: 'Konstante Dicke fur wiederholbare Ergebnisse',
      en: 'Consistent thickness for repeatable output',
      es: 'Espesor constante para resultados repetibles',
      ru: 'Стабильная толщина для повторяемого результата'
    }
  ],
  'marine-plywood-21': [
    {
      de: 'Feuchtebestandige Verleimung fur Aussenbereiche',
      en: 'Moisture-resistant bonding for outdoor environments',
      es: 'Encolado resistente a la humedad para exterior',
      ru: 'Влагостойкое склеивание для наружной эксплуатации'
    },
    {
      de: 'Geeignet fur maritime und anspruchsvolle Projekte',
      en: 'Suitable for marine and demanding project conditions',
      es: 'Apto para condiciones marinas y proyectos exigentes',
      ru: 'Подходит для морских и сложных проектных условий'
    },
    {
      de: 'Gute Kantenstabilitat bei fachgerechter Versiegelung',
      en: 'Strong edge stability with proper sealing',
      es: 'Buena estabilidad de cantos con sellado correcto',
      ru: 'Высокая стабильность кромки при корректной герметизации'
    }
  ],
  'mdf-ultra-22': [
    {
      de: 'Homogene Dichte fur hochwertige Lackoberflachen',
      en: 'Homogeneous density for high-quality painted surfaces',
      es: 'Densidad homogenea para superficies lacadas de alta calidad',
      ru: 'Однородная плотность для качественной окрашенной поверхности'
    },
    {
      de: 'Prazise Schnittkanten fur serielle Frontenfertigung',
      en: 'Precise cut edges for serial front production',
      es: 'Cantos de corte precisos para frentes en serie',
      ru: 'Точные кромки реза для серийного производства фасадов'
    },
    {
      de: 'Konforme Emissionsklasse fur Innenanwendungen',
      en: 'Compliant emission class for interior use',
      es: 'Clase de emision conforme para uso interior',
      ru: 'Соответствующий класс эмиссии для интерьерных задач'
    }
  ],
  'hpl-panel-16': [
    {
      de: 'Abriebfeste Dekoroberflache fur hohe Nutzerfrequenz',
      en: 'Abrasion-resistant decorative surface for high-traffic zones',
      es: 'Superficie decorativa resistente al desgaste para alto trafico',
      ru: 'Износостойкая декоративная поверхность для зон с высокой проходимостью'
    },
    {
      de: 'Leicht zu reinigen im Retail- und Office-Betrieb',
      en: 'Easy to maintain in retail and office operations',
      es: 'Facil de mantener en espacios retail y oficina',
      ru: 'Прост в обслуживании для retail и офисных пространств'
    },
    {
      de: 'Hohe Farbstabilitat bei intensiver Nutzung',
      en: 'High color stability under intensive use',
      es: 'Alta estabilidad cromatica bajo uso intensivo',
      ru: 'Высокая стабильность цвета при интенсивной эксплуатации'
    }
  ],
  'thermo-ash-deck-26': [
    {
      de: 'Thermobehandlung verbessert Dauerhaftigkeit im Aussenbereich',
      en: 'Thermal treatment increases outdoor durability',
      es: 'El tratamiento termico mejora la durabilidad exterior',
      ru: 'Термообработка повышает долговечность при наружной эксплуатации'
    },
    {
      de: 'Reduzierte Feuchteaufnahme fur formstabile Decks',
      en: 'Reduced moisture uptake for stable decking geometry',
      es: 'Menor absorcion de humedad para tarimas estables',
      ru: 'Сниженное влагопоглощение для стабильной геометрии террасы'
    },
    {
      de: 'Rutschfeste Struktur fur sichere Begehung',
      en: 'Slip-conscious texture for safer foot traffic',
      es: 'Textura antideslizante para transito seguro',
      ru: 'Фактура, повышающая безопасность при ходьбе'
    }
  ],
  'custom-cnc-lamella': [
    {
      de: 'Projektbezogene Geometrie nach CAD-Daten',
      en: 'Project-specific geometry produced from CAD data',
      es: 'Geometria por proyecto a partir de datos CAD',
      ru: 'Проектная геометрия по CAD-данным'
    },
    {
      de: 'Lieferung als montagefertige Kits moglich',
      en: 'Can be delivered as assembly-ready kits',
      es: 'Puede suministrarse en kits listos para montaje',
      ru: 'Поставляется как комплект, готовый к монтажу'
    },
    {
      de: 'Schnelle Iteration fur Entwicklungsprojekte',
      en: 'Fast iteration for development and pilot batches',
      es: 'Iteracion rapida para desarrollo y lotes piloto',
      ru: 'Быстрая итерация для разработки и пилотных партий'
    }
  ]
};

export const testimonials = [
  {
    company: 'Atelier Nord GmbH',
    quote: {
      de: 'Die Holzqualitat ist Charge fur Charge konstant, und selbst bei Sondermassen bleiben die Lieferzeiten realistisch.',
      en: 'Their timber quality is consistent lot after lot, and lead times are realistic even for custom dimensions.',
      es: 'La calidad de la madera es constante lote tras lote, y los plazos siguen siendo realistas incluso con medidas especiales.',
      ru: 'Качество древесины стабильно от партии к партии, а сроки поставки реалистичны даже для нестандартных размеров.'
    },
    person: {
      de: 'Lea Schneider, Leitung Einkauf',
      en: 'Lea Schneider, Procurement Lead',
      es: 'Lea Schneider, Responsable de compras',
      ru: 'Lea Schneider, руководитель закупок'
    }
  },
  {
    company: 'Linea Contract Studio',
    quote: {
      de: 'Die technische Dokumentation hat unsere Freigabezyklen mit Architekturburos deutlich beschleunigt.',
      en: 'The technical documentation made approval cycles with architects significantly faster.',
      es: 'La documentacion tecnica acelero de forma notable los ciclos de aprobacion con arquitectos.',
      ru: 'Техническая документация заметно ускорила циклы согласования с архитекторами.'
    },
    person: {
      de: 'Miguel Romero, Projektleiter',
      en: 'Miguel Romero, Project Director',
      es: 'Miguel Romero, Director de proyecto',
      ru: 'Miguel Romero, директор проекта'
    }
  },
  {
    company: 'Volna Interiors',
    quote: {
      de: 'Die Makro-Texturreferenzen entsprachen den gelieferten Brettern nahezu perfekt. Herausragende Qualitatskontrolle.',
      en: 'Macro texture references matched the delivered boards almost perfectly. Outstanding quality control.',
      es: 'Las referencias de textura macro coincidieron casi perfectamente con las tablas entregadas. Control de calidad excepcional.',
      ru: 'Референсы макротекстуры почти идеально совпали с поставленными досками. Контроль качества на высшем уровне.'
    },
    person: {
      de: 'Ekaterina Voronina, Grunderin',
      en: 'Ekaterina Voronina, Founder',
      es: 'Ekaterina Voronina, Fundadora',
      ru: 'Ekaterina Voronina, основатель'
    }
  }
];

export const faqs = [
  {
    question: {
      de: 'Wie lang ist die ubliche Lieferzeit?',
      en: 'What is the standard delivery window?',
      es: 'Cual es el plazo de entrega estandar?',
      ru: 'Какой стандартный срок поставки?'
    },
    answer: {
      de: 'Lagerware versenden wir meist in 3-5 Werktagen. Sonderzuschnitte dauern in der Regel 7-14 Tage.',
      en: 'Most stocked products dispatch in 3-5 working days. Custom cuts are typically 7-14 days.',
      es: 'La mayoria de los productos en stock se envian en 3-5 dias habiles. Los cortes a medida suelen tardar 7-14 dias.',
      ru: 'Большинство складских позиций отгружается за 3-5 рабочих дней. Кастомная резка обычно занимает 7-14 дней.'
    }
  },
  {
    question: {
      de: 'Kann ich einen genauen Feuchtebereich anfragen?',
      en: 'Can I request exact moisture levels?',
      es: 'Puedo solicitar un nivel de humedad exacto?',
      ru: 'Можно запросить точный уровень влажности?'
    },
    answer: {
      de: 'Ja. Wir liefern kammergetrocknetes Material entsprechend den Toleranzen Ihres Projekts und der Klimazone.',
      en: 'Yes. We provide kiln-dried material according to your project tolerance and climate zone.',
      es: 'Si. Suministramos material secado en camara segun las tolerancias del proyecto y la zona climatica.',
      ru: 'Да. Мы поставляем камерно-сушеный материал в соответствии с допусками проекта и климатической зоной.'
    }
  },
  {
    question: {
      de: 'Bieten Sie B2B-Preise fur Grossvolumen an?',
      en: 'Do you support bulk B2B pricing?',
      es: 'Ofrecen precios B2B para volumen?',
      ru: 'Есть ли B2B-цены для оптовых заказов?'
    },
    answer: {
      de: 'Grossmengenstaffeln starten ab 20 m3 pro Bestellung. Fur wiederkehrende Lieferungen bieten wir Vertragspreise an.',
      en: 'Bulk tiers start from 20 m3 per order. Contract pricing is available for recurring supply.',
      es: 'Los tramos de volumen empiezan desde 20 m3 por pedido. Hay precios contractuales para suministro recurrente.',
      ru: 'Оптовые тарифы начинаются от 20 м3 на заказ. Для регулярных поставок доступна контрактная цена.'
    }
  },
  {
    question: {
      de: 'Wie werden die Produkte verpackt?',
      en: 'How are products packed?',
      es: 'Como se embalan los productos?',
      ru: 'Как упаковываются материалы?'
    },
    answer: {
      de: 'Die Ware wird mit Kantenschutz, Feuchtigkeitssperre und markierten Paletten fur sichere Logistik vorbereitet.',
      en: 'Products are protected with corner reinforcement, moisture barrier film and labeled pallets.',
      es: 'Los productos se protegen con refuerzo de esquinas, barrera de humedad y palets etiquetados.',
      ru: 'Материалы защищаются угловыми усилителями, влагобарьерной пленкой и маркированными палетами.'
    }
  },
  {
    question: {
      de: 'Stellen Sie Herkunftsnachweise bereit?',
      en: 'Can you provide origin documentation?',
      es: 'Pueden proporcionar documentacion de origen?',
      ru: 'Предоставляете ли документы о происхождении?'
    },
    answer: {
      de: 'Ja. FSC- und Chain-of-Custody-Dokumente werden jeder Lieferung beigelegt.',
      en: 'Yes. FSC and chain-of-custody documents are supplied with each shipment.',
      es: 'Si. Los documentos FSC y de cadena de custodia se entregan con cada envio.',
      ru: 'Да. Документы FSC и chain-of-custody предоставляются с каждой поставкой.'
    }
  },
  {
    question: {
      de: 'Bieten Sie Bearbeitungsservices an?',
      en: 'Do you provide machining services?',
      es: 'Ofrecen servicios de mecanizado?',
      ru: 'Предоставляете ли услуги механической обработки?'
    },
    answer: {
      de: 'Wir liefern CNC-Zuschnitte, Kantenbearbeitung und montagefertige Kits gemass Spezifikation.',
      en: 'We provide CNC cuts, edge processing and specification-ready kits for assembly lines.',
      es: 'Ofrecemos cortes CNC, mecanizado de cantos y kits listos para linea de montaje.',
      ru: 'Мы выполняем CNC-резку, обработку кромки и комплектуем наборы по спецификации для сборочных линий.'
    }
  }
];

export const comparisonRows = [
  {
    type: {
      de: 'Eiche',
      en: 'Oak',
      es: 'Roble',
      ru: 'Дуб'
    },
    density: '680-760 kg/m3',
    durability: {
      de: 'Hoch',
      en: 'High',
      es: 'Alta',
      ru: 'Высокая'
    },
    bestUse: {
      de: 'Premium-Mobel, Treppen',
      en: 'Premium furniture, stairs',
      es: 'Mobiliario premium, escaleras',
      ru: 'Премиальная мебель, лестницы'
    }
  },
  {
    type: {
      de: 'Esche',
      en: 'Ash',
      es: 'Fresno',
      ru: 'Ясень'
    },
    density: '620-700 kg/m3',
    durability: {
      de: 'Mittel/Hoch',
      en: 'Medium/High',
      es: 'Media/Alta',
      ru: 'Средняя/Высокая'
    },
    bestUse: {
      de: 'Innenkonstruktionen, gebogene Elemente',
      en: 'Interior structures, bent elements',
      es: 'Estructuras interiores, elementos curvados',
      ru: 'Интерьерные конструкции, гнутые элементы'
    }
  },
  {
    type: {
      de: 'Birken-Sperrholz',
      en: 'Birch plywood',
      es: 'Contrachapado de abedul',
      ru: 'Березовая фанера'
    },
    density: '600-700 kg/m3',
    durability: {
      de: 'Hoch',
      en: 'High',
      es: 'Alta',
      ru: 'Высокая'
    },
    bestUse: {
      de: 'CNC-Teile, Korpusmobel',
      en: 'CNC parts, cabinetry',
      es: 'Piezas CNC, carpinteria de muebles',
      ru: 'Детали CNC, корпусная мебель'
    }
  },
  {
    type: {
      de: 'Thermo-Esche',
      en: 'Thermo ash',
      es: 'Fresno termo',
      ru: 'Термо-ясень'
    },
    density: '610-660 kg/m3',
    durability: {
      de: 'Aussenbereich',
      en: 'Outdoor grade',
      es: 'Clase exterior',
      ru: 'Для наружного применения'
    },
    bestUse: {
      de: 'Terrassen, Fassade',
      en: 'Decking, facade',
      es: 'Tarima, fachada',
      ru: 'Террасы, фасады'
    }
  }
];

export const technicalTable = [
  {
    parameter: {
      de: 'Dickentoleranz',
      en: 'Thickness tolerance',
      es: 'Tolerancia de espesor',
      ru: 'Допуск по толщине'
    },
    value: {
      de: '+/- 0.3 mm',
      en: '+/- 0.3 mm',
      es: '+/- 0.3 mm',
      ru: '+/- 0.3 мм'
    }
  },
  {
    parameter: {
      de: 'Feuchtebereich',
      en: 'Moisture range',
      es: 'Rango de humedad',
      ru: 'Диапазон влажности'
    },
    value: {
      de: '6-10% Standard',
      en: '6-10% standard',
      es: '6-10% estandar',
      ru: '6-10% стандарт'
    }
  },
  {
    parameter: {
      de: 'Oberflachenrauheit',
      en: 'Surface roughness',
      es: 'Rugosidad superficial',
      ru: 'Шероховатость поверхности'
    },
    value: {
      de: 'P120 bis P180',
      en: 'P120 to P180',
      es: 'P120 a P180',
      ru: 'P120 до P180'
    }
  },
  {
    parameter: {
      de: 'Langentoleranz',
      en: 'Length tolerance',
      es: 'Tolerancia de longitud',
      ru: 'Допуск по длине'
    },
    value: {
      de: '+/- 1.5 mm',
      en: '+/- 1.5 mm',
      es: '+/- 1.5 mm',
      ru: '+/- 1.5 мм'
    }
  },
  {
    parameter: {
      de: 'Emissionsklasse',
      en: 'Emission class',
      es: 'Clase de emision',
      ru: 'Класс эмиссии'
    },
    value: {
      de: 'E1 / CARB2',
      en: 'E1 / CARB2',
      es: 'E1 / CARB2',
      ru: 'E1 / CARB2'
    }
  }
];

export const woodGuide = [
  {
    title: {
      de: 'Lastbedingungen definieren',
      en: 'Define loading conditions',
      es: 'Definir condiciones de carga',
      ru: 'Определите условия нагрузки'
    },
    text: {
      de: 'Fur tragende Anwendungen sollten dichte Holzarten oder technische Plattensysteme gewahlt werden.',
      en: 'For structural loads choose high-density species or engineered panel systems.',
      es: 'Para cargas estructurales, elija especies de alta densidad o sistemas de paneles tecnicos.',
      ru: 'Для несущих задач выбирайте породы высокой плотности или инженерные плитные системы.'
    }
  },
  {
    title: {
      de: 'Feuchte auf den Einsatz abstimmen',
      en: 'Match humidity to end-use',
      es: 'Ajustar humedad al uso final',
      ru: 'Согласуйте влажность с условиями эксплуатации'
    },
    text: {
      de: 'Innenprojekte erfordern kontrollierte Holzfeuchte, um Verzug nach der Montage zu vermeiden.',
      en: 'Interior projects require controlled moisture to prevent warping after installation.',
      es: 'Los proyectos interiores requieren humedad controlada para evitar deformaciones tras la instalacion.',
      ru: 'Для интерьерных проектов нужна контролируемая влажность, чтобы избежать деформации после монтажа.'
    }
  },
  {
    title: {
      de: 'Oberflachenprozess pruften',
      en: 'Check finishing process',
      es: 'Revisar el proceso de acabado',
      ru: 'Проверьте требования к финишной отделке'
    },
    text: {
      de: 'Wahlen Sie Sortierung und Schleifstufe passend zu Ol, Lack oder Furnieranforderungen.',
      en: 'Select grade and sanding level based on oil, lacquer or veneer requirements.',
      es: 'Seleccione grado y nivel de lijado segun los requisitos de aceite, barniz o chapa.',
      ru: 'Подбирайте сорт и уровень шлифовки под масло, лак или требования к шпонированию.'
    }
  }
];
