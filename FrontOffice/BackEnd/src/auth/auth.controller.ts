// src/auth/auth.controller.ts

import { Controller, Post, Body, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body('email') email: string, @Body('password') password: string, @Session() session: Record<string, any>): Promise<User | null> {
    const user = await this.authService.authenticate(email, password);
    if (user) {
      // Stocker les informations de l'utilisateur dans la session, y compris la classe
      session.user = user;
      session.class = user.class; // Supposons que la classe de l'utilisateur est stockée dans user.class
    }
    return user;
  }
}
