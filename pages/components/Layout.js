import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './home/footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>FoxBeep - Tech Solutions</title>
        <meta name="description" content="FoxBeep provides innovative tech solutions and services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navbar />
      
      <main className="pt-16">
        {children}
      </main>
      
      <Footer/>
    </>
  );
};

export default Layout;