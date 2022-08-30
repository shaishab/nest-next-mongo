import { GetServerSideProps, NextPage, NextPageContext,} from 'next';
import { IPost } from '../../../types';

interface pageContext extends NextPageContext {
 req: any
}
const getServerSidePropsContext = (ctx: pageContext) => {
  if(ctx.req && ctx.req.params) {
    ctx.req.query = ctx.req.query;
    ctx.req.params = ctx.req.params || ctx.query;
  }
 return {...ctx};
};

interface Props {
  post: IPost;
}

const Post: NextPage<Props> = ({ post: { title, slug, content } }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <p>{content}</p>
      </div>
      <div style={{ fontStyle: 'italic', fontSize: 14 }}>
        this page was rendered on the server
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

export async function getServerSideProps(ctx: pageContext) {
  ctx = getServerSidePropsContext(ctx);
  const baseUrl = process.env.BASE_URL;
  const slug = ctx.req.params.slug || ctx.query.slug;

  const resData = await fetch(`${baseUrl}/api/blog/post/${slug}`, {
    method: 'GET',
  });
  const post = await resData.json();

  if (post === null) {
    return {
      notFound: true,
    };
  }

  return { props: { post } };
}

export default Post;
