import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>FoxBeep - Tech Solutions</title>
        <meta name="description" content="FoxBeep provides innovative tech solutions and services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navbar />
      
      <main className="pt-20">
        {children}
      </main>
      
      {/* <footer className="bg-gray-100 py-6 mt-10 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} FoxBeep. All rights reserved.
        </div>
      </footer> */}
    </>
  );
};

export default Layout;