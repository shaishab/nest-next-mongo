import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '../../utils/App.config';
import Favicon from './Favicon'

type IMetaProps = {
  site_name?: string;
  title: string;
  description: string;
  slug?: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();
  // console.log('From meta component props=====',props);
  const meta:any = props;
  return (
    <>
      <Head>
        <Favicon />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.slug,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export default Meta;