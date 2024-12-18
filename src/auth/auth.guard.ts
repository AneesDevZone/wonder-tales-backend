import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest(); // Specify type
    console.log('Request User:', request.user);

    const user = request.user as { role?: string }; // Narrow down type if necessary
    if (user && user.role === 'admin') {
      return true;
    }

    return false;
  }
}
