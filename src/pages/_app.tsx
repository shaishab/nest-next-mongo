import { FC } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import Layout from 'src/components/Layouts/Layout';
import '../styles/index.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  // console.log('_app Component====', Component);
  // console.log('_app pageProps====', pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
