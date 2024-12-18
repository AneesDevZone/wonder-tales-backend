// File: src/users/entities/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // Auto-generates unique IDs for each user
  id: number;

  @Column() // Column for the user's username
  username: string;

  @Column() // Column for the user's email
  email: string;

  @Column() // Column for the user's hashed password
  password: string;

  @Column({ default: 'user' }) // Set default role to 'user'
  role: string; // Define role as a string property
}
