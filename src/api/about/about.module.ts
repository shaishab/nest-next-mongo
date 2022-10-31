import { Module } from '@nestjs/common';
import { AboutController } from './about.controller';

@Module({
  imports: [],
  controllers: [AboutController],
  providers: [],
})
export class AboutModule {}
