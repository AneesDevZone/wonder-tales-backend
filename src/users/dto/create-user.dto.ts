// File: src/users/dto/create-user.dto.ts
import { IsString, IsEmail, MinLength } from 'class-validator';

// Data Transfer Object for creating a user
export class CreateUserDto {
  @IsString()
  username: string; // User's display name

  @IsEmail()
  email: string; // User's email address

  @IsString()
  @MinLength(6) // Minimum password length
  password: string; // User's password
}
