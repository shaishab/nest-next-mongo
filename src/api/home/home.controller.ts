import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';

@Controller()
export class HomeController {
  constructor() {}

  @Get('/')
  @Render('index')
  public async root() {
    return {};
  }

  @Get('/home')
  @Render('index')
  public async home() {
    return {name: 'Shaishab'};
  }

  @Get('api/home')
  public async homeInfo() {
    return {name: 'Shaishab Roy'};
  }
}
