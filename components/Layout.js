import Head from "next/head";
import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mohammed Junaid</title>
        <meta name="description" content="my portfolio website"/>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
