import { NextPage, NextPageContext } from 'next';
import { IPost } from '../../../types';
import PostNew from '../../components/blog/post-new';

interface pageContext extends NextPageContext {
  req: any;
}

interface Props {
  post: IPost;
}

const AddPost: NextPage<Props> = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">New Post</h1>
      <PostNew />
    </div>
  );
};

export async function getServerSideProps(ctx: pageContext) {
  return { props: {} };
}

export default AddPost;
