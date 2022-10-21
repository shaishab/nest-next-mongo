import { FC } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import Layout from 'src/components/Layouts/Layout';
import '../styles/index.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
