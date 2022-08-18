import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ViewModule } from './modules/view/view.module';

@Module({
  imports: [
    ViewModule,
    MongooseModule.forRoot('mongodb://localhost/nest-next'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
