import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth') // Defines the base route for all endpoints in this controller as '/auth'.
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Endpoint to register a new user.
   * @param createUserDto - Data Transfer Object containing the user's registration data.
   * @returns A success message with the newly created user's ID.
   */
  @Post('register') // Handles POST requests to '/auth/register'.
  async register(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.authService.register(createUserDto);
  }

  // Future methods like login can be added here

  /**
   * Endpoint to demonstrate a protected route.
   * @returns A message indicating that the route is protected and accessible only to admin users.
   */
  @UseGuards(AuthGuard('jwt'))
  @Get('protected-route')
  protectedRoute() {
    return 'This route is protected and can only be accessed by admin users';
  }
  @Post('login') // Endpoint to login and return a JWT token.
  async login(
    @Body() loginDto: { username: string; password: string },
  ): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }
}
