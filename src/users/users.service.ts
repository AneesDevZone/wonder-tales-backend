// File: src/users/user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Finds and returns all users.
   * @returns A promise that resolves to an array of User entities.
   */
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * Finds a user by their ID.
   * @param id - The ID of the user to find.
   * @returns A promise that resolves to the User entity or null if not found.
   */
  async findOne(id: string): Promise<User | null> {
    try {
      const user = await this.userRepository.findOne(
        id as FindOneOptions<User>, // Cast id to FindOneOptions type
      );
      return user ? user : null;
    } catch (error) {
      console.error('Error finding user:', error);
      return null;
    }
  }

  /**
   * Creates a new user.
   * @param user - The data for the new user.
   * @returns A promise that resolves to the newly created User entity.
   */
  async create(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  /**
   * Updates an existing user.
   * @param id - The ID of the user to update.
   * @param user - The new data for the user.
   * @returns A promise that resolves to the updated User entity or null if not found.
   */
  async update(id: string, user: Partial<User>): Promise<User | null> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  /**
   * Deletes a user by their ID.
   * @param id - The ID of the user to delete.
   * @returns A promise that resolves when the user is deleted.
   */
  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
