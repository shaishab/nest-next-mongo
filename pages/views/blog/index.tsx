import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { IPost } from '../../../src/blog/post.interface';
import PostPreview from '../../../components/post-preview';

interface Props {
  posts: IPost[];
  source: string;
}

const Blog: NextPage<Props> = ({ posts, source }) => {
  return (
    <div>
      <h1>blog</h1>
      <div>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
      <div style={{ fontStyle: 'italic', fontSize: 14 }}>
        this page was rendered on the {source}
      </div>
    </div>
  );
};

// When the page was rendered server side the ctx.query will contain the data
// returned by the controller's method. When the page was rendered on the client
// side, the ctx.query will only contain the query params for the url.
//
// To better understand why this happens, reference the following next
// documentation about how getServerSideProps only runs on the server:
// https://nextjs.org/docs/basic-features/data-fetching#only-runs-on-server-side
export async function getServerSideProps(ctx: NextPageContext) {
  const props: Props = {
    source: 'server',
    posts: ctx.query.posts as any,
  };

  if (!Array.isArray(props.posts)) {
    const res = await fetch(`http://localhost:3000/api/blog`, {
      method: 'GET',
    });
    console.log('post res===========', res);
    const data = await res.json();
    console.log('post data===========', data);
    props.posts = data || [];
    props.source = 'client';
  }

  return { props };
}

export default Blog;
