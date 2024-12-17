import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
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
}
