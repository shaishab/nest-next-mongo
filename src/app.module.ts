import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RenderModule } from 'nest-next';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Next from 'next';
import { AppController } from './app.controller';
import { BlogModule } from './api/blog/blog.module';
import { HomeModule } from './api/home/Home.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod'],
      isGlobal: true,
    }),
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        conf: { useFilesystemPublicRoutes: true, distDir: '.next', },
      }),
    //  {viewsDir: '/pages'}
    ),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    HomeModule,
    BlogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
