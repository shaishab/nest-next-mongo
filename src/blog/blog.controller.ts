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
    return res.send(posts);
  }

  // @Render('blog/[slug]')
  @Get(':slug')
  public async get(
    @Req() req: Request,
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
