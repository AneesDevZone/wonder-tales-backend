// File: src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<any> {
    const { username, email, password } = createUserDto;

    // Hash the user's password
    const hashedPassword = await this.hashPassword(password);

    // Create a new user entity with username, email, and hashed password
    const newUser = this.userRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await this.userRepository.save(newUser);

    return { message: 'User registered successfully', userId: newUser.id };
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }
}
