// auth.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async authenticate(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email, password } });
    return user || null;
  }
}
