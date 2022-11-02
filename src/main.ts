import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  await app.listen(process.env.PORT, process.env.SERVER_HOST);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
