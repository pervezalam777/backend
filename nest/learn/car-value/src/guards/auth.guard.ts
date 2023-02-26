import {
  CanActivate,
  ExecutionContext
} from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(conext: ExecutionContext) {
    const request = conext.switchToHttp().getRequest();
    return request.session.userId;
  }
}