import { NestFactory } from '@nestjs/core';
import { AppModule } from './application.module';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  await server.listen(3000, '0.0.0.0');
  console.log(`Application is running on: ${await server.getUrl()}`);
}

bootstrap();
