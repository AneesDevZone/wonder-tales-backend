import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt')) // Ensure JWT guard is applied
export class UsersController {
  @Get('admin')
  @UseGuards(RolesGuard) // Role-based guard
  @Roles('admin') // Only 'admin' role can access
  getAdminData() {
    return { message: 'This route is for admins only' };
  }

  @Get('user')
  @UseGuards(RolesGuard)
  @Roles('user') // Accessible to 'user' role
  getUserData() {
    return { message: 'This route is for users' };
  }

  @Get('public')
  getPublicData() {
    return { message: 'This is a public route' };
  }
}
