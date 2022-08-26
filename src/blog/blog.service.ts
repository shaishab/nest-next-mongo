import { Injectable, Inject, Post } from '@nestjs/common';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import BlogSchema from './blog.schema'
import { InjectModel } from '@nestjs/mongoose';
import { IPost } from './post.interface';

// const POSTS: Record<string, IPost> = {
//   'first-post': {
//     title: 'First Post!',
//     slug: 'first-post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed suscipit quam, sit amet feugiat ligula. Nunc sit amet velit vestibulum, mattis orci gravida, aliquam velit. Donec eget lectus nec ipsum suscipit gravida et et odio. Morbi hendrerit dui scelerisque, imperdiet ligula in, ornare risus. Aliquam blandit sem risus, a ornare orci finibus ut. Maecenas interdum lacus arcu, nec finibus nibh semper quis. Vivamus venenatis pharetra ligula, eget semper justo finibus et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam finibus accumsan elit, et ornare nulla accumsan id. Cras nec leo sed ex egestas malesuada. Nullam a bibendum libero. Cras ullamcorper massa sed odio euismod vulputate. Nullam at ullamcorper dolor. Maecenas et fermentum arcu. Sed interdum nunc neque, eu consectetur ex commodo finibus. Nunc interdum aliquam purus, eu lobortis enim semper et.',
//   },
//   'second-post': {
//     title: 'Second Post!',
//     slug: 'second-post',
//     content: 'Nulla sed purus ullamcorper, volutpat leo ac, blandit sem. Aenean efficitur ante rhoncus, lobortis est nec, consequat nisl. Fusce quis semper ligula, eget commodo magna. In tincidunt nisl sed dui ornare, nec pulvinar nibh laoreet. Suspendisse lobortis elit at nunc egestas fermentum. Etiam leo dui, fermentum ac nulla et, hendrerit varius arcu. Quisque porttitor congue mattis. Mauris non lorem suscipit turpis dictum porttitor. Nullam eget blandit felis. Duis eu erat ac mauris egestas placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
//   },
// };

export class BlogService {
  // constructor() {}
  constructor(@InjectModel('Blog') private readonly postModel: Model<IPost>) {}

  // private readonly postModel = new Model('Post', BlogSchema);
  // private postModel = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
  // private readonly postModel = mongoose.models.Blog;

  public async all(): Promise<IPost[]> {
    try {
      console.log('called api service to retrieve Post============', this.postModel);
      const posts = await this.postModel.find({});
      // .then((data)=> {
      //   console.log('Post data======', data);
      // });
      // const posts = await Blog.find();
      console.log('called executed============');
      console.log('Post============', posts);
      return posts;
    } catch(e) {
      console.log('Post error============', e);
      return Object.values([]);
    }
    
  }

  // public find(slug: string): IPost | null {
  //   return POSTS[slug] || null;
  // }
  async find(postID: string): Promise<IPost | null> {
    const post = await this.postModel.findById(postID).exec();
    return null;
  }
}
