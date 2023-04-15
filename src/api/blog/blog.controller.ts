import {
  Controller,
  Get,
  Post,
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

    return {post,meta: {title: post.title, slug: post.slug, description: post.metaContent}};
  }

  @Get('/blog/post/new')
  @Render('blog/new')
  public async renderPostCreatePage() {
    return {};
  }

  @Post('api/blog/post')
  public async postCreatePage(@Req() req: Request, @Res() res: Response) {
    const post = await this.service.add(req.body);

    if (!post) {
      return res.status(500).send({message: "Bad request :("});
    }

    return res.status(200).send({message: "Success"});
  }
  
}
