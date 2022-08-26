import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RenderModule } from 'nest-next'
import { ConfigModule, ConfigService } from '@nestjs/config';
import Next from 'next';
import { AppController } from './app.controller';
// import { BlogController } from './blog/blog.controller';
// import { BlogService } from './blog/blog.service';
import { BlogModule } from "./blog/blog.module";

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        conf: { useFilesystemPublicRoutes: false },
      }),
    ),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI') || "mongodb://localhost:27017/nest-next-dev",
      }),
      inject: [ConfigService],
    }),
    BlogModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
