// create-rapport.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rapport } from 'src/entities/rapport.entity';

@Injectable()
export class CreateRapportService {
  constructor(
    @InjectRepository(Rapport)
    private readonly rapportRepository: Repository<Rapport>,
  ) {}

  async createRapport(contenu: string): Promise<Rapport> {
    return this.rapportRepository.save({ contenu });
  }
}
