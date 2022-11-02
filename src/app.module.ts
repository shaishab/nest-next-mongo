import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RenderModule } from 'nest-next';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Next from 'next';
// import { AppController } from './app.controller';
import { HomeModule } from './api/home/home.module';
import { AboutModule } from './api/about/about.module';
import { BlogModule } from './api/blog/blog.module';


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
     {passthrough404: true, viewsDir: null}
    ),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    HomeModule,
    AboutModule,
    BlogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
