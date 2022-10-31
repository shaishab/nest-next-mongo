import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';

@Controller()
export class AboutController {
  constructor() {}

  @Get('/about')
  @Render('about')
  public async about() {
    return {};
  }

  @Get('api/about')
  public async aboutInfo() {
    return {message: 'This site has been created as a boilerplate or as a skeleton of the nest with next'};
  }
}
