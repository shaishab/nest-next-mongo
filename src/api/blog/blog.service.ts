import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import urlSlug from 'url-slug'
import { IPost } from '../../shared/dto/post.interface';

export class BlogService {
  constructor(@InjectModel('Blog') private readonly postModel: Model<IPost>) {}

  public async all(): Promise<IPost[]> {
    try {
      const posts = await this.postModel.find({});
      return posts;
    } catch (e) {
      console.log('Post service error============', e);
      return [];
    }
  }

  public async find(slug: string): Promise<IPost | null> {
    try {
      const post = await this.postModel.findOne({ slug: slug });
      return post;
    } catch (e) {
      return null;
    }
  }

  public async add(data:IPost): Promise<IPost> {
    try {
      data.slug = urlSlug(data.title);
      const post = await this.postModel.create(data);
      return post;
    } catch (e) {
      return null;
    }
  }
}
