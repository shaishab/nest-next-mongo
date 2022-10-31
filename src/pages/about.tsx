import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

interface Props {
  query: { name?: string };
}

const About: NextPage<Props> = ({ data }) => {
  const aboutInfo = data.message ? data.message : null;

  return (
    <div>
      <div>Information about this site: {aboutInfo}!</div>
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const baseUrl = `${process.env.CLIENT_HOST}:${process.env.PORT}`;
  const resData = await fetch(`${baseUrl}/api/about`, {
    method: 'GET',
  });

  const data = await resData.json();
  return { props: { data } };
}

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const baseUrl = `${process.env.CLIENT_HOST}:${process.env.PORT}`;
//   const resData = await fetch(`${baseUrl}/api/blog/post`, {
//     method: 'GET',
//   });

//   const posts = await resData.json();
//   return { props: { posts } };
// };

export default About;

