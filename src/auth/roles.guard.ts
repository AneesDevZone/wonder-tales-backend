import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

// Import your User entity
import { User } from '../users/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Retrieve required roles from metadata
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true; // No roles required, allow access
    }

    // Get the user from the request and assert the type explicitly
    const request = context.switchToHttp().getRequest();
    const user: User = request.user; // Ensure user type is correct here
    console.log('User Role:', user ? user.role : 'No user');

    // Check if user has the required role
    if (!user || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException('Access denied');
    }

    return true; // Access granted
  }
}
