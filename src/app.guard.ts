import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import 'dotenv/config';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (token !== process.env.COMMUNICATIONS) {
      throw new UnauthorizedException({
        message: 'No token provided',
        status: HttpStatus.UNAUTHORIZED,
      });
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | string[] {
    return request.headers.accept;
  }
}
