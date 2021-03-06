import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Header, Footer } from '.';

type Props = {
  children?: ReactNode;
  title?: string;
};
const Layout = ({ children, title = 'Welcome to Iris Blog' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main className="w-full h-fit min-h-[calc(100vh-52px)] bg-gray-200">{children}</main>
    <Footer />
  </>
);

export default Layout;
