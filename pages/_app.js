import React from 'react';
import Layout from "../components/layout";
import "highlight.js/styles/github.css";



export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}