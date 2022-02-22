import Head from 'next/head';

import { IMetaProps } from 'interfaces/meta';

export function Meta({ meta }: IMetaProps) {
  return (
    <Head>
      <title>{meta.title}</title>

      <meta name="description" content={meta.description} />
    </Head>
  );
}
