import Head from 'next/head';

import { IMeta } from 'interfaces/meta';

export function Meta({ meta }: IMeta) {
  return (
    <Head>
      <title>{meta.title}</title>

      <meta name="description" content={meta.description} />
    </Head>
  );
}
