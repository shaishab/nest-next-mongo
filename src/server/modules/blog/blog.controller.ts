import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  // Fetch all posts
  @Get('posts')
  async getPosts(@Res() res: Response) {
    const posts = await this.blogService.getPosts();
    return res.status(HttpStatus.OK).json(posts);
  }

  // Fetch a particular post using ID
  @Get('post/:postID')
  async getPost(
    @Res() res: Response,
    @Param('postID', new ValidateObjectId()) postID: string,
  ) {
    const post = await this.blogService.getPost(postID);
    if (!post) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json(post);
  }

  // Submit a post
  @Post('/post')
  async addPost(@Res() res: Response, @Body() createPostDTO: CreatePostDTO) {
    const newPost = await this.blogService.addPost(createPostDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Post has been submitted successfully!',
      post: newPost,
    });
  }

  // Edit a particular post using ID
  @Put('/edit')
  async editPost(
    @Res() res: Response,
    @Query('postID', new ValidateObjectId()) postID: string,
    @Body() createPostDTO: CreatePostDTO,
  ) {
    const editedPost = await this.blogService.editPost(postID, createPostDTO);
    if (!editedPost) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      post: editedPost,
    });
  }

  // Delete a post using ID
  @Delete('/delete')
  async deletePost(
    @Res() res: Response,
    @Query('postID', new ValidateObjectId()) postID: string,
  ) {
    const deletedPost = await this.blogService.deletePost(postID);
    if (!deletedPost) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted!',
      post: deletedPost,
    });
  }
}
