import type { AppProps } from 'next/app';

import Head from 'next/head';

import GlobalStyles from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Título da Página</title>
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <meta name="description" content="Descrição completa" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
