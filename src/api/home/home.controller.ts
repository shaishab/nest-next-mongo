import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';

@Controller()
export class HomeController {
  constructor() {}

  @Get('/home')
  @Render('index.tsx')
  public async home() {
    console.log('Home API default======');
    return {name: 'Shaishab'};
  }

  @Get('api/home')
  public async homeInfo() {
    console.log('Home API======');
    return {name: 'Shaishab Roy'};
  }
}
