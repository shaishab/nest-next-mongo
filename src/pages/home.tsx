import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

interface Props {
  query: { name?: string };
}

const Home: NextPage<Props> = ({ data }) => {
  const greetName = data.name ? data.name : 'World';

  return (
    <div>
      <div>Hello, {greetName}!</div>
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  console.log('Called home in UI===========');
  const baseUrl = `${process.env.CLIENT_HOST}:${process.env.PORT}`;
  const resData = await fetch(`${baseUrl}/api/home`, {
    method: 'GET',
  });

  const data = await resData.json();
  console.log('Home data=====', data);
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

export default Home;
