import Head from 'next/head';

import { ISEO } from 'interfaces/interface-seo';

export function SEO({ title, description }: ISEO) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
    </Head>
  );
}
