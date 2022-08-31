import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { BlogService } from './blog.service';

@Controller()
export class BlogController {
  constructor(private service: BlogService) {}

  @Get('/blog')
  @Render('blog')
  public async index() {
    return {};
  }

  @Get('api/blog/post')
  public async listBlogPosts(@Res() res: Response) {
    const posts = await this.service.all();
    return res.send(posts);
  }

  @Get('/blog/:slug')
  @Render('blog/[slug]')
  public async blogPost(@Param('slug') slug: string) {
    return {params:{slug: slug}};
  }

  @Get('api/blog/post/:slug')
  public async getBlogPostBySlug(
    @Res() res: Response,
    @Param('slug') slug: string,
  ) {

    const post = await this.service.find(slug);

    if (!post) {
      throw new NotFoundException();
    }

    return res.send(post);
  }
}
