// JWT Authentication Strategy: This file implements the authentication strategy using JWT.
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Logger } from '@nestjs/common';

interface JwtPayload {
  sub: string; // user ID
  username: string;
  role: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  private readonly logger = new Logger(JwtStrategy.name);
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    this.logger.log(`Validating payload: ${JSON.stringify(payload)}`); // Log the payload
    return {
      userId: payload.sub,
      username: payload.username,
      role: payload.role,
    };
  }
}
