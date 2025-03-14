import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { data: string; status: number } {
    return { data: 'Hello World!', status: 200 };
  }
}
