import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { resolve } from 'path';

// import { ViewModule } from './modules/view/view.module';
import { BlogModule } from './modules/blog/blog.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    RenderModule.forRootAsync(
      Next({
        dev: true,
        dir: './src/client',
      }),
      {
        viewsDir: '',
      },
    ),
    // ViewModule,
    UserModule,
    BlogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
