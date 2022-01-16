import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react'
import { BlogBanner } from '../components';

const components = {
  BlogBanner,
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp;
