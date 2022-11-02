import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Render,
} from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller()
export class BlogController {
  constructor(private service: BlogService) {}

  @Get('/blog')
  @Render('blog')
  public async renderBloglistPage() {
    return {};
  }

  @Get('api/blog/post')
  public async listBlogPosts() {
    const posts = await this.service.all();
    return posts;
  }

  @Get('/blog/:slug')
  @Render('blog/[slug]')
  public async renderPostPreviewPage(@Param('slug') slug: string) {
    return { params: { slug: slug } };
  }

  @Get('api/blog/post/:slug')
  public async getPostBySlug(@Param('slug') slug: string) {
    const post = await this.service.find(slug);

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  @Get('/blog/add/new')
  @Render('blog/add')
  public async renderPostCreatePage() {
    return {};
  }
  
}
