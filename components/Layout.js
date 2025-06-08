import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './home/footer';

const Layout = ({
  children,
  title = 'Build with Purpose | Custom Software Development Company',
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
 <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              </Head>

      <Navbar/>
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
