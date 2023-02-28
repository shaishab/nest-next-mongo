import { FC } from 'react';
import { IPost } from '../../shared/dto/post.interface';
import Link from 'next/link';
import PostSeo from './post-seo';

interface Props {
  post: IPost;
}

const PostPreview: FC<Props> = ({ post }) => {
  return (
    <>
    {/* <PostSeo {...post} /> */}
    <div style={{ marginBottom: 25 }}>
      <h2 className='text-lg font-semibold'>{post.title}</h2>
      <p className='mb-2.5'>{post.content}</p>
      <Link
        href={{
          pathname: '/blog/[slug]',
          query: { slug: post.slug },
        }}
        as={`/blog/${encodeURIComponent(post.slug)}`}
      >
        <a className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >
          View
        </a>
      </Link>
    </div>
    </>
  );
};

export default PostPreview;
