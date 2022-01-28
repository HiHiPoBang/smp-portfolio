import '../styles/globals.css';
import '../lib/fontawesome';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { H1, H2, H3, H4, H5 } from '../components';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
