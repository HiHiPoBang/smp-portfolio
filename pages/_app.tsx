import '../styles/globals.css';
import '../lib/fontawesome';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { PostThumbnail } from '../components';

const components = {
  PostThumbnail,
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
