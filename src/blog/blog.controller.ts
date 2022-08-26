import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Render,
} from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('/blog')
export class BlogController {
  constructor(private service: BlogService) {}

  @Render('blog')
  @Get()
  public async index() {
    const posts = await this.service.all();
    console.log("post from controller====", posts);
    return {posts: posts};
  }

  @Render('blog/[slug]')
  @Get(':slug')
  public get(@Param('slug') slug: string) {
    const post = this.service.find(slug);

    if (post === null) {
      throw new NotFoundException();
    }

    return { post };
  }
}
