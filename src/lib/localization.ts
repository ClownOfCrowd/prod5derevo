import {Locale} from '@/i18n/routing';

const woodTypeMap: Record<string, Record<Locale, string>> = {
  Oak: {
    de: 'Eiche',
    en: 'Oak',
    es: 'Roble',
    ru: 'Дуб'
  },
  Ash: {
    de: 'Esche',
    en: 'Ash',
    es: 'Fresno',
    ru: 'Ясень'
  },
  Birch: {
    de: 'Birke',
    en: 'Birch',
    es: 'Abedul',
    ru: 'Береза'
  },
  Mixed: {
    de: 'Mischholz',
    en: 'Mixed',
    es: 'Mixto',
    ru: 'Смешанная порода'
  },
  MDF: {
    de: 'MDF',
    en: 'MDF',
    es: 'MDF',
    ru: 'MDF'
  },
  Composite: {
    de: 'Komposit',
    en: 'Composite',
    es: 'Compuesto',
    ru: 'Композит'
  },
  'Thermo Ash': {
    de: 'Thermo-Esche',
    en: 'Thermo Ash',
    es: 'Fresno termo',
    ru: 'Термо-ясень'
  },
  Custom: {
    de: 'Sonderanfertigung',
    en: 'Custom',
    es: 'Personalizado',
    ru: 'Индивидуально'
  }
};

const applicationMap: Record<string, Record<Locale, string>> = {
  Construction: {
    de: 'Bau',
    en: 'Construction',
    es: 'Construccion',
    ru: 'Строительство'
  },
  Furniture: {
    de: 'Mobel',
    en: 'Furniture',
    es: 'Mobiliario',
    ru: 'Мебель'
  },
  'Interior Design': {
    de: 'Innenarchitektur',
    en: 'Interior Design',
    es: 'Diseno interior',
    ru: 'Интерьерный дизайн'
  },
  Outdoor: {
    de: 'Outdoor',
    en: 'Outdoor',
    es: 'Exterior',
    ru: 'Наружные проекты'
  }
};

const valueMap: Record<string, Record<Locale, string>> = {
  'By request': {
    de: 'Auf Anfrage',
    en: 'By request',
    es: 'Bajo solicitud',
    ru: 'По запросу'
  },
  'Custom dimensions': {
    de: 'Sonderabmessungen',
    en: 'Custom dimensions',
    es: 'Medidas personalizadas',
    ru: 'Индивидуальные размеры'
  }
};

export function localizeWoodType(value: string, locale: Locale) {
  return woodTypeMap[value]?.[locale] ?? value;
}

export function localizeApplication(value: string, locale: Locale) {
  return applicationMap[value]?.[locale] ?? value;
}

export function localizeValue(value: string, locale: Locale) {
  return valueMap[value]?.[locale] ?? value;
}
