import { FC } from 'react';
import { IPost } from '../../shared/dto/post.interface';

interface Props {
  post: IPost;
}

const PostNew = () => {
  return (
    <div style={{ marginBottom: 25 }}>
      <h2 className='text-lg font-semibold'>New post form</h2>
    
    </div>
  );
};

export default PostNew;
