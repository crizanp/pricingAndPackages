// components/Layout.js
import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Design Services</title>
        <meta name="description" content="Professional design services for your business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold text-gray-800">Design Services</h1>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Design Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;