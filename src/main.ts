import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsConfig } from './config/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, corsConfig);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().then();
