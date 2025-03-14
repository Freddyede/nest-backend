import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Payload,
  Transport,
} from '@nestjs/microservices';
import 'dotenv/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DashboardService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.MESSAGERIE_URL],
        queue: 'dashboard_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  }
  auth(@Payload() data: any): Promise<any> {
    return firstValueFrom(this.client.send({ cmd: 'auth_data' }, data));
  }
}
