import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsConfig } from './config/cors.config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DashboardModule } from './microservices/dashboard/dashboard.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, corsConfig);
  const dashboardMicroService =
    await NestFactory.createMicroservice<MicroserviceOptions>(DashboardModule, {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.MESSAGERIE_URL],
        queue: 'dashboard_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
  await dashboardMicroService.listen();
}
bootstrap().then();
