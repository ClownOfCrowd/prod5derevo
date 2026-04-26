import {getLocale, getTranslations} from 'next-intl/server';
import {products} from '@/lib/data';
import {ProductListingClient} from '@/components/product-listing-client';

export default async function ProductsPage({
  searchParams
}: {
  searchParams: Promise<{category?: string}>;
}) {
  const t = await getTranslations('Products');
  const locale = (await getLocale()) as 'de' | 'en' | 'es' | 'ru';
  const params = await searchParams;
  const scopedProducts = params.category
    ? products.filter((product) => product.category === params.category)
    : products;

  return (
    <ProductListingClient
      products={scopedProducts}
      locale={locale}
      title={t('title')}
      subtitle={t('subtitle')}
      labels={{
        filters: t('filters'),
        woodType: t('woodType'),
        thickness: t('thickness'),
        grade: t('grade'),
        price: t('price'),
        clear: t('clear'),
        results: t('results'),
        filterOpen: t('filterOpen'),
        filterClose: t('filterClose'),
        details: t('details'),
        all: t('all')
      }}
    />
  );
}

