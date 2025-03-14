import { Controller } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

// This service is connected to rabbitMQ
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}
  @MessagePattern('auth_data')
  handleMessage(@Payload() data: any) {
    return this.dashboardService.auth(data);
  }
}
