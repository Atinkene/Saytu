// create-pv.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pv } from 'src/entities/pv.entity';

@Injectable()
export class CreatePvService {
  constructor(
    @InjectRepository(Pv)
    private readonly pvRepository: Repository<Pv>,
  ) {}

  async createPv(contenu: string): Promise<Pv> {
    return this.pvRepository.save({ contenu });
  }
}
