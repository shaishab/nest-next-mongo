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

@Controller('api/blog')
export class BlogController {
  constructor(private service: BlogService) {}

  // @Render('blog')
  @Get()
  public async index(@Req() req: Request, @Res() res: Response) {
    const posts = await this.service.all();
    console.log('post from controller====', posts);
    return res.send(posts);
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
