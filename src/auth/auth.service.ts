import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  /**
   * Registers a new user.
   *
   * @param createUserDto - Data Transfer Object containing the user's registration data.
   * @returns A success message with the newly created user's ID.
   */
  async register(createUserDto: CreateUserDto): Promise<any> {
    const { username, email, password } = createUserDto;

    // Hash the user's password before saving it to the database
    const hashedPassword = await this.hashPassword(password);

    // Create a new user entity with username, email, and hashed password
    const newUser = this.userRepository.create({
      username,
      email,
      password: hashedPassword,
      role: 'user', // Default to 'user' if no role is provided
    });

    // Save the user to the database
    await this.userRepository.save(newUser);

    return { message: 'User registered successfully', userId: newUser.id };
  }

  /**
   * Hashes the password using bcrypt.
   *
   * @param password - The plain text password to be hashed.
   * @returns A hashed password string.
   */
  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  /**
   * Authenticates the user and returns a JWT token.
   *
   * @param loginDto - An object containing the username and password for login.
   * @returns An object containing the JWT token.
   * @throws UnauthorizedException if the credentials are invalid.
   */
  async login(loginDto: {
    username: string;
    password: string;
  }): Promise<{ token: string }> {
    const user = await this.userRepository.findOne({
      where: { username: loginDto.username },
    });

    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      // Generate JWT payload with username and user ID
      const payload = { username: user.username, sub: user.id };
      const token = this.jwtService.sign(payload);
      return { token };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
